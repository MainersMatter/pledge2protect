const connection = require('./db.js');

exports.audienceExport = (callback) => {
  const sql = `
    SELECT
      host.first_name as first_name,
      host.last_name as last_name,
      dest.arrival_date as arrival_date,
      host.phone_number as phone_number,
      group_concat(
        dept.age,
        " y.o. ",
        dept.relationship
        SEPARATOR "|"
      ) as dependents,
      group_concat(
        party_member.first_name,
        " ",
        party_member.last_name
        SEPARATOR "|"
      ) as party_members,
      host.email_address as email_address
    FROM user AS host
    LEFT JOIN user as party_member
      ON host.party_id = party_member.party_id
      AND party_member.is_host = 0
    LEFT JOIN dependent as dept
      ON host.party_id = dept.party_id
    LEFT JOIN destination as dest
      ON dest.party_id = host.party_id
    WHERE 1
      AND host.created >= SUBDATE(CURRENT_DATE, 1)
      AND host.is_host = 1
    GROUP BY host.email_address
    ORDER BY host.email_address ASC
    ;
  `;
  connection.query(sql, (error, results) => {
      if (error) {
          console.error(`There was an error retrieving the audience export report: ${error}`);
          callback('There was an error retrieving the audience export report', null);
      } else {
          callback(null, results);
      }
  });
};

exports.destinationEmail = (callback) => {
    const partySql = (
            `SELECT
    u.first_name, u.last_name, u.phone_number, u.email_address as user_email, u.is_host, u.has_pledged,
    dest.email as destination_email, dest.arrival_date,
    p.id as party_id
FROM user AS u
INNER JOIN party AS p ON u.party_id = p.id
INNER JOIN destination AS dest ON dest.party_id = p.id
WHERE p.created >= SUBDATE(CURRENT_DATE, 1)
AND dest.email <> ''
ORDER BY dest.email;`);
    connection.query(partySql, (error, results) => {
        if (error) {
            console.error(`There was an error retrieving the destination digest email: ${error}`);
            callback('There was an error retrieving the destination digest email', null);
        } else {
            const partyIds = new Set();
            const emails = {};
            const parties = {};
            results.forEach((result) => {
                const destination_email = result.destination_email;
                const party_id = result.party_id;
                partyIds.add(party_id);
                emails[destination_email] = emails[destination_email] || {};
                emails[destination_email][party_id] = parties[party_id] = emails[destination_email][party_id] || {};
                if (result.is_host) {
                    emails[destination_email][party_id].host = {
                        first_name: result.first_name,
                        last_name: result.last_name,
                        phone_number: result.phone_number,
                        user_email: result.user_email,
                    };
                    emails[destination_email][party_id].arrival_date = result.arrival_date;
                } else {
                    emails[destination_email][party_id].members = emails[destination_email][party_id].members || [];
                    emails[destination_email][party_id].members.push({
                        first_name: result.first_name,
                        last_name: result.last_name,
                    })
                }
            })
            const dependentsSql = (
                    `SELECT
    dep.relationship, dep.age, dep.party_id
FROM dependent AS dep
WHERE party_id in (?);`);
            connection.query(dependentsSql, Array.from(partyIds), (error, dependentsResults) => {
                if (error) {
                    console.error(`There was an error retrieving the audience export report: ${error}`);
                    callback('There was an error retrieving the audience export report', null);
                } else {
                    dependentsResults.forEach((dependent) => {
                        parties[dependent.party_id].dependents = parties[dependent.party_id].dependents || [];
                        parties[dependent.party_id].dependents.push({
                            relationship: dependent.relationship,
                            age: dependent.age,
                        })
                    })
                    callback(null, emails);
                }
            });
        }
    });
};

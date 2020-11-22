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
        party_member.last_name,
        "<",
        party_member.email_address,
        ">"
        SEPARATOR "|"
      ) as party_members,
      host.email_address as email_address,
      dest.email as destination_email
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
    GROUP BY host.party_id
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

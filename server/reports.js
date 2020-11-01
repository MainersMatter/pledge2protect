const connection = require('./db.js');

exports.audienceExport = (callback) => {
  const sql = 'SELECT u.* FROM user AS u WHERE u.created >= SUBDATE(CURRENT_DATE, 1)';
  connection.query(sql, (error, results) => {
      if (error) {
          console.error(`There was an error retrieving the audience export report: ${error}`);
          callback('There was an error retrieving the audience export report', null);
      } else {
          callback(null, results);
      }
  });
};

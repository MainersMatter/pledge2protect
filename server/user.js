const mysql = require('mysql');

const connection = require('./db.js');

exports.saveUser = (user, result) => {
    const userRecord = {
        'email_address': user.emailAddress,
        'first_name': user.firstName,
        'last_name': user.lastName,
        'zip_code': user.zipCode,
        'has_pledged': user.hasPledged === 'true'
    };

    const sql = 'INSERT INTO user set ?';
    connection.query(sql, userRecord, function (error, results) {
        if (error) {
            result(error, null);
        }
        else{
            result(null, results.affectedRows);
        }
    });
};

exports.getCountUserPledges = (result) => {
    const sql = 'SELECT count(email_address) pledges FROM user WHERE has_pledged = true';
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        result(results[0]);
    });
};

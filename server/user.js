const mysql = require('mysql');
const Mailchimp = require('mailchimp-api-v3');

const connection = require('./db.js');


const mailchimp = process.env.MAILCHIMP_API_KEY ? new Mailchimp(process.env.MAILCHIMP_API_KEY) : {};

exports.addEmailSubscriber = async (user) => {
    if (!mailchimp || !process.env.MAILCHIMP_LIST_ID) {
        const errorMessage = 'Unable to add email subscriber - missing Email Service configuration';
        throw Error(errorMessage);
    }

    try {
        const result = await mailchimp.post(`lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
            email_address: user.emailAddress.toLowerCase(),
            status: 'pending',
            merge_fields: {
                'MMERGE6': user.firstName,
                'MMERGE1': user.lastName,
                'ADDRESS[addr1]': user.addressLine1,
                'ADDRESS[addr2]': user.addressLine2,
                'ADDRESS[city]': user.city,
                'ADDRESS[state]': user.state,
                'ADDRESS[zip]': user.zipCode,
                'ADDRESS[country]': 'USA'
            }
        });

        if (result.errors) {
            console.error(`result.errors: ${result.errors}`);
            throw Error(result.errors);
        }

        return result;
    } catch (err) {
        let errorMessage = '\n';
        err.errors.forEach(fieldError => {
            errorMessage += `    ${fieldError.field}: ${fieldError.message}\n`;
        });
        console.error(`Error adding new email subscriber: ${errorMessage}`);
        throw Error('Error adding new email subscriber');
    }
};

exports.savePledge = (user, callback) => {
    const userRecord = {
        'email_address': user.emailAddress.toLowerCase(),
        'first_name': user.firstName,
        'last_name': user.lastName,
        'address_line_1': user.addressLine1,
        'address_line_2': user.addressLine2,
        'city': user.city,
        'state': user.state,
        'zip_code': user.zipCode,
        'has_pledged': user.hasPledged,
        'subscribed_email_id': user.subscribedEmailId
    };

    const sql = 'INSERT INTO user set ?';
    connection.query(sql, userRecord, function (error, results) {
        if (error) {
            console.error(`There was an error saving user: ${error}`);
            callback('There was an error saving user', null);
        }
        else{
            callback(null, results.affectedRows);
        }
    });
};

exports.getCountUserPledges = (callback) => {
    const sql = 'SELECT count(email_address) pledges FROM user WHERE has_pledged = true';
    connection.query(sql, function (error, results) {
        if (error) {
            console.error(`There was an error getting count of pledges: ${error}`);
            callback('There was an error getting count of pledges', null);
        }
        else{
            callback(null, results[0]);
        }
    });
};

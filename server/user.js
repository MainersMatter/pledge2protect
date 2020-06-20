const Mailchimp = require('mailchimp-api-v3');
const crypto = require('crypto');

const connection = require('./db.js');


const mailchimp = process.env.MAILCHIMP_API_KEY ? new Mailchimp(process.env.MAILCHIMP_API_KEY) : {};

exports.addEmailSubscriber = async (user) => {
    if (!mailchimp || !process.env.MAILCHIMP_LIST_ID) {
        const errorMessage = 'Unable to add email subscriber - missing Email Service configuration';
        throw new Error(errorMessage);
    }

    try {
        const result = await mailchimp.post(`lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
            email_address: user.emailAddress.toLowerCase(),
            status: 'pending',
            merge_fields: {
                MMERGE6: user.fullName,
                'ADDRESS[zip]': user.zipCode,
            },
        });

        if (result.errors) {
            console.error(`result.errors: ${result.errors}`);
            throw new Error(result.errors);
        }

        return result;
    } catch (err) {
        // If the user has already subscribed
        if (err.title === 'Member Exists') {
            // pretend that everything was successful rather than returning an error
            // reproduce the ID normally returned in a successful subscription response
            // https://mailchimp.com/developer/guides/manage-subscribers-with-the-mailchimp-api/#Identify_a_contact
            const emailId = crypto.createHash('md5').update(user.emailAddress.toLowerCase()).digest('hex');
            return {
                id: emailId,
            };
        }

        let errorMessage = err.detail;

        if (err.errors && err.errors.length > 0) {
            err.errors.forEach((fieldError) => {
                errorMessage += `\n    ${fieldError.field}: ${fieldError.message}`;
            });
        }

        console.error(`Error adding new email subscriber: ${errorMessage}`);
        throw new Error('Error adding new email subscriber');
    }
};

exports.savePledge = (user, callback) => {
    const userRecord = {
        email_address: user.emailAddress.toLowerCase(),
        first_name: user.firstName,
        last_name: user.lastName,
        zip_code: user.zipCode,
        has_pledged: user.hasPledged,
        subscribed_email_id: user.subscribedEmailId,
    };

    const sql = 'INSERT INTO user set ?';
    connection.query(sql, userRecord, (error, results) => {
        if (error) {
            // if the user has already been saved previously
            if (error.code === 'ER_DUP_ENTRY') {
                // pretend that everything was successful rather than returning an error
                callback(null, 1);
            } else {
                console.error(`There was an error saving user: ${error}`);
                callback('There was an error saving user', null);
            }
        } else {
            callback(null, results.affectedRows);
        }
    });
};

exports.getCountUserPledges = (callback) => {
    const sql = 'SELECT count(email_address) pledges FROM user WHERE has_pledged = true';
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(`There was an error getting count of pledges: ${error}`);
            callback('There was an error getting count of pledges', null);
        } else {
            callback(null, results[0]);
        }
    });
};

const Mailchimp = require('mailchimp-api-v3');
const crypto = require('crypto');

const connection = require('./db.js');


const mailchimp = process.env.MAILCHIMP_API_KEY ? new Mailchimp(process.env.MAILCHIMP_API_KEY) : {};

const lists = {
    host: process.env.MAILCHIMP_LIST_ID,
    party: process.env.MAILCHIMP_PARTY_LIST_ID,
    destination: process.env.MAILCHIMP_DESTINATION_LIST_ID,
};

exports.addEmailSubscriber = async (user, list = 'host') => {
    if (
        !mailchimp
        || !process.env.MAILCHIMP_LIST_ID
        || !process.env.MAILCHIMP_DESTINATION_LIST_ID
        || !process.env.MAILCHIMP_PARTY_LIST_ID
    ) {
        const errorMessage = 'Unable to add email subscriber - missing Email Service configuration';
        throw new Error(errorMessage);
    }

    const listId = lists[list];

    try {
        const payload = {
            status: 'pending',
            email_address: user.emailAddress.toLowerCase(),
        };
        if (user.firstName || user.lastName || user.zipCode || user.phoneNumber || user.mainePhoneNumber || user.isHost !== undefined) {
            payload.merge_fields = {};
            if (user.firstName) {
                payload.merge_fields.FNAME = user.firstName;
            }
            if (user.lastName) {
                payload.merge_fields.LNAME = user.lastName;
            }
            if (user.zipCode) {
                payload.merge_fields['ADDRESS[zip]'] = user.zipCode;
            }
            if (user.phoneNumber) {
                payload.merge_fields.PHONE = user.phoneNumber;
            }
            if (user.mainePhoneNumber) {
                payload.merge_fields.MAINEPHONE = user.mainePhoneNumber;
            }
            if (user.isHost !== undefined) {
                payload.merge_fields.ISHOST = user.isHost + '';
            }
        }

        const result = await mailchimp.post(`lists/${listId}/members`, payload);

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

exports.savePledge = (user) => {
    const userRecord = {
        email_address: user.emailAddress.toLowerCase(),
        first_name: user.firstName,
        last_name: user.lastName,
        zip_code: user.zipCode,
        state: user.state,
        phone_number: user.phoneNumber,
        maine_phone_number: user.mainePhoneNumber,
        is_host: user.isHost,
        has_pledged: user.hasPledged,
        subscribed_email_id: user.subscribedEmailId,
        party_id: user.partyId,
    };

    const sql = 'INSERT INTO user set ?';
    return new Promise((resolve, reject) => {
        connection.query(sql, userRecord, (error, results) => {
            if (error) {
                // if the user has already been saved previously
                if (error.code === 'ER_DUP_ENTRY') {
                    // pretend that everything was successful rather than returning an error
                    resolve(null, 1);
                } else {
                    console.error(`There was an error saving user: ${error}`);
                    reject('There was an error saving user', null);
                }
            } else {
                resolve(null, results.affectedRows);
            }
        });
    });
};

exports.saveDependent = (dependent) => {
    const dependentRecord = {
        age: dependent.age,
        relationship: dependent.relationship,
        party_id: dependent.partyId,
    };

    const sql = 'INSERT INTO dependent set ?';
    return new Promise((resolve, reject) => {
        connection.query(sql, dependentRecord, (error, results) => {
            if (error) {
                console.error(`There was an error saving dependent: ${error}`);
                reject('There was an error saving dependent', null);
            } else {
                resolve(null, results.affectedRows);
            }
        });
    });
};

exports.saveDestination = (destination) => {
    const destinationRecord = {
        email: destination.emailAddress,
        arrival_date: destination.arrivalDate,
        party_id: destination.partyId,
    };

    const sql = 'INSERT INTO destination set ?';
    return new Promise((resolve, reject) => {
        connection.query(sql, destinationRecord, (error, results) => {
            if (error) {
                console.error(`There was an error saving destination: ${error}`);
                reject('There was an error saving destination', null);
            } else {
                resolve(null, results.affectedRows);
            }
        });
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

exports.createParty = () => {
    const sql = 'insert into party () values ()';
    return new Promise((resolve, reject) => {
        connection.query(sql, null, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result.insertId);
        });
    });
};

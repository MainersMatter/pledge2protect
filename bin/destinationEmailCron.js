#!/usr/bin/env node

// To run locally:
//   DATABASE_URL="<get from heroku config>" node ./bin/destinationEmailCron.js

const connection = require('../server/db.js');

const {
    destinationEmail,
} = require('../server/reports');

destinationEmail((error, results) => {
    if (error) {
        console.log(error);
    } else {
        try {
          // TODO: Send transactionl email
        } catch (err) {
            console.error(err);
        }
    }
    connection.end();  // Force node.js process to exit by cleaning up connection
});

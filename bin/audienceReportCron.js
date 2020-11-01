#!/usr/bin/env node

// To run locally:
//   DATABASE_URL="<get from heroku config>" node ./bin/audienceReportCron.js

const { Parser } = require('json2csv');

// TODO: Get full list of user fields to include.
const fields = ['email_address', 'first_name', 'last_name'];
const opts = { fields };

const connection = require('../server/db.js');

const {
  audienceExport,
} = require('../server/reports');

audienceExport((error, results) => {
  if (error) {
    console.log(error);
  } else {
    try {
      const parser = new Parser(opts);
      const csv = parser.parse(results);
      console.log(csv);
      // TODO: email to configured address instead.
    } catch (err) {
      console.error(err);
    }
  }
  connection.end();  // Force node.js process to exit by cleaning up connection
});

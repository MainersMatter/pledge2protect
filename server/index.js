const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');

const { getCountUserPledges, savePledge, addEmailSubscriber } = require('./user');

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

function runServer() {
    const app = express();

    // Priority serve any static files.
    app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    app.get('/pledge/count', (req, res) => {
        res.set('Content-Type', 'application/json');

        getCountUserPledges((error, pledgeCount) => {
            if (error) {
                res.status(500)
                    .send({ error: true, message: error });
                return;
            }

            res.send(pledgeCount);
        });
    });

    app.post('/pledge', async (req, res) => {
        const payload = req.body;
        payload.hasPledged = true;

        // validate the user data
        if (!isPayloadValid(payload)) {
            res.status(400)
                .send({ error: true, message: 'Please provide all required fields' });
            return;
        }

        const members = getParameterGroups(payload, ['memberFullName', 'memberEmail']);
        const dependents = getParameterGroups(payload, ['dependentRelationship', 'dependentAge']);
        const destinations = getParameterGroups(payload, ['destinationEmail', 'arrivalDate']);

        const memberParameters = Object.entries(payload).reduce((accumulator, pair) => {
            if (pair[0].startsWith('member')) {
                const memberIndex = pair[0].charAt(pair[0].length - 1);
                const field = (pair[0].includes('Email') ? 'email' : 'name');
                if (accumulator[memberIndex] === undefined) {
                    accumulator[memberIndex] = {};
                }
                // eslint-disable-next-line
                accumulator[memberIndex][field] = pair[1];
            }
            return accumulator;
        }, {});

        if (process.env.ENABLE_EMAIL_SUBSCRIPTION === 'true') {
            const mainUser = {
                emailAddress: payload.emailAddress,
                fullName: payload.fullName,
                zipCode: payload.zipCode,
            };
            const destinationUsers = payload.destinationEmail.split(',').map((email) => (
                {
                    emailAddress: email.trim(),
                }
            ));
            const partyUsers = Object.values(memberParameters).map((member) => (
                {
                    emailAddress: member.email,
                    fullName: member.name,
                }
            ));
            const allUsers = [mainUser].concat(destinationUsers, partyUsers);

            try {
                // eslint-disable-next-line
                const resultPromises = allUsers.map(async (user) => {
                    const subscribedResult = await addEmailSubscriber(user);
                    return subscribedResult.id;
                });

                // TODO: restore this after the DB has been migrated
                if (process.env.ENABLE_LOGGING_TO_PLEDGES_DATABASE === 'true') {
                    // subscribe the pledged user to our email list
                    const mainSubscribedResult = await addEmailSubscriber(mainUser);
                    // add the subscribed email id from the MailChimp list to the user
                    payload.subscribedEmailId = mainSubscribedResult.id;
                }
            } catch (error) {
                res.status(500)
                    .send({ error: true, message: error.message });
                return;
            }
        }

        if (process.env.ENABLE_LOGGING_TO_PLEDGES_DATABASE === 'true') {
            // save the user in the database
            // TODO: We now collect only full names, not a first and last name, but the DB has not been migrated
            savePledge(payload, (error) => {
                if (error) {
                    res.status(500)
                        .send({ error: true, message: error });
                    return;
                }

                res.send('success');
            });
        } else {
            res.send('success');
        }
    });

    // All remaining requests return the React app, so it can handle routing.
    app.get('*', (request, response) => {
        response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
    });

    app.listen(PORT, () => {
        console.error(`Node ${isDev ? 'dev server' : `cluster worker ${process.pid}`}: listening on port ${PORT}`);
    });
}

const isPayloadValid = (payload) => {
    const requiredFields = [
        'emailAddress',
        'fullName',
        'phoneNumber',
        'state',
        'acceptPrivacyPolicy',
        'destinationEmail',
    ];

    if (!payload) {
        return false;
    }

    const hasMissingFields = requiredFields.reduce((accumulator, field) => {
        return (accumulator === true && payload[field]);
    }, true);
    if (hasMissingFields) {
        return false;
    }

    if (
        payload['requirement-quarantined'] === false
        && payload['requirement-tested'] === false
        && payload['requirement-origin'] === false
    ) {
        return false;
    }

    return true;
};

const getParameterGroups = (payload, parameters) => {
    const output = [];
    let checkIndex = 0;
    while (true) {
        const firstKey = `${parameters[0]}-${checkIndex}`;
        if (payload[firstKey] === undefined) {
            return output;
        }
        output.push([]);
        parameters.forEach((parameter) => {
            const key = `${parameter}-${checkIndex}`;
            output[checkIndex].push(payload[key]);
        });
        checkIndex++;
    }
};

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });
} else {
    runServer();
}

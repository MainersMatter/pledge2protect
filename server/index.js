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
    app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

    app.get('/pledge/count', (req, res) => {
        res.set('Content-Type', 'application/json');

        getCountUserPledges(function(error, pledgeCount) {
            if (error) {
                res.status(500)
                    .send({ error: true, message: error });
                return;
            }

            res.send(pledgeCount);
        });
    });

    app.post('/pledge', async (req, res) => {
        const user = req.body;
        user.hasPledged = true;

        // validate the user data
        if(!user || !user.emailAddress || !user.firstName || !user.lastName){
            res.status(400)
                .send({ error: true, message: 'Please provide user emailAddress, firstName and lastName' });
            return;
        }

        try {
            // subscribe the pledged user to our email list
            const subscribedResult = await addEmailSubscriber(user);

            // add the subscribed email id from the MailChimp list to the user
            user.subscribedEmailId = subscribedResult.id;
        } catch (error) {
            res.status(500)
                .send({ error: true, message: error.message });
            return;
        }

        // save the user in the database
        savePledge(user,  function(error) {
            if (error) {
                res.status(500)
                    .send({ error: true, message: error });
                return;
            }

            res.send('success');
        });
    });

    // All remaining requests return the React app, so it can handle routing.
    app.get('*', (request, response) => {
        response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
    });

    app.listen(PORT, () => {
        console.error(`Node ${isDev ? 'dev server' : `cluster worker ${process.pid}`}: listening on port ${PORT}`);
    });
}

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

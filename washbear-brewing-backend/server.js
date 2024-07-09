const express = require('express');
const fs = require('fs');
const app = express();
const apiUrl = process.env.APP_URL || "https//localhost";
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const path = require('path');


// Enable CORS for all routes
app.use(cors({
    origin: '*', // Allow all origins (you can restrict this to your frontend's origin)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
const eventsManager = require('./eventsManager.js')
const sqlServerConnection = require('./sqlServerConnection.js')
app.use(express.json());
app.use(express.static('public'));

function main() {

    async function startServer() {
        await sqlServerConnection.connectToDatabase();
        app.listen(PORT, () => {
            console.log(`server is running on ${apiUrl}:${PORT}`);
        });
    }
    startServer(); 

    const eventsDir = path.join(__dirname, 'events');
    let eventData = null;

    async function initializeEvents() {
        const m_eventMgr = new eventsManager(eventsDir);
        const events = await m_eventMgr.getEventObject();
        delete m_eventMgr;
        return events
    }
    
    sqlServerConnection.getSQLData(app);
    app.post('/api/ContactUs', (req, res) => {
        console.log('Recived data from feedback section: ', req.body);
        storeObject(req.body);
        res.status(200).send('Data received successfully!');
    })

    app.get('/api/data', (req, res) => {
        initializeEvents()
            .then(data => {
                eventData = data;
                console.log("Events data init and stored")
                res.json(eventData);
            })
            .catch(err => {
                console.log("Failed to init data")
                res.status(503).json({ error: "Data is not yet avilble. Please try again later" })
            })

    });
    // gets brew info from database

    //sqlServerConnection()


    const feedbackFileName = 'feedback.json'
    const storeObject = (data) => {
        fs.appendFile(feedbackFileName, JSON.stringify(data) + "\r\n", function (err) {
            if (err) throw err;
            console.log(`Appended feedback to ${feedbackFileName}`);
        })
    }
}

main()

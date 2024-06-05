const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const path = require('path');
const eventsManager = require('./eventsManager.js')
const sqlServerConnection = require('./sqlServerConnection.js')
app.use(cors());
app.use(express.json());

function main() {
    const eventsDir = path.join(__dirname, 'events');
    const m_eventMgr = new eventsManager(eventsDir);

    let eventData = null;

    async function initializeEvents() {
        const events = await m_eventMgr.getEventObject();
        //console.log("Server Side")
        //console.log(events);
        return events
    }

    app.listen(PORT, () => {
        console.log(`server is running on http:://localhost:${PORT}`);
    });

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
    sqlServerConnection.getSQLData(app);
    //sqlServerConnection()
}

main()

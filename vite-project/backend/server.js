const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const path = require('path');
const eventsManager = require('./eventsManager.js')
app.use(cors());
app.use(express.json());

const eventsDir = path.join(__dirname, 'events');
const m_eventMgr = new eventsManager(eventsDir);

let eventData = null;
initializeEvents()
    .then(data => {
        eventData = data;
        console.log("Events data init and stored")
    })
    .catch(err => {
        console.log("Failed to init data")
    });




async function initializeEvents() {
    const events = await m_eventMgr.getEventObject();
    //console.log("Server Side")
    console.log(events);
    return events
}

app.listen(PORT, () => {
    console.log(`server is running on http:://localhost:${PORT}`);
});

app.get('/api/data', (req, res) => {
    if (eventData) {
        res.json(eventData);
    } else {
        res.status(503).json({ error: "Data is not yet avilble. Please try again later" })
    }

});

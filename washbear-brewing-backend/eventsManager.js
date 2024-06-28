const fs = require('fs').promises;
const path = require('path');

class eventsManager {
    constructor(eventsDir) {
        this.eventsDir = eventsDir
        this.data = [];
    }

    async getEventObject() {
        this.data = [];
        await this.#findFiles();
        this.#handleRecurring(this.data);
        this.#sortByDate(this.data);
        const verData = this.#eventVerify(this.data);
        //console.log(verData);
        return verData;
        //return this.data;
    }

    // seems when computer is running out of resources it will do additanl reads. Cleaning these artifacts. 
    #eventVerify(unverifedData) {
        const eventSeen = new Set();
        const verifiedData = [];
        for (let i = 0; i < unverifedData.length; i++) {
            // Dont want to show event if data is wrong
            if (unverifedData[i].Dates === 'Invalid Date') {
                continue;
            }
            if (!eventSeen.has(unverifedData[i].Event)) {
                eventSeen.add(unverifedData[i].Event);
                verifiedData.push(unverifedData[i]);
            }
        }
        //console.log("Verified data :", verifiedData.length, " Unverifed Data :", unverifedData.length);
        return verifiedData;
    }

    async #findFiles() {
        const regex = new RegExp("\\b\\w+\\.(json)\\b");
        const files = await fs.readdir(this.eventsDir);

        for (let file of files) {
            if (file.search(regex) != -1) {
                const fileData = JSON.parse(await fs.readFile(path.join(this.eventsDir, file), 'utf-8'));
                this.data.push(fileData);
            }
        }
    }

    #handleRecurring(parsedEventData) {
        // console.log(parsedEventData)
        parsedEventData.forEach((event) => {
            const currentDate = new Date();
            let eventDate = new Date(event.Dates + " " + event.Time);
            //console.log(event.Event + " PreAdjusted Date: " + eventDate);

            // Only going to try & update the date if the event date Comes after the current date
            if (currentDate < eventDate) {
                return;
            }

            switch (event.Recurring.toLowerCase()) {
                case "weekly":
                    let timeDiff = currentDate - eventDate;
                    const daysApart = timeDiff / (24 * 60 * 60 * 1000) // Days, Hours, Minutes, Seconds, MiliSeconds 
                    const weeksApart = Math.floor(daysApart / 7);

                    eventDate.setHours(parseInt(event.Time.substring(0, 2)));
                    eventDate.setMinutes(parseInt(event.Time.substring(3, 5)));
                    eventDate.setSeconds(0);
                    eventDate.setDate(eventDate.getDate() + weeksApart * 7);

                    if (eventDate < currentDate) {
                        eventDate.setDate(eventDate.getDate() + 7);
                    }

                    //event.Dates = eventDate.toString();
                    //console.log(event);
                    break;

                case "daily":
                    eventDate.setTime(currentDate);
                    eventDate.setHours(parseInt(event.Time.substring(0, 2)));
                    eventDate.setMinutes(parseInt(event.Time.substring(3, 5)));
                    eventDate.setSeconds(0);

                    if (eventDate < currentDate) {
                        eventDate.setDate(eventDate.getDate() + 1);
                    }

                    //event.Dates = eventDate.toString();
                    //console.log(eventDate.toString())
                    //console.log(event);
                    break;
                case "monthly":
                    //TODO                    
                    break;

                default:
                    break;
            }
            event.Dates = eventDate.toUTCString();
            //event.Time = eventDate.toTimeString;
            //console.log(event.Event + " PostAdjusted Date: " + eventDate);
        })
    };

    #sortByDate(parsedEventData) {
        parsedEventData.sort((a, b) => {
            return new Date(b.Dates) - new Date(a.Dates);
        })
    };
}

module.exports = eventsManager;




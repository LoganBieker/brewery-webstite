import React from "react"


export default function eventCards({ event }) {
    const baseDir = '/eventImages/'
    const styleImageUrl = {
        position: 'relative',
        backgroundImage: `url(${baseDir + event.Image})`, /* Replace with your image path */
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    return (
        <div className="event-card" style={styleImageUrl}>
            <div className="event-text-container">
                <h1 className="event-title">{event.Event}</h1>
                <h2 className="event-date">{event.Dates}</h2>
                <p className="event-description">{event.Description}</p>
            </div>
        </div>

    );
}
import React from "react"

export default function eventCards({ event }) {
    return (
        <div className="eventCards">
            <h1 className="event-title">{event.Event}</h1>
            <h2 className="event-date">{event.Dates}</h2>
            <p className="event-description">{event.Description}</p>
        </div>

    );
}
import React, { useEffect, useState } from 'react';
import DropDownContainer from '../DropDownContainer'
import EventCard from './EventCard.jsx';
export default function Events() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:3001/api/data')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error)
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading data...</div>
    }

    const currentDate = new Date()
    let eventsExpired = false;
    return (
        <div>
            <DropDownContainer></DropDownContainer>            
            <h1>Upcoming Events</h1>
            {data.map((event, index) => {
                const eventDate = new Date(event.Dates);
                if (eventDate < currentDate && !eventsExpired) {
                    eventsExpired = true;
                    <div>Past Events</div>
                    return(<>
                            <h1>Past Events</h1>
                            <EventCard key={index} event={event}></EventCard>
                            </>);
                }
                return (<EventCard key={index} event={event}></EventCard>)

            })
            };
        </div>
    );
}

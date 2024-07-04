import React, { useEffect, useState } from 'react';
import DropDownContainer from '@/Components/DropDownMenu/DropDownContainer'
import EventCard from '@/Components/EventCard/EventCard.jsx';
import '@/styles/Events.css'

const apiUrl = window.__env.VITE_APP_URL || import.meta.env.VITE_APP_URL;
export default function Events() {
    console.log(window.__env.VITE_API_URL)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        fetch(apiUrl + '/data')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error)
                setLoading(false);
                setIsError(true);
            });
    }, []);

    if (loading) {
        return (
            <>
                <DropDownContainer></DropDownContainer>
                <div className='error-message-container'>
                    <div className='error-message'>Loading data...</div>
                </div>
            </>
        )
    }


    const currentDate = new Date()
    let eventsExpired = false;

    if (!data | isError) {
        return (
            <>
                <DropDownContainer></DropDownContainer>
                <div className='error-message-container'>
                    <h1 className='error-message'>Sorry No Upcoming Events, Try Again Later.</h1>
                </div>
            </>
        )
    }
    return (
        <div>
            <DropDownContainer></DropDownContainer>
            <h1 className='events-header'>Upcoming Events</h1>
            {data.map((event, index) => {
                const eventDate = new Date(event.Dates);
                if (eventDate < currentDate && !eventsExpired) {
                    eventsExpired = true;
                    return (<>
                        <h1 className='events-header'>Past Events</h1>
                        <EventCard key={index} event={event}></EventCard>
                    </>)
                }
                return (<EventCard key={index} event={event}></EventCard>)

            })
            }
        </div>
    );
}

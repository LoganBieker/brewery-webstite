import React, { useEffect, useState } from 'react';
import DropDownContainer from '@/Components/DropDownMenu/DropDownContainer'
import EventCard from './EventCard.jsx';
export default function Events() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false); 
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
                setIsError(true);
            });
    }, []);

    if (loading) {
        return (
        <>
        <DropDownContainer></DropDownContainer>
        <div>Loading data...</div>
        </>
    )}


    const currentDate = new Date()
    let eventsExpired = false;
    
    if (!data | isError) {
        return(
            <>
            <DropDownContainer></DropDownContainer>
            <h1>Sorry No Upcoming Events</h1>
            </>
        )
    }
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
                            </>)
                }
                return (<EventCard key={index} event={event}></EventCard>)

            })
            }
        </div>
    );
}

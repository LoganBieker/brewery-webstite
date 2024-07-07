import React, { useEffect, useState } from 'react';
import '@/Components/BrewCard/BrewCard.jsx'
import '@/Components/BrewCards/BrewCards.css'
import BrewCard from '../BrewCard/BrewCard';
const apiUrl = import.meta.env.VITE_APP_URL || window.__env.VITE_APP_URL;
export default function brewCards(prop) {


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    useEffect(() => {

        //fetch(import.meta.env.VITE_APP_URL + '/data')
        fetch(apiUrl + `/api/brews?type=${prop.brew_type}`)
            .then(response => {
                if (!response.ok) {
                    setIsError(true)
                    console.log(response);
                } else {
                    return response.json()
                }
            })
            .then(data => {
                setLoading(false);
                setData(data);
                //console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
                setLoading(false);
                setIsError(true);
            })
    }, []);

    if (loading) {
        return (
            <div className='error-message-container'>
                <div className='error-message'>Loading data from database</div>
            </div>)
    }


    function createStructure(data) {
        if (!data) {
            return (<></>);
        }

        return (
            <>
                <div className='brew-card-container'>
                    {data.map((brew, index) => {
                        return (<BrewCard brew={brew}></BrewCard>);
                    })}
                </div>
            </>
        )
    }

    function addPreviousBrewsDiv(data) {
        if (data.filter((data) => data.brew_avalibility === 1).length < data.length) {
            return (
                <h1 className='brew-header'>Previous Brews</h1>
            )
        }
    }


    function addCurrentBrewsDiv(data) {
        const divCheck = data.filter((data) => data.brew_avalibility === 1);
        if (divCheck.length) {
            console.log(divCheck)
            return (
                <h1 className='brew-header'>Currently on tap</h1>
            )
        } else {
            return(<></>)
        }
    }

    if (isError || data === null) {
        return (
            <div className='error-message-container'>
                <h1 className='error-message'>Sorry No Brews on Tap Here, Try Again Later.</h1>
            </div>
        )
    } else {
        return (
            <div className='brew-container'>

                {addCurrentBrewsDiv(data)}
                {createStructure(data.filter((data) => data.brew_avalibility === 1))}
                {addPreviousBrewsDiv(data)}
                {createStructure(data.filter((data) => data.brew_avalibility === 0))}

            </div>
        );
    }
}
import React, { useEffect, useState } from 'react';


export default function brewCards(prop) {


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);



    useEffect(() => {
        fetch('http://localhost:3001/api/brews')
            .then(response => {
                console.log(response);
            })


        fetch(`http://localhost:3001/api/brews?type=${prop.brew_type}`)
            .then(response => {
                if (!response.ok) {
                    setIsError(true)
                    console.log(response);
                } else {
                    return response.json()
            }})
            .then(data => {
                setLoading(false);
                setData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
                setLoading(false);
                setIsError(true);
            })
    }, []);

    if (loading) {
        return ("Loading data from database")
    }

    //console.log(data);
    let addedPastBrewsDiv = false;

    if (isError || data === null) {
        return (<h1>Sorry No Brews on Tap Here</h1>)
    } else {
        return (
            <>
                <h1>Currently on tap</h1>
                {
                    data.map((brew, index) => {
                        if (!addedPastBrewsDiv && !brew.brew_avalibility) {
                            addedPastBrewsDiv = true;
                            return (
                                <>
                                    <h1>Previous Brews</h1>
                                    <div className='brew-card'>
                                        <h1 className='brew-name'>{brew.brew_name}</h1>
                                        <p className='brew-description'>{brew.brew_description}</p>
                                        <p className='brew-rating'>Brew Raiting : {brew.brew_popularity}</p>
                                    </div>
                                </>)
                        } else {
                            return (
                                <div className='brew-card'>
                                    <h1 className='brew-name'>{brew.brew_name}</h1>
                                    <p className='brew-description'>{brew.brew_description}</p>
                                    <p className='brew-rating'>Brew Raiting : {brew.brew_popularity}</p>
                                </div>

                            )
                        }
                    })}
            </>
        );
    }
}
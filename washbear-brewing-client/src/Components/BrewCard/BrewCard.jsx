import '@/Components/BrewCard/BrewCard.css'
import React, { useState } from 'react';
export default function BrewCard({ brew }) {
    
    const imgLocation = '/brewImages/'
    

    const [brewImage, setBrewImage] = useState(imgLocation + brew.brew_image);
    
    const setDefaultBrewImage = () => {
        setBrewImage(imgLocation + 'brewLogo.png');
    }
    
    return (
        <div className='brew-card'>
            <img className='brew-image' src={brewImage} alt='Brew Image' onError={setDefaultBrewImage}></img>
            <h1 className='brew-name'>{brew.brew_name}</h1>
            <div className='brew-text-container'>
                <p className='brew-style'><span className="brew-word-style">Style:</span> {brew.brew_style}</p>
                <p className='brew-abv'><span className="brew-word-style">ABV: </span>{brew.brew_abv.toFixed(1)}%</p>
                <p className='brew-description'><span className="brew-word-style">Tasting Notes: </span>{brew.brew_description}</p>
            </div>
        </div>
    );
}
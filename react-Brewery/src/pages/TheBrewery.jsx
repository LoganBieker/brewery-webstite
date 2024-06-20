import DropDownContainer from '@/Components/DropDownMenu/DropDownContainer'
import '@/styles/TheBrewery.css'
export default function TheBrewery() {


    return (
        <>
            <DropDownContainer></DropDownContainer>
            <div className='the-brewery-container'>
                <div className='the-brewery-text'>
                    <span className='text-blue'>Washbear Brewing</span> is a pico brewery located in the heart of Baltimore. We’re located walking distance from the <span className='text-purple'>Ravens Stadium</span>, <span className='text-orange'>Orioles Stadium</span> & the gorgeous Inner Harbor.
                    We are an experimental brewery and brew many types of unique beverages. We have an array of revolving Beers & Hydromel’s (a light crisp and refreshing session mead).
                    Come by for a game night or one of our other various events in the area.
                </div>
            </div >
            <div className='image-container'>
                <img className='image' src='/fridge2.jpg' alt='Setup Image'></img>
                <img className='image' src='/house.jpg' alt='House Imgage'></img>
                <img className='image' src='/game1.jpg'></img>
            </div>
        </>
    );
} 
import DropDownContainer from '@/Components/DropDownMenu/DropDownContainer'
import '@/styles/DropDownContainer.css'
export default function TheBrewery() {


    return (
        <>
            <DropDownContainer></DropDownContainer>
            <div className='drop-down-container-text'>
                Trash Panda Brewing is a pico brewery located in the heart of Baltimore. We’re located walking distance from the Ravens Stadiums, Orioles Stadium & the gorgeous Inner Harbor.  We are an experimental brewery and brew many types of unique beverages. We have an array of revolving Beers & Hydromel’s (a light crisp and refreshing session mead). Come by for a game night or one of our other various events in the area.
            </div>
            <div className='image-container'>
                <img className='image' src='./public/fridge2.jpg' alt='Setup Image'></img>
                <img className='image' src='./public/house.jpg' alt='House Imgage'></img>
                <img className='image' src='./public/game1.jpg'></img>
            </div>
        </>
    );
} 
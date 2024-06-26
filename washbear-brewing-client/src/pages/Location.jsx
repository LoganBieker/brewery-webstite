import LocationMap from "@/Components/LocationMap/LocationMap"
import DropDownContainer from '@/Components/DropDownMenu/DropDownContainer'
import '@/styles/locationStyles.css'

export default function Location() {

    return (
        <>
            <DropDownContainer></DropDownContainer>
            <div className="location-text">
                We are located in the vibrant Federal Hill neighborhood, just a short walk from M&T Bank Stadium, home of the Baltimore Ravens,
                and Oriole Park at Camden Yards, home of the Baltimore Orioles. Come visit us and explore the best of Baltimore!
            </div>

            <div className="location-address">
                <b className="location-address-head">Address</b><br></br>
                83 W West St<br></br>
                Baltimore, MD 21230
            </div>

            <LocationMap></LocationMap>
        </>
    )
}

//
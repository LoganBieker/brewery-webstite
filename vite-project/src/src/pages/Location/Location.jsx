import LocationMap from "./LocationMap"
import DropDownContainer from '../../DropDownContainer'

export default function Location() {

    return(
        <>
            <DropDownContainer></DropDownContainer>
            <div>
                We are located in the vibrant Federal Hill neighborhood, just a short walk from M&T Bank Stadium, home of the Baltimore Ravens,
                 and Oriole Park at Camden Yards, home of the Baltimore Orioles. Come visit us and explore the best of Baltimore!
            </div>
            
            <LocationMap></LocationMap>
        </>
    )
}

//
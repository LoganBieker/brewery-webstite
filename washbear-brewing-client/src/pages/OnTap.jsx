
import BrewCards from '@/Components/BrewCards/BrewCards'
import DropDownContainer from '@/Components/DropDownMenu/DropDownContainer'
export default function Mead() {

    return(
        <>
        <DropDownContainer></DropDownContainer>
        <BrewCards brew_type="availble"></BrewCards>
        </>
    )
}
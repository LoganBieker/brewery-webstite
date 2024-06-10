
import DropDownContainer from '@/Components/DropDownMenu/DropDownContainer'
import BrewCards from '@/Components/BrewCards/BrewCards'

export default function Beer() {

    return (
        <>
            <DropDownContainer></DropDownContainer>
            <BrewCards brew_type="beer"></BrewCards>
        </>
    )
}
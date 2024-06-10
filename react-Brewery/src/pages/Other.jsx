import DropDownContainer from '@/Components/DropDownMenu/DropDownContainer'
import BrewCards from '@/Components/BrewCards/BrewCards'
export default function Other() {
    return(
        <>
        <DropDownContainer></DropDownContainer>
        <BrewCards brew_type="other"></BrewCards>
        </>
    );
}
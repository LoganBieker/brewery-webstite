import DropDownContainer from '@/Components/DropDownMenu/DropDownContainer'
import HeroSection from '@/Components/HeroSection/HeroSection'
import HoursMenu from '@/Components/HoursMenu/HoursMenu'
import '@/styles/HomePage.css'
export default function HomePage() {


    return(
        <>
        <DropDownContainer></DropDownContainer>
        <HeroSection></HeroSection>
        <h1 className='disclaimer'>NOTE THIS IS NOT A OPEN BREWERY THIS IS A CODING PROJECT BEING USED TO SHOW MY HOMEBREW SETUP</h1>
        <HoursMenu></HoursMenu>
        </>
    )
}
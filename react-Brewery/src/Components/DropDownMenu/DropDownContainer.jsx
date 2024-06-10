import React from "react";
import { Link } from 'react-router-dom';

import SubMenu from "@/Components/DropDownMenu/SubMenu"
import HomeButton from "@/Components/DropDownMenu/HomeButton";
import '@/Components/DropDownMenu/DropDownMenu.css';

function DropDownContainer() {
    const aboutUsSection = [
        { name: "The Brewery", path: "/TheBrewery" },
        { name: "Location", path: "/Location" },
        { name: "Contact Us", path: "/ContactUs" },
    ]

    const ourBrewsSection = [
        { name: "OnTap", path: "/OnTap"},
        { name: "Beer", path: "/Beer"},
        { name: "Mead", path: "/Mead"},
        { name: "Other", path: "/Other"},
    ]

    return (
        <div className="dropdown-container">
            <HomeButton path='/..' name="Home"></HomeButton>
            <SubMenu containerName="About Us" containerItems={aboutUsSection}></SubMenu>
            <SubMenu containerName="Brews" containerItems={ourBrewsSection}></SubMenu>
            <Link to="/Events"><button className="drop-menu-select-standalone">Events</button></Link>
        </div>
    );
}

export default DropDownContainer;



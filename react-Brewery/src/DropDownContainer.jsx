import React from "react";
import SubMenu from "./SubMenu"
import { Link } from 'react-router-dom';

function HomePage() {
    const aboutUsSection = [
        { name: "The Brewery", path: "/TheBrewery" },
        { name: "Location", path: "/Location/Location" },
        { name: "Contact Us", path: "/ContactUs" },
    ]


    const ourBrewsSection = [
        { name: "Beer", path: "/Beer"},
        { name: "Mead", path: "/Mead"},
        { name: "Other", path: "/Other"},
    ]

    return (
        <div className="dropdown-container">
            <SubMenu containerName="About Us" containerItems={aboutUsSection}></SubMenu>
            <SubMenu containerName="Brews" containerItems={ourBrewsSection}></SubMenu>
            <div className="container"><Link to="/Events">Events</Link></div>
        </div>
    );
}

export default HomePage;
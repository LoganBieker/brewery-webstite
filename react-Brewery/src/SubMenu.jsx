import "./index.css"
import React, { useState } from "react";
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

function SubMenu(props) {
    const subList = props.containerItems;
    const [inDropdown, setInDropdown] = useState(false);
    const [inContainer, setInContainer] = useState(false);

    const containerItems =
        subList.map((element, index) => {
            return (
            <li key={index}>
                <Link to={element.path}>{element.name}</Link>
            </li>
            );
        })

    return (
        <div className="container">
            <span className="drop-menu-select"
                onMouseEnter={() => { setInDropdown(true) }}
                onMouseLeave={() => { setInDropdown(false) }}
            >{props.containerName}</span>
            <div className="sub-container"
                onMouseEnter={() => setInContainer(true)}
                onMouseLeave={() => { setInContainer(false); }}
                style={{ visibility: (inDropdown || inContainer) ? "visible" : "hidden" }}>
                <ul>{containerItems}</ul>
            </div>
        </div >
    );
}

export default SubMenu;
import '@/Components/DropDownMenu/DropDownMenu.css';
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
            <li className="sub-menu-item-container" key={index}>
                <Link to={element.path}>
                    <button className="sub-menu-item-button">{element.name}</button>
                </Link>
            </li>
            );
        })

    return (
        <div className="sub-menu-container">
            <span className="drop-menu-select"
                onMouseEnter={() => { setInDropdown(true) }}
                onMouseLeave={() => { setInDropdown(false) }}
            >{props.containerName}</span>
            <div className="sub-container"
                onMouseEnter={() => setInContainer(true)}
                onMouseLeave={() => { setInContainer(false); }}
                style={{ display: (inDropdown || inContainer) ? "block" : "none" }}>
                <ul>{containerItems}</ul>
            </div>
        </div >
    );
}

export default SubMenu;
import React, { useState } from "react";

const NavLink = ({ id, text, active, link, onActiveChange }) => {

    const handleClick = () => {
        onActiveChange(id)
    };

    const getClasses = () => {
        let classes = 'nav-link';
        return (classes += active ? ' active' : '');
    };

    return (
        <li
            className="nav-item"
            onClick={ handleClick }
        >
            <a
                className={ getClasses() }
                href={ link }
            >
                { text }
            </a>
        </li>
    )
};

export default NavLink;
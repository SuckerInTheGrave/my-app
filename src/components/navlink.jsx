import React from "react";
import PropTypes from "prop-types";

const NavLink = ({ id, text, active, link, onActiveChange }) => {
    const handleClick = () => {
        onActiveChange(id);
    };

    const getClasses = () => {
        let classes = "nav-link";
        return (classes += active ? " active" : "");
    };

    return (
        <li className="nav-item" onClick={handleClick}>
            <a className={getClasses()} href={link}>
                {text}
            </a>
        </li>
    );
};

NavLink.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
    onActiveChange: PropTypes.func.isRequired
};

export default NavLink;

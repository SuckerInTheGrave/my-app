import React from "react";
import NavLink from "./navlink";
import PropTypes from "prop-types";

const Navbar = ({ menuItems, onItemClick }) => {
    return (
        <div>
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        {...item}
                        onActiveChange={onItemClick}
                    />
                ))}
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemClick: PropTypes.func.isRequired
};

export default Navbar;

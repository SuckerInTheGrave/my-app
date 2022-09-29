import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, filter, onFilterChange, valueProperty, contentProperty }) => {
    return (
        <>
            <div className="list-group">
                { items.map(item => (
                    <button
                        className={ "list-group-item list-group-item-action" +
                        (item[valueProperty] === filter ? " active" : "") }
                        key={ item[valueProperty] }
                        onClick={ () => onFilterChange(item[valueProperty]) }
                    >
                        { item[contentProperty] }
                    </button>
                )) }
            </div>
        </>
    );
};
GroupList.defaultProps = {
    valueProperty: "id",
    contentProperty: "text"
};
GroupList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    filter: PropTypes.string,
    onFilterChange: PropTypes.func.isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired
};

export default GroupList;

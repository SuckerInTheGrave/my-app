import React from "react";
import PropTypes from "prop-types";

const Counter = ({
    id,
    value,
    name,
    onDelete,
    onIncrementCount,
    onDecrementCount
}) => {
    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-2 ";
        return (classes += value === 0 ? "bg-warning" : "bg-primary");
    };

    return (
        <div>
            <span>{name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button
                className="btn btn-primary btn-sm m-2 me-1"
                onClick={() => onIncrementCount(id)}
            >
                +
            </button>
            <button
                className="btn btn-primary btn-sm m-2 ms-0"
                onClick={() => onDecrementCount(id)}
            >
                -
            </button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </div>
    );
};

Counter.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onIncrementCount: PropTypes.func.isRequired,
    onDecrementCount: PropTypes.func.isRequired
};

export default Counter;

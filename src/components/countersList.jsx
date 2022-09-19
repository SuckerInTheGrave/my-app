import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {

    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 0, name: 'Ложка' },
        { id: 2, value: 0, name: 'Вилка' },
        { id: 3, value: 0, name: 'Тарелка' },
        { id: 4, value: 0, name: 'Набор минималиста' }
    ];

    const [ counters, setCounters ] = useState(initialState);

    const handleDelete = id => {
        setCounters(prevState => prevState.filter(counter => counter.id !== id));
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrementCount = (id) => {
        setCounters(prevState => prevState.map(item => {
            return (item.id === id ? { ...item, value: item.value + 1 } : item);
        }));
    };

    const handleDecrementCount = (id) => {
        setCounters(prevState => prevState.map(item => {
            return (item.id === id && item.value > 0 ? { ...item, value: item.value + 1 } : item);
        }));
    }

    return (
        <>
            { counters.map(count => (
                <Counter
                    key={ count.id }
                    { ...count }
                    onDelete={ handleDelete }
                    onIncrementCount={ handleIncrementCount }
                    onDecrementCount={ handleDecrementCount }
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={ handleReset }
            >
                Сброс
            </button>
        </>
    )
}

export default CountersList;
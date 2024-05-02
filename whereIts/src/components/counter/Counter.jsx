import React, { useState } from 'react';
import './counter.css';

function Counter({ price }) {
    const [count, setCount] = useState(0); // Tillstånd för räknaren

    // Funktion för att öka räknaren
    const increment = () => {
        setCount(count + 1);
    };

    // Funktion för att minska räknaren, med villkor att den inte kan gå under 0
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <section className="counter-wrapper">
            <section className="counter-container">
                <p className="counter-price">{price * count} sek</p>
                <section className="counter-count">
                    <button onClick={decrement} className="counter-button">
                        <img src='/assets/minus.png' alt="Minus" className="counter-minus" />
                    </button>
                    <p className="counter-number">{count}</p>
                    <button onClick={increment} className="counter-button">
                        <img src='/assets/plus.png' alt="Plus" className="counter-plus" />
                    </button>
                </section>
            </section>
        </section>
    );
}

export default Counter;

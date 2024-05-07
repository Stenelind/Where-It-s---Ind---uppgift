import './counter.css';
import useStore from '../../apistore';  

function Counter({ price, eventId }) {
    const { count, increment, decrement } = useStore(state => ({
        count: state.events.find(event => event.id === eventId).count,
        increment: state.increment,
        decrement: state.decrement
    }));

    return (
        <section className="counter-wrapper">
            <section className="counter-container">
                <p className="counter-price">{price * count} sek</p>
                <section className="counter-count">
                    <button onClick={() => decrement(eventId)} className="counter-button">
                        <img src='/assets/minus.png' alt="Minus" className="counter-minus" />
                    </button>
                    <p className="counter-number">{count}</p>
                    <button onClick={() => increment(eventId)} className="counter-button">
                        <img src='/assets/plus.png' alt="Plus" className="counter-plus" />
                    </button>
                </section>
            </section>
        </section>
    );
}

export default Counter;

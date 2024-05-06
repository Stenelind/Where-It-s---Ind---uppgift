import './counter.css';
import useStore from '../../apistore';  

function Counter({ price }) {
    const { count,  increment, decrement } = useStore(state => ({
        count: state.count,
        increment: state.increment,
        decrement: state.decrement
    }));

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

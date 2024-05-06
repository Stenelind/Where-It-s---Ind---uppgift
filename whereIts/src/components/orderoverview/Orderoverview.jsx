import { useLocation } from 'react-router-dom';
import './orderoverview.css';
import useStore from '../../apistore';

function Orderoverview() {
    const { count, increment, decrement } = useStore(state => ({
        count: state.count,
        increment: state.increment,
        decrement: state.decrement
    }));
        
    const location = useLocation();
    const { event } = location.state; 
    
    if (!event) {
        return null; 
    }

    return (
        <section className="orderoverview-wrapper">
            <section className="orderoverview-container">
                <p className="orderoverview-artist">{event.name}</p>
                <p className="orderoverview-time">{event.when.date + ' ' + event.when.from + ' - ' + event.when.to}</p>
                <section className="orderoverview-count">
                    <button onClick={decrement} className="orderoverview-button">
                        <img src='/assets/minus.png' alt="Minus" className="orderoverview-minus" />
                    </button>
                    <p className="orderoverview-number">{count}</p> 
                    <button onClick={increment} className="orderoverview-button">
                        <img src='/assets/plus.png' alt="Plus" className="orderoverview-plus" />
                    </button>
                </section>
            </section>
        </section>
    );
}

export default Orderoverview;

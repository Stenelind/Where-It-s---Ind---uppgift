import './orderoverview.css';
import useOrderStore from '../../useStateStore'; 

function Orderoverview({ event }) {
  const orderedEvent = useOrderStore(state => state.orderedEvents.find(e => e.id === event.id));

  const handleIncrement = () => {
    useOrderStore.getState().updateEventCount(event.id, orderedEvent.count + 1); 
  };

  const handleDecrement = () => {
    if (orderedEvent.count > 0) {
      useOrderStore.getState().updateEventCount(event.id, orderedEvent.count - 1);
    }
  };

  if (!event) {
    return <div>No event data found</div>;
  }

  return (
    <section className="orderoverview-wrapper">
      <section className="orderoverview-container">
        <p className="orderoverview-artist">{event.name}</p>
        <p className="orderoverview-time">{event.when.date + ' ' + event.when.from + ' - ' + event.when.to}</p>
        <section className="orderoverview-count">
          <button onClick={handleDecrement} className="orderoverview-button">
            <img src='/assets/minus.png' alt="Minus" className="orderoverview-minus" />
          </button>
          <p className="orderoverview-number">{orderedEvent.count}</p>
          <button onClick={handleIncrement} className="orderoverview-button">
            <img src='/assets/plus.png' alt="Plus" className="orderoverview-plus" />
          </button>
        </section>
      </section>
    </section>
  );
}

export default Orderoverview;
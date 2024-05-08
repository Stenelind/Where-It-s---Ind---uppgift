import './ordersum.css';
import useOrderStore from '../../useStateStore';

function Ordersum() {
  const totalPrice = useOrderStore(state => {
    return state.orderedEvents.reduce((total, event) => total + event.totalPrice, 0);
  });
  
  return (
    <section className="ordersum-container">
        <p className="ordersum-text">Totalt värde på order</p>
        <p className="ordersum-sum">{totalPrice} sek</p>
    </section>
  )
}

export default Ordersum;
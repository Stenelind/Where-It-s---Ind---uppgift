import './ordersum.css'
import useStore from '../../apistore';

function Ordersum() {
  const totalPrice = useStore(state => state.totalPrice);
  
  return (
    <section className="ordersum-container">
        <p className="ordersum-text">Totalt värde på order</p>
        <p className="ordersum-sum">{totalPrice} sek</p>
    </section>
  )
}

export default Ordersum
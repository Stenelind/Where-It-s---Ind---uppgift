import './ordersum.css';
import useOrderStore from '../../orderStore';
import { useEffect, useState } from 'react';

function Ordersum() {
  const [totalPrice, setTotalPrice] = useState(0);
  const { orderedEvents, showOrderOverview } = useOrderStore();

  useEffect(() => {
    // Beräkna totalpriset endast om showOrderOverview är true
    if (showOrderOverview) {
      const total = orderedEvents.reduce((total, event) => total + event.totalPrice, 0);
      setTotalPrice(total);
    } else {
      // Nollställ totalpriset om showOrderOverview är false
      setTotalPrice(0);
    }
  }, [orderedEvents, showOrderOverview]);

  return (
    <section className="ordersum-container">
      <p className="ordersum-text">Totalt värde på order</p>
      <p className="ordersum-sum">{totalPrice} sek</p>
    </section>
  );
}

export default Ordersum;

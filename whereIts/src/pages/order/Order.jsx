import React, { useState } from 'react';
import Orderbutton from '../../components/orderbutton/Orderbutton'
import Orderoverview from '../../components/orderoverview/Orderoverview';
import Ordersum from '../../components/ordersum/Ordersum';
import useStore from '../../apistore'; 
import './order.css';

function Order() {
  const { currentEvent } = useStore();
  const [count, setCount] = useState(1); 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };  

  // Beräkna totalpriset baserat på antal biljetter och pris per biljett
  const totalPrice = currentEvent && currentEvent.price ? count * currentEvent.price : 0;

  if (!currentEvent) {
    return <div>Laddar eventinformation...</div>;
  }

  console.log(totalPrice);
  console.log("Count:", count);
  console.log("Event Price:", currentEvent.price);
  return (
    <>
      <h1 className="order-header">Order</h1>
      <Orderoverview 
        event={currentEvent} 
        orderCount={count}  
        increment={increment} 
        decrement={decrement}
      />
      <Ordersum /> 
      <Orderbutton />
    </>
  )
}

export default Order;
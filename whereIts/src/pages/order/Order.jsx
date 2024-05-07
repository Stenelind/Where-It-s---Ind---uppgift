import './order.css';
import React, { useState, useEffect } from 'react';
import Orderbutton from '../../components/orderbutton/Orderbutton';
import Orderoverview from '../../components/orderoverview/Orderoverview';
import Ordersum from '../../components/ordersum/Ordersum';
import useStore from '../../apistore';
import useOrderStore from '../../orderStore'; 

function Order() {
  const { currentEvent, setCurrentEvent } = useStore();
  const { orderedEvents, addEventToOrder } = useOrderStore();
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Uppdatera komponenten när orderedEvents ändras
  }, [orderedEvents]);

  const handleEventSelection = (event) => {
    setCurrentEvent(event); // Sätt det aktuella evenemanget
  };

  const handleAddToOrder = () => {
    if (!currentEvent) {
      return; // Om inget event är valt, avsluta funktionen
    }

    // Kontrollera om eventet redan finns i ordern
    const isEventInOrder = orderedEvents.some((orderedEvent) => orderedEvent.id === currentEvent.id);
    if (isEventInOrder) {
      window.alert('Detta event finns redan i din order.'); 
    } else {
      addEventToOrder(currentEvent); // Lägg till eventet i ordern
    }
  };

  if (!currentEvent) {
    return <div>Laddar eventinformation...</div>;
  }
  
  return (
    <>
      <h1 className="order-header">Order</h1>
      <div className="order-overviews">
        {orderedEvents.slice(0, 3).map((orderedEvent, index) => (
          <Orderoverview
            key={`${orderedEvent.id}-${index}`} // Unik nyckel för varje event
            event={orderedEvent}
            orderCount={count}
            increment={() => {}}
            decrement={() => {}}
            onEventSelection={handleEventSelection}
          />
        ))}
      </div>
      <Ordersum />
      <Orderbutton onClick={handleAddToOrder} /> {/* Anropa handleAddToOrder */}
    </>
  )
}

export default Order;

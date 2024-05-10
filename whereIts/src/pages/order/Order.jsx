import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import './order.css';
import Orderbutton from '../../components/orderbutton/Orderbutton';
import Orderoverview from '../../components/orderoverview/Orderoverview';
import Ordersum from '../../components/ordersum/Ordersum';
import useOrderStore from '../../orderStore';
import Tickets from '../tickets/Tickets';

function Order() {
  const navigate = useNavigate();
  const { orderedEvents, showOrderOverview, setShowOrderOverview } = useOrderStore();
  const [showTickets, setShowTickets] = useState(false);
  
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/tickets'), 
    onSwipedRight: () => navigate('/Events/'), 
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    // Uppdatera komponenten när orderedEvents ändras
  }, [orderedEvents]);

  const setCurrentEvent = (event) => {
    // Funktionen som sätter den aktuella händelsen
  };

  const handleOrderButtonClick = async () => {
    if (orderedEvents.length > 0) {
      setShowTickets(true);
      setShowOrderOverview(false);
      navigate('/tickets');
    } else {
      window.alert('Your order is empty.');
    }
  };


  return (
    <section {...handlers} className="swipe-area">
      <h1 className="order-header">Order</h1>
      <div className="order-overviews">
        {showOrderOverview && orderedEvents.map((orderedEvent, index) => (
          <Orderoverview
            key={`${orderedEvent.id}-${index}`}
            event={orderedEvent}
            onEventSelection={setCurrentEvent}
          />
        ))}
        <Ordersum />
        <Orderbutton onClick={handleOrderButtonClick} />
        {showTickets && <Tickets />}
      </div>
    </section>
  );
}

export default Order;
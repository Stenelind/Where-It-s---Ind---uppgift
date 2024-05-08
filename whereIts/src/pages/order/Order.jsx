import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import useApiStore from '../../useApiStore';
import useStateStore from '../../useStateStore';
import './order.css';
import Orderbutton from '../../components/orderbutton/Orderbutton';
import Orderoverview from '../../components/orderoverview/Orderoverview';
import Ordersum from '../../components/ordersum/Ordersum';
import Tickets from '../tickets/Tickets';

function Order() {
  const { currentEvent, setCurrentEvent } = useApiStore();
  const { orderedEvents } = useStateStore(); 
  const [showTickets, setShowTickets] = useState(false);

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/tickets'), // Navigera till Events när användaren swipar åt vänster
    onSwipedRight: () => navigate('/Event/'), // Ändra till din önskade route
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleOrderButtonClick = async () => {
    if (orderedEvents.length > 0) {
      setShowTickets(true);
      navigate('/tickets');
    } else {
      window.alert('Your order is empty.');
    }
  };

  if (!currentEvent) {
    return <section className="order-loader">Loading event information...</section>;
  }

  return (
    <section {...handlers} className="swipe-area">
      <h1 className="order-header">Order</h1>
      <div className="order-overviews">
        {orderedEvents.slice(0, 3).map((orderedEvent, index) => (
          <Orderoverview
            key={`${orderedEvent.id}-${index}`}
            event={orderedEvent}
            onEventSelection={setCurrentEvent}
          />
        ))}
      </div>
      <Ordersum />
      <Orderbutton onClick={handleOrderButtonClick} />
      
      {showTickets && <Tickets />}
    </section>
  );
}

export default Order;

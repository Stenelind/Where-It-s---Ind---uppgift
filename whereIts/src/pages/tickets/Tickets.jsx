import Ticket from '../../components/ticket/Ticket';
import useOrderStore from '../../orderStore';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import './tickets.css';
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles

function Tickets() {
  const location = useLocation();
  const clearOrder = useOrderStore(state => state.clearOrder);
  const orderedEvents = location.state?.orderedEvents || [];

  useEffect(() => {
    // Rensa ordern när Tickets komponenten har laddats
    clearOrder();
  }, [clearOrder]);

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedRight: () => navigate('/events'), // Ändra till din önskade route
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  return (
    <section {...handlers} className="swipe-area">
    <section className="tickets-container">
    <Slider {...settings}>
      {orderedEvents.map((event) => {
        const seats = useOrderStore.getState().getSeats(event.id);
        return seats.map((seat, idx) => (
          <Ticket key={idx} event={event} seat={seat} />
        ));
      })}
    </Slider>
  </section>
  </section>
);
}

export default Tickets;
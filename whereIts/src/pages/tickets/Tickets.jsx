import Ticket from '../../components/ticket/Ticket';
import useOrderStore from '../../orderStore';
import './tickets.css';
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles

function Tickets() {
  const orderedEvents = useOrderStore(state => state.orderedEvents);

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
);
}

export default Tickets;

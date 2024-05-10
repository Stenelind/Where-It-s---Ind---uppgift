import Logo from '../../components/logo/Logo'
import './landingpage.css'
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/events'), // Navigera till Events när användaren swipar åt vänster
    onSwipedRight: () => navigate(''), // Ändra till din önskade route
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <section {...handlers} className="swipe-area">
    <section className="landing-page-container">
    <Logo />
    </section>
    </section>
  )
}

export default Landingpage
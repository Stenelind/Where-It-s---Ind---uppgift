import Logo from '../../components/logo/Logo'
import Pager from '../../components/pager/Pager'
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
    <Pager />
    </section>
    </section>
  )
}

export default Landingpage
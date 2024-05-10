import './eventticket.css';

function Eventticket({ event }) {
    return (
        <section className="eventticket-container">
            <h3 className="eventticket-artist">{event.name}</h3>
            <p className="eventticket-time">{`${event.when.date} ${event.when.from} - ${event.when.to}`}</p>
            <p className="eventticket-place">{`@ ${event.where}`}</p>
        </section>
    )
}

export default Eventticket;
import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'; 
import useStore from '../../apistore.js';
import './eventcard.css';


function Eventcard() {
    const { events, fetchEvents, getEventByName } = useStore((state) => ({
        events: state.events,
        fetchEvents: state.fetchEvents,
        getEventByName: state.getEventByName
    }));

    const fetchEventsMemo = useCallback(() => {
        fetchEvents();
    }, [fetchEvents]);  

    useEffect(() => {
        fetchEventsMemo();
    }, [fetchEventsMemo]);  

    if (events.length === 0) {
        return <div>Loading events...</div>;
    }

    return (
        <>
            {events.slice(0, 4).map((event, index) => (
                <Link key={event.id || event.name || index} to={`/events/event/${encodeURIComponent(event.name)}`}>
                    <section className="event-wrapper">
                        <section className="date-container">
                            <p className="date">{event.when.date.split(' ')[0]}</p>
                            <p className="month">
                                {event.when.date.split(' ')[1].substring(0, 3).toUpperCase()}
                            </p>
                        </section>
                        <section className="artist-container">
                            <h3 className="artist-name">{event.name}</h3>
                            <p className="artist-place">{event.where}</p>
                            <section className="artist-time__price">
                                <p className="artist-time">{`${event.when.from} - ${event.when.to}`}</p>
                                <p className="artist-price">{`${event.price} sek`}</p>
                            </section>
                        </section>
                    </section>
                </Link>
            ))}
        </>
    )
}

export default Eventcard;

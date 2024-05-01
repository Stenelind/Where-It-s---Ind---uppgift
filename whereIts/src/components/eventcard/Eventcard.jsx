import './eventcard.css'

function Eventcard() {
    return (
        <>
            <section className="event-wrapper">
                <section className="date-container">
                    <p className="date">21 </p>
                    <p className="month">MAR</p>
                </section>
                <section className="artist-container">
                    <h3 className="artist-name">Lasse-Stefanz</h3>
                    <p className="artist-place">Kjell Härnqvistsalen</p>
                    <section className="artist-time__price">
                    <p className="artist-time">19.00 - 21.00</p>
                    <p className="artist-price"> 350 sek</p>
                    </section>
                </section>
            </section>

            <section className="event-wrapper">
                <section className="date-container">
                    <p className="date">29 </p>
                    <p className="month">MAR</p>
                </section>
                <section className="artist-container">
                    <h3 className="artist-name">Pelle trubadur</h3>
                    <p className="artist-place">Pubelipuben</p>
                    <section className="artist-time__price">
                    <p className="artist-time">22.00 - 00.00</p>
                    <p className="artist-price"> 110 sek</p>
                    </section>
                </section>
            </section>

            <section className="event-wrapper">
                <section className="date-container">
                    <p className="date">10 </p>
                    <p className="month">APR</p>
                </section>
                <section className="artist-container">
                    <h3 className="artist-name">Kajsas kör</h3>
                    <p className="artist-place">Götaplatsen</p>
                    <section className="artist-time__price">
                    <p className="artist-time">15.00 - 16.00</p>
                    <p className="artist-price"> 99 sek</p>
                    </section>
                </section>
            </section>

            <section className="event-wrapper">
                <section className="date-container">
                    <p className="date">17</p>
                    <p className="month">APR</p>
                </section>
                <section className="artist-container">
                    <h3 className="artist-name">Klubb Untz</h3>
                    <p className="artist-place">Din favoritkällare</p>
                    <section className="artist-time__price">
                    <p className="artist-time">22.00-du tröttnar</p>
                    <p className="artist-price">150 sek</p>
                    </section>
                </section>
            </section>

        </>
    )
}

export default Eventcard
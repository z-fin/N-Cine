import { TicketCard } from '../components/features/screenings/TicketCard';
import { screenings } from '../data/siteData';
import heroStill from '../assets/Maurice.png';
import './pages.css';

const stillFrames = [
  'Paris is Burning',
  'Tongues Untied',
  'The Watermelon Woman',
  'Funeral Parade of Roses',
  'Born in Flames',
  'Portrait of Jason',
];

export default function HomePage() {
  const nextScreenings = screenings.slice(0, 3);
  const carouselFrames = [...stillFrames, ...stillFrames];

  return (
    <>
      <section className="home-hero" aria-label="Nuestro Ciclo">
        <img className="home-hero__media" src={heroStill} alt="" />
        <div className="home-hero__grain" aria-hidden="true" />
        <div className="home-hero__copy">
          
          <h1>NUESTRO CICLO</h1>
        </div>
        <div className="home-hero__bottom-bar" aria-hidden="true" />
      </section>

      <section className="still-carousel" aria-label="Still frames de cine queer clasico">
        <div className="still-carousel__track">
          {carouselFrames.map((title, index) => (
            <article className="still-frame" key={`${title}-${index}`}>
              <span>{String((index % stillFrames.length) + 1).padStart(2, '0')}</span>
              <h2>{title}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="home-screenings page-section">
        <div className="container">
          <div className="home-screenings__header">
            <span>Ahora en sala</span>
            <h2>PROXIMAS FUNCIONES</h2>
            <p>
              Tickets visuales para reservar clasicos, estrenos y cortos locales con
              conversatorios, trivias y feriantes.
            </p>
          </div>

          <div className="ticket-grid">
            {nextScreenings.map((screening) => (
              <TicketCard
                key={screening.id}
                screening={screening}
                frameLabel={`Still frame de ${screening.title}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { ErrorState, LoadingState } from '../components/common/AsyncState';
import { TicketCard } from '../components/features/screenings/TicketCard';
import { useAsyncData } from '../hooks/useAsyncData';
import { getScreenings } from '../services/api';
import { toScreening } from '../utils/apiAdapters';
import heroStill from '../assets/paris-is-burning.png';
import { MovieStillsCarousel } from '../components/common/MovieStillsCarousel'
import '../styles/pages.css';

export default function HomePage() {
  const {
    data: funcionData,
    error,
    isLoading,
  } = useAsyncData(getScreenings, 'No pudimos cargar las proximas funciones.');
  const nextScreenings = (funcionData ?? []).slice(0, 3).map(toScreening);

  return (
    <>
      <section className="home-hero" aria-label="Nuestro Cine">
        <img className="home-hero__media" src={heroStill} alt="" />
        <div className="home-hero__grain" aria-hidden="true" />
        <div className="home-hero__copy">
          <span className="home-hero__presenter">La comunidad presenta</span>
          <div className="home-hero__title-card">
            {/* <span className="home-hero__edition">Una programacion colectiva</span> */}
            <h1>Nuestro Cine</h1>
            <span className="home-hero__year">Buenos Aires, Argentina</span>
          </div>
          <p className="home-hero__subtitle">
            Ciclo audiovisual queer de y para la comunidad LGTBIQ+.
          </p>
        </div>
        <div className="home-hero__bottom-bar" aria-hidden="true" />
      </section>

      <MovieStillsCarousel />

      <section className="home-screenings page-section">
        <div className="container">
          <div className="home-screenings__header">
            <h2>PROXIMAS FUNCIONES</h2>
            <p></p>
          </div>

          {isLoading && <LoadingState label="Cargando funciones" variant="grid" />}
          {error && <ErrorState message={error} />}
          {!isLoading && !error && (
            <div className="ticket-grid">
              {nextScreenings.map((screening) => (
                <TicketCard
                  key={screening.id}
                  screening={screening}
                  frameLabel={`Still frame de ${screening.title}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

import { ErrorState, LoadingState } from '../components/common/AsyncState';
import { TicketCard } from '../components/features/screenings/TicketCard';
import { useAsyncData } from '../hooks/useAsyncData';
import { getScreenings } from '../services/api';
import { toScreening } from '../utils/apiAdapters';
import '../styles/pages.css';
import { MovieStillsCarousel } from '../components/common/MovieStillsCarousel';

export default function ScreeningsPage() {
  const {
    data: funcionData,
    error,
    isLoading,
  } = useAsyncData(getScreenings, 'No pudimos conectar con el servidor de funciones.');
  const screenings = (funcionData ?? []).map(toScreening);

  return (
    <>
      <section className="page-section page-section--ink">
        <div className="container page-hero">
          {/* <span className="section-kicker">Funciones</span> */}
          <h1 className="section-heading">Agenda de cine, conversacion y comunidad.</h1>
          {/* <p className="section-copy">
            Funciones con reserva anticipada, cupos cuidados y encuentro despues de cada
            pelicula.
          </p> */}
        </div>
      </section>

      <MovieStillsCarousel />

      <section className="page-section">
        <div className="container">
          {isLoading && <LoadingState label="Cargando funciones" variant="grid" />}
          {error && <ErrorState message={error} />}
          {!isLoading && !error && (
            <div className="ticket-grid">
              {screenings.map((screening) => (
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

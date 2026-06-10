import { useEffect, useState } from 'react';
import { ScreeningCard } from '../components/features/screenings/ScreeningCard';
import { getScreenings } from '../services/api';
import type { Funcion } from '../types/api';
import type { Screening } from '../types/content';
import type { AccentColor } from '../types/design';
import './pages.css';

const accents: AccentColor[] = ['red', 'orange', 'yellow', 'green', 'indigo', 'violet'];

function formatDateTime(dateTime: string) {
  return new Intl.DateTimeFormat('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateTime));
}

function toScreening(funcion: Funcion, index: number): Screening {
  return {
    id: funcion.id,
    title: funcion.title,
    director: funcion.director,
    dateTime: formatDateTime(funcion.dateTime),
    venue: funcion.location,
    description: `${funcion.availableTickets} de ${funcion.totalTickets} entradas disponibles.`,
    tags: funcion.genres,
    accent: accents[index % accents.length],
  };
}

export default function ScreeningsPage() {
  const [screenings, setScreenings] = useState<Screening[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadScreenings() {
      try {
        setLoading(true);
        setError(null);
        const response = await getScreenings();

        if (isMounted) {
          setScreenings(response.map(toScreening));
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'No pudimos cargar las funciones.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    void loadScreenings();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <section className="page-section page-section--ink">
        <div className="container page-hero">
          <span className="section-kicker">Funciones</span>
          <h1 className="section-heading">Agenda de cine, conversacion y comunidad.</h1>
          <p className="section-copy">
            Hay que poner mas texto de que significan las funciones.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container screenings-list">
          {loading && (
            <div className="loading-state" role="status" aria-live="polite">
              <span className="loading-state__spinner" aria-hidden="true" />
              Cargando funciones
            </div>
          )}

          {error && (
            <div className="error-state" role="alert">
              {error}
            </div>
          )}

          {!loading &&
            !error &&
            screenings.map((screening) => (
              <ScreeningCard key={screening.id} screening={screening} />
            ))}
        </div>
      </section>
    </>
  );
}

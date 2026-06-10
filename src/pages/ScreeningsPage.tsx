import { ScreeningCard } from '../components/features/screenings/ScreeningCard';
import { screenings } from '../data/siteData';
import './pages.css';

export default function ScreeningsPage() {
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
          {screenings.map((screening) => (
            <ScreeningCard key={screening.id} screening={screening} />
          ))}
        </div>
      </section>
    </>
  );
}

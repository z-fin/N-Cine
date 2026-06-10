import { MovieStillsCarousel } from '../components/common/MovieStillsCarousel';
import { AboutFeatureGrid } from '../components/features/about/AboutFeatureGrid';
import '../styles/pages.css';

const timeline = [
  {
    date: '2024',
    title: 'Primera funcion abierta',
    body: 'Primera funcion que fue: titulo.',
  },
  {
    date: '2025',
    title: 'Crecimiento',
    body: 'en 2025 hicimos x y z con w t r personas',
  },
  {
    date: '2026',
    title: 'Mas crecimiento',
    body: ':) etcetera no se que mas poner yo no se escribir solo programo',
  },
];

const pastEvents = [
  {
    title: 'The Vampire Lestat + trivia',
    body: 'No se de que trata la serie.',
  },
  {
    title: 'Interview With The Vampire + trivia',
    body: 'Capitulo 4?? girl idk',
  },
  {
    title: 'Moonlight aniversario',
    body: 'Funcion especial.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-section page-section--ink about-page">
        <div className="container page-hero">
          {/* <span className="section-kicker about">Sobre Nosotros</span> */}
          <h1 className="section-heading">Una sala para encontrarnos en la imagen.</h1>
          <p className="section-copy">
            Nuestro Cine es un espacio de cine queer hecho por y para la comunidad. Agregar mas texto.
          </p>
        </div>
      </section>

      <MovieStillsCarousel />

      <section className="page-section">
        <div className="container">
          <AboutFeatureGrid />
        </div>
      </section>

      <section className="page-section">
        <div className="container split-heading">
          <div>
            <span className="section-kicker">Linea de tiempo</span>
            <h2 className="section-heading">Comunidad en proceso</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article key={item.date} className="timeline-item">
                <span>{item.date}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="split-heading">
            <div>
              <span className="section-kicker">Historial</span>
              <h2 className="section-heading">Funciones y eventos anteriores</h2>
            </div>
          </div>
          <div className="event-strip">
            {pastEvents.map((event) => (
              <article key={event.title}>
                <h3>{event.title}</h3>
                <p>{event.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

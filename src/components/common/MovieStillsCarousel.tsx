import '../../styles/pages.css';


const stillFrames = [
  'Paris is Burning',
  'Tongues Untied',
  'The Watermelon Woman',
  'Funeral Parade of Roses',
  'Born in Flames',
  'Portrait of Jason',
];

export function MovieStillsCarousel() {
  const carouselFrames = [...stillFrames, ...stillFrames];

  return (
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
  )
}
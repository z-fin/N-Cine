import { NewsCard } from '../components/features/news/NewsCard';
import { newsArticles } from '../data/siteData';
import './pages.css';

export default function NewsPage() {
  const [featured, ...articles] = newsArticles;

  return (
    <>
      <section className="page-section page-section--ink">
        <div className="container page-hero">
          <span className="section-kicker">Noticias</span>
          <h1 className="section-heading">Notas, criticas y vida de sala.</h1>
          <p className="section-copy">
            Un espacio para seguir pensando las peliculas antes y despues de cada
            encuentro.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container news-layout">
          <NewsCard article={featured} featured />
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}

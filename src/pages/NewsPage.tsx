import { ErrorState, LoadingState } from '../components/common/AsyncState';
import { NewsCard } from '../components/features/news/NewsCard';
import { useAsyncData } from '../hooks/useAsyncData';
import { getNews } from '../services/api';
import { toNewsArticle } from '../utils/apiAdapters';
import '../styles/pages.css';
import { MovieStillsCarousel } from '../components/common/MovieStillsCarousel';

export default function NewsPage() {
  const {
    data: articleData,
    error,
    isLoading,
  } = useAsyncData(getNews, 'No pudimos cargar las noticias.');
  const [featured, ...articles] = (articleData ?? []).map(toNewsArticle);

  return (
    <>
      <section className="page-section page-section--ink">
        <div className="container page-hero">
          {/* <span className="section-kicker">Noticias</span> */}
          <h1 className="section-heading">Notas, criticas y vida de sala.</h1>
          <p className="section-copy">
            Un espacio para seguir pensando las peliculas antes y despues de cada encuentro.
          </p>
        </div>
      </section>

      <MovieStillsCarousel />

      <section className="page-section">
        <div className="container">
          {isLoading && <LoadingState label="Cargando noticias" variant="grid" />}
          {error && <ErrorState message={error} />}
          {!isLoading && !error && featured && (
            <div className="news-layout">
              <NewsCard article={featured} featured />
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

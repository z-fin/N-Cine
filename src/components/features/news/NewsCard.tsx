import type { CSSProperties } from 'react';
import { Badge } from '../../common/Badge';
import { Button } from '../../common/Button';
import type { NewsArticle } from '../../../types/content';
import { accentVarByColor } from '../../../types/design';
import './news.css';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  const style = {
    '--accent-color': accentVarByColor[article.accent],
  } as CSSProperties;

  return (
    <article
      className={featured ? 'news-card news-card--featured' : 'news-card'}
      style={style}
    >
      <div className="news-image-wrapper">
        <img src={article.imageUrl} alt={`Imagen de ${article.title}`} />
      </div>

      <div className="news-content">
        <div className="news-card__topline">
          <Badge accent={article.accent}>{article.category}</Badge>
          <span>{article.date}</span>
        </div>

        <div className="news-copy">
          <h3 className="news-title" title={article.title}>
            {article.title}
          </h3>
          <p className="news-excerpt">{article.excerpt}</p>
        </div>

        <div className="news-card__footer">
          <span>{article.readTime} lectura</span>
          <Button href="/noticias" variant="ghost" accent={article.accent}>
            Leer nota
          </Button>
        </div>
      </div>
    </article>
  );
}

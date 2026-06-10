import { Badge } from '../../common/Badge';
import { Button } from '../../common/Button';
import { Card } from '../../common/Card';
import type { NewsArticle } from '../../../types/content';
import './news.css';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  return (
    <Card accent={article.accent} className={featured ? 'news-card news-card--featured' : 'news-card'}>
      <div className="news-card__topline">
        <Badge accent={article.accent}>{article.category}</Badge>
        <span>{article.date}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <div className="news-card__footer">
        <span>{article.readTime} lectura</span>
        <Button href="/noticias" variant="ghost" accent={article.accent}>
          Leer nota
        </Button>
      </div>
    </Card>
  );
}

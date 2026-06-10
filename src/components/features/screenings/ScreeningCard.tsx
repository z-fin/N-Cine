import { Badge } from '../../common/Badge';
import { Button } from '../../common/Button';
import { Card } from '../../common/Card';
import type { Screening } from '../../../types/content';
import './screenings.css';

interface ScreeningCardProps {
  screening: Screening;
  compact?: boolean;
}

export function ScreeningCard({ screening, compact = false }: ScreeningCardProps) {
  return (
    <Card accent={screening.accent} className="screening-card">
      <div className="poster-mark" aria-hidden="true">
        <span>{screening.title.slice(0, 2)}</span>
      </div>

      <div className="screening-card__body">
        <div>
          <p className="screening-card__meta">{screening.dateTime}</p>
          <h3>{screening.title}</h3>
          <p className="screening-card__director">Direccion: {screening.director}</p>
        </div>

        {!compact && <p>{screening.description}</p>}

        <div className="tag-row">
          {screening.tags.map((tag) => (
            <Badge key={tag} accent={screening.accent}>
              {tag}
            </Badge>
          ))}
        </div>

        <div className="screening-card__footer">
          <span>{screening.venue}</span>
          <Button href="/funciones" variant="primary" accent={screening.accent}>
            Reservar
          </Button>
        </div>
      </div>
    </Card>
  );
}

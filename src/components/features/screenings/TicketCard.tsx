import type { CSSProperties } from 'react';
import { Badge } from '../../common/Badge';
import { Button } from '../../common/Button';
import type { Screening } from '../../../types/content';
import { accentVarByColor } from '../../../types/design';
import './ticket-card.css';

interface TicketCardProps {
  screening: Screening;
  frameLabel?: string;
}

function splitDateTime(dateTime: string) {
  const [day, date, time] = dateTime.split(',').map((part) => part.trim());

  return {
    day: day,
    date: date,
    time: time ?? 'Horario a confirmar',
  };
}

export function TicketCard({ screening, frameLabel }: TicketCardProps) {
  const { date, time } = splitDateTime(screening.dateTime);
  const style = {
    '--accent-color': accentVarByColor[screening.accent],
  } as CSSProperties;

  return (
    <article className="ticket-card" style={style}>
      <div className="ticket-card__ticket">
        <aside className="ticket-card__stub" aria-label="Datos de la funcion">
          <span>Fecha</span>
          <strong>{date}</strong>
          <span>Hora</span>
          <strong>{time}</strong>
          <span>Lugar</span>
          <strong>{screening.venue}</strong>
        </aside>

        <div className="ticket-card__body">
          <div className="ticket-card__still">
            <img
              src={screening.posterUrl}
              alt={frameLabel ?? `Poster de ${screening.title}`}
            />
          </div>

          <div className="ticket-card__details">
            <p className="ticket-card__director" title={screening.director}>
              {screening.director}
            </p>
            <h3 title={screening.title}>{screening.title}</h3>
            <p className="ticket-card__availability">{screening.description}</p>

            <div className="ticket-card__genres" aria-label="Generos">
              {screening.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} accent={screening.accent}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Button href={screening.ticketUrl ?? '/funciones'} variant="primary" accent={screening.accent}>
            Reservar
          </Button>
        </div>
      </div>
    </article>
  );
}

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
  const [date, time] = dateTime.split(',').map((part) => part.trim());

  return {
    date,
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
          <span>Sala</span>
          <strong>{screening.venue}</strong>
        </aside>

        <div className="ticket-card__body">
          <div className="ticket-card__still" role="img" aria-label={frameLabel ?? screening.title}>
            <span>{screening.title}</span>
          </div>
          <div>
            <p>{screening.director}</p>
            <h3>{screening.title}</h3>
          </div>
          <Button href="/funciones" variant="primary" accent={screening.accent}>
            Reservar
          </Button>
        </div>
      </div>

      <div className="ticket-card__genres" aria-label="Generos">
        {screening.tags.map((tag) => (
          <Badge key={tag} accent={screening.accent}>
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}

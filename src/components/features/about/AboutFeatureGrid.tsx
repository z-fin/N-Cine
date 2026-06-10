import { Card } from '../../common/Card';
import './about.css';

const features = [
  {
    title: 'Sala',
    body: 'Funciones con cupos cuidados, feriantes y trivias.',
    accent: 'red' as const,
  },
  {
    title: 'Archivo',
    body: 'Flyers de cada encuentro disponibles para circular.',
    accent: 'yellow' as const,
  },
  {
    title: 'Red',
    body: 'Alianzas con espacios culturales y artistas de la escena local.',
    accent: 'green' as const,
  },
];

export function AboutFeatureGrid() {
  return (
    <div className="grid grid--3">
      {features.map((feature) => (
        <Card key={feature.title} accent={feature.accent} className="about-feature">
          <h3>{feature.title}</h3>
          <p>{feature.body}</p>
        </Card>
      ))}
    </div>
  );
}

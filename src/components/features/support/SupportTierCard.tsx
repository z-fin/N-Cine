import { Button } from '../../common/Button';
import { Card } from '../../common/Card';
import type { SupportTier } from '../../../types/content';
import './support.css';

interface SupportTierCardProps {
  tier: SupportTier;
}

export function SupportTierCard({ tier }: SupportTierCardProps) {
  return (
    <Card accent={tier.accent} className="support-tier">
      <p className="support-tier__label">{tier.name}</p>
      <h3>{tier.amount}</h3>
      <p>{tier.description}</p>
      <ul>
        {tier.perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>
      <Button href={tier.donationUrl} target="_blank" rel="noreferrer" variant="primary" accent={tier.accent}>
        Cafecito
      </Button>
    </Card>
  );
}

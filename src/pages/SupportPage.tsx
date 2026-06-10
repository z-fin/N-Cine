import { AccentRule } from '../components/common/AccentRule';
import { Button } from '../components/common/Button';
import { SupportTierCard } from '../components/features/support/SupportTierCard';
import { supportTiers } from '../data/siteData';
import './pages.css';

export default function SupportPage() {
  return (
    <>
      <section className="page-section page-section--ink">
        <div className="container support-hero">
          <div>
            <span className="section-kicker">Apoyar</span>
            <h1 className="section-heading">Sostener una butaca tambien sostiene una red.</h1>
          </div>
          <div className="support-hero__panel">
            <AccentRule />
            <p>
              Los aportes nos permiten cubrir organización, traslado y materiales de sala.
            </p>
            <Button href="" accent="yellow">
              Cafecito
            </Button>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid grid--3">
            {supportTiers.map((tier) => (
              <SupportTierCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

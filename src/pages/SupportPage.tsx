import { AccentRule } from '../components/common/AccentRule';
import { ErrorState, LoadingState } from '../components/common/AsyncState';
import { Button } from '../components/common/Button';
import { SupportTierCard } from '../components/features/support/SupportTierCard';
import { useAsyncData } from '../hooks/useAsyncData';
import { getSupportTiers } from '../services/api';
import { toSupportTier } from '../utils/apiAdapters';
import '../styles/pages.css';
import { MovieStillsCarousel } from '../components/common/MovieStillsCarousel';

export default function SupportPage() {
  const {
    data: supportTierData,
    error,
    isLoading,
  } = useAsyncData(getSupportTiers, 'No pudimos cargar las opciones de apoyo.');
  const supportTiers = (supportTierData ?? []).map(toSupportTier);
  const primaryDonationUrl = supportTiers[0]?.donationUrl ?? 'https://cafecito.app/nuestrociclo';

  return (
    <>
      <section className="page-section page-section--ink">
        <div className="container support-hero">
          <div>
            {/* <span className="section-kicker">Apoyar</span> */}
            <h1 className="section-heading">Sostener una butaca tambien sostiene una red.</h1>
          </div>
          <div className="support-hero__panel">
            <AccentRule />
            <p>Los aportes nos permiten cubrir organizacion, traslado y materiales de sala.</p>
            <Button href={primaryDonationUrl} target="_blank" rel="noreferrer" accent="yellow">
              Cafecito
            </Button>
          </div>
        </div>
      </section>

      <MovieStillsCarousel />

      <section className="page-section">
        <div className="container">
          {isLoading && <LoadingState label="Cargando formas de apoyo" variant="grid" />}
          {error && <ErrorState message={error} />}
          {!isLoading && !error && (
            <div className="grid grid--3">
              {supportTiers.map((tier) => (
                <SupportTierCard key={tier.id} tier={tier} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

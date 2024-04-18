import { Trans, useTranslation } from 'react-i18next';
import './LeadGeneration.css';
import LEAD_GENERATION from 'assets/images/funnel.png';

export default function LeadGeneration() {
  const { t } = useTranslation();

  const cards = [1, 2, 3, 4] as const;

  return (
    <section className="im-lead-generation">
      <div className="im-lead-generation-left">
        <img src={LEAD_GENERATION} alt="funnel" />
      </div>
      <div className="im-lead-generation-right">
        <h2 id="im-better-data">{t('Pages.Home.LeadGeneration.Title')}</h2>
        <article className="im-lead-generation-messages">
          <p>{t('Pages.Home.LeadGeneration.Message1')}</p>
          <p>
            <Trans
              i18nKey="Pages.Home.LeadGeneration.Message2"
              components={{ 1: <span className="im-underlined">{t('Pages.Home.LeadGeneration.Message2Underlined')}</span> }}
            />
          </p>
        </article>
        <div className="im-lead-generation-cards-container">
          {cards.map((item) => (
            <div key={item} className="im-lead-generation-card">
              <h4>{t(`Pages.Home.LeadGeneration.List.ItemTitle${item}`)}</h4>
              <p>{t(`Pages.Home.LeadGeneration.List.Item${item}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from 'components';
import './Presentation.css';
import { Trans, useTranslation } from 'react-i18next';

export default function Presentation() {
  const { t } = useTranslation();

  return (
    <section className="im-presentation">
      <div className="im-presentation-left">
        <h2 className="im-title">
          <Trans i18nKey="Pages.Home.Presentation.BetterLead" components={{ 1: <br /> }} />
        </h2>
        <h3 className="im-second-title">{t('Pages.Home.Presentation.AmericasFirst')}</h3>
        <p className="im-message">{t('Pages.Home.Presentation.DoneForYou')}</p>
        <p className="im-description">{t('Pages.Home.Presentation.Description')}</p>
        <Button variant="error" icon="info" text={t('Common.LearnMore')} />
      </div>
      <div className="im-presentation-right"> </div>
    </section>
  );
}

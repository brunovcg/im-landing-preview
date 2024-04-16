import { useTranslation } from 'react-i18next';
import './GestStarted.css';
import { Button } from 'components';

export default function GetStarted() {
  const { t } = useTranslation();

  const cards = [1, 2, 3, 4] as const;

  return (
    <section className="im-get-started">
      <h2>{t('Pages.Home.GetStarted.Title')}</h2>

      <div className="im-get-started-content">
        {cards.map((item) => (
          <div key={item} className="im-get-started-card">
            <div className="im-get-started-card-header">
              <div className="im-get-started-card-order">{item}</div>
              <h3 className="im-get-started-card-title">{t(`Pages.Home.GetStarted.Cards.StepTitle${item}`)}</h3>
            </div>
            <p className="im-get-started-card-text">{t(`Pages.Home.GetStarted.Cards.Step${item}`)}</p>
          </div>
        ))}
      </div>
      <Button text={t('Common.ApplyHere')} variant="error" icon="apply" />
    </section>
  );
}

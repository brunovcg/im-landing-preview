import { useTranslation } from 'react-i18next';
import './Community.css';
import NETWORKING from 'assets/images/networking.png';
import RED_GEAR from 'assets/images/red_gear.png';
import { Button } from 'components';
import { useNavigator } from 'hooks';

export default function Community() {
  const { t } = useTranslation();
  const { navigateTo } = useNavigator();

  const listItems = [1, 2, 3, 4] as const;

  return (
    <section className="im-community">
      <div className="im-community-left">
        <h2>{t('Pages.Home.Community.Title')}</h2>
        <p className="im-community-description">{t('Pages.Home.Community.Description')}</p>
        <ul>
          {listItems.map((item) => (
            <li key={item} className="im-community-list-item">
              <img src={RED_GEAR} alt="red_gear" />
              <p>{t(`Pages.Home.Community.List.Item${item}`)}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="im-community-right">
        <figure>
          <img src={NETWORKING} alt="network" />
        </figure>
        <div className="im-community-right-bottom">
          <div className="im-community-professional-only">
            <h3>{t('Pages.Home.Community.ProfessionalOnly')}</h3>
            <p>{t('Pages.Home.Community.ProfessionalOnlyText')}</p>
          </div>
          <div className="im-community-apply">
            <h3>{t('Pages.Home.Community.ApplyMessage')}</h3>
            <Button text={t('Common.ApplyHere')} variant="error" icon="apply" onClick={navigateTo('apply')} />
          </div>
        </div>
      </div>
    </section>
  );
}

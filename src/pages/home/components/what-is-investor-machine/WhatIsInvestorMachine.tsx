import { useTranslation } from 'react-i18next';
import './WhatIsInvestorMachine.css';
import { Button, Icon } from 'components';

export default function WhatIsInvestorMachine() {
  const { t } = useTranslation();

  const isList = [1, 2, 3] as const;
  const goals = [1, 2] as const;

  return (
    <section id="im-what-is-investor-machine" className="im-what-is-investor-machine">
      <div className="im-what-is-investor-machine-left">
        <h2 className="im-is-title">{t('Pages.Home.WhatIsInvestorMachine.TitleIs')}</h2>
        <div className="im-what-is-investor-machine-cards">
          {isList.map((item) => (
            <p className="im-is-investor-machine-card" key={item}>
              <Icon icon="check" variant="valid" weight="fill" />
              {t(`Pages.Home.WhatIsInvestorMachine.IsList${item}`)}
            </p>
          ))}
        </div>
        <h2 className="im-not-title">{t('Pages.Home.WhatIsInvestorMachine.TitleNot')}</h2>
        <div className="im-what-is-investor-machine-cards">
          {isList.map((item) => (
            <p className="im-not-investor-machine-card" key={item}>
              <Icon icon="close" variant="error" weight="fill" /> {t(`Pages.Home.WhatIsInvestorMachine.IsNotList${item}`)}
            </p>
          ))}
        </div>
      </div>

      <div className="im-what-is-investor-machine-right">
        <p className="im-secret-weapon">{t('Pages.Home.WhatIsInvestorMachine.SecretWeapon')}</p>
        <div className="im-goals">
          <h3 className="im-goals-title">{t('Pages.Home.WhatIsInvestorMachine.Goal')}</h3>
          <span className="im-curly-bracket">{'{'}</span>
          <ul>
            {goals.map((item) => (
              <li key={item}>
                <Icon icon="apply" size={4} variant="primary" />
                {t(`Pages.Home.WhatIsInvestorMachine.GoalList.Goal${item}`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="im-availability">
          <h3 className="im-availability-title">{t('Pages.Home.WhatIsInvestorMachine.AvailabilityTitle')}</h3>
          <p className="im-availability-text">{t('Pages.Home.WhatIsInvestorMachine.Availability')}</p>
          <Button icon="info" text={t('Common.LearnMore')} variant="error" />
        </div>
      </div>
    </section>
  );
}

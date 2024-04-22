import { Button, VideoVimeo } from 'components';
import './Presentation.css';
import { Trans, useTranslation } from 'react-i18next';
import Configs from 'configs/Configs';
import { useNavigator } from 'hooks';

const { preview } = Configs.DEMO_VIDEOS;

export default function Presentation() {
  const { t } = useTranslation();
  const { navigateTo } = useNavigator();

  return (
    <section className="im-presentation">
      <div className="im-presentation-left">
        <h2 className="im-title">
          <Trans i18nKey="Pages.Home.Presentation.BetterLead" components={{ 1: <br /> }} />
        </h2>
        <h3 className="im-second-title">{t('Pages.Home.Presentation.AmericasFirst')}</h3>
        <p className="im-message">{t('Pages.Home.Presentation.DoneForYou')}</p>

        <div className="im-title-investor-machine">
          <h1>{t('Common.InvestorMachine')}</h1>
        </div>
        <p className="im-description">{t('Pages.Home.Presentation.Description')}</p>
        <Button variant="error" icon="apply" text={t('Common.ApplyHere')} onClick={navigateTo('apply')} />
      </div>
      <div className="im-presentation-right">
        <VideoVimeo id={preview.id} thumbnail={''} autoplay={false} muted={false} />
      </div>
    </section>
  );
}

import { Button, VideoVimeo } from 'components';
import Configs from 'configs/Configs';
import { Page } from 'layouts';
import './Apply.css';
import { ButtonProps } from 'components/button/Button.types';
import { useTranslation } from 'react-i18next';
import { useNavigator } from 'hooks';

const { DEMO_VIDEOS, EXTERNAL_LINKS } = Configs;

export default function Apply() {
  const { t } = useTranslation();
  const { navigateTo } = useNavigator();

  const applyButton: ButtonProps = { text: t('Common.Back'), icon: 'Back', variant: 'error', onClick: navigateTo('home') };

  const navButtons: ButtonProps[] = [applyButton];

  return (
    <Page
      contentClass="im-apply"
      headerProps={{
        nav: navButtons,
        mobile: {
          buttons: <Button {...applyButton} />,
        },
      }}
    >
      <div className="im-full-demo">
        <VideoVimeo id={DEMO_VIDEOS.full.id} />
      </div>
      <article className="im-apply-text">
        <h2>{t('Pages.Apply.Title')}</h2>
        <p className="im-message">{t('Pages.Apply.Message')}</p>
        <p className="im-description">{t('Pages.Apply.NextStep')}</p>
      </article>
      <div className="im-calendar">
        <iframe src={EXTERNAL_LINKS.calendar} title="calendly" className="im-calendly" />
      </div>
    </Page>
  );
}

import './Home.css';
import Footer from 'layouts/footer/Footer';
import FeaturedBy from './components/featured-by/FeaturedBy';
import Presentation from './components/presentation/Presentation';
import FAQ from './components/faq/FAQ';
import WhatIsInvestorMachine from './components/what-is-investor-machine/WhatIsInvestorMachine';
import Testimonials from './components/testimonials/Testimonials';
import Community from './components/community/Community';
import GetStarted from './components/get-started/GetStarted';
import LeadGeneration from './components/lead-generation/LeadGeneration';
import { Page } from 'layouts';
import { DropdownOptions } from 'components/dropdown-menu/DropdownMenu.types';
import { Button } from 'components';
import { useTranslation } from 'react-i18next';
import { ButtonProps } from 'components/button/Button.types';
import Configs from 'configs/Configs';
import { useNavigator } from 'hooks';

const { EXTERNAL_LINKS } = Configs;

export default function Home() {
  const { t } = useTranslation();
  const { navigateTo } = useNavigator();

  const mobileDropdownOptions: DropdownOptions = [
    {
      text: t('Layouts.Header.BetterData'),
    },
    {
      text: t('Layouts.Header.Testimonials'),
    },
    {
      text: t('Layouts.Header.MemberLogin'),
      icon: 'login',
    },
  ];

  const navMenu: ButtonProps[] = [
    { text: t('Layouts.Header.BetterData'), size: 'small', styling: 'text', href: '#im-better-data' },
    { text: t('Layouts.Header.Testimonials'), size: 'small', styling: 'text', href: '#im-testimonials' },
    { text: t('Layouts.Header.MemberLogin'), size: 'small', icon: 'login', href: EXTERNAL_LINKS.imLogin, styling: 'outlined' },
    { text: t('Common.ApplyHere'), size: 'small', styling: 'regular', variant: 'error', icon: 'check', onClick: navigateTo('apply') },
  ];

  const mobileButtons = <Button text={t('Common.ApplyHere')} size="small" variant="error" icon="apply" onClick={navigateTo('apply')} />;

  return (
    <Page
      contentClass="im-home"
      headerProps={{
        mobile: {
          dropdownMenu: mobileDropdownOptions,
          buttons: mobileButtons,
        },
        nav: navMenu,
      }}
    >
      <Presentation />
      <FeaturedBy />
      <LeadGeneration />
      <Testimonials />
      <Community />
      <GetStarted />
      <WhatIsInvestorMachine />
      <FAQ />
      <Footer />
    </Page>
  );
}

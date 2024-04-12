import LOGO from 'assets/images/logo.png';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { ReactUtils } from 'utils';
import { ButtonProps } from 'components/button/Button.types';
import { Button } from 'components';
import Configs from 'configs/Configs';

const { EXTERNAL_LINKS } = Configs;

export default function Header() {
  const { t } = useTranslation();
  const [isOnTop, setIsOnTop] = useState(true);

  const headerRef = useRef<HTMLHeadElement | null>(null);

  const menu: ButtonProps[] = [
    { text: t('Layouts.Header.BetterData'), size: 4, styling: 'text' },
    { text: t('Layouts.Header.Testimonials'), size: 4, styling: 'text' },
    { text: t('Layouts.Header.MemberLogin'), size: 4, icon: 'login', href: EXTERNAL_LINKS.imLogin, targetBlank: true, styling: 'outlined' },
    { text: t('Common.LearnMore'), size: 4, styling: 'regular', variant: 'error', icon: 'info' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const classes = ReactUtils.conditionalClass({
    ['im-header']: true,
    ['im-scrolled']: !isOnTop,
  });

  return (
    <header className={classes} ref={headerRef}>
      <img src={LOGO} alt="logo-investor-machine" height="40px" className="im-header-logo" />
      <nav className="im-header-nav">
        <ul className="im-header-nav-list">
          {menu.map((item) => (
            <li key={item.text}>
              <Button {...item} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

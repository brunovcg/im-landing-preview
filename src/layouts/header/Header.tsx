/* eslint-disable react-hooks/exhaustive-deps */
import LOGO from 'assets/images/logo.png';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { ReactUtils } from 'utils';
import { ButtonProps } from 'components/button/Button.types';
import { Button, DropdownMenu } from 'components';
import Configs from 'configs/Configs';
import { HeaderProps } from './Header.types';
import { DropdownOptions } from 'components/dropdown-menu/DropdownMenu.types';

const { EXTERNAL_LINKS } = Configs;

export default function Header({ appRef }: Readonly<HeaderProps>) {
  const { t } = useTranslation();
  const [isOnTop, setIsOnTop] = useState(true);

  const headerRef = useRef<HTMLHeadElement | null>(null);

  const menu: ButtonProps[] = [
    { text: t('Layouts.Header.BetterData'), size: 3, styling: 'text' },
    { text: t('Layouts.Header.Testimonials'), size: 3, styling: 'text', href: '#im-testimonials' },
    { text: t('Layouts.Header.MemberLogin'), size: 3, icon: 'login', href: EXTERNAL_LINKS.imLogin, styling: 'outlined' },
    { text: t('Common.LearnMore'), size: 3, styling: 'regular', variant: 'error', icon: 'info' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (appRef.current?.scrollTop) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    appRef.current?.addEventListener('scroll', handleScroll);

    return () => appRef.current?.removeEventListener('scroll', handleScroll);
  }, [appRef]);

  const classes = ReactUtils.conditionalClass({
    ['im-header']: true,
    ['im-scrolled']: !isOnTop,
  });

  const dropdownOptions: DropdownOptions = [
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

  return (
    <header className={classes} ref={headerRef}>
      <img src={LOGO} alt="logo-investor-machine" height="40px" className="im-header-logo" />
      <div className="im-mobile-menu">
        <DropdownMenu options={dropdownOptions} height={130} width={180} position="end" />
        <Button text={t('Common.LearnMore')} size={2} variant="error" icon="info" />
      </div>

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

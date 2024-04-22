import LOGO from 'assets/images/logo.png';
import './Header.css';

import { ReactUtils } from 'utils';
import { Button, DropdownMenu } from 'components';
import { HeaderProps } from './Header.types';
import { useNavigator } from 'hooks';

export default function Header({ mobile, nav, isScrolled }: Readonly<HeaderProps>) {
  const { navigateTo } = useNavigator();

  const classes = ReactUtils.conditionalClass({
    ['im-header']: true,
    ['im-scrolled']: isScrolled,
  });

  return (
    <header className={classes}>
      <button className="im-header-logo" onClick={navigateTo('home')}>
        <img src={LOGO} alt="logo-investor-machine" height="40px" className="im-header-logo" />
      </button>

      <div className="im-mobile-menu">
        {mobile?.dropdownMenu && <DropdownMenu options={mobile.dropdownMenu} height={130} width={180} position="end" />}
        {mobile?.buttons}
      </div>

      {nav && (
        <nav className="im-header-nav">
          <ul className="im-header-nav-list">
            {nav.map((item) => (
              <li key={item.text}>
                <Button {...item} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

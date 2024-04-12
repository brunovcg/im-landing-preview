import LOGO from 'assets/images/logo.png';
import './Header.css';
// import { useTranslation } from 'react-i18next';

export default function Header() {
  // const { t } = useTranslation();

  // const menu = [
  //   { name: t('Layouts.Header.BetterData'), onClick: () => {} },
  //   { name: t('Layouts.Header.Testimonials'), onClick: () => {} },
  //   { name: t('Layouts.Header.MemberLogin'), onClick: () => {} },
  // ];

  return (
    <header className="im-header">
      <img src={LOGO} alt="logo-investor-machine" width="130px" height="30px" className="im-header-logo" />
      {/* <nav className="im-header-nav">
        <ul className="im-header-nav-list">
          {menu.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </nav> */}
    </header>
  );
}

import { useTranslation } from 'react-i18next';
import './SecretWeapon.css';

export default function SecretWeapon() {
  const { t } = useTranslation();
  return (
    <section className="im-secret-weapon">
      <h2>{t('Pages.Home.SecretWeapon.Title')}</h2>
    </section>
  );
}

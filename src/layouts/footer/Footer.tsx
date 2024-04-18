import { Button } from 'components';
import './Footer.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="im-footer">
      <p className="im-footer-line">{t('Layouts.Footer.Line1')}</p>
      <p className="im-footer-line">{t('Layouts.Footer.Line2')}</p>
      <Button text={t('Layouts.Footer.TermsAndConditions')} size="small" styling="text" />
    </footer>
  );
}

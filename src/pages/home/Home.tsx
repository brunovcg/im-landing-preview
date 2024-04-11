import Box from 'components/box/Box';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="im-home">
      <Box>Investor Machine {t('Pages.Home.Language')}</Box>
    </div>
  );
}

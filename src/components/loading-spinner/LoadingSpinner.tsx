import { useTranslation } from 'react-i18next';
import { LoadingSpinnerProps } from './LoadingSpinner.types';
import { ReactUtils } from 'utils';
import GEAR from '../../assets/images/red_gear.png';
import './LoadingSpinner.css';

export default function LoadingSpinner({
  showLoadingMessage = true,
  direction = 'column',
  className,
  condition,
  ...rest
}: Readonly<LoadingSpinnerProps>) {
  const { t } = useTranslation();

  const classes = ReactUtils.conditionalClass({
    ['im-loading-spinner']: true,
    ['im-row']: direction === 'row',
    ['im-column']: direction === 'column',
    [className as string]: !!className,
  });

  if (condition === false) {
    return null;
  }

  return (
    <div className={classes} data-testid="im-loading-spinner" {...rest}>
      <img src={GEAR} alt="loading-gear" className="im-loading-spinner-gear" />
      {showLoadingMessage && <div className="im-loading-spinner-message">{t('Common.Loading')}</div>}
    </div>
  );
}

import { Icon } from 'components';
import { ButtonIconProps } from './ButtonIcon.types';
import './ButtonIcon.css';
import { MouseEvent } from 'react';
import { ReactUtils } from 'utils';

export default function ButtonIcon({
  icon,
  weight,
  size,
  mirrored,
  variant,
  onClick,
  className,
  applyBorder,
  stopPropagation,
  preventDefault,
  ...rest
}: Readonly<ButtonIconProps>) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (preventDefault) {
      e.preventDefault();
    }
    if (stopPropagation) {
      e.stopPropagation();
    }

    onClick?.(e);
  };

  const classes = ReactUtils.conditionalClass({ ['im-button-icon']: true, [`${className}`]: !!className });

  return (
    <button className={classes} type="button" {...rest} style={{ border: applyBorder ? `1px solid var(--${variant}-color)` : undefined }}>
      <Icon icon={icon} size={size} weight={weight} mirrored={mirrored} variant={variant} onClick={handleClick} />
    </button>
  );
}

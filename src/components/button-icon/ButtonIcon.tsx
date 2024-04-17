import { Icon } from 'components';
import { ButtonIconProps } from './ButtonIcon.types';
import './ButtonIcon.css';
import { MouseEvent } from 'react';

export default function ButtonIcon({
  icon,
  weight,
  size,
  mirrored,
  variant,
  onClick,
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

  return (
    <button
      className="im-button-icon"
      type="button"
      {...rest}
      style={{ border: applyBorder ? `1px solid var(--${variant}-color)` : undefined }}
    >
      <Icon icon={icon} size={size} weight={weight} mirrored={mirrored} variant={variant} onClick={handleClick} />
    </button>
  );
}

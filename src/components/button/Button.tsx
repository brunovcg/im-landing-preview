import { ReactUtils } from 'utils';
import './Button.css';
import { ButtonProps } from './Button.types';
import { MouseEvent } from 'react';
import Icon from 'components/icon/Icon';

export default function Button({
  text,
  type = 'button',
  size = 'regular',
  onClick,
  href,
  targetBlank,
  stopPropagation,
  icon,
  styling = 'regular',
  variant = 'primary',
  preventDefault,
  ...rest
}: Readonly<ButtonProps>) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (stopPropagation) {
      e.stopPropagation();
    }

    if (preventDefault) {
      e.preventDefault();
    }

    onClick?.(e);
  };

  const classes = ReactUtils.conditionalClass({ ['im-button']: true, [`im-${styling}`]: true, [`im-${variant}`]: true });

  const anchorProps = targetBlank ? { target: '_blank', rel: 'noreferrer', href } : { href };

  const handleButtonStyled = () => {
    if (styling === 'text') {
      return { color: `var(--${variant}-color)`, background: 'var(--transparent)', border: '1px solid var(--transparent)' };
    } else if (styling === 'regular') {
      return { color: 'var(--white-color)', background: `var(--${variant}-color)`, border: `1px solid var(--${variant}-color)` };
    }

    return { color: `var(--${variant}-color)`, background: 'var(--transparent)', border: `1px solid var(--${variant}-color)` };
  };

  return (
    <button
      className={classes}
      type={type}
      onClick={handleClick}
      style={{ fontSize: `var(--font-size-${size})`, ...handleButtonStyled() }}
      {...rest}
    >
      {icon && <Icon icon={icon} variant={styling === 'regular' ? 'white' : variant} size={size} weight="bold" />}
      {href && (
        <a {...anchorProps} style={{ color: handleButtonStyled().color }}>
          {text}
        </a>
      )}
      {!href && text}
    </button>
  );
}

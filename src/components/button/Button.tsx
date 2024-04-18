import { ReactUtils } from 'utils';
import './Button.css';
import { ButtonProps } from './Button.types';
import { MouseEvent, useState } from 'react';
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
  const [hovered, setHovered] = useState(false);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (stopPropagation) {
      e.stopPropagation();
    }

    if (preventDefault) {
      e.preventDefault();
    }

    onClick?.(e);
  };

  const handleFocus = (newState: boolean) => setHovered(newState);

  const classes = ReactUtils.conditionalClass({ ['im-button']: true, [`im-${styling}`]: true, [`im-${variant}`]: true });

  const anchorProps = targetBlank ? { target: '_blank', rel: 'noreferrer', href } : { href };

  const outlined = !hovered && styling === 'outlined';
  const outlinedHovered = hovered && styling === 'outlined';
  const regular = !hovered && styling === 'regular';
  const regularHovered = hovered && styling === 'regular';

  const handleButtonStyled = () => {
    if (outlined || regularHovered) {
      return { color: `var(--${variant}-color)`, background: 'var(--white-color)', border: `1px solid var(--${variant}-color)` };
    } else if (regular || outlinedHovered) {
      return { color: 'var(--white-color)', background: `var(--${variant}-color)`, border: `1px solid var(--${variant}-color)` };
    }

    return {
      color: `var(--${variant}-color)`,
      background: 'var(--transparent)',
      borderInline: '1px solid var(--transparent)',
      borderTop: '1px solid var(--transparent)',
      borderBottom: `2px solid var(--${!hovered ? 'transparent' : variant + '-color'})`,
      borderRadius: '0',
    };
  };

  const handleIconStyle = () => {
    if (styling === 'text') {
      return variant;
    }

    if (regular || outlinedHovered) {
      return 'white';
    }

    return variant;
  };

  return (
    <button
      onMouseOver={() => handleFocus(true)}
      data-styling={styling}
      onFocus={() => handleFocus(true)}
      onMouseLeave={() => handleFocus(false)}
      className={classes}
      type={type}
      onClick={handleClick}
      style={{ fontSize: `var(--font-size-${size})`, ...handleButtonStyled() }}
      {...rest}
    >
      {icon && <Icon icon={icon} variant={handleIconStyle()} size={size} weight="bold" />}
      {href && (
        <a {...anchorProps} style={{ color: handleButtonStyled().color }}>
          {text}
        </a>
      )}
      {!href && text}
    </button>
  );
}

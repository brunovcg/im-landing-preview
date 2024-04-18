import { IconProps } from './Icon.types';
import { iconsMapping } from './IconsMapping';
import Wrapper from '../wrapper/Wrapper';
import { ReactUtils } from 'utils';
import './Icon.css';
import { FontSize } from 'GlobalTypes';

export default function Icon({ icon, size = 'small', variant, className = '', mirrored, hide, weight = 'regular', ...rest }: IconProps) {
  const iconWrapperClasses = ReactUtils.conditionalClass({
    ['im-icon']: true,
    [`im-icon-${icon}`]: true,
    ['im-hide']: !!hide,
    [`${className}`]: !!className,
  });

  const sizeMap: Record<FontSize, number> = {
    tiny: 14,
    small: 18,
    regular: 20,
    large: 24,
    huge: 40,
    enormous: 50,
  };

  const props = {
    weight,
    size: sizeMap[`${size}`],
    mirrored,
    color: variant ? `var(--${variant}-color)` : undefined,
  };

  return (
    <span className={iconWrapperClasses} {...rest}>
      <Wrapper component={iconsMapping[`${icon}`]} props={props} />
    </span>
  );
}

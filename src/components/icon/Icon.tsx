import { IconProps, IconSize } from './Icon.types';
import { iconsMapping } from './IconsMapping';
import Wrapper from '../wrapper/Wrapper';
import { ReactUtils } from 'utils';
import './Icon.css';

export default function Icon({ icon, size = 'small', variant, className = '', mirrored, hide, weight = 'regular', ...rest }: IconProps) {
  const iconWrapperClasses = ReactUtils.conditionalClass({
    ['im-icon']: true,
    [`im-icon-${icon}`]: true,
    ['im-hide']: !!hide,
    [`${className}`]: !!className,
  });

  const sizes = {
    tiny: '15px',
    small: '20px',
    regular: '22px',
    large: '30px',
    huge: '50px',
  };

  const props = {
    weight,
    size: sizes[size as keyof typeof sizes] as IconSize,
    mirrored,
    color: variant ? `var(${variant})` : undefined,
  };

  return (
    <span className={iconWrapperClasses} {...rest}>
      <Wrapper component={iconsMapping[`${icon}`]} props={props} />
    </span>
  );
}

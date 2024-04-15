import { IconProps } from './Icon.types';
import { iconsMapping } from './IconsMapping';
import Wrapper from '../wrapper/Wrapper';
import { ReactUtils } from 'utils';
import './Icon.css';

export default function Icon({ icon, size = 10, variant, className = '', mirrored, hide, weight = 'regular', ...rest }: IconProps) {
  const iconWrapperClasses = ReactUtils.conditionalClass({
    ['im-icon']: true,
    [`im-icon-${icon}`]: true,
    ['im-hide']: !!hide,
    [`${className}`]: !!className,
  });

  const props = {
    weight,
    size: 9 + 3 * (size - 1),
    mirrored,
    color: variant ? `var(--${variant}-color)` : undefined,
  };

  return (
    <span className={iconWrapperClasses} {...rest}>
      <Wrapper component={iconsMapping[`${icon}`]} props={props} />
    </span>
  );
}

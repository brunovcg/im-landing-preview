import { Icon } from 'components';
import { ButtonIconProps } from './ButtonIcon.types';
import './ButtonIcon.css';

export default function ButtonIcon({ icon, weight, size, mirrored, variant, ...rest }: Readonly<ButtonIconProps>) {
  return (
    <button className="im-button-icon" type="button" {...rest}>
      <Icon icon={icon} size={size} weight={weight} mirrored={mirrored} variant={variant} />
    </button>
  );
}

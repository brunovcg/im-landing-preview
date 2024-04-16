import { ColorsVariant, FontSize } from 'GlobalTypes';
import { IconName, IconWeight } from 'components/icon/Icon.types';
import { HTMLProps } from 'react';

export type ButtonIconProps = Omit<HTMLProps<HTMLButtonElement>, 'type'> & {
  icon: IconName;
  variant?: ColorsVariant;
  weight?: IconWeight;
  mirrored?: boolean;
  size?: FontSize;
};

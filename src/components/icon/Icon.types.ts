import { ColorsVariant, FontSize } from 'GlobalTypes';
import { iconsMapping } from './IconsMapping';
import { HTMLProps } from 'react';

export type IconName = keyof typeof iconsMapping;

export const iconWeight = ['duotone', 'regular', 'bold', 'thin', 'fill'] as const;

export type IconWeight = (typeof iconWeight)[number];

export type IconProps = {
  icon: IconName;
  variant?: ColorsVariant;
  className?: string;
  size?: FontSize;
  weight?: IconWeight;
  mirrored?: boolean;
  title?: string;
  hide?: boolean;
  margin?: string;
  dataTestId?: string;
  disabled?: boolean;
} & Omit<HTMLProps<HTMLSpanElement>, 'size'>;

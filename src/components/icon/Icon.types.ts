import { ColorsVariant } from 'GlobalTypes';
import { iconsMapping } from './IconsMapping';
import { HTMLProps } from 'react';

export const iconSizes = ['tiny', 'small', 'regular', 'large', 'huge'] as const;

export type IconSize = (typeof iconSizes)[number] | undefined;

export type IconName = keyof typeof iconsMapping;

export const iconWeight = ['duotone', 'regular', 'bold', 'thin', 'fill'] as const;

export type IconWeight = (typeof iconWeight)[number];

type ConditionalStyledIconProps = { size?: IconSize; customSize?: never } | { size?: never; customSize?: string };

export type IconProps = ConditionalStyledIconProps & {
  icon: IconName;
  variant?: ColorsVariant;
  className?: string;
  notifications?: number;
  weight?: IconWeight;
  mirrored?: boolean;
  title?: string;
  hide?: boolean;
  margin?: string;
  hoverColor?: ColorsVariant;
  dataTestId?: string;
  disabled?: boolean;
  error?: boolean;
} & Omit<HTMLProps<HTMLSpanElement>, 'size'>;

import { ColorsVariant, FontSize } from 'GlobalTypes';
import { IconName } from 'components/icon/Icon.types';
import { HTMLProps } from 'react';

type CustomProps =
  | {
      href?: string;
      targetBlank?: boolean;
    }
  | {
      href?: never;
      targetBlank?: never;
    };

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'size'> &
  CustomProps & {
    text: string;
    type?: 'button' | 'submit';
    variant?: ColorsVariant;
    icon?: IconName;
    styling?: 'text' | 'outlined' | 'regular';
    preventDefault?: boolean;
    stopPropagation?: boolean;
    size?: FontSize;
  };

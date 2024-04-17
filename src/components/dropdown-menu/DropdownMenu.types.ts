import { IconName } from '../icon/Icon.types';
import { ColorsVariant } from 'GlobalTypes';

export type DropdownHoverColor = 'error-light' | 'primary-light' | 'valid-light';

export type DropdownOptions = {
  text: string;
  icon?: IconName;
  onClick?: () => void;
  disabled?: boolean;
  hide?: boolean;
  dataTestId?: string;
  textVariant?: ColorsVariant;
  selected?: boolean;
  title?: string;
}[];

export type DropdownMenuProps = {
  options: DropdownOptions;
  closeOnClickOutside?: boolean;
  closeOnSelect?: boolean;
  icon?: IconName;
  title?: string;
  disabled?: boolean;
  width: number;
  height?: number;
  position?: 'center' | 'start' | 'end';
};

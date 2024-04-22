import { ButtonProps } from 'components/button/Button.types';
import { DropdownOptions } from 'components/dropdown-menu/DropdownMenu.types';
import { ReactNode } from 'react';

export type HeaderProps = {
  isScrolled: boolean;
  mobile?: {
    dropdownMenu?: DropdownOptions;
    buttons?: ReactNode;
  };
  nav?: ButtonProps[];
};

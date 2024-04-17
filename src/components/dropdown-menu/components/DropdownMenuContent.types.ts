import { CSSProperties, Dispatch, SetStateAction } from 'react';
import { DropdownOptions } from '../DropdownMenu.types';

export type DropdownMenuContentProps = {
  title?: string;
  options: DropdownOptions;
  displayMenu: boolean;
  setPopperElement: Dispatch<SetStateAction<null>>;
  styles: {
    [key: string]: CSSProperties;
  };
  width?: number;
  attributes: {
    [key: string]:
      | {
          [key: string]: string;
        }
      | undefined;
  };
  height?: number;
  closeOnSelect: boolean;
  setDisplayMenu: Dispatch<SetStateAction<boolean>>;
};

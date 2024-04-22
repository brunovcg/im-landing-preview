import { HeaderProps } from 'layouts/header/Header.types';
import { ReactNode } from 'react';

export type PageProps = {
  contentClass: string;
  headerProps?: Omit<HeaderProps, 'isScrolled'>;
  children: ReactNode;
  footer?: ReactNode;
};

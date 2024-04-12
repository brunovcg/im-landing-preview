import { HTMLProps, ReactNode } from 'react';

export type BoxProps = {
  children: ReactNode;
} & HTMLProps<HTMLDivElement>;

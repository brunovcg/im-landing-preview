import { HTMLProps } from 'react';

export type LoadingSpinnerProps = {
  showLoadingMessage?: boolean;
  className?: string;
  condition?: boolean;
  direction?: 'row' | 'column';
} & HTMLProps<HTMLDivElement>;

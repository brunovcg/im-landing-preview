import { BoxProps } from './Box.types';

export default function Box({ children }: Readonly<BoxProps>) {
  return <div>{children}</div>;
}

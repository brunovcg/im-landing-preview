import { BoxProps } from './Box.types';
import './Box.css';

export default function Box({ children, ...rest }: Readonly<BoxProps>) {
  return (
    <div className="im-box" {...rest}>
      {children}
    </div>
  );
}

export type PopperSide = 'top' | 'right' | 'bottom' | 'left';

export type UsePositionProps = {
  side?: PopperSide;
  position?: 'absolute' | 'fixed';
  distance?: number;
  skidding?: number;
};


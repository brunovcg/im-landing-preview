import { Warning, Info, SignIn, Play, ArrowCircleLeft, ArrowCircleRight, DotOutline, CheckFat } from '@phosphor-icons/react';

export const iconsMapping = {
  apply: CheckFat,
  arrowLeft: ArrowCircleLeft,
  arrowRight: ArrowCircleRight,
  dot: DotOutline,
  info: Info,
  login: SignIn,
  play: Play,
  warning: Warning,
} as const;

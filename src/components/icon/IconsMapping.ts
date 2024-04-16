import { Warning, Info, SignIn, Play, ArrowCircleLeft, ArrowCircleRight, DotOutline } from '@phosphor-icons/react';

export const iconsMapping = {
  arrowLeft: ArrowCircleLeft,
  arrowRight: ArrowCircleRight,
  dot: DotOutline,
  info: Info,
  login: SignIn,
  play: Play,
  warning: Warning,
} as const;

import {
  Warning,
  Info,
  SignIn,
  Play,
  ArrowCircleLeft,
  ArrowCircleRight,
  DotOutline,
  CheckFat,
  List,
  X,
  CheckCircle,
} from '@phosphor-icons/react';

export const iconsMapping = {
  apply: CheckFat,
  arrowLeft: ArrowCircleLeft,
  arrowRight: ArrowCircleRight,
  check: CheckCircle,
  close: X,
  dot: DotOutline,
  info: Info,
  login: SignIn,
  menu: List,
  play: Play,
  warning: Warning,
} as const;

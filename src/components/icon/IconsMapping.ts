import {
  Warning,
  SignIn,
  Play,
  ArrowCircleLeft,
  ArrowCircleRight,
  DotOutline,
  CheckFat,
  List,
  X,
  CheckCircle,
  ArrowUDownLeft,
} from '@phosphor-icons/react';

export const iconsMapping = {
  apply: CheckFat,
  arrowLeft: ArrowCircleLeft,
  arrowRight: ArrowCircleRight,
  Back: ArrowUDownLeft,
  check: CheckCircle,
  close: X,
  dot: DotOutline,
  login: SignIn,
  menu: List,
  play: Play,
  warning: Warning,
} as const;

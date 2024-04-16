import { RefObject } from 'react';

export type OutsideClickEvent = MouseEvent | TouchEvent;

export type TargetElementRefs<GenericDivElement, GenericButtonElement> =
  | RefObject<GenericDivElement | GenericButtonElement>
  | RefObject<GenericDivElement | GenericButtonElement>[];

export type OutsideClickHandler = (event: OutsideClickEvent) => void;

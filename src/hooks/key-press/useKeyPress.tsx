/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, KeyboardEvent } from 'react';
import { UseOnKeyPressProps } from './useKeyPress.types';
import { useIsKeyHold } from 'hooks';
import { EventKey } from 'GlobalTypes';

const preventBehavior = (event: KeyboardEvent, stopPropagation: boolean, preventDefault: boolean) => {
  if (stopPropagation) {
    event.stopPropagation();
  }
  if (preventDefault) {
    event.preventDefault();
  }
};

export default function useOnKeyPress({
  keys,
  target,
  callback,
  hold,
  ignoreHold,
  enabled = true,
  stopPropagation = false,
  preventDefault = false,
  type = 'keydown',
}: UseOnKeyPressProps) {
  const isHolding = useIsKeyHold(hold ?? ignoreHold);

  const keydownEvent = (event: KeyboardEvent) => {
    if (keys.includes(event.key as EventKey) && enabled) {
      preventBehavior(event, stopPropagation, preventDefault);

      if (hold && isHolding) {
        callback?.(event);
      }
      if (!hold && !isHolding) {
        callback?.(event);
      }
    }
  };

  useEffect(() => {
    if (target) {
      target.current?.addEventListener(type, keydownEvent as unknown as EventListenerOrEventListenerObject);
    } else {
      document.addEventListener(type, keydownEvent as unknown as EventListenerOrEventListenerObject);
    }

    return () => {
      if (target) {
        target.current?.removeEventListener(type, keydownEvent as unknown as EventListenerOrEventListenerObject);
      } else {
        document.removeEventListener(type, keydownEvent as unknown as EventListenerOrEventListenerObject);
      }
    };
  }, [enabled, target, type]);
}

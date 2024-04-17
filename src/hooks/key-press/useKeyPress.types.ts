import { MutableRefObject, KeyboardEvent } from 'react';
import { EventKey } from 'GlobalTypes';

export type HoldActions =
  | {
      hold?: EventKey;
      ignoreHold?: never;
    }
  | {
      hold?: never;
      ignoreHold?: EventKey;
    };

export type UseOnKeyPressProps = HoldActions & {
  keys: EventKey[];
  callback: (e?: KeyboardEvent) => void;
  enabled?: boolean;
  stopPropagation?: boolean;
  preventDefault?: boolean;
  target?: MutableRefObject<Element | null> | null;
  type?: 'keydown' | 'keyup';
};

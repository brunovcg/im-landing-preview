import { useEffect } from 'react';
import { OutsideClickEvent, OutsideClickHandler, TargetElementRefs } from './useOutsideClick.types';

const useOnClickOutside = <GenericDivElement extends HTMLDivElement, GenericButtonElement extends HTMLButtonElement>(
  ref: TargetElementRefs<GenericDivElement, GenericButtonElement>,
  handler: OutsideClickHandler,
  active = true
) => {
  useEffect(() => {
    if (active) {
      const listener = (event: OutsideClickEvent) => {
        const node = event?.target as Node;
        if (Array.isArray(ref)) {
          const elements = ref.map((element) => element.current);

          if (!elements.some((element) => element?.contains(node))) {
            handler(event);
          }
        } else {
          const element = ref?.current;

          if (!element?.contains(node)) {
            handler(event);
          }
        }
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }
  }, [ref, handler, active]);
};

export default useOnClickOutside;

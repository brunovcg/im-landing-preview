import { EventKey } from 'GlobalTypes';
import { useEffect, useState } from 'react';

export default function useIsHoldingKey(key?: EventKey) {
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    if (key) {
      const keydownEvent = (e: KeyboardEvent) => {
        if (e.key === key) {
          setIsHolding(true);
        }
      };

      const keyupEvent = (e: KeyboardEvent) => {
        if (e.key === key) {
          setIsHolding(false);
        }
      };

      document.addEventListener('keydown', keydownEvent);
      document.addEventListener('keyup', keyupEvent);

      return () => {
        document.addEventListener('keydown', keydownEvent);
        document.addEventListener('keyup', keyupEvent);
      };
    }
  }, [key]);

  return isHolding;
}


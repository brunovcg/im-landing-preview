import { useLayoutEffect, useRef, useState } from 'react';
import { ElementSize } from './useElementSize.types';

export default function useElementSize<GenericElement extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<GenericElement | null>(null);

  const [elementSize, setElementSize] = useState<ElementSize>({
    width: ref?.current?.offsetWidth ?? 0,
    height: ref?.current?.offsetHeight ?? 0,
  });

  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      setElementSize({ width: ref?.current?.offsetWidth ?? 0, height: ref?.current?.offsetHeight ?? 0 });
    });

    if (ref?.current) {
      observer.observe(ref?.current);

      return () => observer.disconnect();
    }
  }, []);

  return { ref, ...elementSize };
}

import { useState } from 'react';
import { usePopper as popperUsePopper } from 'react-popper';
import { UsePositionProps } from './usePosition.types';

export default function usePosition({ side, position = 'fixed', skidding = 0, distance = 0 }: UsePositionProps = {}) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = popperUsePopper(referenceElement, popperElement, {
    placement: side,
    strategy: position,
    modifiers: [
      { name: 'offset', options: { offset: [skidding, distance] } },
      {
        name: 'preventOverflow',
        options: {
          rootBoundary: 'viewport',
          tether: false,
          altAxis: true,
        },
      },
    ],
  });

  return { setReferenceElement, setPopperElement, styles, attributes };
}


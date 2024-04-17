import { useEffect, useRef, useState } from 'react';
import { PortalProps } from './Portal.types';
import { createPortal } from 'react-dom';
import { ReactUtils } from 'utils';

export default function Portal({ element, className, targetId }: PortalProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  const classes = ReactUtils.conditionalClass({ ['im-portal']: true, [`${className}`]: !!className });

  useEffect(() => {
    ref.current = document.getElementById(targetId);
    setMounted(true);
  }, [targetId]);

  if (className) {
    return mounted && ref.current ? createPortal(<div className={classes}>{element}</div>, ref.current) : null;
  }

  return mounted && ref.current ? createPortal(element, ref.current) : null;
}

import { Header } from 'layouts';
import { PageProps } from './Pages.types';
import { useEffect, useRef, useState } from 'react';
import { ReactUtils } from 'utils';
import './Pages.css';

export default function Page({ contentClass, children, headerProps, footer }: Readonly<PageProps>) {
  const [isOnTop, setIsOnTop] = useState(true);
  const appRef = useRef<HTMLDivElement | null>(null);

  const classes = ReactUtils.conditionalClass({ ['im-landing-page-content']: true, [contentClass]: true });

  useEffect(() => {
    const handleScroll = () => {
      if (appRef.current?.scrollTop) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    appRef.current?.addEventListener('scroll', handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => appRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`im-page ${contentClass}-page`}>
      <Header {...headerProps} isScrolled={!isOnTop} />
      <main ref={appRef} className={classes}>
        {children}
      </main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
}

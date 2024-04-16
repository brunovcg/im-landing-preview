import { VideoVimeo } from 'components';
import { TestimonialVideoCardProps } from './TestimonialVideoCard.types';
import './TestimonialVideoCard.css';
import { useRef, useState } from 'react';
import { ReactUtils } from 'utils';
import useOnClickOutside from '../../../../../../hooks/outside-click/useOutsideClick';
import { VimeoVideoRef } from 'components/video-vimeo/VideoVimeo.types';

export default function TestimonialVideoCard({ item }: Readonly<TestimonialVideoCardProps>) {
  const [shadowed, setShadowed] = useState(false);

  const classes = ReactUtils.conditionalClass({ ['im-testimonial-video-card']: true, ['im-shadowed']: shadowed });

  const ref = useRef<HTMLDivElement | null>(null);
  const vimeoRef = useRef<VimeoVideoRef>(null);

  useOnClickOutside(ref, () => {
    vimeoRef.current?.pause?.();
    vimeoRef.current?.reset?.();
    setShadowed(false);
  });

  return (
    <div className={classes} ref={ref}>
      <VideoVimeo
        id={item.id}
        thumbnail={item.thumbnail}
        width={260}
        height={140}
        onClick={() => setShadowed((state) => !state)}
        ref={vimeoRef}
      />
      <div className="im-testimonial-info">
        <p className="im-testimonial-customer">{item.customer}</p>
        <p className="im-testimonial-company">
          {item.company} - {item.state}
        </p>
      </div>
    </div>
  );
}

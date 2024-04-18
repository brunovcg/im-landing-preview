import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { VideoVimeoProps, VimeoVideoRef } from './VideoVimeo.types';
import { ReactUtils } from 'utils';
import './VideoVimeo.css';
import { Icon } from 'components';
import Player from '@vimeo/player';

// eslint-disable-next-line react-refresh/only-export-components
function VideoVimeo(
  { id, thumbnail, width, height, onClick, muted = false, autoplay = true }: Readonly<VideoVimeoProps>,
  ref: ForwardedRef<VimeoVideoRef>
) {
  const [initialized, setInitialized] = useState(false);
  const [player, setPlayer] = useState<Player | Record<never, never>>({});
  const classes = ReactUtils.conditionalClass({
    ['im-video-vimeo']: true,
  });

  const vimeoRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({ ...player, reset: () => setInitialized(false) }) as VimeoVideoRef);

  useEffect(() => {
    if (!initialized || !vimeoRef.current) {
      return setPlayer({});
    }

    setPlayer(new Player(vimeoRef.current, { id, width, height, muted, autoplay, responsive: true }));
  }, [autoplay, height, id, initialized, muted, width, vimeoRef]);

  return (
    <div style={{ width, height }} className={classes}>
      {!initialized && (
        <button
          className="im-thumbnail"
          onClick={() => {
            onClick?.();
            setInitialized(true);
          }}
        >
          <img src={thumbnail} alt={`vimeo-${id}`} style={{ maxWidth: '100%', height }} />
          <div className="im-play-icon">
            <Icon icon="play" variant="error" weight="fill" size="regular" />
          </div>
        </button>
      )}
      {initialized && <div ref={vimeoRef} />}
    </div>
  );
}

const referenced = forwardRef(VideoVimeo);

export default referenced;

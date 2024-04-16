import { useState } from 'react';
import { VideIFrameProps } from './VideoIFrame.types';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { ReactUtils } from 'utils';
import './VideoIFrame.css';
import { Icon } from 'components';

export default function VideoIFrame({
  src,
  title,
  thumbnail,
  className,
  allowFullScreen = true,
  autoplay = true,
  width,
  height,
  ...rest
}: Readonly<VideIFrameProps>) {
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const classes = ReactUtils.conditionalClass({
    ['im-video-iframe']: true,
    [`${className}`]: !!className,
  });

  const renderIframe = () => {
    const frame = (
      <iframe
        onLoad={() => setLoaded(true)}
        src={src}
        title={title}
        allowFullScreen={allowFullScreen}
        className="im-video-iframe"
        allow={autoplay ? 'autoplay' : ''}
        {...rest}
      />
    );

    if (!thumbnail) {
      return (
        <>
          {frame}
          {!loaded && (
            <div className="im-loading-wrapper">
              <LoadingSpinner className="im-loading-video" />
            </div>
          )}
        </>
      );
    }

    if (clicked) {
      return frame;
    }

    return null;
  };

  return (
    <div style={{ width, height }} className={classes}>
      {!!thumbnail && !clicked && (
        <button className="im-thumbnail" style={{ width, height }} onClick={() => setClicked(true)}>
          <img src={thumbnail} alt={title} style={{ maxWidth: '100%', height }} />
          <div className="im-play-icon">
            <Icon icon="play" variant="error" weight="fill" size={5} />
          </div>
        </button>
      )}
      {renderIframe()}

      {!loaded && !thumbnail && (
        <div className="im-loading-wrapper">
          <LoadingSpinner className="im-loading-video" />
        </div>
      )}
    </div>
  );
}

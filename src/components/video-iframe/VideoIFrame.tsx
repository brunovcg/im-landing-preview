import { useState } from 'react';
import { VideIFrameProps } from './VideoIFrame.types';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { ReactUtils } from 'utils';
import './VideoIFrame.css';

export default function VideoIFrame({
  src,
  title,
  className,
  allowFullScreen = true,
  autoplay = true,
  width,
  height,
  ...rest
}: Readonly<VideIFrameProps>) {
  const [loaded, setLoaded] = useState(false);

  const classes = ReactUtils.conditionalClass({
    ['im-video-iframe']: true,
    [`${className}`]: !!className,
  });

  return (
    <div style={{ width, height }} className={classes}>
      <iframe
        onLoad={() => setLoaded(true)}
        src={src}
        title={title}
        allowFullScreen={allowFullScreen}
        className="im-video-iframe"
        allow={autoplay ? 'autoplay' : ''}
        {...rest}
      />

      {!loaded && (
        <div className="im-loading-wrapper">
          <LoadingSpinner className="im-loading-video" />
        </div>
      )}
    </div>
  );
}

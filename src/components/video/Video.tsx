import { useTranslation } from 'react-i18next';
import { VideoProps, VideoState } from './Video.types';
import { ForwardedRef, forwardRef, useState, useRef } from 'react';
import { Icon, LoadingSpinner } from '../index';
import { ReactUtils } from 'utils';
import './Video.css';

function VideoComponent(
  {
    src,
    onError,
    controlsList = 'nodownload',
    width,
    height,
    className,
    gearLoading,
    tracks,
    controls = true,
    loading,
    containerStyle,
    ...rest
  }: Readonly<VideoProps>,
  ref?: ForwardedRef<HTMLVideoElement>
) {
  const [state, setState] = useState<VideoState>(null);

  const effectiveWidth = width ?? 600;
  const effectiveHeight = typeof width === 'number' ? Number(effectiveWidth) / (16 / 9) : height;

  const { t } = useTranslation();

  const videoRef = useRef<HTMLVideoElement>(null);

  const isLoading = !!loading || state !== 'canPlay';

  const classes = ReactUtils.conditionalClass({ ['im-video']: true, [`${className}`]: !!className });

  const videoClasses = ReactUtils.conditionalClass({ ['im-video-tag']: true, ['im-display-none']: isLoading });

  return (
    <div className={classes} style={containerStyle}>
      {gearLoading && isLoading && <LoadingSpinner />}
      {isLoading && !gearLoading && <div className="im-video-loading" />}
      {!!src && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          width={effectiveWidth}
          height={effectiveHeight}
          className={videoClasses}
          autoPlay
          onCanPlay={() => setState('canPlay')}
          controls={controls}
          onError={onError}
          controlsList={controlsList}
          ref={ReactUtils.mergeRefs(ref, videoRef)}
          {...rest}
        >
          <source src={src} />
          {!tracks && <track src="" kind="captions" />}
          {tracks?.map((trackArgs) => <track key={trackArgs.id} {...trackArgs} />)}
        </video>
      )}
      {state === 'error' && (
        <div className="im-video-error">
          <Icon icon="warning" />
          {t('Components.Video.Error')}
        </div>
      )}
    </div>
  );
}

const Video = forwardRef(VideoComponent);

export default Video;

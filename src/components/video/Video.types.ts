import { TrackHTMLAttributes, VideoHTMLAttributes, HTMLAttributes } from 'react';

export type VideoProps = {
  src: string;
  loading?: boolean;
  gearLoading?: boolean;
  className?: string;
  onError?: () => void;
  width?: number | string;
  height?: number | string;
  containerStyle?: HTMLAttributes<HTMLDivElement>['style'];
  tracks?: (TrackHTMLAttributes<HTMLTrackElement> & { id: string | number })[];
} & Omit<VideoHTMLAttributes<HTMLVideoElement>, 'width' | 'height'>;

export type VideoState = 'canPlay' | 'error' | null;

export type VideoOrientation = null | 'portrait' | 'landscape' | 'squared';

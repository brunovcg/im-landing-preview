import Player from '@vimeo/player';

export type VideoVimeoProps = {
  id: number;
  thumbnail: string;
  height?: number;
  width?: number;
  onClick?: () => void;
  muted?: boolean;
  autoplay?: boolean;
};

export type VimeoVideoRef = Player & { reset: () => void };

import { ComponentPropsWithoutRef } from 'react';
import Device from './icons/device';
import Duration from './icons/duration';
import { ExplicitIcon } from './icons/explicit';
import HomeEmpty from './icons/home-empty';
import HomeFulfilled from './icons/home-fulfilled';
import ItemWithoutSrc from './icons/item-without-src';
import LibraryEmpty from './icons/library-empty';
import LibraryFulfilled from './icons/library-fulfilled';
import NavigateBack from './icons/navigate-back';
import NavigateForwards from './icons/navigate-forwards';
import Pause from './icons/pause';
import Play from './icons/play';
import RepeatContext from './icons/repeat-context';
import RepeatTrack from './icons/repeat-track';
import SearchEmpty from './icons/search-empty';
import SearchFulfilled from './icons/search-fulfilled';
import Shuffle from './icons/shuffle';
import SkipBack from './icons/skip-back';
import SkipForward from './icons/skip-forward';
import SpotifyIcon from './icons/spotify';
import SpotifyBanner from './icons/spotify-banner';

export enum IconSVG {
  Spotify = 'spotify',
  Play = 'Play',
  Pause = 'Pause',
  LibraryFulfilled = 'LibraryFulfilled',
  LibraryEmpty = 'LibraryEmpty',
  CreatePlaylistIcon = 'CreatePlaylistIcon',
  LikedSongIcon = 'LikedSongIcon',
  YourEpisodesIcon = 'YourEpisodesIcon',
  Explicit = 'Explicit',
  ItemWithoutSrc = 'ItemWithoutSrc',
  HomeEmpty = 'HomeEmpty',
  HomeFulfilled = 'HomeFulfilled',
  SearchEmpty = 'SearchEmpty',
  SearchFulfilled = 'SearchFulfilled',
  SpotifyBanner = 'SpotifyBanner',
  Duration = 'Duration',
  SkipBack = 'SkipBack',
  SkipForward = 'SkipForward',
  Device = 'Device',
  Shuffle = 'Shuffle',
  RepeatContext = 'RepeatContext',
  RepeatTrack = 'RepeatTrack',
  NavigateBack = 'NavigateBack',
  NavigateForwards = 'NavigateForwards',
}

export interface IconSVGProps extends ComponentPropsWithoutRef<'svg'> {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

export interface IconProps extends ComponentPropsWithoutRef<'i'> {
  name?: string;
  className?: string;
  svg?: IconSVG;
  width?: number;
  height?: number;
  fill?: string;
}

export const Icon = (props: IconProps) => {
  const {
    name,
    className = '',
    svg,
    width,
    height,
    fill,
    'aria-label': ariaLabel,
    ...otherProps
  } = props;

  const svgIcon = {
    [IconSVG.Play]: <Play className={className} width={width} height={height} fill={fill} />,
    [IconSVG.Pause]: <Pause className={className} width={width} height={height} fill={fill} />,
    [IconSVG.Spotify]: (
      <SpotifyIcon className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.LibraryFulfilled]: (
      <LibraryFulfilled className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.LibraryEmpty]: (
      <LibraryEmpty className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.CreatePlaylistIcon]: (
      <div className="flex h-full w-full items-center justify-center rounded-sm bg-white">
        <Icon name={`add-fill text-black`} />
      </div>
    ),
    [IconSVG.LikedSongIcon]: (
      <div className="flex h-full w-full items-center justify-center rounded-sm bg-gradient-to-r from-[#450af5] to-[#c4efd9]">
        <Icon name="heart-fill text-xs" />
      </div>
    ),
    [IconSVG.YourEpisodesIcon]: (
      <div className="flex h-full w-full items-center justify-center rounded-sm bg-[#006450]">
        <Icon name="bookmark-fill text-spotify-green text-xs" />
      </div>
    ),
    [IconSVG.Explicit]: (
      <ExplicitIcon className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.ItemWithoutSrc]: (
      <ItemWithoutSrc className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.HomeEmpty]: (
      <HomeEmpty className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.HomeFulfilled]: (
      <HomeFulfilled className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.SearchEmpty]: (
      <SearchEmpty className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.SearchFulfilled]: (
      <SearchFulfilled className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.SpotifyBanner]: (
      <SpotifyBanner className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.Duration]: (
      <Duration className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.SkipBack]: (
      <SkipBack className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.SkipForward]: (
      <SkipForward className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.Device]: <Device className={className} width={width} height={height} fill={fill} />,
    [IconSVG.Shuffle]: <Shuffle className={className} width={width} height={height} fill={fill} />,
    [IconSVG.RepeatContext]: (
      <RepeatContext className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.RepeatTrack]: (
      <RepeatTrack className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.NavigateBack]: (
      <NavigateBack className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.NavigateForwards]: (
      <NavigateForwards className={className} width={width} height={height} fill={fill} />
    ),
  };

  if (svg) {
    return svgIcon[svg];
  }

  return (
    <i
      className={`ri-${name} ${className}`}
      role="img"
      aria-label={ariaLabel || name}
      {...otherProps}
    />
  );
};

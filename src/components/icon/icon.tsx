import { ComponentPropsWithoutRef } from 'react';
import Duration from './icons/duration';
import { ExplicitIcon } from './icons/explicit';
import HomeEmpty from './icons/home-empty';
import HomeFulfilled from './icons/home-fulfilled';
import ItemWithoutSrc from './icons/item-without-src';
import LibraryEmpty from './icons/library-empty';
import LibraryFulfilled from './icons/library-fulfilled';
import Pause from './icons/pause';
import Play from './icons/play';
import SearchEmpty from './icons/search-empty';
import SearchFulfilled from './icons/search-fulfilled';
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

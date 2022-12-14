import { Artist, ArtistSimplified } from './Artist';
import { Image } from './Image';
import { ExternalUrls } from './Misc';
import { AlbumTracks, Track } from './Track';

export interface AlbumPage {
  album: Album;
}

export type AlbumType = 'album' | 'single' | 'compilation' | 'ALBUM' | 'SINGLE';

export type ReleaseDatePrecision = 'year' | 'month' | 'day';

export interface Copyrights {
  text: string;
  type: string;
}
export interface Album {
  album_type: AlbumType;
  artists: ArtistSimplified[];
  available_markets: string[];
  copyrights: Copyrights[];
  external_urls: ExternalUrls;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  tracks: AlbumTracks;
  type: string;
  uri: string;
}
export type AlbumGroup = 'album' | 'single' | 'compilation' | 'appears_on';
export interface AlbumSimplified {
  album_group?: AlbumGroup;
  album_type: AlbumType;
  artists: ArtistSimplified[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  type: string;
  uri: string;
}

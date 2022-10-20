import { AlbumSimplified } from './Album';
import { ArtistSimplified } from './Artist';
import { ExternalIds, ExternalUrls } from './Misc';

export interface AlbumTracks {
  href: string;
  items: TrackSimplified[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface Track {
  album: AlbumSimplified;
  artists: ArtistSimplified[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  external_ids: ExternalIds;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface TrackSimplified {
  artists: ArtistSimplified[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface TrackToRemove {
  uri: string;
}

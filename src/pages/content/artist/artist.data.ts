import { UseQueryResult } from '@tanstack/react-query';
import { getColorDiffStatus } from 'node-vibrant/lib/util';
import { QuoteHTMLAttributes } from 'react';
import { useArtist } from '../../../hooks/content/artist/use-artist';
import { useArtistAlbums } from '../../../hooks/content/artist/use-artist-albums';
import { useArtistAppearsOn } from '../../../hooks/content/artist/use-artist-appears-on';
import { useArtistSingles } from '../../../hooks/content/artist/use-artist-singles';
import { useArtistTopTracks } from '../../../hooks/content/artist/use-artist-top-track';
import { useVibrant } from '../../../hooks/misc/use-vibrant';

import { Album, AlbumSimplified } from '../../../types/Album';
import { Artist } from '../../../types/Artist';
import { Paging } from '../../../types/Paging';
import { Track } from '../../../types/Track';

export interface ArtistDataProps {
  artist: Artist | undefined;
  color: string | undefined;
  artistTopTracks: Album[] | undefined;
  artistAlbums: Paging<Album> | undefined;
  artistSingles: Paging<Track> | undefined;
  artistAppearsOn: Paging<Album> | undefined;
  error: Error | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export function useArtistPageData(id: string) {
  const artist: UseQueryResult<Artist, Error> = useArtist(id!);

  const artistTopTracks: UseQueryResult<Album[], Error> = useArtistTopTracks(artist.data?.id);
  const artistAlbums: UseQueryResult<Paging<AlbumSimplified>, Error> = useArtistAlbums(
    artist.data?.id
  );
  const artistSingles: UseQueryResult<Paging<Track>, Error> = useArtistSingles(artist.data?.id);
  const artistAppearsOn: UseQueryResult<Paging<Album>, Error> = useArtistAppearsOn(artist.data?.id);
  const color: UseQueryResult<string, Error> = useVibrant(artist.data?.images[0].url);

  return {
    artist: artist.data,
    artistTopTracks: artistTopTracks.data,
    artistAlbums: artistAlbums.data,
    artistSingles: artistSingles.data,
    artistAppearsOn: artistAppearsOn.data,
    color: color.data,
    error:
      artist.error ||
      artistTopTracks.error ||
      artistAlbums.error ||
      artistSingles.error ||
      artistAppearsOn.error,
    isLoading:
      artist.isLoading ||
      artistTopTracks.isLoading ||
      artistAlbums.isLoading ||
      artistSingles.isLoading ||
      artistAppearsOn.isLoading,
    isError:
      artist.isError ||
      artistTopTracks.isError ||
      artistAlbums.isError ||
      artistSingles.isError ||
      artistAppearsOn.isError,
    isSuccess:
      artist.isSuccess &&
      artistTopTracks.isSuccess &&
      artistAlbums.isSuccess &&
      artistSingles.isSuccess &&
      artistAppearsOn.isSuccess,
  };
}

import { UseQueryResult } from '@tanstack/react-query';
import { useArtist } from '../../../hooks/content/artist/use-artist';
import { useArtistAlbums } from '../../../hooks/content/artist/use-artist-albums';
import { useArtistAppearsOn } from '../../../hooks/content/artist/use-artist-appears-on';
import { useArtistSingles } from '../../../hooks/content/artist/use-artist-singles';
import { useArtistTopTracks } from '../../../hooks/content/artist/use-artist-top-track';

import { Album, AlbumSimplified } from '../../../types/Album';
import { Artist } from '../../../types/Artist';
import { Paging } from '../../../types/Paging';
import { Track } from '../../../types/Track';

export function useArtistPageData(id: string) {
  const artist: UseQueryResult<Artist, Error> = useArtist(id!);

  const artistTopTracks: UseQueryResult<Album[], Error> = useArtistTopTracks(artist.data?.id);
  const artistAlbums: UseQueryResult<Paging<AlbumSimplified>, Error> = useArtistAlbums(
    artist.data?.id
  );
  const artistSingles: UseQueryResult<Paging<Track>, Error> = useArtistSingles(artist.data?.id);
  const artistAppearsOn: UseQueryResult<Paging<Album>, Error> = useArtistAppearsOn(artist.data?.id);

  return {
    artist: artist.data,
    artistTopTracks: artistTopTracks.data,
    artistAlbums: artistAlbums.data,
    artistSingles: artistSingles.data,
    artistAppearsOn: artistAppearsOn.data,
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

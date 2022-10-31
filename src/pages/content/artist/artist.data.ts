import { isError } from '@tanstack/react-query';
import { useArtist } from '../../../hooks/content/use-artist';
import { useArtistAlbums } from '../../../hooks/content/use-artist-albums';
import { useArtistAppearsOn } from '../../../hooks/content/use-artist-appears-on';
import { useArtistSingles } from '../../../hooks/content/use-artist-singles';
import { useArtistTopTracks } from '../../../hooks/content/use-artist-top-track';

export function useArtistPageData(id: string) {
  const artist = useArtist(id!);

  const artistTopTracks = useArtistTopTracks(artist.data?.id);
  const artistAlbums = useArtistAlbums(artist.data?.id);
  const artistSingles = useArtistSingles(artist.data?.id);
  const artistAppearsOn = useArtistAppearsOn(artist.data?.id);

  return {
    artist: artist.data,
    artistTopTracks: artistTopTracks.data,
    artistAlbums: artistAlbums.data,
    artistSingles: artistSingles.data,
    artistAppearsOn: artistAppearsOn.data,
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

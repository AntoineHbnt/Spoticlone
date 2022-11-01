import { UseQueryResult } from '@tanstack/react-query';
import { useTopArtists } from '../../hooks/content/user/use-top-artists';
import { useTopTracks } from '../../hooks/content/user/use-top-tracks';
import { Artist } from '../../types/Artist';
import { Paging } from '../../types/Paging';
import { Track } from '../../types/Track';

export function useHomeData(limit: number) {
  const topTracks: UseQueryResult<Paging<Track>> = useTopTracks(limit);
  const topArtists: UseQueryResult<Paging<Artist>> = useTopArtists(limit);

  return {
    topTracks: topTracks.data,
    topArtists: topArtists.data,
    error: topTracks.error || topArtists.error,
    isLoading: topTracks.isLoading || topArtists.isLoading,
    isError: topTracks.isError || topArtists.isError,
    isSuccess: topTracks.isSuccess && topArtists.isSuccess,
  };
}

import { searchItemParams } from './content/use-search-item';
import { TopArtistsParams } from './content/use-top-artists';
import { TopTracksParams } from './content/use-top-tracks';

export const queryKeys = {
  session: () => ['session'],

  topTracks: (args: TopTracksParams) => ['topTracks'],
  topArtists: (args: TopArtistsParams) => ['topArtists'],
  getItem: (id: string, type: string) => ['getItem', id, type],
  searchItems: (args: searchItemParams) => ['searchItems'],
  getActiveDevice: () => ['getActiveDevice'],

  playbackState: () => ['playbackState'],
  startPlayback: (contextUri: string, offset: number, position_ms: number) => ['startPlayback'],
  pausePlayback: () => ['pausePlayback'],
};

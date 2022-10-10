import { TopArtistsParams } from './content/use-top-artists';
import { TopTracksParams } from './content/use-top-tracks';

export const queryKeys = {
  authCheck: () => ['authCheck'],
  authUser: () => ['authUser'],
  topTracks: (args: TopTracksParams) => ['topTracks'],
  topArtists: (args: TopArtistsParams) => ['topArtists'],
  getItem: (id: string, type: string) => ['getItem', id, type],
};

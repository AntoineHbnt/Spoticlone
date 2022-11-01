import { searchItemParams } from './content/use-search-item';
import { TopArtistsParams } from './content/use-top-artists';
import { TopTracksParams } from './content/use-top-tracks';

export const queryKeys = {
  session: () => ['session'],

  topTracks: (args: TopTracksParams) => ['topTracks'],
  topArtists: (args: TopArtistsParams) => ['topArtists'],

  artist: (id: string) => ['artist', id],
  artistAlbums: (id?: string) => ['artistAlbums', id],
  artistSingles: (id?: string) => ['artistSingle', id],
  aristTopTracks: (id?: string) => ['artistTopTracks', id],
  artistAppearsOn: (id?: string) => ['artistAppearsOn', id],

  album: (id: string) => ['album', id],
  getItem: (id: string, type: string) => ['getItem', id, type],
  searchItems: (args: searchItemParams) => ['searchItems', args],
  getActiveDevice: () => ['getActiveDevice'],

  playbackState: () => ['playbackState'],
  startPlayback: (contextUri: string, offset: number, position_ms: number) => ['startPlayback'],
  resumePlayback: () => ['resumePlayback'],
  pausePlayback: () => ['pausePlayback'],
  skipNext: () => ['skipNext'],
  skipPrevious: () => ['skipPrevious'],
  toggleShuffle: (state: boolean) => ['toggleShuffle', state],
  toggleRepeat: (state: 'off' | 'track' | 'context') => ['toggleRepeat', state],

  vibrant: (image: string) => ['vibrant', image],
};

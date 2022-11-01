import { searchItemParams } from './content/use-search-item';

export const albumKeys = {
  album: (id: string) => ['album', id],
};

export const artistKeys = {
  artist: (id: string) => ['artist', id],
  artistAlbums: (id?: string) => ['artistAlbums', id],
  artistSingles: (id?: string) => ['artistSingle', id],
  aristTopTracks: (id?: string) => ['artistTopTracks', id],
  artistAppearsOn: (id?: string) => ['artistAppearsOn', id],
};

export const playerKeys = {
  playbackState: () => ['playbackState'],
  startPlayback: (contextUri: string, offset: number, position_ms: number) => [
    'startPlayback',
    contextUri,
    offset,
    position_ms,
  ],
  resumePlayback: () => ['resumePlayback'],
  pausePlayback: () => ['pausePlayback'],
  skipNext: () => ['skipNext'],
  skipPrevious: () => ['skipPrevious'],
  toggleShuffle: (state: boolean) => ['toggleShuffle', state],
  toggleRepeat: (state: 'off' | 'track' | 'context') => ['toggleRepeat', state],
  seekPostion: (positionMs: number) => ['seekPostion', positionMs],
};

export const userKeys = {
  topTracks: (limit?: number) => ['topTracks', limit],
  topArtists: (limit?: number) => ['topArtists', limit],
};

export const queryKeys = {
  session: () => ['session'],
  searchItems: (args: searchItemParams) => ['searchItems', args],
  getActiveDevice: () => ['getActiveDevice'],
  vibrant: (image: string) => ['vibrant', image],
};

import { apiSpotify } from '../utils/axios/axios';

export const startAlbumPlayback = async (uri: string, offset: number, position_ms: number) =>
  await apiSpotify.put('/me/player/play', {
    context_uri: uri,
    offset: {
      position: offset,
    },
    position_ms: position_ms,
  });

export const startArtistPlayback = async (uri: string) =>
  await apiSpotify.put('/me/player/play', {
    context_uri: uri,
  });

export const resumePlayback = async () => {
  await apiSpotify.put('/me/player/play');
};

export const pausePlayback = async () => {
  await apiSpotify.put('/me/player/pause');
};

export const skipNext = async () => {
  await apiSpotify.post('/me/player/next');
};

export const skipPrevious = async () => {
  await apiSpotify.post('/me/player/previous');
};

export const toggleShuffle = async (state: boolean) => {
  await apiSpotify.put(`/me/player/shuffle?state=${state}`);
};

export const toggleRepeat = async (state: 'off' | 'track' | 'context') => {
  await apiSpotify.put(`/me/player/repeat?state=${state}`);
};

export const seekPostion = async (positionMs: number) => {
  await apiSpotify.put(`/me/player/seek?position_ms=${positionMs}`);
};

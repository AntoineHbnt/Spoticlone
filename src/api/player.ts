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

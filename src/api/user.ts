import { Artist } from '../types/Artist';
import { Paging } from '../types/Paging';
import { Track } from '../types/Track';
import { apiSpotify } from '../utils/axios/axios';

export const getUserTopArtists = async (limit?: number): Promise<Paging<Artist>> => {
  const response = await apiSpotify.get(`/me/top/artists?limit=${limit ? limit : 50}`);

  return response.data;
};

export const getUserTopTracks = async (limit?: number): Promise<Paging<Track>> => {
  const response = await apiSpotify.get(`/me/top/tracks?limit=${limit ? limit : 50}`);

  return response.data;
};

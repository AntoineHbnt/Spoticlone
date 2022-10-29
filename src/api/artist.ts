import { Album } from '../types/Album';
import { Paging } from '../types/Paging';
import { Track } from '../types/Track';
import { apiSpotify } from '../utils/axios/axios';

export const getArtistTopTracks = async (id: string): Promise<Album[]> => {
  const response = await apiSpotify.get(`/artists/${id}/top-tracks?market=FR`);
  return response.data.tracks;
};

export const getArtistSingles = async (id: string): Promise<Paging<Track>> => {
  const response = await apiSpotify.get(`/artists/${id}/albums?include_groups=single`);
  return response.data;
};

export const getArtistAppearson = async (id: string): Promise<Paging<Album>> => {
  const response = await apiSpotify.get(`/artists/${id}/albums?include_groups=appears_on`);
  return response.data;
};

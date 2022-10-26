import { Album, AlbumSimplified } from '../types/Album';
import { Paging } from '../types/Paging';
import { apiSpotify } from '../utils/axios/axios';

export const getAlbumsByArtistId = async (id: string): Promise<Paging<AlbumSimplified>> => {
  const response = await apiSpotify.get(`/artists/${id}/albums`);
  return response.data;
};

export const getAlbumById = async (id: string): Promise<Album> => {
  const response = await apiSpotify.get(`/albums/${id}`);
  return response.data;
};

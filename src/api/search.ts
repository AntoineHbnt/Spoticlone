import { SearchFromAPI } from '../types/Search';
import { apiSpotify } from '../utils/axios/axios';

export const getSearchedItems = async (
  query: string,
  type?: string[],
  limit?: number
): Promise<SearchFromAPI> => {
  const response = await apiSpotify.get(
    `/search?q=${query}&type=${type}&limit=${limit ? limit : 50}`
  );

  return response.data;
};

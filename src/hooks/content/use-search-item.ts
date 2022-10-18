import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../supabaseClient';
import { SearchFromAPI } from '../../types/Search';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export interface searchItemParams {
  query: string;
  type?: string[];
  limit?: number;
}

export const useSearchItem = (params: searchItemParams) => {
  return useQuery(queryKeys.searchItems(params), async (): Promise<SearchFromAPI> => {
    const { query, type, limit = 50 } = params;

    const response = await apiSpotify.get(`/search?q=${query}&type=${type}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${supabase.auth.session()!.provider_token}`,
      },
    });

    return response.data;
  });
};

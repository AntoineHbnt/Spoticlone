import { useQuery } from '@tanstack/react-query';
import { getSearchedItems } from '../../api/search';
import { SearchFromAPI } from '../../types/Search';
import { queryKeys } from '../query-keys';

export interface searchItemParams {
  query: string;
  type?: string[];
  limit?: number;
}

export const useSearchItem = (params: searchItemParams) => {
  return useQuery(
    queryKeys.searchItems(params),
    async (): Promise<SearchFromAPI> => getSearchedItems(params.query, params.type, params.limit)
  );
};

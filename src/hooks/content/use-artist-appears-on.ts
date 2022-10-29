import { useQuery } from '@tanstack/react-query';
import { getArtistAppearson } from '../../api/artist';
import { queryKeys } from '../query-keys';

export const useArtistAppearsOn = (id: string) => {
  return useQuery(queryKeys.artistAppearsOn(id), () => getArtistAppearson(id));
};

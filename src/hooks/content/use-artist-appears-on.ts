import { useQuery } from '@tanstack/react-query';
import { getArtistAppearson } from '../../api/artist';
import { Album } from '../../types/Album';
import { Paging } from '../../types/Paging';
import { queryKeys } from '../query-keys';

export const useArtistAppearsOn = (id?: string) => {
  return useQuery<Paging<Album>, Error>(queryKeys.artistAppearsOn(id), () =>
    getArtistAppearson(id)
  );
};

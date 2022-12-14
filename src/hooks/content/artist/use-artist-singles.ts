import { useQuery } from '@tanstack/react-query';
import { getArtistSingles } from '../../../api/artist';
import { Paging } from '../../../types/Paging';
import { Track } from '../../../types/Track';
import { artistKeys } from '../../query-keys';

export const useArtistSingles = (id?: string) => {
  return useQuery<Paging<Track>, Error>(artistKeys.artistSingles(id), () => getArtistSingles(id), {
    enabled: !!id,
  });
};

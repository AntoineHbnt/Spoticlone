import { useQuery } from '@tanstack/react-query';
import { getUserTopTracks } from '../../../api/user';
import { Paging } from '../../../types/Paging';
import { Track } from '../../../types/Track';
import { userKeys } from '../../query-keys';

export const useTopTracks = (limit?: number) => {
  return useQuery<Paging<Track>, Error>(
    userKeys.topTracks(limit),
    (): Promise<Paging<Track>> => getUserTopTracks(limit)
  );
};

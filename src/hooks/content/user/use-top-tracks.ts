import { useQuery } from '@tanstack/react-query';
import { getUserTopTracks } from '../../../api/user';
import { Paging } from '../../../types/Paging';
import { Track } from '../../../types/Track';
import { apiSpotify } from '../../../utils/axios/axios';
import { userKeys } from '../../query-keys';

export const useTopTracks = (limit?: number) => {
  return useQuery(userKeys.topTracks(limit), (): Promise<Paging<Track>> => getUserTopTracks(limit));
};

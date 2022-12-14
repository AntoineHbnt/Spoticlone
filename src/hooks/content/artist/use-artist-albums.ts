import { useQuery } from '@tanstack/react-query';
import { getAlbumsByArtistId } from '../../../api/album';
import { AlbumSimplified } from '../../../types/Album';
import { Paging } from '../../../types/Paging';
import { artistKeys } from '../../query-keys';

export const useArtistAlbums = (id?: string) => {
  return useQuery<Paging<AlbumSimplified>, Error>(
    artistKeys.artistAlbums(id),
    (): Promise<Paging<AlbumSimplified>> => getAlbumsByArtistId(id),
    {
      enabled: !!id,
    }
  );
};

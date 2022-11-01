import { UseQueryResult } from '@tanstack/react-query';
import { useAlbum } from '../../../hooks/content/use-album';
import { useArtistAlbums } from '../../../hooks/content/use-artist-albums';
import { Album, AlbumSimplified } from '../../../types/Album';
import { Paging } from '../../../types/Paging';

export interface AlbumDataProps {
  album: Album | undefined;
  artistAlbums: Paging<AlbumSimplified> | undefined;
  error: Error | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export function useAlbumData(id: string): AlbumDataProps {
  const album: UseQueryResult<Album, Error> = useAlbum(id!);
  const artistAlbums: UseQueryResult<Paging<AlbumSimplified>, Error> = useArtistAlbums(
    album.data?.artists[0].id
  );

  return {
    album: album.data,
    artistAlbums: artistAlbums.data,
    error: album.error || artistAlbums.error,
    isLoading: album.isLoading || artistAlbums.isLoading,
    isError: album.isError || artistAlbums.isError,
    isSuccess: album.isSuccess && artistAlbums.isSuccess,
  };
}

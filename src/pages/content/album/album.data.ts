import { UseQueryResult } from '@tanstack/react-query';
import { useAlbum } from '../../../hooks/content/album/use-album';
import { useArtist } from '../../../hooks/content/artist/use-artist';
import { useArtistAlbums } from '../../../hooks/content/artist/use-artist-albums';
import { useVibrant } from '../../../hooks/misc/use-vibrant';
import { Album, AlbumSimplified } from '../../../types/Album';
import { Artist } from '../../../types/Artist';
import { Paging } from '../../../types/Paging';

export interface AlbumDataProps {
  album: Album | undefined;
  artist: Artist | undefined;
  color: string | undefined;
  artistAlbums: Paging<AlbumSimplified> | undefined;
  error: Error | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export function useAlbumData(id: string): AlbumDataProps {
  const album: UseQueryResult<Album, Error> = useAlbum(id!);
  const artist: UseQueryResult<Artist, Error> = useArtist(album.data?.artists[0].id);
  const color: UseQueryResult<string, Error> = useVibrant(album.data?.images[0].url);
  const artistAlbums: UseQueryResult<Paging<AlbumSimplified>, Error> = useArtistAlbums(
    album.data?.artists[0].id
  );

  return {
    album: album.data,
    artist: artist.data,
    color: color.data,
    artistAlbums: artistAlbums.data,
    error: album.error || artist.error || artistAlbums.error || color.error,
    isLoading: album.isLoading || artistAlbums.isLoading || artist.isLoading || color.isLoading,
    isError: album.isError || artistAlbums.isError || artist.isError || color.isError,
    isSuccess: album.isSuccess && artistAlbums.isSuccess && artist.isSuccess && color.isSuccess,
  };
}

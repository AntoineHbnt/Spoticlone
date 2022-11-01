import { Artist, ArtistSimplified } from '../../types/Artist';

export interface ArtistProps {
  artists: Artist[] | ArtistSimplified[];
}

export const Artists = (props: ArtistProps) => {
  const { artists } = props;

  return (
    <>
      {artists &&
        artists.map((artist: Artist | ArtistSimplified, index: number) => {
          return (
            <span key={artist.id}>
              <NavLink
                key={`artist-${artist.id + index}`}
                to={`/artist/${artist.id}`}
                className="hover:underline"
              >
                {artist.name}
              </NavLink>
              {index < artists.length - 1 ? ', ' : ''}
            </span>
          );
        })}
    </>
  );
};

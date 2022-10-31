import { Artist } from '../../types/Artist';

export interface ArtistProps {
  artists: Artist[];
}

export const Artists = (props: ArtistProps) => {
  const { artists } = props;

  return (
    <>
      {artists &&
        artists.map((artist: Artist, index: number) => {
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

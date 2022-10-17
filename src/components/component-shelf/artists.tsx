export interface ArtistProps {
  artists: any;
}

export const Artists = (props: ArtistProps) => {
  const { artists } = props;

  return artists.map((artist: any, index: number) => (
    <>
      <NavLink key={`artist-${index}`} to={`artist/${artist.id}`} className="hover:underline">
        {artist.name}
      </NavLink>
      {index < artists.length - 1 ? ', ' : ''}
    </>
  ));
};

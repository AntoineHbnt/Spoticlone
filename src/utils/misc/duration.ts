import { Track } from '../../types/Track';

export const durationParser = (duration: number, secondaryType?: boolean) => {
  const minutes = Math.floor(duration / 60000);
  const seconds = parseInt(((duration % 60000) / 1000).toFixed(0));
  return secondaryType
    ? `${minutes} min ${seconds} sec`
    : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const albumDurationParser = (tracks: Track[]) => {
  let duration = 0;
  tracks.forEach((track) => {
    duration += track.duration_ms;
  });
  return durationParser(duration, true);
};

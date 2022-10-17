export const durationParser = (duration: number) => {
  const minutes = Math.floor(duration / 60000);
  const seconds = parseInt(((duration % 60000) / 1000).toFixed(0));
  return `${minutes}:${seconds}`;
};

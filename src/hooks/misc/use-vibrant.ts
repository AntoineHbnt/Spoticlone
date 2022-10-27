import { useQuery } from '@tanstack/react-query';
import Vibrant from 'node-vibrant';
import { queryKeys } from '../query-keys';

export const useVibrant = (image: string) => {
  return useQuery(queryKeys.vibrant(image), async () => {
    let v = await new Vibrant(image).getPalette();
    return v.Vibrant!.getHex();
  });
};

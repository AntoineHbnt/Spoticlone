import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Device } from '../../@types/player/device';
import { supabase } from '../../supabaseClient';
import { queryKeys } from '../query-keys';

export const useGetActiveDevice = () => {
  return useQuery(queryKeys.getActiveDevice(), async () => {
    try {
      const { data } = await axios.get(`https://api.spotify.com/v1/me/player/devices`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${supabase.auth.session()?.provider_token}`,
        },
      });

      return data.devices && data.devices.find((device: Device) => device.is_active);
    } catch (err) {
      console.error(err);

      return err;
    }
  });
};

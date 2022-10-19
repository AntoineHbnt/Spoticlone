import axios from 'axios';
import { supabase } from '../../supabaseClient';

const getToken = async () => {
  const response = await supabase.auth.getSession();
  return response.data.session?.provider_token;
};

let apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer `,
  },
});

supabase.auth.onAuthStateChange(() => {
  apiSpotify = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken}`,
    },
  });
});

export { apiSpotify };

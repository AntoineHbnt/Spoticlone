import axios from 'axios';
import { supabase } from '../../supabaseClient';

let apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer `,
  },
});

supabase.auth.onAuthStateChange(() => {
  const token = JSON.parse(
    localStorage.getItem(`sb-${import.meta.env.VITE_SUPABASE_REF_ID}-auth-token`)!
  )?.provider_token;

  if (token) {
    apiSpotify = axios.create({
      baseURL: 'https://api.spotify.com/v1',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }
});

export { apiSpotify };

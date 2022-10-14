import axios from 'axios';
import { supabase } from '../supabaseClient';

export const apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Authorization: `Bearer ${supabase.auth.session()?.provider_token}`,
    'Content-Type': 'application/json',
  },
});

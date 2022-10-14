import axios from 'axios';
import { supabase } from '../supabaseClient';

export const apiSPotify = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${supabase.auth.session()?.provider_token}`,
  },
});

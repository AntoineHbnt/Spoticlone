import axios from 'axios';

export const apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

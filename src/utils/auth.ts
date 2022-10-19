import { supabase } from '../supabaseClient';

export const signInWithSpotify = async () => {
  console.log('signInWithSpotify');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'spotify',
    options: {
      scopes:
        'user-read-email user-read-private user-top-read user-modify-playback-state user-read-playback-state',
    },
  });

  console.log(data, error);
  sessionStorage.setItem('session', JSON.stringify(data));
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
};

export const getUser = async () => {
  const user = supabase.auth.getUser();
  return user;
};

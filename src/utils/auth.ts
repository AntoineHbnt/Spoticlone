import { supabase } from '../supabaseClient';

export const signInWithSpotify = async () => {
  const { user, session, error } = await supabase.auth.signIn(
    {
      provider: 'spotify',
    },
    {
      scopes:
        'user-read-email user-read-private user-top-read user-modify-playback-state user-read-playback-state',
    }
  );
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
};

export const getUser = async () => {
  const user = supabase.auth.user();
  return user;
};

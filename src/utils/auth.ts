import { supabase } from '../supabaseClient';

export const signInWithSpotify = async () => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'spotify',
  });
};

export const signout = async () => {
  const { error } = await supabase.auth.signOut();
};

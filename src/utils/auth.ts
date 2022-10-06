import { supabase } from '../supabaseClient';

export const signInWithSpotify = async () => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'spotify',
  });
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
};

export const getUser = async () => {
  const user = supabase.auth.user();
  return user;
};

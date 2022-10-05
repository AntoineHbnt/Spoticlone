import { useAuthUser } from '../../hooks/auth/use-auth-user';

export const Home = () => {
  const { data: user } = useAuthUser();
  const { avatar_url, full_name } = user?.user_metadata || {};

  console.log(user);

  return (
    <div>
      {full_name}
      <img src={avatar_url} alt="" />
    </div>
  );
};

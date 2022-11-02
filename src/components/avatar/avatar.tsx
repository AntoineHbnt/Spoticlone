import { useSession } from '../../hooks/auth/use-session';
import { signOut } from '../../utils/auth';
import { Tooltip } from '../tooltip/Tooltip';

export const Avatar = () => {
  const { data: session, isLoading } = useSession();

  if (isLoading) {
    return null;
  }

  return (
    <Tooltip content="Logout" side="bottom">
      <button
        onClick={() => signOut()}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-background-base hover:bg-[#282828]"
      >
        <img
          className="rounded-full"
          src={session!.user!.user_metadata.avatar_url}
          alt={'avatar'}
          width={28}
          height={28}
        />
      </button>
    </Tooltip>
  );
};

import { TopItemsParams } from './content/use-top-item';

export const queryKeys = {
  authCheck: () => ['authCheck'],
  authUser: () => ['authUser'],
  topItems: (args: TopItemsParams) => ['topItems'],
};

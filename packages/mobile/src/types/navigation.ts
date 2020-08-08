import { routes } from 'constants/routes';

export type StackParamList = {
  [routes.home]: undefined;
  [routes.menu]: undefined;
  [routes.category]: { categoryUuid: string };
  [routes.logout]: undefined;
};

import { routes } from 'constants/routes';

export type StackParamList = {
  [routes.home]: undefined;
  [routes.menu]: undefined;
  [routes.category]: { categoryUuid: string; categoryName: string };
  [routes.search]: undefined;
  [routes.food]: { foodUuid: string; foodName: string };
  [routes.cart]: undefined;
  [routes.logout]: undefined;
};

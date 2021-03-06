import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { GetFoodsByCategoryUuidDocument } from './index.graphql';
import { StackParamList } from 'types/navigation';
import { FoodsList } from 'components/FoodsList';
import { LoadingView } from 'components/LoadingView';
import { StackNavigationProp } from '@react-navigation/stack';
import { routes } from 'constants/routes';
import { useErrorFeedback } from 'hooks/useErrorFeedback';

type NavigationProp = {
  navigation: StackNavigationProp<StackParamList, 'FOOD'>;
  route: RouteProp<StackParamList, 'CATEGORY'>;
};

export const Category = () => {
  const { navigate } = useNavigation<NavigationProp['navigation']>();
  const { params } = useRoute<NavigationProp['route']>();
  const { loading, data, error } = useQuery(GetFoodsByCategoryUuidDocument, {
    variables: { categoryUuid: params.categoryUuid },
  });
  const handlePressFood = useCallback(
    (uuid: string) => {
      const food = data?.foods.find((foodItem) => foodItem.uuid === uuid);
      if (!food) return;
      navigate(routes.food, { foodUuid: food.uuid, foodName: food.name });
    },
    [navigate, data?.foods],
  );

  useErrorFeedback({ message: 'failed to load food list', enabled: !!error });

  return loading || !data ? (
    <LoadingView />
  ) : (
    <ScrollView>
      <FoodsList foods={data.foods} onPressFood={handlePressFood} />
    </ScrollView>
  );
};

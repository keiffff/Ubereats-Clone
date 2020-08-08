import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { CategoryDocument } from 'types/graphql';
import { StackParamList } from 'types/navigation';
import { FoodsList } from 'components/FoodsList';
import { LoadingView } from 'components/LoadingView';
import { StackNavigationProp } from '@react-navigation/stack';
import { routes } from 'constants/routes';

type NavigationProp = {
  navigation: StackNavigationProp<StackParamList, 'FOOD'>;
  route: RouteProp<StackParamList, 'CATEGORY'>;
};

export const Category = () => {
  const { navigate } = useNavigation<NavigationProp['navigation']>();
  const { params } = useRoute<NavigationProp['route']>();
  const { loading, data } = useQuery(CategoryDocument, { variables: { categoryUuid: params.categoryUuid } });
  const handlePressFood = useCallback(
    (uuid: string) => {
      const food = data?.foods.find((foodItem) => foodItem.uuid === uuid);
      if (!food) return;
      navigate(routes.food, { foodUuid: food.uuid, foodName: food.name });
    },
    [navigate, data?.foods],
  );

  return loading || !data ? (
    <LoadingView />
  ) : (
    <ScrollView>
      <FoodsList foods={data.foods} onPressFood={handlePressFood} />
    </ScrollView>
  );
};

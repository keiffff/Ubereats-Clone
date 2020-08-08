import React, { ComponentProps, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FoodsList } from 'components/FoodsList';
import { LoadingView } from 'components/LoadingView';
import { routes } from 'constants/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from 'types/navigation';

type Props = {
  loading: boolean;
  foods?: ComponentProps<typeof FoodsList>['foods'];
};

type NavigationProp = {
  navigation: StackNavigationProp<StackParamList, 'FOOD'>;
};

export const Search = ({ loading, foods }: Props) => {
  const { navigate } = useNavigation<NavigationProp['navigation']>();
  const handlePressFood = useCallback(
    (uuid: string) => {
      const food = foods?.find((foodItem) => foodItem.uuid === uuid);
      if (!food) return;
      navigate(routes.food, { foodUuid: food.uuid, foodName: food.name });
    },
    [navigate, foods],
  );

  return loading ? (
    <LoadingView />
  ) : !foods?.length ? (
    <></>
  ) : (
    <ScrollView>
      <FoodsList foods={foods} onPressFood={handlePressFood} />
    </ScrollView>
  );
};

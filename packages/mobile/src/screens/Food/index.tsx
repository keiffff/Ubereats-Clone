import React, { useState, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { StackParamList } from 'types/navigation';
import { FoodDocument } from 'types/graphql';
import { FoodDetail } from 'components/FoodDetail';
import { Counter } from 'components/Counter';
import { styles } from './styles';
import { LoadingView } from 'components/LoadingView';

type NavigationProp = {
  route: RouteProp<StackParamList, 'FOOD'>;
};

const MAX_COUNT_TO_ADD_TO_CART = 99;

export const Food = () => {
  const { params } = useRoute<NavigationProp['route']>();
  const { loading, data } = useQuery(FoodDocument, { variables: { uuid: params.foodUuid } });
  const [count, setCount] = useState(0);
  const handlePressIncrement = useCallback(() => setCount((prev) => prev + 1), []);
  const handlePressDecrement = useCallback(() => setCount((prev) => prev - 1), []);

  return loading || !data?.foods_by_pk ? (
    <LoadingView />
  ) : (
    <ScrollView style={styles.base}>
      <View style={styles.foodDetailContainer}>
        <FoodDetail
          foodName={data.foods_by_pk.name}
          photos={data.foods_by_pk.food_details}
          description={data.foods_by_pk.description}
        />
      </View>
      <View style={styles.counterContainer}>
        <Counter
          value={count}
          onPressDecrement={handlePressDecrement}
          onPressIncrement={handlePressIncrement}
          disableIncrement={count >= MAX_COUNT_TO_ADD_TO_CART}
        />
      </View>
    </ScrollView>
  );
};

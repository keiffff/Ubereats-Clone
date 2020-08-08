import React from 'react';
import { ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { StackParamList } from 'types/navigation';
import { FoodDocument } from 'types/graphql';
import { FoodDetail } from 'components/FoodDetail';
import { styles } from './styles';
import { LoadingView } from 'components/LoadingView';

type NavigationProp = {
  route: RouteProp<StackParamList, 'FOOD'>;
};

export const Food = () => {
  const { params } = useRoute<NavigationProp['route']>();
  const { loading, data } = useQuery(FoodDocument, { variables: { uuid: params.foodUuid } });

  return loading || !data?.foods_by_pk ? (
    <LoadingView />
  ) : (
    <ScrollView style={styles.base}>
      <FoodDetail
        foodName={data.foods_by_pk.name}
        photos={data.foods_by_pk.food_details}
        description={data.foods_by_pk.description}
      />
    </ScrollView>
  );
};

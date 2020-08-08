import React from 'react';
import { ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { CategoryDocument } from 'types/graphql';
import { StackParamList } from 'types/navigation';
import { FoodsList } from 'components/FoodsList';
import { LoadingView } from 'components/LoadingView';

type NavigationProp = {
  route: RouteProp<StackParamList, 'CATEGORY'>;
};

export const Category = () => {
  const { params } = useRoute<NavigationProp['route']>();
  const { loading, data } = useQuery(CategoryDocument, { variables: { categoryUuid: params.categoryUuid } });

  return loading || !data ? (
    <LoadingView />
  ) : (
    <ScrollView>
      <FoodsList foods={data.foods} />
    </ScrollView>
  );
};

import React from 'react';
import { ScrollView, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParamList } from 'types/navigation';

type NavigationProp = {
  route: RouteProp<StackParamList, 'CATEGORY'>;
};

export const Category = () => {
  const { params } = useRoute<NavigationProp['route']>();

  return (
    <ScrollView>
      <Text>Category {params.categoryName}</Text>
    </ScrollView>
  );
};

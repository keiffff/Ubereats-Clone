import React from 'react';
import { ScrollView, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParamList } from 'types/navigation';

type NavigationProp = {
  route: RouteProp<StackParamList, 'FOOD'>;
};

export const Food = () => {
  const { params } = useRoute<NavigationProp['route']>();

  return (
    <ScrollView>
      <Text>{params.foodName}</Text>
    </ScrollView>
  );
};

import React from 'react';
import { ScrollView, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParamList } from 'types/navigation';

type NavigationProp = {
  route: RouteProp<StackParamList, 'ORDER'>;
};

export const Order = () => {
  const { params } = useRoute<NavigationProp['route']>();

  return (
    <ScrollView>
      <Text>Preparing your order...</Text>
      <Text>{params.orderUuid}</Text>
    </ScrollView>
  );
};

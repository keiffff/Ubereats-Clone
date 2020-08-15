import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useCurrentCart } from 'providers/CurrentCart';

export const Cart = () => {
  const { cartFoods } = useCurrentCart();

  return (
    <ScrollView style={styles.base}>
      {cartFoods.map(({ food, count }, i) => (
        <View key={i}>
          <Text>{count}</Text>
          <Text>{food.name}</Text>
          <Text>{food.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

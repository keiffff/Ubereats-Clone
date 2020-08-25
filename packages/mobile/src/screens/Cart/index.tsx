import React, { useMemo, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useMutation } from '@apollo/client';
import { OrderPaymentDocument } from './index.graphql';
import { styles } from './styles';
import { useCurrentCart } from 'providers/CurrentCart';

export const Cart = () => {
  const { cartFoods } = useCurrentCart();
  const [orderPayment, { loading }] = useMutation(OrderPaymentDocument);
  const totalPrice = useMemo(() => cartFoods.reduce((acc, { food, count }) => acc + food.price * count, 0), [
    cartFoods,
  ]);
  const handlePressPlaceOrder = useCallback(() => orderPayment(), [orderPayment]);

  return (
    <>
      <ScrollView style={styles.base}>
        <View style={styles.cartFoodsContainer}>
          {cartFoods.map(({ food, count }, i) => (
            <View key={i} style={styles.cartFood}>
              <View style={styles.cartFoodInfo}>
                <View style={styles.cartFoodCount}>
                  <Text style={styles.cartFoodCountText}>{count}</Text>
                </View>
                <Text style={styles.cartFoodNameText} numberOfLines={1}>
                  {food.name}
                </Text>
              </View>
              <Text style={styles.cartFoodPriceText}>${food.price}</Text>
            </View>
          ))}
          <View style={styles.cartFood}>
            <Text style={styles.cartFoodNameText}>Total</Text>
            <Text style={styles.cartFoodPriceText}>${totalPrice}</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.placeOrderButton}
        disabled={!cartFoods.length || loading}
        onPress={handlePressPlaceOrder}
      >
        <Text style={styles.placeOrderButtonText}>PLACE ORDER</Text>
      </TouchableOpacity>
    </>
  );
};

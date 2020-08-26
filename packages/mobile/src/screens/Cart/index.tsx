import React, { useMemo, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
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
          {cartFoods.length ? (
            <>
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
            </>
          ) : (
            <View style={styles.emptyCartContainer}>
              <Text style={styles.emptyCartText}>Empty Cart</Text>
              <Text style={styles.emptyCartTextSub}>
                Your cart is currently empty. The food items you add to your cart will show here.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      {cartFoods.length ? (
        <TouchableOpacity style={styles.placeOrderButton} disabled={loading} onPress={handlePressPlaceOrder}>
          {!loading ? (
            <Text style={styles.placeOrderButtonText}>PLACE ORDER</Text>
          ) : (
            <ActivityIndicator color="#ffffff" />
          )}
        </TouchableOpacity>
      ) : null}
    </>
  );
};

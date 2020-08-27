import React, { useMemo, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrderPaymentDocument } from './index.graphql';
import { styles } from './styles';
import { useCurrentCart } from 'providers/CurrentCart';
import { PlacingOrderModal } from 'components/PlacingOrderModal';
import { useCurrentUser } from 'providers/CurrentUser';
import { StackParamList } from 'types/navigation';
import { routes } from 'constants/routes';
import { useErrorFeedback } from 'hooks/useErrorFeedback';

type NavigationProp = {
  navigation: StackNavigationProp<StackParamList, 'ORDER'>;
};

export const Cart = () => {
  const { firstName, lastName } = useCurrentUser();
  const { cartFoods } = useCurrentCart();
  const { navigate } = useNavigation<NavigationProp['navigation']>();
  const [orderPayment, { loading, error }] = useMutation(OrderPaymentDocument);
  const totalPrice = useMemo(() => cartFoods.reduce((acc, { food, count }) => acc + food.price * count, 0), [
    cartFoods,
  ]);
  const handlePressPlaceOrder = useCallback(async () => {
    const { data } = await orderPayment();
    if (!data?.orderPayment.orderUuid) return;
    navigate(routes.order, { orderUuid: data.orderPayment.orderUuid });
  }, [orderPayment, navigate]);

  useErrorFeedback({ message: 'failed to order', enabled: !!error });

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
        <PlacingOrderModal
          open={loading}
          orderedUserName={`${firstName} ${lastName}`}
          orderedItems={cartFoods.map(({ count, food }) => ({ count, name: food.name }))}
        />
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

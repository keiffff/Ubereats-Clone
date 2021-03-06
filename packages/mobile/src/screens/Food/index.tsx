import React, { useState, useCallback, useMemo } from 'react';
import { ScrollView, View, Text, ActivityIndicator, Alert } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQuery, useMutation } from '@apollo/client';
import { StackParamList } from 'types/navigation';
import { GetFoodByUuidDocument, CreateCartDocument, CreateCartFoodDocument } from './index.graphql';
import { FoodDetail } from 'components/FoodDetail';
import { Counter } from 'components/Counter';
import { styles } from './styles';
import { LoadingView } from 'components/LoadingView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useCurrentUser } from 'providers/CurrentUser';
import { useCurrentCart } from 'providers/CurrentCart';
import { routes } from 'constants/routes';
import { useErrorFeedback } from 'hooks/useErrorFeedback';
import { sleep } from 'helpers/sleep';

type NavigationProp = {
  navigation: StackNavigationProp<StackParamList, 'CART'>;
  route: RouteProp<StackParamList, 'FOOD'>;
};

const MAX_COUNT_TO_ADD_TO_CART = 99;
const WAITING_FOR_NEW_CART_ITEM_SUBSCRIBED_MSEC = 500;

export const Food = () => {
  const { navigate } = useNavigation<NavigationProp['navigation']>();
  const { params } = useRoute<NavigationProp['route']>();
  const { userId } = useCurrentUser();
  const { cartUuid } = useCurrentCart();
  const { loading: getFoodByUuidLoading, data, error } = useQuery(GetFoodByUuidDocument, {
    variables: { uuid: params.foodUuid },
  });
  const [createCart, { loading: createCartLoading }] = useMutation(CreateCartDocument);
  const [createCartFood, { loading: createCartFoodLoading }] = useMutation(CreateCartFoodDocument);
  const [count, setCount] = useState(0);
  const handlePressIncrement = useCallback(() => setCount((prev) => prev + 1), []);
  const handlePressDecrement = useCallback(() => setCount((prev) => prev - 1), []);
  const totalPrice = useMemo(() => count * (data?.foods_by_pk?.price ?? 0), [count, data?.foods_by_pk?.price]);
  const handlePressAddToCart = useCallback(async () => {
    if (!data?.foods_by_pk?.uuid || !count) return;
    const foodUuid = data.foods_by_pk.uuid;
    try {
      if (cartUuid) {
        await createCartFood({
          variables: {
            cartUuid,
            foodUuid,
            count,
          },
        });
      } else {
        await createCart({
          variables: {
            userId,
            cartFoods: {
              data: [{ food_uuid: foodUuid, count }],
            },
          },
        });
      }
    } catch {
      Alert.alert('Error', 'failed to add to cart');
    }
    await sleep(WAITING_FOR_NEW_CART_ITEM_SUBSCRIBED_MSEC);
    navigate(routes.cart);
  }, [data?.foods_by_pk, count, createCart, userId, cartUuid, createCartFood, navigate]);

  useErrorFeedback({ message: 'failed to load food info', enabled: !!error });

  return getFoodByUuidLoading || !data?.foods_by_pk ? (
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
      <View style={styles.addToCartContainer}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>${totalPrice}</Text>
        </View>
        <View style={styles.addToCartButtonContainer}>
          <TouchableOpacity
            style={styles.addToCartButton}
            disabled={!count || createCartLoading || createCartFoodLoading}
            onPress={handlePressAddToCart}
          >
            {!createCartLoading && !createCartFoodLoading ? (
              <Text style={styles.addToCartButtontext}>Add to Cart</Text>
            ) : (
              <ActivityIndicator color="#ffffff" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

import React, { useState, useCallback, useMemo } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
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

type NavigationProp = {
  route: RouteProp<StackParamList, 'FOOD'>;
};

const MAX_COUNT_TO_ADD_TO_CART = 99;

export const Food = () => {
  const { params } = useRoute<NavigationProp['route']>();
  const { userId } = useCurrentUser();
  const { cartUuid } = useCurrentCart();
  const { loading: getFoodByUuidLoading, data } = useQuery(GetFoodByUuidDocument, {
    variables: { uuid: params.foodUuid },
  });
  const [createCart, { loading: createCartLoading }] = useMutation(CreateCartDocument);
  const [createCartFood, { loading: createCartFoodLoading }] = useMutation(CreateCartFoodDocument);
  const [count, setCount] = useState(0);
  const handlePressIncrement = useCallback(() => setCount((prev) => prev + 1), []);
  const handlePressDecrement = useCallback(() => setCount((prev) => prev - 1), []);
  const totalPrice = useMemo(() => count * (data?.foods_by_pk?.price ?? 0), [count, data?.foods_by_pk?.price]);
  const handlePressAddToCart = useCallback(() => {
    if (!data?.foods_by_pk?.uuid || !count) return;
    const foodUuid = data.foods_by_pk.uuid;
    if (cartUuid) {
      createCartFood({
        variables: {
          cartUuid,
          foodUuid,
          count,
        },
      });
    } else {
      createCart({
        variables: {
          userId,
          cartFoods: {
            data: [{ food_uuid: foodUuid, count }],
          },
        },
      });
    }
  }, [data?.foods_by_pk, count, createCart, userId, cartUuid, createCartFood]);

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

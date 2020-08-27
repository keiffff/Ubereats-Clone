import React, { useMemo } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { StackParamList } from 'types/navigation';
import { GetOrderFoodsByOrderUuidDocument } from './index.graphql';
import { styles } from './styles';
import { LoadingView } from 'components/LoadingView';

type NavigationProp = {
  route: RouteProp<StackParamList, 'ORDER'>;
};

export const Order = () => {
  const { params } = useRoute<NavigationProp['route']>();
  const { data, loading } = useQuery(GetOrderFoodsByOrderUuidDocument, { variables: { orderUuid: params.orderUuid } });
  const totalPrice = useMemo(
    () => data?.order_foods.reduce((acc, { food, count }) => acc + food.price * count, 0) ?? 0,
    [data?.order_foods],
  );

  return loading || !data?.order_foods ? (
    <LoadingView />
  ) : (
    <ScrollView style={styles.base}>
      <View style={styles.orderStatusContainer}>
        <Text style={styles.orderStatusText}>Preparing your order...</Text>
      </View>
      <View style={styles.orderImageContainer}>
        <Image source={require('assets/cooking-icon.png')} style={styles.orderImage} />
      </View>
      <View style={styles.orderSummaryContainer}>
        <Text style={styles.orderSummaryCaption}>Order Summary</Text>
        {data.order_foods.map(({ food, count }, i) => (
          <View key={i} style={styles.orderedItem}>
            <View style={styles.orderedCount}>
              <Text>{count}</Text>
            </View>
            <Text numberOfLines={1}>{food.name}</Text>
          </View>
        ))}
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>Total</Text>
          <Text style={styles.totalPrice}>${totalPrice}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

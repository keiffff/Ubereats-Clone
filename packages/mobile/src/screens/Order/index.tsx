import React, { useMemo } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useQuery, useSubscription } from '@apollo/client';
import { format, addMinutes } from 'date-fns';
import { StackParamList } from 'types/navigation';
import { OrderStatusEnum } from 'types/graphql';
import { GetOrderByUuidDocument, SubscribeOrderStatusByUuidDocument } from './index.graphql';
import { styles } from './styles';
import { LoadingView } from 'components/LoadingView';
import { ProgressBar } from 'components/ProgressBar';

type NavigationProp = {
  route: RouteProp<StackParamList, 'ORDER'>;
};

const orderStatusProgress: Record<OrderStatusEnum, number> = {
  canceled: 0,
  waiting: 33,
  completed: 100,
};

export const Order = () => {
  const { params } = useRoute<NavigationProp['route']>();
  const { data: getOrderByUuidData, loading: getOrderByUuidLoading } = useQuery(GetOrderByUuidDocument, {
    variables: { orderUuid: params.orderUuid },
  });
  const { data: subscribeOrderStatusData, loading: subscribeOrderStatusLoading } = useSubscription(
    SubscribeOrderStatusByUuidDocument,
    {
      variables: {
        orderUuid: params.orderUuid,
      },
    },
  );
  const totalPrice = useMemo(
    () =>
      getOrderByUuidData?.orders_by_pk?.order_foods.reduce((acc, { food, count }) => acc + food.price * count, 0) ?? 0,
    [getOrderByUuidData?.orders_by_pk?.order_foods],
  );

  const initialEstimatedArrivalTime = useMemo(
    () =>
      getOrderByUuidData?.orders_by_pk?.created_at
        ? format(addMinutes(new Date(getOrderByUuidData?.orders_by_pk?.created_at), 30), 'HH:mm')
        : null,
    [getOrderByUuidData?.orders_by_pk?.created_at],
  );

  return getOrderByUuidLoading ||
    subscribeOrderStatusLoading ||
    !getOrderByUuidData?.orders_by_pk?.order_foods ||
    !subscribeOrderStatusData?.orders_by_pk?.status ? (
    <LoadingView />
  ) : (
    <ScrollView style={styles.base}>
      <View style={styles.orderStatusContainer}>
        <View style={styles.estimatedArrivalTimeContainer}>
          <Text style={styles.estimatedArrivalTime}>{initialEstimatedArrivalTime}</Text>
          <Text style={styles.estimatedArrivalText}>Estimated Arrival</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={orderStatusProgress[subscribeOrderStatusData.orders_by_pk.status]} />
        </View>
        <Text style={styles.orderStatusText}>Preparing your order...</Text>
      </View>
      <View style={styles.orderImageContainer}>
        <Image source={require('assets/cooking-icon.png')} style={styles.orderImage} />
      </View>
      <View style={styles.orderSummaryContainer}>
        <Text style={styles.orderSummaryCaption}>Order Summary</Text>
        {getOrderByUuidData.orders_by_pk.order_foods.map(({ food, count }, i) => (
          <View key={i} style={styles.orderedItem}>
            <View style={styles.orderedCount}>
              <Text>{count}</Text>
            </View>
            <Text numberOfLines={1} style={styles.orderedFoodName}>
              {food.name}
            </Text>
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

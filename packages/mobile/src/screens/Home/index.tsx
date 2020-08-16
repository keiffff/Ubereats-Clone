import React, { useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQuery } from '@apollo/client';
import { PopularFoodCategoriesList } from 'components/PopularFoodCategoriesList';
import { BestDealsList } from 'components/BestDealsList';
import { PopularFoodsList } from 'components/PopularFoodsList';
import { GetFoodCategoriesAndOrderFoodsDocument } from './index.graphql';
import { StackParamList } from 'types/navigation';
import { styles } from './styles';
import { LoadingView } from 'components/LoadingView';
import { routes } from 'constants/routes';
import { useErrorFeedback } from 'hooks/useErrorFeedback';

type NavigationProp = {
  navigation: StackNavigationProp<StackParamList, 'CATEGORY' | 'FOOD'>;
};

export const Home = () => {
  const { navigate } = useNavigation<NavigationProp['navigation']>();
  const { data, loading, error } = useQuery(GetFoodCategoriesAndOrderFoodsDocument);
  const handlePressCategory = useCallback(
    (uuid: string) => {
      const foodCategory = data?.food_categories.find((category) => category.uuid === uuid);
      if (!foodCategory) return;
      navigate(routes.category, { categoryUuid: uuid, categoryName: foodCategory.name });
    },
    [navigate, data?.food_categories],
  );
  const handlePressFood = useCallback(
    (uuid: string) => {
      const food = data?.order_foods.find((orderFood) => orderFood.food.uuid === uuid)?.food;
      if (!food) return;
      navigate(routes.food, { foodUuid: food.uuid, foodName: food.name });
    },
    [navigate, data?.order_foods],
  );

  useErrorFeedback({ message: 'failed to load food info', enabled: !!error });

  return loading || !data ? (
    <LoadingView />
  ) : (
    <ScrollView style={styles.base}>
      <View style={styles.popularCategoriesContainer}>
        <View style={styles.contentTitleWrapper}>
          <Text style={styles.contentTitle}>Popular Categories</Text>
        </View>
        <View style={styles.popularCategoriesListContainer}>
          <PopularFoodCategoriesList categories={data.food_categories} onPressCategory={handlePressCategory} />
        </View>
      </View>
      <View style={styles.contentTitleWrapper}>
        <Text style={styles.contentTitle}>Best Deals</Text>
      </View>
      <View style={styles.bestDealsListContainer}>
        <BestDealsList categories={data.food_categories} onPressCategory={handlePressCategory} />
      </View>
      <View style={styles.contentTitleWrapper}>
        <Text style={styles.contentTitle}>Most Popular</Text>
      </View>
      <View style={styles.popularFoodListContainer}>
        <PopularFoodsList foods={data.order_foods.map(({ food }) => food)} onPressFood={handlePressFood} />
      </View>
    </ScrollView>
  );
};

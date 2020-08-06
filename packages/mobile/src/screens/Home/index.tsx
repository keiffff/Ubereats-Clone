import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { PopularFoodCategoriesList } from 'components/PopularFoodCategoriesList';
import { BestDealsList } from 'components/BestDealsList';
import { PopularFoodsList } from 'components/PopularFoodsList';
import { HomeDocument } from 'types/graphql';
import { styles } from './styles';
import { LoadingView } from 'components/LoadingView';

export const Home = () => {
  const { data, loading } = useQuery(HomeDocument);

  return loading || !data ? (
    <LoadingView />
  ) : (
    <ScrollView style={styles.base}>
      <View style={styles.popularCategoriesContainer}>
        <View style={styles.contentTitleWrapper}>
          <Text style={styles.contentTitle}>Popular Categories</Text>
        </View>
        <View style={styles.popularCategoriesListContainer}>
          <PopularFoodCategoriesList categories={data.food_categories} />
        </View>
      </View>
      <View style={styles.contentTitleWrapper}>
        <Text style={styles.contentTitle}>Best Deals</Text>
      </View>
      <View style={styles.bestDealsListContainer}>
        <BestDealsList categories={data.food_categories} />
      </View>
      <View style={styles.contentTitleWrapper}>
        <Text style={styles.contentTitle}>Most Popular</Text>
      </View>
      <View style={styles.popularFoodListContainer}>
        <PopularFoodsList foods={data.order_foods.map(({ food }) => food)} />
      </View>
    </ScrollView>
  );
};

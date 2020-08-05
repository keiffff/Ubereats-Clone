import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { PopularFoodCategoriesList } from 'components/PopularFoodCategoriesList';
import { BestDealsList } from 'components/BestDealsList';
import { HomeDocument } from 'types/graphql';
import { styles } from './styles';
import { LoadingView } from 'components/LoadingView';

export const Home = () => {
  const { data, loading } = useQuery(HomeDocument);

  return loading || !data ? (
    <LoadingView />
  ) : (
    <View style={styles.base}>
      <View style={styles.popularCategoriesContainer}>
        <View style={styles.contentTitleWrapper}>
          <Text style={styles.contentTitle}>Popular Categories</Text>
        </View>
        <View style={styles.popularCategoriesListContainer}>
          <PopularFoodCategoriesList categories={data.food_categories} />
        </View>
      </View>
      <View>
        <View style={styles.contentTitleWrapper}>
          <Text style={styles.contentTitle}>Best Deals</Text>
        </View>
        <BestDealsList categories={data.food_categories} />
      </View>
    </View>
  );
};

import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { PopularFoodCategoriesList } from 'components/PopularFoodCategoriesList';
import { GetFoodCategoriesDocument } from 'types/graphql';
import { styles } from './styles';
import { LoadingView } from 'components/LoadingView';

export const Home = () => {
  const { data, loading } = useQuery(GetFoodCategoriesDocument);

  return loading || !data ? (
    <LoadingView />
  ) : (
    <View style={styles.base}>
      <View style={styles.popularCategoriesListContainer}>
        <View style={styles.contentTitleWrapper}>
          <Text style={styles.contentTitle}>Popular Categories</Text>
        </View>
        <PopularFoodCategoriesList categories={data.food_categories} />
      </View>
    </View>
  );
};

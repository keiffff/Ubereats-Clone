import React from 'react';
import { View, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { MenuDocument } from 'types/graphql';
import { LoadingView } from 'components/LoadingView';
import { FoodCategoryImageBackground } from 'components/FoodCategoryImageBackground';
import { styles } from './styles';
import { windowProps } from 'constants/dimensions';

export const Menu = () => {
  const { data, loading } = useQuery(MenuDocument);
  const foodCategoryItemWidth = windowProps.width / 2 - 24;

  return loading || !data ? (
    <LoadingView />
  ) : (
    <ScrollView style={styles.base}>
      <View style={styles.foodCategoriesContainer}>
        {data.food_categories.map(({ uuid, name, photo }) => (
          <FoodCategoryImageBackground
            key={uuid}
            name={name}
            photo={photo}
            style={[styles.foodCategoryItem, { width: foodCategoryItemWidth }]}
          />
        ))}
      </View>
    </ScrollView>
  );
};

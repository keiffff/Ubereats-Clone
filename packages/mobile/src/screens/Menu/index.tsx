import React, { useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQuery } from '@apollo/client';
import { MenuDocument } from './query.graphql';
import { LoadingView } from 'components/LoadingView';
import { StackParamList } from 'types/navigation';
import { FoodCategoryImageBackground } from 'components/FoodCategoryImageBackground';
import { styles } from './styles';
import { windowProps } from 'constants/dimensions';
import { routes } from 'constants/routes';

type NavigationProp = {
  navigation: StackNavigationProp<StackParamList, 'CATEGORY'>;
};

export const Menu = () => {
  const { navigate } = useNavigation<NavigationProp['navigation']>();
  const { data, loading } = useQuery(MenuDocument);
  const handlePressCategory = useCallback(
    (uuid: string) => {
      const foodCategory = data?.food_categories.find((category) => category.uuid === uuid);
      if (!foodCategory) return;
      navigate(routes.category, { categoryUuid: uuid, categoryName: foodCategory.name });
    },
    [navigate, data?.food_categories],
  );
  const foodCategoryItemWidth = windowProps.width / 2 - 24;

  return loading || !data ? (
    <LoadingView />
  ) : (
    <ScrollView style={styles.base}>
      <View style={styles.foodCategoriesContainer}>
        {data.food_categories.map(({ uuid, ...rest }) => (
          <FoodCategoryImageBackground
            key={uuid}
            uuid={uuid}
            {...rest}
            onPressCategory={handlePressCategory}
            style={[styles.foodCategoryItem, { width: foodCategoryItemWidth }]}
          />
        ))}
      </View>
    </ScrollView>
  );
};

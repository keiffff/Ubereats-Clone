import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import { styles } from './styles';

type Props = {
  categories: (Pick<ItemProps, 'name' | 'photo'> & { uuid: string })[];
};

type ItemProps = {
  name: string;
  photo: string;
  lastItem: boolean;
};

export const PopularFoodCategoriesList = ({ categories }: Props) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item, index }) => <Item {...item} lastItem={categories.length === index + 1} />}
      keyExtractor={(item) => item.uuid}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.base}
    />
  );
};

const Item = ({ name, photo, lastItem }: ItemProps) => {
  return (
    <View style={[styles.categoryItem, lastItem && styles.categoryItemLast]}>
      <Image source={{ uri: photo }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{name}</Text>
    </View>
  );
};

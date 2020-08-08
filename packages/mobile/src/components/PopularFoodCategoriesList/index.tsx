import React, { useCallback } from 'react';
import { FlatList, Text, Image } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  categories: Pick<ItemProps, 'uuid' | 'name' | 'photo'>[];
  onPressCategory: ItemProps['onPressCategory'];
};

type ItemProps = {
  uuid: string;
  name: string;
  photo: string;
  lastItem: boolean;
  onPressCategory: (uuid: string) => void;
};

export const PopularFoodCategoriesList = ({ categories, onPressCategory }: Props) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item, index }) => (
        <Item {...item} lastItem={categories.length === index + 1} onPressCategory={onPressCategory} />
      )}
      keyExtractor={(item) => item.uuid}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.base}
    />
  );
};

const Item = ({ uuid, name, photo, lastItem, onPressCategory }: ItemProps) => {
  const handlePressCategory = useCallback(() => onPressCategory(uuid), [uuid, onPressCategory]);

  return (
    <TouchableOpacity style={[styles.categoryItem, lastItem && styles.categoryItemLast]} onPress={handlePressCategory}>
      <Image source={{ uri: photo }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
  );
};

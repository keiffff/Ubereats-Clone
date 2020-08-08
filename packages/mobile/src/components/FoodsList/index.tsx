import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  foods: Pick<ItemProps, 'uuid' | 'name' | 'photo' | 'price' | 'description'>[];
  onPressFood: ItemProps['onPressFood'];
};

type ItemProps = {
  uuid: string;
  name: string;
  photo: string;
  price: number;
  description: string;
  lastItem: boolean;
  onPressFood: (uuid: string) => void;
};

export const FoodsList = ({ foods, onPressFood }: Props) => {
  return (
    <View style={styles.base}>
      {foods.map(({ uuid, ...rest }, i) => (
        <Item key={uuid} uuid={uuid} {...rest} lastItem={foods.length === i + 1} onPressFood={onPressFood} />
      ))}
    </View>
  );
};

const Item = ({ uuid, name, photo, price, description, lastItem, onPressFood }: ItemProps) => {
  const handlePressFood = useCallback(() => onPressFood(uuid), [onPressFood, uuid]);

  return (
    <TouchableOpacity style={[styles.itemContainer, lastItem && styles.itemContainerLast]} onPress={handlePressFood}>
      <View style={styles.itemInfoContainer}>
        <View style={styles.itemNameContainer}>
          <Text style={styles.itemName} numberOfLines={2}>
            {name}
          </Text>
        </View>
        <View style={styles.itemDescriptionContainer}>
          <Text numberOfLines={3}>{description}</Text>
          <Text style={styles.itemPrice}>${price}</Text>
        </View>
      </View>
      <Image style={styles.itemImage} source={{ uri: photo }} />
    </TouchableOpacity>
  );
};

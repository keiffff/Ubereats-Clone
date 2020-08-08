import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

type Props = {
  foods: (Pick<ItemProps, 'name' | 'photo' | 'price' | 'description'> & { uuid: string })[];
};

type ItemProps = {
  name: string;
  photo: string;
  price: number;
  description: string;
  lastItem: boolean;
};

export const FoodsList = ({ foods }: Props) => {
  return (
    <View style={styles.base}>
      {foods.map(({ uuid, ...rest }, i) => (
        <Item key={uuid} {...rest} lastItem={foods.length === i + 1} />
      ))}
    </View>
  );
};

const Item = ({ name, photo, price, description, lastItem }: ItemProps) => {
  return (
    <View style={[styles.itemContainer, lastItem && styles.itemContainerLast]}>
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
    </View>
  );
};

import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  foods: Pick<ItemProps, 'uuid' | 'name' | 'photo' | 'price'>[];
  onPressFood: ItemProps['onPressFood'];
};

type ItemProps = {
  uuid: string;
  name: string;
  photo: string;
  price: number;
  onPressFood: (uuid: string) => void;
};

export const PopularFoodsList = ({ foods, onPressFood }: Props) => {
  return (
    <View style={styles.base}>
      {foods.map(({ uuid, ...rest }) => (
        <Item key={uuid} uuid={uuid} {...rest} onPressFood={onPressFood} />
      ))}
    </View>
  );
};

const Item = ({ uuid, name, photo, price, onPressFood }: ItemProps) => {
  const handlePressFood = useCallback(() => onPressFood(uuid), [onPressFood, uuid]);

  return (
    <TouchableOpacity onPress={handlePressFood}>
      <Image style={styles.itemImage} source={{ uri: photo }} />
      <View style={styles.itemLabelsContainer}>
        <Text style={styles.itemLabel}>{name}</Text>
        <Text style={styles.itemLabel}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

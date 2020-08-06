import React, { useState, useMemo, ComponentProps, useRef, useCallback } from 'react';
import { View, Text, FlatList, Image, SectionList, Dimensions } from 'react-native';
import { styles } from './styles';

type Props = {
  foods: (ItemProps & { uuid: string })[];
};

type ItemProps = {
  name: string;
  photo: string;
  price: number;
};

export const PopularFoodsList = ({ foods }: Props) => {
  return (
    <View style={styles.base}>
      {foods.map(({ uuid, name, photo, price }) => (
        <Item key={uuid} name={name} photo={photo} price={price} />
      ))}
    </View>
  );
};

const Item = ({ name, photo, price }: ItemProps) => {
  return (
    <View>
      <Image style={styles.itemImage} source={{ uri: photo }} />
      <View style={styles.itemLabelsContainer}>
        <Text style={styles.itemLabel}>{name}</Text>
        <Text style={styles.itemLabel}>${price}</Text>
      </View>
    </View>
  );
};

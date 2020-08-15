import React, { useMemo } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { styles } from './styles';
import { useCurrentCart } from 'providers/CurrentCart';

export const ShoppingCartButton = () => {
  const { cartFoods } = useCurrentCart();
  const cartFoodCount = useMemo(() => cartFoods.reduce((acc, { count }) => acc + count, 0), [cartFoods]);

  return (
    <TouchableOpacity style={styles.shoppingCartContainer}>
      <View style={styles.shoppingCartBadge}>
        <Text style={styles.shoppingCartBadgeText}>{cartFoodCount}</Text>
      </View>
      <Image source={require('assets/cart-icon.png')} style={styles.shoppingCartImage} />
    </TouchableOpacity>
  );
};

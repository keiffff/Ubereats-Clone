import React, { useMemo } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { Badge } from 'components/Badge';
import { useCurrentCart } from 'providers/CurrentCart';

export const ShoppingCartButton = () => {
  const { cartFoods } = useCurrentCart();
  const cartFoodCount = useMemo(() => cartFoods.reduce((acc, { count }) => acc + count, 0), [cartFoods]);

  return (
    <TouchableOpacity style={styles.shoppingCartContainer}>
      <Badge count={cartFoodCount} minCount={1} maxCount={99} />
      <Image source={require('assets/cart-icon.png')} style={styles.shoppingCartImage} />
    </TouchableOpacity>
  );
};

import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export const ShoppingCartButton = () => {
  return (
    <TouchableOpacity style={styles.shoppingCartContainer}>
      <Image source={require('assets/cart-icon.png')} style={styles.shoppingCartImage} />
    </TouchableOpacity>
  );
};

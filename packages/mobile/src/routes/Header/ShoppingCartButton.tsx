import React, { useMemo, useCallback } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from 'types/navigation';
import { styles } from './styles';
import { Badge } from 'components/Badge';
import { useCurrentCart } from 'providers/CurrentCart';
import { routes } from 'constants/routes';

type NavigationProp = {
  navigation: StackNavigationProp<StackParamList, 'CART'>;
};

export const ShoppingCartButton = () => {
  const { navigate } = useNavigation<NavigationProp['navigation']>();
  const { cartFoods } = useCurrentCart();
  const cartFoodCount = useMemo(() => cartFoods.reduce((acc, { count }) => acc + count, 0), [cartFoods]);
  const handlePress = useCallback(() => navigate(routes.cart), [navigate]);

  return (
    <TouchableOpacity style={styles.shoppingCartContainer} onPress={handlePress}>
      <Badge count={cartFoodCount} minCount={1} maxCount={99} />
      <Image source={require('assets/cart-icon.png')} style={styles.shoppingCartImage} />
    </TouchableOpacity>
  );
};

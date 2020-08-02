import React, { useCallback } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export const HamburgerButton = () => {
  const { dispatch } = useNavigation();
  const handlePress = useCallback(() => dispatch(DrawerActions.openDrawer()), [dispatch]);

  return (
    <TouchableOpacity style={styles.hamburgerButtonContainer} onPress={handlePress}>
      <Image source={require('assets/hamburger-menu-icon.png')} style={styles.hamburgerButtonImage} />
    </TouchableOpacity>
  );
};

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HamburgerButton } from '../Header/HamburgerButton';
import { ShoppingCartButton } from '../Header/ShoppingCartButton';
import { Menu } from 'screens/Menu';
import { routes } from 'constants/routes';

const Stack = createStackNavigator();

export const MenuNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.menu}
      component={Menu}
      options={{
        title: 'Menu',
        headerLeft: () => <HamburgerButton />,
        headerTitleAlign: 'center',
        headerRight: () => <ShoppingCartButton />,
      }}
    />
  </Stack.Navigator>
);

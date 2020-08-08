import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HamburgerButton } from '../Header/HamburgerButton';
import { ShoppingCartButton } from '../Header/ShoppingCartButton';
import { Home } from 'screens/Home';
import { Category } from 'screens/Category';
import { routes } from 'constants/routes';

const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.home}
      component={Home}
      options={{
        headerLeft: () => <HamburgerButton />,
        headerTitleAlign: 'center',
        headerRight: () => <ShoppingCartButton />,
      }}
    />
    <Stack.Screen
      name={routes.category}
      component={Category}
      options={{
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);

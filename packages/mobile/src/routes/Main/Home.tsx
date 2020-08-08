import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HamburgerButton } from '../Header/HamburgerButton';
import { ShoppingCartButton } from '../Header/ShoppingCartButton';
import { Home } from 'screens/Home';
import { Category } from 'screens/Category';
import { routes } from 'constants/routes';
import { StackParamList } from 'types/navigation';

const Stack = createStackNavigator<StackParamList>();

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.home}
      component={Home}
      options={{
        title: 'Home',
        headerLeft: () => <HamburgerButton />,
        headerTitleAlign: 'center',
        headerRight: () => <ShoppingCartButton />,
      }}
    />
    <Stack.Screen
      name={routes.category}
      component={Category}
      options={({ route }) => ({
        title: route.params.categoryName,
        headerTitleAlign: 'center',
        headerBackTitle: 'Back',
        headerTintColor: '#000000',
      })}
    />
  </Stack.Navigator>
);

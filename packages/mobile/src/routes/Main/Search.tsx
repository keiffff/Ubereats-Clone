import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HamburgerButton } from '../Header/HamburgerButton';
import { SearchTextInput } from '../Header/SearchTextInput';
import { ShoppingCartButton } from '../Header/ShoppingCartButton';
import { Search } from 'screens/Search';
import { routes } from 'constants/routes';

const Stack = createStackNavigator();

export const SearchNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.search}
      component={Search}
      options={{
        headerLeft: () => <HamburgerButton />,
        headerTitle: () => <SearchTextInput />,
        headerTitleAlign: 'center',
        headerRight: () => <ShoppingCartButton />,
      }}
    />
  </Stack.Navigator>
);

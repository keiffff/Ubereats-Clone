import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HamburgerButton } from '../Header/HamburgerButton';
import { Home } from 'screens/Home';

const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerLeft: () => <HamburgerButton />,
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);

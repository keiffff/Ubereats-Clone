import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeNavigator } from './Home';
import { routes } from 'constants/routes';

const DrawerStack = createDrawerNavigator();

export const Main = () => (
  <DrawerStack.Navigator>
    <DrawerStack.Screen name={routes.home} component={HomeNavigator} />
  </DrawerStack.Navigator>
);

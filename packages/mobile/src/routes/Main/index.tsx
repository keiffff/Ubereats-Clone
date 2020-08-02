import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeNavigator } from './Home';

const DrawerStack = createDrawerNavigator();

export const Main = () => (
  <DrawerStack.Navigator>
    <DrawerStack.Screen name="Home" component={HomeNavigator} />
  </DrawerStack.Navigator>
);

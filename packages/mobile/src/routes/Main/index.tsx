import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { routes } from 'constants/routes';
import { HomeNavigator } from './Home';
import { ShopIcon } from '../Drawer/ShopIcon';

const DrawerStack = createDrawerNavigator();

export const Main = () => (
  <DrawerStack.Navigator
    drawerContentOptions={{
      activeTintColor: '#000000',
      activeBackgroundColor: '#ffffff',
      contentContainerStyle: {
        flex: 1,
        justifyContent: 'center',
      },
    }}
  >
    <DrawerStack.Screen name={routes.home} component={HomeNavigator} options={{ drawerIcon: () => <ShopIcon /> }} />
  </DrawerStack.Navigator>
);

import React from 'react';
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { routes } from 'constants/routes';
import { HomeNavigator } from './Home';
import { MenuNavigator } from './Menu';
import { LogoutItem } from '../Drawer/LogoutItem';
import { ShopIcon } from '../Drawer/ShopIcon';
import { MenuIcon } from '../Drawer/MenuIcon';

const DrawerStack = createDrawerNavigator();

const drawerItemOptions = {
  activeTintColor: '#000000',
  activeBackgroundColor: '#ffffff',
  inactiveTintColor: '#000000',
  inactiveBackgroundColor: '#ffffff',
};

export const Main = () => (
  <DrawerStack.Navigator
    drawerContentOptions={{
      ...drawerItemOptions,
      contentContainerStyle: {
        flex: 1,
        justifyContent: 'center',
      },
    }}
    initialRouteName={routes.home}
    drawerContent={(props) => (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <LogoutItem {...drawerItemOptions} />
      </DrawerContentScrollView>
    )}
  >
    <DrawerStack.Screen name={routes.home} component={HomeNavigator} options={{ drawerIcon: () => <ShopIcon /> }} />
    <DrawerStack.Screen name={routes.menu} component={MenuNavigator} options={{ drawerIcon: () => <MenuIcon /> }} />
  </DrawerStack.Navigator>
);

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HamburgerButton } from '../Header/HamburgerButton';
import { ShoppingCartButton } from '../Header/ShoppingCartButton';
import { Menu } from 'screens/Menu';
import { Category } from 'screens/Category';
import { Food } from 'screens/Food';
import { Cart } from 'screens/Cart';
import { Order } from 'screens/Order';
import { routes } from 'constants/routes';
import { StackParamList } from 'types/navigation';

const Stack = createStackNavigator<Pick<StackParamList, 'MENU' | 'CATEGORY' | 'FOOD' | 'CART' | 'ORDER'>>();

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
    <Stack.Screen
      name={routes.food}
      component={Food}
      options={({ route }) => ({
        title: route.params.foodName,
        headerTitleAlign: 'center',
        headerTintColor: '#000000',
      })}
    />
    <Stack.Screen
      name={routes.cart}
      component={Cart}
      options={{
        title: 'Your Cart',
        headerTitleAlign: 'center',
        headerBackTitle: 'Back',
        headerTintColor: '#000000',
      }}
    />
    <Stack.Screen
      name={routes.order}
      component={Order}
      options={{
        title: 'Your Order',
        headerTitleAlign: 'center',
        headerBackTitle: 'Back',
        headerTintColor: '#000000',
      }}
    />
  </Stack.Navigator>
);

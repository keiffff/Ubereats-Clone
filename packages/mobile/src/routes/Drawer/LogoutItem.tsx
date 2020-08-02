import React, { ComponentProps } from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { routes } from 'constants/routes';
import { LogoutIcon } from './LogoutIcon';
import { Alert } from 'react-native';

type Props = Omit<ComponentProps<typeof DrawerItem>, 'label' | 'icon' | 'onPress'>;

export const LogoutItem = (props: Props) => {
  return (
    <DrawerItem
      label={routes.logout}
      icon={() => <LogoutIcon />}
      onPress={() => {
        Alert.alert('Are you sure you want to log out ?');
      }}
      {...props}
    />
  );
};

import React, { ComponentProps } from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { routes } from 'constants/routes';
import { LogoutIcon } from './LogoutIcon';
import { Alert } from 'react-native';
import { useAuth } from 'providers/Auth';

type Props = Omit<ComponentProps<typeof DrawerItem>, 'label' | 'icon' | 'onPress'>;

export const LogoutItem = (props: Props) => {
  const { handleLogout } = useAuth();

  return (
    <DrawerItem
      label={routes.logout}
      icon={() => <LogoutIcon />}
      onPress={() => {
        Alert.alert('Log out', 'Are you sure you want to log out?', [
          { text: 'OK', onPress: handleLogout },
          { text: 'Cancel' },
        ]);
      }}
      {...props}
    />
  );
};

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from 'providers/Auth';
import { LoadingView } from 'components/LoadingView';
import { Private } from './Private';
import { Public } from './Public';

export const Routes = () => {
  const { authenticated, handleLogin, loading } = useAuth();

  return (
    <NavigationContainer>
      {loading ? <LoadingView /> : authenticated ? <Private /> : <Public onPressLogin={handleLogin} />}
    </NavigationContainer>
  );
};

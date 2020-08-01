import React from 'react';
import { useAuth } from 'providers/Auth';
import { LoadingView } from 'components/LoadingView';
import { Private } from './Private';
import { Public } from './Public';

export const Routes = () => {
  const { authenticated, handleLogin, loading } = useAuth();

  return loading ? <LoadingView /> : authenticated ? <Private /> : <Public onMounted={handleLogin} />;
};

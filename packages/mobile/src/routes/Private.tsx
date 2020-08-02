import React from 'react';
import { useAuth } from 'providers/Auth';
import { ApolloProvider } from 'providers/Apollo';
import { CurrentUserProvider } from 'providers/CurrentUser';
import { Main } from './Main';

export const Private = () => {
  const { token } = useAuth();

  return (
    <ApolloProvider accessToken={token}>
      <CurrentUserProvider>
        <Main />
      </CurrentUserProvider>
    </ApolloProvider>
  );
};

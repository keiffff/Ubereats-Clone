import React from 'react';
import { useAuth } from 'providers/Auth';
import { ApolloProvider } from 'providers/Apollo';
import { CurrentUserProvider } from 'providers/CurrentUser';
import { CurrentCartProvider } from 'providers/CurrentCart';
import { Main } from './Main';

export const Private = () => {
  const { token } = useAuth();

  return (
    <ApolloProvider accessToken={token}>
      <CurrentUserProvider>
        <CurrentCartProvider>
          <Main />
        </CurrentCartProvider>
      </CurrentUserProvider>
    </ApolloProvider>
  );
};

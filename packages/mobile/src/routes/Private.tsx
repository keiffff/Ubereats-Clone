import React from 'react';
import { useAuth } from 'providers/Auth';
import { ApolloProvider } from 'providers/Apollo';
import { CurrentUserProvider } from 'providers/CurrentUser';
import { Test } from 'components/Test';

export const Private = () => {
  const { token } = useAuth();

  return (
    <ApolloProvider accessToken={token}>
      <CurrentUserProvider>
        <Test />
      </CurrentUserProvider>
    </ApolloProvider>
  );
};

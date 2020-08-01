import React from 'react';
import { useAuth } from 'providers/Auth';
import { ApolloProvider } from 'providers/Apollo';
import { Test } from 'components/Test';

export const Private = () => {
  const { token } = useAuth();

  return (
    <ApolloProvider accessToken={token}>
      <Test />
    </ApolloProvider>
  );
};

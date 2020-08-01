import React, { ReactNode } from 'react';
import { ApolloProvider as ApolloProviderOrigin, ApolloClient, HttpLink, split, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { environment } from 'constants/environment';

type Props = {
  children: ReactNode;
  accessToken?: string;
};

const [searchValue, replaceValue] = environment.hasuraGraphqlEndpoint.startsWith('https')
  ? [/^https?/, 'wss']
  : [/^http?/, 'ws'];

const wsUri = environment.hasuraGraphqlEndpoint.replace(searchValue, replaceValue);

function createApolloClient(accessToken?: string) {
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  const wsLink = new WebSocketLink({
    uri: wsUri,
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  });

  const httpLink = new HttpLink({
    uri: environment.hasuraGraphqlEndpoint,
    headers,
  });

  const terminatingLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);

      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink,
  );

  return new ApolloClient({ link: terminatingLink, cache: new InMemoryCache() });
}

export const ApolloProvider = ({ children, accessToken }: Props) => (
  <ApolloProviderOrigin client={createApolloClient(accessToken)}>{children}</ApolloProviderOrigin>
);

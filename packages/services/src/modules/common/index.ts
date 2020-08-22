import { gql } from 'apollo-server';
import { GraphQLModule } from '@graphql-modules/core';
import { ProviderScope } from '@graphql-modules/di';
import { Resolvers } from 'types/graphql';
import { GraphQLClient } from './graphQLClientProvider';
import { environment } from 'constants/environment';

const typeDefs = gql`
  type Query {
    _dummy: Boolean
  }

  type Mutation {
    _dummy: Boolean
  }
`;

const resolvers: Resolvers = {};

export const hasuraClient = new GraphQLClient(environment.hasuraGraphqlEndpoint, {
  headers: {
    'x-hasura-admin-secret': environment.hasuraGraphqlAdminSecret,
  },
});

export default new GraphQLModule({
  name: 'common',
  typeDefs,
  resolvers,
  providers: () => [
    {
      provide: GraphQLClient,
      scope: ProviderScope.Application,
      useValue: hasuraClient,
    },
  ],
});

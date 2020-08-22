import { gql } from 'apollo-server';
import { GraphQLModule } from '@graphql-modules/core';
import { Resolvers } from 'types/graphql';

const typeDefs = gql`
  type Query {
    _dummy: Boolean
  }

  type Mutation {
    _dummy: Boolean
  }
`;

const resolvers: Resolvers = {};

export default new GraphQLModule({
  name: 'common',
  typeDefs,
  resolvers,
});

import { gql } from 'apollo-server';
import { GraphQLModule } from '@graphql-modules/core';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

export default new GraphQLModule({
  name: 'hello',
  typeDefs,
  resolvers,
});

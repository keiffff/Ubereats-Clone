import { createModule, gql } from 'graphql-modules';
import { Resolvers } from 'types/graphql';

const typeDefs = gql`
  extend type Query {
    hello: String
  }
`;

const resolvers: Resolvers = {
  Query: {
    hello: () => 'world',
  },
};

export const helloModule = createModule({
  id: 'hello',
  typeDefs,
  resolvers,
});

import { createModule, gql } from 'graphql-modules';
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

export const commonModule = createModule({
  id: 'common',
  dirname: __dirname,
  typeDefs,
  resolvers,
});

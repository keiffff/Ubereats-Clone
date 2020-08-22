import { gql } from 'apollo-server';
import { GraphQLModule } from '@graphql-modules/core';
import { Resolvers } from 'types/graphql';
import commonModule from 'modules/common';

const typeDefs = gql`
  type orderOutPut {
    publishableKey: String!
    clientSecret: String!
  }

  extend type Mutation {
    orderPayment: orderOutPut!
  }
`;

const resolvers: Resolvers = {
  Mutation: {
    orderPayment: () => ({ publishableKey: '', clientSecret: '' }),
  },
};

export default new GraphQLModule({
  name: 'payment',
  typeDefs,
  resolvers,
  imports: () => [commonModule],
});

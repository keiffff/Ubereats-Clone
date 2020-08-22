import { gql } from 'apollo-server';
import { GraphQLModule } from '@graphql-modules/core';
import { Resolvers } from 'types/graphql';
import commonModule from 'modules/common';
import { PaymentProvider } from './provider';

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
    orderPayment(root, args, { injector }) {
      return injector.get(PaymentProvider).createPaymentIntent();
    },
  },
};

export default new GraphQLModule({
  name: 'payment',
  typeDefs,
  resolvers,
  imports: () => [commonModule],
  providers: () => [PaymentProvider],
});

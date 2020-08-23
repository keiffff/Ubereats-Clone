import { createModule, gql } from 'graphql-modules';
import { Resolvers } from 'types/graphql';
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

export const paymentModule = createModule({
  id: 'payment',
  typeDefs,
  resolvers,
  providers: [PaymentProvider],
});

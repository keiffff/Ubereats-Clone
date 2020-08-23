import { createModule, gql } from 'graphql-modules';
import { Resolvers } from 'types/graphql';
import { PaymentProvider } from './provider';
import { getUserIdFromAuthHeader } from 'helpers/getUserIdFromAuthHeader';

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
    async orderPayment(root, args, { injector, req }) {
      const userId = getUserIdFromAuthHeader(req.headers.authorization ?? '');
      return await injector.get(PaymentProvider).createPaymentIntent(userId);
    },
  },
};

export const paymentModule = createModule({
  id: 'payment',
  typeDefs,
  resolvers,
  providers: [PaymentProvider],
});

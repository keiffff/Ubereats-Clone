import { createModule, gql } from 'graphql-modules';
import { Resolvers } from 'types/graphql';
import { PaymentProvider } from './provider';
import { getUserIdFromAuthHeader } from 'helpers/getUserIdFromAuthHeader';

const typeDefs = gql`
  type orderOutPut {
    orderUuid: String!
    orderStatus: String!
  }

  extend type Mutation {
    orderPayment: orderOutPut!
  }
`;

const resolvers: Resolvers = {
  Mutation: {
    async orderPayment(root, args, { injector, req }) {
      const userId = getUserIdFromAuthHeader(req.headers.authorization ?? '') ?? '';
      const { cartUuid, cartItems, totalPrice } = await injector.get(PaymentProvider).getCurrentCartItems(userId);
      const { paymentSecret } = await injector.get(PaymentProvider).createPayment({ totalPrice });
      const createOrderResponse = await injector.get(PaymentProvider).createOrder(userId, { orderFoods: cartItems });
      await injector.get(PaymentProvider).removeCartItems(cartUuid);

      return createOrderResponse;
    },
  },
};

export const paymentModule = createModule({
  id: 'payment',
  typeDefs,
  resolvers,
  providers: [PaymentProvider],
});

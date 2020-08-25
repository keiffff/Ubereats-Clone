import { createModule, gql } from 'graphql-modules';
import { Resolvers } from 'types/graphql';
import { PaymentProvider } from './provider';
import { getUserIdFromAuthHeader } from 'helpers/getUserIdFromAuthHeader';

const JPY_PER_USD = 100;

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
      const items = await injector.get(PaymentProvider).getCurrentCartItems(userId);
      const totalPrice = items.reduce((acc, { food, count }) => acc + food.price * count, 0) * JPY_PER_USD;
      await injector.get(PaymentProvider).createPayment({ totalPrice });
      const createOrderResponse = await injector.get(PaymentProvider).createOrder(userId, {
        orderFoods: items.map(({ count, food }) => ({
          count,
          foodUuid: food.uuid,
        })),
      });

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

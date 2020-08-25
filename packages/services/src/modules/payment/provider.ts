import Stripe from 'stripe';
import { Injectable } from 'graphql-modules';
import { gql } from 'graphql-request';
import { environment } from 'constants/environment';
import { hasuraClient } from 'graphqlClient';
import {
  GetCartByUserIdQuery,
  GetCartByUserIdQueryVariables,
  CreateOrderMutation,
  CreateOrderMutationVariables,
} from 'types/graphql';

type OrderFood = {
  count: number;
  foodUuid: string;
};

const stripe = new Stripe(environment.stripeSecretKey, { apiVersion: '2020-03-02' });

const EXAMPLE_CARD_INFO = {
  number: '4242424242424242',
  exp_month: 8,
  exp_year: 2021,
  cvc: '314',
} as const;

const GET_CART_BY_USER_ID_DOCUMENT = gql`
  query getCartByUserId($userId: String!) {
    carts(where: { user_id: { _eq: $userId } }) {
      uuid
      cart_foods {
        count
        food {
          uuid
          name
          price
        }
      }
    }
  }
`;

const CREATE_ORDER_DOCUMENT = gql`
  mutation createOrder($userId: String!, $orderFoods: order_foods_arr_rel_insert_input!) {
    insert_orders_one(object: { user_id: $userId, order_foods: $orderFoods }) {
      uuid
      status
    }
  }
`;

@Injectable()
export class PaymentProvider {
  async getCurrentCartItems(userId: string) {
    const { carts } = await hasuraClient.request<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>(
      GET_CART_BY_USER_ID_DOCUMENT,
      { userId },
    );
    if (!carts[0] || !carts[0].cart_foods.length) {
      throw new Error('You have no cart or no foods in cart!');
    }

    return carts[0].cart_foods;
  }

  async createPayment({ totalPrice }: { totalPrice: number }) {
    const paymentMethod = await stripe.paymentMethods.create({ type: 'card', card: EXAMPLE_CARD_INFO });
    await stripe.paymentIntents.create({
      payment_method: paymentMethod.id,
      amount: totalPrice,
      currency: 'JPY',
      confirmation_method: 'manual',
      confirm: true,
    });
  }

  async createOrder(userId: string, { orderFoods }: { orderFoods: OrderFood[] }) {
    const { insert_orders_one } = await hasuraClient.request<CreateOrderMutation, CreateOrderMutationVariables>(
      CREATE_ORDER_DOCUMENT,
      {
        userId,
        orderFoods: {
          data: orderFoods.map(({ count, foodUuid }) => ({
            count,
            food_uuid: foodUuid,
          })),
        },
      },
    );

    return {
      orderUuid: insert_orders_one?.uuid ?? '',
      orderStatus: insert_orders_one?.status ?? 'waiting',
    };
  }

  async removeCartItems(userId: string) {}
}

import { Injectable } from 'graphql-modules';
import { gql } from 'graphql-request';
import { stripe } from 'api/stripe';
import { hasuraClient } from 'api/graphQLClient';
import {
  GetCartByUserIdQuery,
  GetCartByUserIdQueryVariables,
  CreateOrderMutation,
  CreateOrderMutationVariables,
  DeleteCartMutation,
  DeleteCartMutationVariables,
} from 'types/graphql';

type OrderFood = {
  count: number;
  foodUuid: string;
};

const JPY_PER_USD = 100;

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
  mutation createOrder($userId: String!, $orderFoods: order_foods_arr_rel_insert_input!, $paymentId: String!) {
    insert_orders_one(object: { user_id: $userId, order_foods: $orderFoods, payment_id: $paymentId }) {
      uuid
      status
    }
  }
`;

const DELETE_CART_DOCUMENT = gql`
  mutation deleteCart($uuid: uuid!) {
    delete_carts_by_pk(uuid: $uuid) {
      uuid
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
    const items = carts[0].cart_foods;
    const totalPrice = items.reduce((acc, { food, count }) => acc + food.price * count, 0) * JPY_PER_USD;

    return {
      cartUuid: carts[0].uuid,
      cartItems: items.map(({ count, food }) => ({
        count,
        foodUuid: food.uuid,
      })),
      totalPrice,
    };
  }

  async createPayment({ totalPrice }: { totalPrice: number }) {
    const paymentMethod = await stripe.paymentMethods.create({ type: 'card', card: EXAMPLE_CARD_INFO });
    const { id } = await stripe.paymentIntents.create({
      payment_method: paymentMethod.id,
      amount: totalPrice,
      currency: 'JPY',
      confirmation_method: 'manual',
      confirm: true,
    });

    return { paymentId: id };
  }

  async createOrder(userId: string, { orderFoods, paymentId }: { orderFoods: OrderFood[]; paymentId: string }) {
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
        paymentId,
      },
    );

    return {
      orderUuid: insert_orders_one?.uuid ?? '',
      orderStatus: insert_orders_one?.status ?? 'waiting',
    };
  }

  async removeCartItems(cartUuid: string) {
    await hasuraClient.request<DeleteCartMutation, DeleteCartMutationVariables>(DELETE_CART_DOCUMENT, {
      uuid: cartUuid,
    });
  }
}

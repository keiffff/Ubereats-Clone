import Stripe from 'stripe';
import { Injectable } from 'graphql-modules';
import { gql } from 'graphql-request';
import { environment } from 'constants/environment';
import { hasuraClient } from 'graphqlClient';
import { GetCartByUserIdQuery, GetCartByUserIdQueryVariables } from 'types/graphql';

const stripe = new Stripe(environment.stripeSecretKey, { apiVersion: '2020-03-02' });

const JPY_PER_USD = 100;

const GET_CART_BY_USER_ID_DOCUMENT = gql`
  query getCartByUserId($userId: String!) {
    carts(where: { user_id: { _eq: $userId } }) {
      uuid
      cart_foods {
        count
        food {
          name
          price
        }
      }
    }
  }
`;

@Injectable()
export class PaymentProvider {
  async createPaymentIntent(userId: string) {
    const { carts } = await hasuraClient.request<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>(
      GET_CART_BY_USER_ID_DOCUMENT,
      {
        userId,
      },
    );
    const totalPrice = carts[0].cart_foods.reduce((acc, { food, count }) => acc + food.price * count, 0) * JPY_PER_USD;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice,
      currency: 'JPY',
    });
    return { publishableKey: environment.stripeSecretKey, clientSecret: paymentIntent.client_secret ?? '' };
  }
}

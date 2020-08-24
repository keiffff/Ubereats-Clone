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
    // example payment method
    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 8,
        exp_year: 2021,
        cvc: '314',
      },
    });
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: paymentMethod.id,
      amount: totalPrice,
      currency: 'JPY',
      confirmation_method: 'manual',
      confirm: true,
    });
    return { publishableKey: environment.stripeSecretKey, clientSecret: paymentIntent.client_secret ?? '' };
  }
}

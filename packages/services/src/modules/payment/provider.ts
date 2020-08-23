import Stripe from 'stripe';
import { Injectable } from 'graphql-modules';
import { gql } from 'graphql-request';
import { environment } from 'constants/environment';
import { hasuraClient } from 'graphqlClient';
import { GetCartByUserIdQuery, GetCartByUserIdQueryVariables } from 'types/graphql';

const stripe = new Stripe(environment.stripeSecretKey, { apiVersion: '2020-03-02' });

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
  async createPaymentIntent() {
    const data = await hasuraClient.request<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>(
      GET_CART_BY_USER_ID_DOCUMENT,
      {
        userId: 'google-oauth2|116031656602944320296',
      },
    );
    return { publishableKey: environment.stripeSecretKey, clientSecret: '' };
  }
}

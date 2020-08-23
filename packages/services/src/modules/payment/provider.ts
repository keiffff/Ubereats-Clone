import Stripe from 'stripe';
import { Injectable, Inject, ProviderScope } from '@graphql-modules/di';
import { gql } from 'graphql-request';
import { environment } from 'constants/environment';
import { GraphQLClient } from 'modules/common/graphQLClientProvider';
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

@Injectable({
  scope: ProviderScope.Session,
})
export class PaymentProvider {
  @Inject() private hasuraClient: GraphQLClient;

  async createPaymentIntent() {
    const data = await this.hasuraClient.request<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>(
      GET_CART_BY_USER_ID_DOCUMENT,
      {
        userId: 'google-oauth2|116031656602944320296',
      },
    );
    console.log(data);
    return { publishableKey: environment.stripeSecretKey, clientSecret: '' };
  }
}

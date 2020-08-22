import Stripe from 'stripe';
import { Injectable, Inject, ProviderScope } from '@graphql-modules/di';
import { environment } from 'constants/environment';
import { GraphQLClient } from 'modules/common/graphQLClientProvider';
import { GetCartByUserIdDocument } from 'types/graphql';

const stripe = new Stripe(environment.stripeSecretKey, { apiVersion: '2020-03-02' });

@Injectable({
  scope: ProviderScope.Session,
})
export class PaymentProvider {
  @Inject() private hasuraClient: GraphQLClient;

  async createPaymentIntent() {
    const data = await this.hasuraClient.request(GetCartByUserIdDocument);
    return { publishableKey: environment.stripeSecretKey, clientSecret: '' };
  }
}

import Stripe from 'stripe';
import { environment } from 'constants/environment';

const stripe = new Stripe(environment.stripeSecretKey, { apiVersion: '2020-03-02' });

export class PaymentProvider {
  createPaymentIntent() {
    return { publishableKey: environment.stripeSecretKey, clientSecret: '' };
  }
}

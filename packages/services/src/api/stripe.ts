import Stripe from 'stripe';
import { environment } from 'constants/environment';

export const stripe = new Stripe(environment.stripeSecretKey, { apiVersion: '2020-03-02' });

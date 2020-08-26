import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { stripe } from 'api/stripe';

export const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (req, res) => {
  res.send('OK');
});

app.post('/order_canceled', async (req, res) => {
  const { event } = req.body;
  if (event.data.op !== 'UPDATE' || event.data.old.status === 'canceled' || event.data.new.status !== 'canceled')
    return;

  const paymentIntent = await stripe.paymentIntents.retrieve(event.data.new.payment_secret);
  await stripe.refunds.create({ payment_intent: paymentIntent.id });

  res.status(200).send({});
});

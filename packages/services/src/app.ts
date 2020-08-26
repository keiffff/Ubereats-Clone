import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { stripe } from 'api/stripe';

export const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/ping', async (req, res) => {
  res.send('OK');
});

app.post('/order_canceled', async (req, res) => {
  const { event } = req.body;
  if (event.op !== 'UPDATE' || event.data.old.status === 'canceled' || event.data.new.status !== 'canceled') {
    res.send('OK');
    return;
  }

  await stripe.refunds.create({ payment_intent: event.data.new.payment_id });

  res.status(204).send({});
});

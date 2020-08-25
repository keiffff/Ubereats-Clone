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

app.post('/order_canceled', (req, res) => {
  const { event } = req.body;
  if (event.data.op !== 'UPDATE' || event.data.new.status !== 'canceled') return;

  res.status(200).send({});
});

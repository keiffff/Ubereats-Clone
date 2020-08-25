import express from 'express';

export const app = express();

app.get('/ping', (req, res) => {
  res.send('OK');
});

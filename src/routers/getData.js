import { Router } from 'express';

const getData = Router();

getData.get('/data', (req, res) => {
  res.send('get');
});

export default getData;

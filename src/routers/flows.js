import { Router } from 'express';
import requestFlow from '../services/requestsFlow';

const getData = Router();

getData.get('/flow', (req, res) => {
  requestFlow()
    .then((flows) => {
      res.json(flows);
    });
});

export default getData;

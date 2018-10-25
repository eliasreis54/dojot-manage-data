import { Router } from 'express';
import requestTemplate from '../services/requestsTemplate';

const getData = Router();

getData.get('/template', (req, res) => {
  requestTemplate()
    .then((templates) => {
      res.json(templates);
    });
});

export default getData;

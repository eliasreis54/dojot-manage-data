import { Router } from 'express';
import requestDevice from '../services/requestsDevice';

const getData = Router();

getData.get('/device', (req, res) => {
  requestDevice()
    .then((devices) => {
      res.json(devices);
    });
});

export default getData;

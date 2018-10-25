import { Router } from 'express';
import requestDevice from '../services/requestsDevice';

const router = Router();

router.get('/device', (req, res) => {
  requestDevice()
    .then((devices) => {
      res.json(devices);
    });
});

export default router;

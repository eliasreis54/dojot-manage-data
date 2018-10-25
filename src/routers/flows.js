import { Router } from 'express';
import requestFlow from '../services/requestsFlow';

const router = Router();

router.get('/flow', (req, res) => {
  requestFlow()
    .then((flows) => {
      res.json(flows);
    });
});

export default router;

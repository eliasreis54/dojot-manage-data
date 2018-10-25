import { Router } from 'express';
import requestTemplate from '../services/requestsTemplate';

const router = Router();

router.get('/template', (req, res) => {
  requestTemplate()
    .then((templates) => {
      res.json(templates);
    });
});

export default router;

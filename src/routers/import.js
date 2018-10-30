import { Router } from 'express';
import requestImport from '../services/requestsImport';

const router = Router();

router.post('/import', (req, res) => {
  requestImport.postImport(req.body)
    .then((ret) => {
      res.status(200).json(ret);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

export default router;

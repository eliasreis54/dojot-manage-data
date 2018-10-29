import { Router } from 'express';
import requestImport from '../services/requestsImport';

const router = Router();

router.post('/import', (req, res) => {
  requestImport.postImport(req.body)
    .then((exportData) => {
      res.json(exportData);
    });
});

export default router;

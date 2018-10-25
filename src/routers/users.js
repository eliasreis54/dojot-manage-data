import { Router } from 'express';
import requestUser from '../services/requestUsers';

const getData = Router();

getData.get('/user', (req, res) => {
  requestUser()
    .then((users) => {
      res.send(users);
    });
});

export default getData;

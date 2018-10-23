import express from 'express';
import bodyParser from 'body-parser';
import GetData from './routers/getData';

const app = express();

app.use(bodyParser.json());
app.use(GetData);
app.listen(3000, () => {
  console.log('server running');
});

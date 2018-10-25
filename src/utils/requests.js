import axios from 'axios';
import generateToken from './generateToken';


const makeRequest = urlRequest => new Promise((resolve, reject) => {
  const token = generateToken();
  const options = {
    headers: {
      authorization: token,
      'content-type': 'application/json',
    },
  };
  axios(urlRequest, options)
    .then((ret) => {
      resolve(ret.data);
    })
    .catch((err) => {
      reject(err);
    });
});

export default makeRequest;

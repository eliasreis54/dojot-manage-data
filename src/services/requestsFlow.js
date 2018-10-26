import config from '../config';

import Requests from '../utils/requests';

const requestUser = () => new Promise((resolve, reject) => {
  Requests.makeRequest(`${config.flow_broker_url}/v1/flow`)
    .then((obj) => {
      resolve(obj);
    })
    .catch((err) => {
      reject(err.toString());
    });
});

export default requestUser;

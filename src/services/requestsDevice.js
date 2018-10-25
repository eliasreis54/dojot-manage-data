import config from '../config';

import Requests from '../utils/requests';

const requestDevice = () => new Promise((resolve, reject) => {
  Requests(`${config.device_manager_url}/device`)
    .then((obj) => {
      resolve(obj);
    })
    .catch((err) => {
      reject(err);
    });
});

export default requestDevice;

import config from '../config';

import Requests from '../utils/requests';

const requestTemplate = () => new Promise((resolve, reject) => {
  Requests(`${config.device_manager_url}/template`)
    .then((obj) => {
      resolve(obj);
    })
    .catch((err) => {
      reject(err);
    });
});

export default requestTemplate;

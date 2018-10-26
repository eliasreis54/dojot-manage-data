import config from '../config';

import Requests from '../utils/requests';

const requestDevice = () => new Promise((resolve, reject) => {
  Requests.makeRequest(`${config.device_manager_url}/device`)
    .then((obj) => {
      resolve(obj);
    })
    .catch((err) => {
      reject(err);
    });
});

const postDevice = body => new Promise((resolve, reject) => {
  Requests.makePost(`${config.device_manager_url}/device`, body)
    .then((ret) => {
      resolve(ret);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { requestDevice, postDevice };

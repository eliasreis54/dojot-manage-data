import config from '../config';

import Requests from '../utils/requests';

const getTemplate = () => new Promise((resolve, reject) => {
  Requests.makeRequest(`${config.device_manager_url}/template`)
    .then((obj) => {
      resolve(obj);
    })
    .catch((err) => {
      reject(err);
    });
});

const postTemplate = body => new Promise((resolve, reject) => {
  const calls = [];
  body.forEach((obj, index) => {
    const element = obj;
    delete element.id;
    element.label = `${element.label} + ${index}`;
    calls.push(Requests.makePost(`${config.device_manager_url}/template`, element));
  });

  Promise.all(calls)
    .then((ret) => {
      const control = [];
      const dataRet = {};
      ret.forEach((data, index) => {
        /* dataRet.oldId = body[index].id;
        dataRet.newId = data.data.template.id;
        dataRet.newObject = data.data.template;
        control.push(dataRet); */
        console.log(data.data);
      });
      console.log(dataRet);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getTemplate, postTemplate };

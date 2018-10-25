import requestDevice from './requestsDevice';
import requestFlow from './requestsFlow';
import requestTemplate from './requestsTemplate';
// import requestUser from './requestUsers';

const requestExport = () => new Promise((resolve, reject) => {
  const requests = [
    requestDevice(),
    requestTemplate(),
    requestFlow(),
    // requestUser(),
  ];
  Promise.all(requests)
    .then((ret) => {
      const allData = {
        devices: ret[0].devices,
        templates: ret[1].templates,
        flows: ret[2].flows,
      };
      resolve(allData);
    })
    .catch((err) => {
      reject(err);
    });
});

export default requestExport;

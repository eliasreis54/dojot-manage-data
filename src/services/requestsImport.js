import requestsDevice from './requestsDevice';
import requestsTemplate from './requestsTemplate';

function changeIdTemplateDevice(newsIdTemplate, devices) {
  const deviceList = devices;
  deviceList.forEach((device, indexDevice) => {
    device.templates.forEach((templateId, index) => {
      newsIdTemplate.forEach((item) => {
        if (parseInt(item.oldId, 0) === parseInt(templateId, 0)) {
          deviceList[indexDevice].templates[index] = item.newId;
        }
      });
    });
  });
  return deviceList;
}

const postImport = data => new Promise((resolve, reject) => {
  const body = data;
  requestsTemplate.postTemplate(body.templates)
    .then((templates) => {
      body.templates = templates;
      body.devices = changeIdTemplateDevice(templates, body.devices);
      requestsDevice.postDevice(body.devices)
        .then((devices) => {
          body.devices = devices;
          resolve(body);
        });
    })
    .catch((err) => {
      reject(err);
    });
});

export default { postImport };

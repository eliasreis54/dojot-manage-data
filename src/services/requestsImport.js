import requestsDevice from './requestsDevice';
import requestsTemplate from './requestsTemplate';
import requestFlow from './requestsFlow';
import requests from '../utils/requests';
import config from '../config';

async function deleteAllData() {
  await requests.makeDelete(`${config.device_manager_url}/device`);
  await requests.makeDelete(`${config.device_manager_url}/template`);
  await requests.makeDelete(`${config.flow_broker_url}/v1/flow`);
}

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

function changeIdDeviceFlow(newDevices, flows) {
  const flowsList = flows;
  flowsList.forEach((flow, indexDevice) => {
    flow.flow.forEach((obj, index) => {
      if (obj.type === 'device in') {
        newDevices.forEach((item) => {
          if (item.oldId === obj._device_id) {
            flowsList[indexDevice].flow[index]._device_id = item.newId;
            const device = JSON.parse(flowsList[indexDevice].flow[index].device);
            device.id = item.newId;
            flowsList[indexDevice].flow[index].device = JSON.stringify(device);
          }
        });
      }
    });
  });
  return flowsList;
}

function changeIdTemplateFlow(newflows, flows) {
  const flowsList = flows;
  flowsList.forEach((flow, indexTemplate) => {
    flow.flow.forEach((obj, index) => {
      if (obj.type === 'device template in') {
        newflows.forEach((item) => {
          if (item.oldId === obj._device_id) {
            flowsList[indexTemplate].flow[index].device_template_id = item.newId;
            const template = JSON.parse(flowsList[indexTemplate].flow[index].device_template);
            template.id = item.newId;
            flowsList[indexTemplate].flow[index].device_template = JSON.stringify(template);
          }
        });
      }
    });
  });
  return flowsList;
}

const postImport = data => new Promise(async (resolve, reject) => {
  try {
    await deleteAllData();
  } catch (error) {
    reject(error.toString());
  }
  const body = data;
  requestsTemplate.postTemplate(body.templates)
    .then((templates) => {
      body.templates = templates;
      body.devices = changeIdTemplateDevice(templates, body.devices);
      requestsDevice.postDevice(body.devices)
        .then((devices) => {
          body.devices = devices;
          body.flows = changeIdDeviceFlow(devices, body.flows);
          body.flows = changeIdTemplateFlow(templates, body.flows);
          requestFlow.postFlow(body.flows)
            .then((newflows) => {
              const bodyTemplates = body.templates;
              body.templates = [];
              bodyTemplates.forEach((item) => {
                body.templates.push(item.newObject);
              });

              const bodyDevices = body.devices;
              body.devices = [];
              bodyDevices.forEach((item) => {
                body.devices.push(item.newObject);
              });

              body.flows = newflows;
              resolve(body);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    })
    .catch((err) => {
      reject(err);
    });
});

export default { postImport };

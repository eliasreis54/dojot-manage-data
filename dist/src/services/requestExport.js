'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dojotModuleLogger = require('@dojot/dojot-module-logger');

var _requestsDevice = require('./requestsDevice');

var _requestsDevice2 = _interopRequireDefault(_requestsDevice);

var _requestsFlow = require('./requestsFlow');

var _requestsFlow2 = _interopRequireDefault(_requestsFlow);

var _requestsTemplate = require('./requestsTemplate');

var _requestsTemplate2 = _interopRequireDefault(_requestsTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import requestUser from './requestUsers';

function clearTemplateRet(template) {
  template.forEach(function (obj) {
    var item = obj;
    delete item.created;
    delete item.status;
    delete item.templates;
    delete item.data_attrs;
    delete item.config_attrs;
    item.attrs.forEach(function (attrs) {
      var attr = attrs;
      delete attr.created;
      delete attr.template_id;
      delete attr.id;
    });
  });
  return template;
}

function clearDeviceRet(devices) {
  devices.forEach(function (device) {
    var item = device;
    delete item.attrs;
    delete item.created;
    delete item.status;
  });
  return devices;
}

var requestExport = function requestExport() {
  return new Promise(function (resolve, reject) {
    _dojotModuleLogger.logger.debug('Call received');
    var requests = [_requestsDevice2.default.requestDevice(), _requestsTemplate2.default.requestTemplate(), _requestsFlow2.default.requestFlows()];
    Promise.all(requests).then(function (ret) {
      var allData = {
        devices: clearDeviceRet(ret[0].devices),
        templates: clearTemplateRet(ret[1].templates),
        flows: ret[2].flows
      };
      resolve(allData);
    }).catch(function (err) {
      reject(err);
    });
  });
};

exports.default = requestExport;
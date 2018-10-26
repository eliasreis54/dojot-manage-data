'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestsDevice = require('./requestsDevice');

var _requestsDevice2 = _interopRequireDefault(_requestsDevice);

var _requestsFlow = require('./requestsFlow');

var _requestsFlow2 = _interopRequireDefault(_requestsFlow);

var _requestsTemplate = require('./requestsTemplate');

var _requestsTemplate2 = _interopRequireDefault(_requestsTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import requestUser from './requestUsers';

var requestExport = function requestExport() {
  return new Promise(function (resolve, reject) {
    var requests = [(0, _requestsDevice2.default)(), (0, _requestsTemplate2.default)(), (0, _requestsFlow2.default)()];
    Promise.all(requests).then(function (ret) {
      var allData = {
        devices: ret[0].devices,
        templates: ret[1].templates,
        flows: ret[2].flows
      };
      resolve(allData);
    }).catch(function (err) {
      reject(err);
    });
  });
};

exports.default = requestExport;
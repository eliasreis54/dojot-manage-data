'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _requests = require('../utils/requests');

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestDevice = function requestDevice() {
  return new Promise(function (resolve, reject) {
    _requests2.default.makeRequest(_config2.default.device_manager_url + '/device').then(function (obj) {
      resolve(obj);
    }).catch(function (err) {
      reject(err);
    });
  });
};

var postDevice = function postDevice(body) {
  return new Promise(function (resolve, reject) {
    _requests2.default.makePost(_config2.default.device_manager_url + '/device', body).then(function (ret) {
      resolve(ret);
    }).catch(function (err) {
      reject(err);
    });
  });
};

exports.default = { requestDevice: requestDevice, postDevice: postDevice };
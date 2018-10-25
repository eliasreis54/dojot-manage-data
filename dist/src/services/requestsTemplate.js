'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _requests = require('../utils/requests');

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestTemplate = function requestTemplate() {
  return new Promise(function (resolve, reject) {
    (0, _requests2.default)(_config2.default.device_manager_url + '/template').then(function (obj) {
      resolve(obj);
    }).catch(function (err) {
      reject(err);
    });
  });
};

exports.default = requestTemplate;
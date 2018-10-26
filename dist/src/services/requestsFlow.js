'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _requests = require('../utils/requests');

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestUser = function requestUser() {
  return new Promise(function (resolve, reject) {
    _requests2.default.makeRequest(_config2.default.flow_broker_url + '/v1/flow').then(function (obj) {
      resolve(obj);
    }).catch(function (err) {
      reject(err.toString());
    });
  });
};

exports.default = requestUser;
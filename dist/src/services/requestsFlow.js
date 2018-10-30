'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _requests = require('../utils/requests');

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestFlows = function requestFlows() {
  return new Promise(function (resolve, reject) {
    _requests2.default.makeRequest(_config2.default.flow_broker_url + '/v1/flow').then(function (obj) {
      resolve(obj);
    }).catch(function (err) {
      reject(err.toString());
    });
  });
};

var postFlow = function postFlow(body) {
  return new Promise(function (resolve, reject) {
    var calls = [];
    body.forEach(function (obj) {
      var element = obj;
      calls.push(_requests2.default.makePost(_config2.default.flow_broker_url + '/v1/flow', element));
    });

    Promise.all(calls).then(function (flows) {
      var ret = [];
      flows.forEach(function (item) {
        ret.push(item.data);
      });
      resolve(ret);
    }).catch(function (err) {
      reject(err);
    });
  });
};

exports.default = { requestFlows: requestFlows, postFlow: postFlow };
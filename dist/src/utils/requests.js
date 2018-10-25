'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _generateToken = require('./generateToken');

var _generateToken2 = _interopRequireDefault(_generateToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeRequest = function makeRequest(urlRequest) {
  return new Promise(function (resolve, reject) {
    var token = (0, _generateToken2.default)();
    var options = {
      headers: {
        authorization: token,
        'content-type': 'application/json'
      }
    };
    (0, _axios2.default)(urlRequest, options).then(function (ret) {
      resolve(ret.data);
    }).catch(function (err) {
      reject(err);
    });
  });
};

exports.default = makeRequest;
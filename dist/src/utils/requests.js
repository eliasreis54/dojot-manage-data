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

var makePost = function makePost(urlRequest, body) {
  return new Promise(function (resolve, reject) {
    var token = (0, _generateToken2.default)();
    (0, _axios2.default)({
      method: 'post',
      headers: {
        authorization: token,
        'content-type': 'application/json'
      },
      url: urlRequest,
      data: body
    }).then(function (ret) {
      resolve(ret);
    }).catch(function (err) {
      reject(err.toString());
    });
  });
};

var makeDelete = function makeDelete(urlRequest) {
  return new Promise(function (resolve, reject) {
    var token = (0, _generateToken2.default)();
    (0, _axios2.default)({
      method: 'delete',
      headers: {
        authorization: token,
        'content-type': 'application/json'
      },
      url: urlRequest
    }).then(function (ret) {
      resolve(ret);
    }).catch(function (err) {
      reject(err);
    });
  });
};

exports.default = { makeRequest: makeRequest, makePost: makePost, makeDelete: makeDelete };
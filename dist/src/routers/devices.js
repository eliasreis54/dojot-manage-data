'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _requestsDevice = require('../services/requestsDevice');

var _requestsDevice2 = _interopRequireDefault(_requestsDevice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getData = (0, _express.Router)();

getData.get('/device', function (req, res) {
  (0, _requestsDevice2.default)().then(function (devices) {
    res.json(devices);
  });
});

exports.default = getData;
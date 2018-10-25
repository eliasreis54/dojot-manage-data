'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _requestsFlow = require('../services/requestsFlow');

var _requestsFlow2 = _interopRequireDefault(_requestsFlow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getData = (0, _express.Router)();

getData.get('/flow', function (req, res) {
  (0, _requestsFlow2.default)().then(function (flows) {
    res.json(flows);
  });
});

exports.default = getData;
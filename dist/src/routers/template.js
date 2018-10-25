'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _requestsTemplate = require('../services/requestsTemplate');

var _requestsTemplate2 = _interopRequireDefault(_requestsTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getData = (0, _express.Router)();

getData.get('/template', function (req, res) {
  (0, _requestsTemplate2.default)().then(function (templates) {
    res.json(templates);
  });
});

exports.default = getData;
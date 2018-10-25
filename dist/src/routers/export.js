'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _requestExport = require('../services/requestExport');

var _requestExport2 = _interopRequireDefault(_requestExport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getData = (0, _express.Router)();

getData.get('/export', function (req, res) {
  (0, _requestExport2.default)().then(function (exportData) {
    res.json(exportData);
  });
});

exports.default = getData;
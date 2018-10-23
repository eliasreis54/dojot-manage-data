'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var getData = (0, _express.Router)();

getData.get('/data', function (req, res) {
  res.send('get');
});

exports.default = getData;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _requestsDevice = require('../services/requestsDevice');

var _requestsDevice2 = _interopRequireDefault(_requestsDevice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/device', function (req, res) {
  _requestsDevice2.default.requestDevice().then(function (devices) {
    res.json(devices);
  });
});

router.post('/device', function (req, res) {
  _requestsDevice2.default.postDevice(req.body).then(function (ret) {
    res.json(ret);
  }).catch(function (err) {
    res.json(err);
  });
});

exports.default = router;
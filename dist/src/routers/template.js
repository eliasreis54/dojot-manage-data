'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _requestsTemplate = require('../services/requestsTemplate');

var _requestsTemplate2 = _interopRequireDefault(_requestsTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/template', function (req, res) {
  _requestsTemplate2.default.getTemplate().then(function (templates) {
    res.json(templates);
  });
});

router.post('/template', function (req, res) {
  _requestsTemplate2.default.postTemplate(req.body).then(function (ret) {
    res.json(ret);
  }).catch(function (err) {
    res.json(err);
  });
});

exports.default = router;
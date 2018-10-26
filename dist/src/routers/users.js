'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _requestUsers = require('../services/requestUsers');

var _requestUsers2 = _interopRequireDefault(_requestUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/user', function (req, res) {
  (0, _requestUsers2.default)().then(function (users) {
    res.send(users);
  });
});

exports.default = router;
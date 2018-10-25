'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var generateToken = function generateToken() {
  return "Bearer " + new Buffer('dummy jwt schema').toString('base64') + '.' + new Buffer(JSON.stringify({ 'service': 'admin', 'username': 'admin' })).toString('base64') + '.' + new Buffer('dummy signature').toString('base64');
};

exports.default = generateToken;
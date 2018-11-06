'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  dojot_url: process.env.DOJOT_URL || 'localhost:8000',
  auth_url: process.env.AUTH_URL || 'http://auth:5000', // export AUTH_URL=http://172.20.0.17:5000
  flow_broker_url: process.env.FLOW_BROKER_URL || 'http://flowbroker:80', // export FLOW_BROKER_URL=http://172.27.0.3:80
  device_manager_url: process.env.DEVICE_MANAGER_URL || 'http://device-manager:5000' // export DEVICE_MANAGER_URL=http://172.26.0.8:5000
};

exports.default = config;
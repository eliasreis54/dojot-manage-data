'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  dojot_url: process.env.DOJOT_URL || 'localhost:8000',
  auth_url: process.env.AUTH_URL || 'http://auth:5000', // export AUTH_URL=http://172.18.0.22:5000
  flow_broker_url: process.env.FLOW_BROKER_URL || 'http://flowbroker:80', // export FLOW_BROKER_URL=http://172.19.0.3:80
  device_manager_url: process.env.DEVICE_MANAGER_URL || 'http://device-manager:5000' // export DEVICE_MANAGER_URL=http://172.18.0.14:5000
};

exports.default = config;

/*
[ { id: '37630229.c3bf9e', type: 'tab', label: 'Flow 1' },
     { id: '2211d81f.6e4038',
       type: 'device template in',
       z: '37630229.c3bf9e',
       name: 'template',
       device_template: { id: 238 },
       status: 'false',
       device_template_id: 238,
       x: 195.5,
       y: 111,
       wires: [ [ 'ed741327.d3f05' ] ] },
     { id: 'ed741327.d3f05',
       type: 'switch',
       z: '37630229.c3bf9e',
       name: '',
       property: 'payload',
       propertyType: 'msg',
       rules: [ { t: 'eq', v: '' } ],
       checkall: 'true',
       outputs: 1,
       x: 216.5,
       y: 195,
       wires: [ [ 'df9c4583.04f708' ] ] },
     { id: 'df9c4583.04f708',
       type: 'http',
       z: '37630229.c3bf9e',
       name: '',
       method: 'GET',
       ret: 'txt',
       body: '',
       response: '',
       url: '',
       x: 225.5,
       y: 295,
       wires: [ [] ] } ] }
*/
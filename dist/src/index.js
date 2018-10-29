'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require('./routers/users');

var _users2 = _interopRequireDefault(_users);

var _flows = require('./routers/flows');

var _flows2 = _interopRequireDefault(_flows);

var _devices = require('./routers/devices');

var _devices2 = _interopRequireDefault(_devices);

var _template = require('./routers/template');

var _template2 = _interopRequireDefault(_template);

var _export = require('./routers/export');

var _export2 = _interopRequireDefault(_export);

var _import = require('./routers/import');

var _import2 = _interopRequireDefault(_import);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_users2.default);
app.use(_flows2.default);
app.use(_devices2.default);
app.use(_template2.default);
app.use(_export2.default);
app.use(_import2.default);
app.listen(3000, function () {
  console.log('server running on port 3000');
});
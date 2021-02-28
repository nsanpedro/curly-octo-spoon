"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 3000;
var app = (0, _express["default"])();
app.listen(PORT);
console.log("Server listening on port ".concat(PORT));
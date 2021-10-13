"use strict";

var _express = _interopRequireDefault(require("express"));

var _products = require("./controllers/products");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 8080;
var app = (0, _express["default"])();
var server = app.listen(port, function () {
  console.log('server up en puerto', port);
});
server.on('error', function (err) {
  console.log('ERROR =>', err);
}); //RESPUESTA EN FORMATO JSON (API)

app.get('/items', _products.getItems);
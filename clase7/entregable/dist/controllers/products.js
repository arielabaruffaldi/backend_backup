"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItems = void 0;

var _promises = _interopRequireDefault(require("fs/promises"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var itemsFile = _path["default"].join(__dirname, '..', '', 'products.txt');

var getItems = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var items;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = JSON;
            _context.next = 4;
            return _promises["default"].readFile(itemsFile);

          case 4:
            _context.t1 = _context.sent;
            items = _context.t0.parse.call(_context.t0, _context.t1);
            res.json({
              items: items,
              total: items.length
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t2 = _context["catch"](0);
            console.log(_context.t2);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function getItems(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getItems = getItems;
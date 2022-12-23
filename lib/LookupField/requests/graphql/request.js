"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.glRequest = void 0;

var _graphqlRequest = _interopRequireDefault(require("../../../utils/graphqlRequest/graphqlRequest"));

var _template = require("./template");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var glRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var chars, name, sys_id, table, controller, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            chars = _ref.chars, name = _ref.name, sys_id = _ref.sys_id, table = _ref.table, controller = _ref.controller;
            _context.next = 3;
            return (0, _graphqlRequest["default"])({
              operationName: 'reference',
              query: _template.query,
              variables: {
                chars: chars,
                encodedRecord: '',
                field: name,
                ignoreRefQual: false,
                paginationLimit: 25,
                serializedChanges: '{}',
                sortBy: '',
                sys_id: sys_id,
                table: table
              },
              params: {
                signal: controller.current.signal
              }
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            return _context.abrupt("return", _context.sent);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function glRequest(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.glRequest = glRequest;
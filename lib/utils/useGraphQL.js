"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useGraphQL;

var _react = require("react");

var _graphqlRequest = _interopRequireDefault(require("./graphqlRequest/graphqlRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getGraphQLData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var controller, setter, operationName, query, variables, response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            controller = _ref.controller, setter = _ref.setter, operationName = _ref.operationName, query = _ref.query, variables = _ref.variables;
            _context.next = 3;
            return (0, _graphqlRequest["default"])({
              operationName: operationName,
              query: query,
              variables: variables,
              params: {
                signal: controller.current.signal
              }
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            setter(function () {
              return {
                loading: false,
                data: data
              };
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getGraphQLData(_x) {
    return _ref2.apply(this, arguments);
  };
}();

function useGraphQL(_ref3) {
  var operationName = _ref3.operationName,
      query = _ref3.query,
      variables = _ref3.variables;
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0, _react.useState)({
    loading: true,
    data: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      graphqlState = _useState2[0],
      setGraphqlState = _useState2[1];

  var controllerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (controllerRef !== null && controllerRef !== void 0 && controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
    setGraphqlState(function () {
      return {
        loading: true,
        data: null
      };
    });
    getGraphQLData({
      controller: controllerRef,
      setter: setGraphqlState,
      operationName: operationName,
      variables: variables,
      query: query
    });
  }, [].concat(_toConsumableArray(deps), [getGraphQLData]));
  return graphqlState;
}
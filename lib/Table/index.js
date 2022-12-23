"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Table = require("./Table");

var _table = require("./context/table");

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TableContainer = function TableContainer(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_table.TableProvider, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Table.Table, _objectSpread({}, props))
  }));
};

TableContainer.defaultProp = {
  name: '',
  headers: [],
  dataSource: [],
  paginationTop: {
    alignment: 'end'
  },
  paginationBottom: {
    alignment: 'end'
  },
  total: undefined,
  currentPageChanged: _utils.noop,
  peerPageChanged: _utils.noop,
  offsetChanged: _utils.noop
};
var paginationPropTypes = {
  alignment: _propTypes["default"].oneOf(['start', 'center', 'end', 'none']),
  sticky: _propTypes["default"].bool,
  position: _propTypes["default"].number
};
TableContainer.propTypes = {
  name: _propTypes["default"].string,
  headers: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    key: _propTypes["default"].string,
    render: _propTypes["default"].func
  })),
  stickyHeader: _propTypes["default"].bool,
  headerPosition: _propTypes["default"].number,
  dataSource: _propTypes["default"].arrayOf(_propTypes["default"].object),
  paginationTop: _propTypes["default"].shape(paginationPropTypes),
  paginationBottom: _propTypes["default"].shape(paginationPropTypes),
  total: _propTypes["default"].number,
  loading: _propTypes["default"].bool,
  offsetChanged: _propTypes["default"].func,
  currentPageChanged: _propTypes["default"].func,
  peerPageChanged: _propTypes["default"].func
};
var _default = TableContainer;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Range = void 0;

var _react = _interopRequireDefault(require("react"));

var _RengeCalendar = _interopRequireDefault(require("./Renge Calendar"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/DataVisualisation/RangeCalendar',
  component: _RengeCalendar["default"]
};
exports["default"] = _default;

var Range = function Range(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RengeCalendar["default"], _objectSpread({}, args));
};

exports.Range = Range;
Range.args = {
  startDay: new Date('2021-06-10').setHours(0, 0, 0, 0),
  endDay: new Date().setHours(0, 0, 0, 0),
  max: new Date('2021-07-08').setHours(0, 0, 0, 0),
  isFirstSelecting: false
};
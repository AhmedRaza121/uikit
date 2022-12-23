"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Standard = exports.Range = exports.Month = void 0;

var _react = _interopRequireDefault(require("react"));

var _SmallCalendar = _interopRequireDefault(require("./SmallCalendar"));

var _CalendarMonth = _interopRequireDefault(require("./InnerComponents/CalendarMonth"));

var _RengeCalendar = _interopRequireDefault(require("./Renge Calendar"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/DataVisualisation/SmallCalendar',
  component: _SmallCalendar["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SmallCalendar["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;

var Range = function Range(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RengeCalendar["default"], {
      endDay: new Date('2021-07-10').setHours(0, 0, 0, 0) // startDay={new Date().setHours(0,0,0,0)}
      ,
      isFirstSelecting: false
    })
  });
};

exports.Range = Range;

var Month = function Month(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CalendarMonth["default"], {
      range: {
        startDay: new Date('2021-06-16').setHours(0, 0, 0, 0),
        endDay: new Date().setHours(0, 0, 0, 0),
        isFirstSelecting: false
      }
    })
  });
};

exports.Month = Month;
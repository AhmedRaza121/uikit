"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tertiary = exports.Secondary = exports.Primary = void 0;

var _react = _interopRequireDefault(require("react"));

var _HighlightedValue = _interopRequireDefault(require("./HighlightedValue"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Label&Value/HighlightedValue',
  component: _HighlightedValue["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_HighlightedValue["default"], _objectSpread({}, args));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  label: 'Label'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = _objectSpread(_objectSpread({}, Primary.args), {}, {
  showIcon: true,
  variant: 'secondary'
});
var Tertiary = Template.bind({});
exports.Tertiary = Tertiary;
Tertiary.args = _objectSpread(_objectSpread({}, Primary.args), {}, {
  showIcon: true,
  icon: 'alarm',
  variant: 'tertiary'
});
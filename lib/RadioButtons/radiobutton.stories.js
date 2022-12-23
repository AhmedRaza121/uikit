"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Standard = void 0;

var _react = _interopRequireDefault(require("react"));

var _RadioButtons = _interopRequireDefault(require("./RadioButtons"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/RadioButtons',
  component: _RadioButtons["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioButtons["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  label: 'Label',
  options: [{
    id: '1',
    label: 'label 1',
    value: 'value 1: readonly',
    readonly: true
  }, {
    id: '2',
    label: 'label 2',
    value: 'value 2'
  }, {
    id: '3',
    label: 'label 3',
    value: 'value 3: disabled',
    disabled: true
  }, {
    id: '4',
    label: 'label 4',
    value: 'value 4'
  }]
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Stepper = _interopRequireDefault(require("./Stepper"));

var _tableCategories = require("../../.storybook/tableCategories");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Controls/Stepper',
  component: _Stepper["default"],
  argTypes: {
    steps: _tableCategories.TABLE_CATEGORIES.VALUE,
    selectedItem: _tableCategories.TABLE_CATEGORIES.VALUE,
    palette: _tableCategories.TABLE_CATEGORIES.STYLE,
    iconSize: _tableCategories.TABLE_CATEGORIES.STYLE,
    hideLabels: _tableCategories.TABLE_CATEGORIES.STYLE,
    disableScroll: _tableCategories.TABLE_CATEGORIES.STYLE,
    vertical: _tableCategories.TABLE_CATEGORIES.STYLE,
    completedCounter: _tableCategories.TABLE_CATEGORIES.STYLE,
    onStepClick: _tableCategories.TABLE_CATEGORIES.ACTION
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Stepper["default"], _objectSpread({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  steps: [{
    id: '1',
    icon: 'alarm',
    label: 'Label 1',
    sublabel: 'sublabel'
  }, {
    id: '2',
    icon: 'bell',
    label: 'Label 2',
    progress: 'partial'
  }, {
    id: '3',
    icon: 'bicycle',
    label: 'Label 3'
  }, {
    id: '4',
    icon: 'book',
    label: 'Label 4',
    disabled: true
  }]
};
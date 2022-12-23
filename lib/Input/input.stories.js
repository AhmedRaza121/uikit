"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Standard = exports.ExpandedInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("./Input"));

var _tableCategories = require("../../.storybook/tableCategories");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/Input',
  component: _Input["default"],
  argTypes: {
    autofocus: _tableCategories.TABLE_CATEGORIES.VALUE,
    label: _tableCategories.TABLE_CATEGORIES.VALUE,
    max: _tableCategories.TABLE_CATEGORIES.VALUE,
    min: _tableCategories.TABLE_CATEGORIES.VALUE,
    maxlength: _tableCategories.TABLE_CATEGORIES.VALUE,
    minlength: _tableCategories.TABLE_CATEGORIES.VALUE,
    message: _tableCategories.TABLE_CATEGORIES.VALUE,
    name: _tableCategories.TABLE_CATEGORIES.VALUE,
    pattern: _tableCategories.TABLE_CATEGORIES.VALUE,
    placeholder: _tableCategories.TABLE_CATEGORIES.VALUE,
    step: _tableCategories.TABLE_CATEGORIES.VALUE,
    type: _tableCategories.TABLE_CATEGORIES.VALUE,
    value: _tableCategories.TABLE_CATEGORIES.VALUE,
    internalRef: _tableCategories.TABLE_CATEGORIES.VALUE,
    multiple: _tableCategories.TABLE_CATEGORIES.VALUE,
    manageInvalid: _tableCategories.TABLE_CATEGORIES.MANAGING,
    manageValue: _tableCategories.TABLE_CATEGORIES.MANAGING,
    onInput: _tableCategories.TABLE_CATEGORIES.ACTION,
    onChange: _tableCategories.TABLE_CATEGORIES.ACTION,
    onFocus: _tableCategories.TABLE_CATEGORIES.ACTION,
    onKeyDown: _tableCategories.TABLE_CATEGORIES.ACTION,
    onBlur: _tableCategories.TABLE_CATEGORIES.ACTION,
    onInvalid: _tableCategories.TABLE_CATEGORIES.ACTION,
    onPaste: _tableCategories.TABLE_CATEGORIES.ACTION,
    disabled: _tableCategories.TABLE_CATEGORIES.STATE,
    invalid: _tableCategories.TABLE_CATEGORIES.STATE,
    readonly: _tableCategories.TABLE_CATEGORIES.STATE,
    required: _tableCategories.TABLE_CATEGORIES.STATE,
    inputClass: _tableCategories.TABLE_CATEGORIES.STYLE,
    containerClass: _tableCategories.TABLE_CATEGORIES.STYLE,
    className: _tableCategories.TABLE_CATEGORIES.STYLE
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  label: 'Label'
};

var ExpandedInput = function ExpandedInput(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Input["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"].Start, {
      children: "Start"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"].End, {
      children: "End"
    })]
  }));
};

exports.ExpandedInput = ExpandedInput;
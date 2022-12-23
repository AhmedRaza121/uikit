"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithMember = exports.WithIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pill = _interopRequireDefault(require("./Pill"));

var _tableCategories = require("../../.storybook/tableCategories");

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/DataVisualisation/Pill',
  component: _Pill["default"],
  argTypes: {
    icon: _tableCategories.TABLE_CATEGORIES.VALUE,
    member: _tableCategories.TABLE_CATEGORIES.VALUE,
    label: _tableCategories.TABLE_CATEGORIES.VALUE,
    canDismiss: _tableCategories.TABLE_CATEGORIES.STATE,
    disabled: _tableCategories.TABLE_CATEGORIES.STATE,
    clickable: _tableCategories.TABLE_CATEGORIES.STATE,
    outline: _tableCategories.TABLE_CATEGORIES.STYLE,
    size: _tableCategories.TABLE_CATEGORIES.STYLE,
    classNames: _tableCategories.TABLE_CATEGORIES.STYLE,
    color: _tableCategories.TABLE_CATEGORIES.STYLE,
    deleteIcon: _tableCategories.TABLE_CATEGORIES.STYLE,
    onDelete: _tableCategories.TABLE_CATEGORIES.ACTION,
    onClick: _tableCategories.TABLE_CATEGORIES.ACTION
  },
  args: {
    label: 'label'
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], _objectSpread({}, args));
};

var WithMember = Template.bind({});
exports.WithMember = WithMember;
WithMember.args = {
  member: {
    name: 'Name Surname',
    title: 'title',
    id: '1'
  }
};
var WithIcon = Template.bind({});
exports.WithIcon = WithIcon;
WithIcon.args = {
  icon: 'alarm',
  canDismiss: true,
  color: 'primary',
  size: 'sm',
  onDelete: _utils.noop
};
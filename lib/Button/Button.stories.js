"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LabelIconButton = exports.LabelButton = exports.IconButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookAddonDesigns = require("storybook-addon-designs");

var _Button = _interopRequireDefault(require("./Button"));

var _tableCategories = require("../../.storybook/tableCategories");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Controls/Button',
  component: _Button["default"],
  argTypes: {
    label: _tableCategories.TABLE_CATEGORIES.VALUE,
    icon: _tableCategories.TABLE_CATEGORIES.VALUE,
    disabled: _tableCategories.TABLE_CATEGORIES.VALUE,
    innerRef: _tableCategories.TABLE_CATEGORIES.VALUE,
    variant: _tableCategories.TABLE_CATEGORIES.STYLE,
    size: _tableCategories.TABLE_CATEGORIES.STYLE,
    tooltipContent: _tableCategories.TABLE_CATEGORIES.STYLE,
    className: _tableCategories.TABLE_CATEGORIES.STYLE,
    customStyle: _tableCategories.TABLE_CATEGORIES.STYLE,
    onClick: _tableCategories.TABLE_CATEGORIES.ACTION
  },
  decorators: [_storybookAddonDesigns.withDesign],
  parameters: {
    controls: {
      sort: 'requiredFirst'
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/UNUiwIzQiaJzr42cHV3rki/Storybook?node-id=0%3A1'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], _objectSpread({}, args));
};

var LabelButton = Template.bind({});
exports.LabelButton = LabelButton;
LabelButton.args = {
  label: 'Button'
};
var IconButton = Template.bind({});
exports.IconButton = IconButton;
IconButton.args = {
  icon: 'alarm',
  variant: 'primary',
  size: 'sm'
};
var LabelIconButton = Template.bind({});
exports.LabelIconButton = LabelIconButton;
LabelIconButton.args = {
  label: 'Label',
  icon: 'alarm',
  variant: 'tertiary',
  size: 'lg'
};
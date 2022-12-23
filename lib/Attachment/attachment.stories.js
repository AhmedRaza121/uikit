"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NoMockData = exports.MockUpload = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookAddonMock = _interopRequireDefault(require("storybook-addon-mock"));

var _Attachment = _interopRequireDefault(require("./Attachment"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/Attachment',
  component: _Attachment["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Attachment["default"], _objectSpread({}, args));
};

var MockUpload = Template.bind({});
exports.MockUpload = MockUpload;
MockUpload.decorators = [_storybookAddonMock["default"]];
MockUpload.args = {
  label: 'Attachment',
  message: [{
    content: 'example message',
    status: 'green'
  }],
  tableName: 'test',
  tableSysId: 'test'
};
MockUpload.parameters = {
  mockData: [{
    url: '/api/now/attachment/upload',
    method: 'POST',
    status: 200,
    response: JSON.stringify({
      result: {
        sys_id: -1
      }
    })
  }, {
    url: '/api/now/attachment/-1',
    method: 'DELETE',
    status: 200
  }]
};
var NoMockData = Template.bind({});
exports.NoMockData = NoMockData;
NoMockData.args = {
  label: 'Attachment'
};
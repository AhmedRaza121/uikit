"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Test = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Progress = _interopRequireDefault(require("./Progress"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/DataVisualisation/Progress',
  component: _Progress["default"],
  args: {
    value: 50
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Progress["default"], _objectSpread({}, args));
};

var Default = Template.bind({});
exports.Default = Default;

var Test = function Test(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Progress["default"], {
      value: 0
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Progress["default"], {
      value: 30
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Progress["default"], {
      value: 100,
      status: "done"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Progress["default"], {
      value: 55,
      status: "exception"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Progress["default"], {
      value: 100,
      status: "active",
      showStatus: false
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Progress["default"], {
      value: 78,
      showInfo: false
    })]
  });
};

exports.Test = Test;
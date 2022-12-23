"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithHeader = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AccordionItem = _interopRequireDefault(require("./AccordionItem"));

var _Accordion = _interopRequireDefault(require("./Accordion"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Controls/Accordion/Item',
  component: _AccordionItem["default"],
  argTypes: {
    isLastItem: {
      table: {
        disable: true
      }
    },
    isFirstItem: {
      table: {
        disable: true
      }
    }
  }
}; // const Template =

exports["default"] = _default;

var Default = function Default(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionItem["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: "AccordionItem content"
    })
  }));
};

exports.Default = Default;
Default.args = {
  label: 'example label'
};

var WithHeader = function WithHeader(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_AccordionItem["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion["default"].Header, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "Example of header"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: "AccordionItem content"
    })]
  }));
};

exports.WithHeader = WithHeader;
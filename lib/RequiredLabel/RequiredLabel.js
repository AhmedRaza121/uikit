"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RequiredLabel = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var required = props.required,
      label = props.label,
      invalid = props.invalid,
      className = props.className,
      htmlFor = props.htmlFor;
  var labelClasses = (0, _classnames["default"])(className, 'label-area', {
    '--invalid': invalid
  });
  return required || label ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: labelClasses,
    ref: ref,
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: htmlFor,
      className: "label-text",
      children: label
    }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      className: "label-icon",
      icon: "asterisk",
      customSize: 7
    })]
  }) : null;
});
RequiredLabel.defaultProps = {
  required: false,
  invalid: false,
  className: {}
};
RequiredLabel.propTypes = {
  required: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  htmlFor: _propTypes["default"].string
};
var _default = RequiredLabel;
exports["default"] = _default;
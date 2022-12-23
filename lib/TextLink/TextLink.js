"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TextLink = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var download = props.download,
      href = props.href,
      label = props.label,
      openWindows = props.openWindows,
      underline = props.underline,
      variant = props.variant,
      onClick = props.onClick,
      className = props.className;
  var linkClasses = (0, _classnames["default"])('swf-text-link', variant, className, {
    underline: underline
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    href: href,
    download: download,
    onClick: onClick,
    className: linkClasses,
    target: openWindows ? '_blank' : '_self',
    ref: ref,
    rel: "noreferrer",
    children: label
  });
});
TextLink.defaultProps = {
  download: false,
  openWindows: false,
  underline: false,
  variant: 'primary',
  onClick: function onClick() {
    return void 0;
  },
  className: {}
};
TextLink.propTypes = {
  download: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]),
  href: _propTypes["default"].string,
  label: _propTypes["default"].string,
  openWindows: _propTypes["default"].bool,
  underline: _propTypes["default"].bool,
  variant: _propTypes["default"].oneOf(['primary', 'secondary']),
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = TextLink;
exports["default"] = _default;
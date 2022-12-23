"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bootstrapIcons = _interopRequireDefault(require("bootstrap-icons/bootstrap-icons.svg"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("./constants");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Icon = function Icon(props) {
  var icon = props.icon,
      size = props.size,
      customSize = props.customSize,
      color = props.color,
      className = props.className,
      innerRef = props.innerRef,
      zeroSize = props.zeroSize,
      onClick = props.onClick;
  var finalSize = customSize || _constants.SIZE[size];
  var dimensions = zeroSize ? 0 : finalSize;
  var classes = (0, _classnames["default"])('bi', className);
  var styles = {
    color: color,
    height: dimensions,
    width: dimensions
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    onClick: onClick,
    ref: function ref(elm) {
      return innerRef.current = elm;
    },
    className: classes,
    style: styles,
    width: dimensions,
    height: dimensions,
    fill: "currentColor",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("use", {
      xlinkHref: "".concat(_bootstrapIcons["default"], "#").concat(icon)
    })
  });
};

Icon.defaultProps = {
  icon: '',
  size: 'md',
  color: 'black',
  className: '',
  innerRef: /*#__PURE__*/React.createRef(),
  onClick: function onClick() {
    return void 0;
  }
};
Icon.propTypes = {
  icon: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  customSize: _propTypes["default"].number,
  color: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  innerRef: _propTypes["default"].object,
  zeroSize: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
var _default = Icon;
exports["default"] = _default;
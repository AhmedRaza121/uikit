"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _utils = require("./utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Button = function Button(props) {
  var disabled = props.disabled,
      icon = props.icon,
      label = props.label,
      tooltipContent = props.tooltipContent,
      size = props.size,
      variant = props.variant,
      customStyle = props.customStyle,
      children = props.children,
      onClick = props.onClick,
      className = props.className,
      type = props.type;
  var additionalStyle = (0, _utils.addStyles)(customStyle);

  var _hasIcon = icon.length > 0;

  var _hasLabel = label.length > 0;

  var _hasOnlyIcon = _hasIcon && !_hasLabel;

  var _iconSize = (0, _utils.getIconSize)(customStyle, icon, size);

  var buttonClasses = (0, _classnames["default"])(className, variant, "button-".concat(size), {
    'swf-button': true,
    active: !disabled,
    disabled: disabled,
    'has-icon': _hasIcon
  });
  var iconClasses = (0, _classnames["default"])({
    'button-icon': true,
    'label-button-icon': !_hasOnlyIcon
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: function ref(elm) {
      return props.innerRef.current = elm;
    },
    className: buttonClasses,
    onClick: onClick,
    disabled: disabled,
    title: tooltipContent,
    style: additionalStyle,
    type: type,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "content",
      children: [_hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: iconClasses,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: icon,
          customSize: _iconSize
        })
      }), _hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "button-label",
        children: label
      }), children]
    })
  });
};

Button.defaultProps = {
  disabled: false,
  icon: '',
  label: '',
  tooltipContent: '',
  size: 'md',
  variant: 'secondary',
  customStyle: null,
  className: {},
  innerRef: /*#__PURE__*/React.createRef(),
  type: 'button'
};
Button.propTypes = {
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  label: _propTypes["default"].string,
  tooltipContent: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['sm', 'md', 'lg']),
  variant: _propTypes["default"].oneOf(['primary', 'primary-positive', 'primary-negative', 'secondary', 'secondary-positive', 'secondary-negative', 'tertiary', 'inherit', '']),
  customStyle: _propTypes["default"].object,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  innerRef: _propTypes["default"].object,
  type: _propTypes["default"].oneOf(['button', 'reset', 'submit'])
};

var _default = /*#__PURE__*/React.memo(Button);

exports["default"] = _default;
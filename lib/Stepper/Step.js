"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Step = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _props$step = props.step,
      progress = _props$step.progress,
      icon = _props$step.icon,
      label = _props$step.label,
      sublabel = _props$step.sublabel,
      iconColor = props.iconColor,
      hideLabel = props.hideLabel;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "step-container",
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "step-body",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "step-line --before"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
        viewBox: "0 0 16 16",
        className: (0, _classnames3["default"])(_defineProperty({
          'step-circle': true
        }, "--".concat(progress), progress)),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
          cx: "50%",
          cy: "50%",
          r: "50%",
          className: (0, _classnames3["default"])(_defineProperty({}, "--".concat(progress), progress))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("foreignObject", {
          x: "25.25%",
          y: "0",
          height: "100%",
          width: "50%",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "step-icon",
            children: icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: icon,
              color: iconColor || 'white',
              zeroSize: true
            })
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "step-line --after"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "step-label",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: !hideLabel && label
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "step-sublabel",
        children: !hideLabel && sublabel
      })]
    })]
  });
});

Step.propTypes = {
  step: _propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    icon: _propTypes["default"].string,
    label: _propTypes["default"].string,
    sublabel: _propTypes["default"].string,
    progress: _propTypes["default"].oneOf(['none', 'partial', 'done']),
    disabled: _propTypes["default"].bool
  }),
  iconColor: _propTypes["default"].string,
  iconSize: _propTypes["default"].string,
  hideLabel: _propTypes["default"].bool
};
Step.defaultProps = {
  step: {
    id: '',
    icon: '',
    label: ''
  },
  iconColor: 'white',
  iconSize: 'sm',
  hideLabel: false
};

var _default = /*#__PURE__*/_react["default"].memo(Step, function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});

exports["default"] = _default;
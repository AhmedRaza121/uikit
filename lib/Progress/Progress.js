"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _index = require("../index");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Progress = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
      status = props.status,
      showInfo = props.showInfo,
      showStatus = props.showStatus,
      className = props.className;
  var hasValue = !isNaN(value);
  var valueStr = "".concat(value, "%");
  var realStatus = status === 'done' && value !== 100 ? 'active' : status;
  var classes = (0, _classnames2["default"])('swf-progress-container', _defineProperty({}, realStatus, showStatus), className);
  return hasValue && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes,
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "progress-bar",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "progress-bar-fill",
        style: {
          width: valueStr
        }
      })
    }), showInfo && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "progress-info-container",
      children: realStatus === 'active' || !showStatus ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "progress-info",
        children: valueStr
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
        icon: realStatus === 'done' ? 'check-circle-fill' : 'x-circle-fill',
        customSize: 20
      })
    })]
  });
}));
Progress.defaultProps = {
  showStatus: true,
  showInfo: true,
  status: 'active',
  className: ''
};
Progress.propTypes = {
  value: _propTypes["default"].number,
  status: _propTypes["default"].oneOf(['active', 'done', 'exception']),
  showInfo: _propTypes["default"].bool,
  showStatus: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
var _default = Progress;
exports["default"] = _default;
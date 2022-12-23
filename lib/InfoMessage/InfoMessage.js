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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InfoMessage = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var content = props.content,
      delay = props.delay,
      status = props.status,
      icon = props.icon,
      className = props.className,
      iconSize = props.iconSize;

  var _useState = (0, React.useState)(content),
      _useState2 = _slicedToArray(_useState, 2),
      contentValue = _useState2[0],
      setContentValue = _useState2[1];

  var timer = null;

  var setDelay = function setDelay() {
    if (delay) timer = setTimeout(function () {
      return setContentValue(undefined);
    }, delay);
  };

  (0, React.useEffect)(function () {
    setContentValue(content);
    setDelay();
  }, [content]);
  (0, React.useEffect)(function () {
    setDelay();
    return clearTimeout(timer);
  }, []);
  var messageClasses = (0, _classnames["default"])(className, status, 'info-message');
  return contentValue ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: messageClasses,
    ref: ref,
    children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      className: "input-message-icon",
      icon: icon,
      customSize: iconSize
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "input-message-content",
      children: contentValue
    })]
  }) : null;
});
InfoMessage.defaultProps = {
  status: 'red',
  className: '',
  iconSize: 16
};
InfoMessage.propTypes = {
  status: _propTypes["default"].oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
  content: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  iconSize: _propTypes["default"].number,
  delay: _propTypes["default"].number
};

var _default = /*#__PURE__*/React.memo(InfoMessage);

exports["default"] = _default;
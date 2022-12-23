"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Tooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var targetRef = props.targetRef,
      opened = props.opened,
      manageOpened = props.manageOpened,
      content = props.content,
      children = props.children,
      delay = props.delay,
      onHover = props.onHover,
      onTimerStop = props.onTimerStop,
      position = props.position,
      roundBorder = props.roundBorder;

  var _useState = (0, React.useState)(opened),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var openedFinal = manageOpened ? opened : isOpened;
  var timer = null;

  var renderContent = function renderContent() {
    var child = (0, _findByType["default"])(children, 'Content');
    if (!child && !content) return null;
    if (!child) return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: content
    });
    return child;
  };

  var targetHovered = function targetHovered(e) {
    if (!openedFinal) {
      timer = setTimeout(function () {
        !manageOpened && setIsOpened(false);
        onTimerStop();
      }, delay);
      !manageOpened && setIsOpened(true);
      onHover(e);
    }
  };

  (0, React.useEffect)(function () {
    if (targetRef !== null && targetRef !== void 0 && targetRef.current) targetRef.current.onmouseover = targetHovered;
    return clearTimeout(timer);
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      manageOpened: true,
      opened: openedFinal,
      positions: position,
      roundBorder: roundBorder,
      positionTarget: targetRef,
      hideTail: true,
      ref: ref,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: renderContent()
      })
    })
  });
});
Tooltip.Content = (0, _findByType.createSubComponent)('Content');
Tooltip.defaultProps = {
  delay: 700,
  manageOpened: false,
  opened: false,
  position: [{
    target: 'top-center',
    content: 'bottom-center'
  }, {
    target: 'bottom-center',
    content: 'top-center'
  }, {
    target: 'center-end',
    content: 'center-start'
  }, {
    target: 'center-start',
    content: 'center-end'
  }, {
    target: 'top-end',
    content: 'top-start'
  }, {
    target: 'bottom-end',
    content: 'bottom-start'
  }, {
    target: 'top-start',
    content: 'top-end'
  }, {
    target: 'bottom-start',
    content: 'bottom-end'
  }],
  roundBorder: true,
  content: '',
  onHover: function onHover() {
    return void 0;
  },
  onTimerStop: function onTimerStop() {
    return void 0;
  }
};
Tooltip.propTypes = {
  delay: _propTypes["default"].number,
  manageOpened: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  targetRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]),
  position: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    target: _propTypes["default"].string,
    content: _propTypes["default"].string
  })),
  roundBorder: _propTypes["default"].bool,
  content: _propTypes["default"].string,
  onHover: _propTypes["default"].func,
  onTimerStop: _propTypes["default"].func
};
var _default = Tooltip;
exports["default"] = _default;
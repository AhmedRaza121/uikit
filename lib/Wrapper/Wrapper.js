"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

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

var Wrapper = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      open = props.open,
      title = props.title,
      showWrapper = props.showWrapper,
      showButton = props.showButton,
      manageOpened = props.manageOpened,
      onOpen = props.onOpen,
      className = props.className,
      iconSize = props.iconSize;

  var _useState = (0, React.useState)(open),
      _useState2 = _slicedToArray(_useState, 2),
      openSate = _useState2[0],
      setOpenState = _useState2[1];

  var openFinal = manageOpened ? open : openSate;

  var setOpen = function setOpen() {
    onOpen({
      isOpened: manageOpened ? open : !openSate
    });
    !manageOpened && setOpenState(!openSate);
  };

  var renderChild = function renderChild(name) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: (0, _findByType["default"])(children, name)
    });
  };

  var arrowIcon = openFinal ? 'caret-down-fill' : 'caret-right-fill';
  var wrapperClasses = (0, _classnames["default"])(className, 'wrapper', {
    '--open': openFinal,
    '--close': !openFinal
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    ref: ref,
    dir: "ltr",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "wrapper-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "header-group",
        onClick: setOpen,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: arrowIcon,
          size: iconSize
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "title",
          children: title
        })]
      }), showButton ? renderChild('HeaderEnd') : null]
    }), openFinal && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames["default"])({
        'wrapper-content': showWrapper
      }),
      children: renderChild('Content')
    })]
  });
}));
Wrapper.Content = (0, _findByType.createSubComponent)('Content');
Wrapper.Button = (0, _findByType.createSubComponent)('HeaderEnd');
Wrapper.defaultProps = {
  open: false,
  title: '',
  showWrapper: false,
  manageOpened: false,
  onOpen: function onOpen() {
    return void 0;
  },
  className: ''
};
Wrapper.propTypes = {
  open: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  showWrapper: _propTypes["default"].bool,
  showButton: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  onOpen: _propTypes["default"].func,
  iconSize: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = Wrapper;
exports["default"] = _default;
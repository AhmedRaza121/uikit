"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

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

var TabItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var infoRef = (0, React.useRef)(null);

  var _useState = (0, React.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      infoOpened = _useState2[0],
      setInfoOpened = _useState2[1];

  var item = props.item,
      isSelected = props.isSelected,
      hideLabel = props.hideLabel,
      tabSelected = props.tabSelected,
      disabled = props.disabled;
  var label = item.label,
      icon = item.icon,
      id = item.id,
      style = item.style,
      _item$required = item.required,
      required = _item$required === void 0 ? false : _item$required,
      _item$invalid = item.invalid,
      invalid = _item$invalid === void 0 ? false : _item$invalid,
      infoMessage = item.infoMessage;
  var hasIcon = !!icon;
  var hasRef = infoRef && infoRef.current;
  var tabClasses = (0, _classnames["default"])({
    'swf-tab': true,
    active: isSelected && !disabled && !item.disabled,
    disabled: disabled || item.disabled,
    invalid: invalid
  });
  var popoverPositions = [{
    target: 'top-center',
    content: 'bottom-center'
  }, {
    target: 'top-start',
    content: 'bottom-start'
  }, {
    target: 'top-end',
    content: 'bottom-end'
  }, {
    target: 'bottom-center',
    content: 'top-center'
  }, {
    target: 'bottom-start',
    content: 'top-start'
  }, {
    target: 'bottom-end',
    content: 'top-end'
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: tabClasses,
    onClick: function onClick() {
      return tabSelected(item, item.id, disabled || item.disabled);
    },
    style: style || {},
    ref: ref,
    children: [hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      icon: icon,
      size: "sm"
    }), !hideLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "label",
      children: label
    }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      icon: "asterisk",
      customSize: 8
    }), infoMessage && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "info-icon-container",
      ref: function ref(el) {
        return infoRef.current = el;
      },
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        setInfoOpened(!infoOpened);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
        className: "info-icon",
        icon: infoOpened ? 'info-circle-fill' : 'info-circle',
        size: "sm"
      })
    }), hasRef && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      hideTail: true,
      manageOpened: true,
      opened: infoOpened,
      onOuterPopoverClicked: function onOuterPopoverClicked() {
        return setInfoOpened(false);
      },
      positionTarget: infoRef,
      positions: popoverPositions,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "info-content",
          children: infoMessage
        })
      })
    })]
  }, id);
});

var _default = /*#__PURE__*/React.memo(TabItem);

exports["default"] = _default;
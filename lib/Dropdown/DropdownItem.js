"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DropdownItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = props.id,
      disabled = props.disabled,
      onSelectAction = props.onSelectAction,
      isSelected = props.isSelected,
      label = props.label,
      className = props.className,
      sublabel = props.sublabel,
      number = props.number,
      icon = props.icon;
  var classes = (0, _classnames["default"])(className, 'swf-dropdown-item', {
    disabled: disabled,
    selected: isSelected,
    '--no-icon': !icon
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes,
    onClick: function onClick() {
      return !disabled && onSelectAction({
        id: id
      });
    },
    "data-key": id,
    ref: ref,
    children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      className: "item-element item-start",
      icon: icon,
      customSize: 20
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "text-items",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "label",
        children: label
      }), sublabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "sublabel",
        children: sublabel
      })]
    }), number && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "item-element item-end",
      children: number
    })]
  });
});
DropdownItem.defaultProps = {
  disabled: false,
  isSelected: false,
  className: ''
};
DropdownItem.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onSelectAction: _propTypes["default"].func,
  isSelected: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  sublabel: _propTypes["default"].string,
  number: _propTypes["default"].number,
  icon: _propTypes["default"].string
};

var _default = /*#__PURE__*/React.memo(DropdownItem, function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});

exports["default"] = _default;
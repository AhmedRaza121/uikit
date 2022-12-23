"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RadioOption = _interopRequireDefault(require("./RadioOption.js"));

var _constants = require("./constants");

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

var _utils = require("../utils");

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

var RadioButtons = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
      invalid = props.invalid,
      manageValue = props.manageValue,
      onChange = props.onChange,
      readonly = props.readonly,
      manageInvalid = props.manageInvalid,
      onInvalid = props.onInvalid,
      layout = props.layout,
      required = props.required;

  var _useState = (0, React.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      selectedValue = _useState2[0],
      setSelectedValue = _useState2[1];

  var _useState3 = (0, React.useState)(invalid),
      _useState4 = _slicedToArray(_useState3, 2),
      isInvalid = _useState4[0],
      setIsInvalid = _useState4[1];

  var selectedFinal = manageValue ? value : selectedValue;
  var invalidFinal = manageInvalid ? invalid : isInvalid;
  var optionClicked = (0, React.useCallback)(function (option) {
    if (!readonly) {
      !manageValue && setSelectedValue(option.id);
      onChange(option);
    }
  }, [readonly, manageValue, onChange]);
  var optionInvalid = (0, React.useCallback)(function (e) {
    !manageInvalid && setIsInvalid(true);
    onInvalid(e);
  }, [manageInvalid, onInvalid]);

  var renderValue = function renderValue(option, name) {
    var id = option.id,
        label = option.label,
        value = option.value,
        checked = option.checked,
        readonly = option.readonly,
        disabled = option.disabled;
    var isChecked = selectedFinal ? selectedFinal === id : checked;
    var isHorizontal = layout === _constants.RADIO_BUTTONS_LAYOUT.horizontal;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioOption["default"], {
      id: id,
      label: label,
      value: value,
      checked: isChecked,
      readonly: readonly || props.readonly,
      disabled: disabled || props.disabled,
      required: required,
      invalid: invalidFinal,
      name: name,
      onChangeAction: optionClicked,
      onInvalidAction: optionInvalid,
      isHorizontal: isHorizontal
    }, id);
  };

  var label = props.label,
      name = props.name,
      options = props.options,
      visible = props.visible,
      className = props.className,
      labelClassName = props.labelClassName;
  return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])(className, 'radio-buttons-container'),
      ref: ref,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])({
          'radio-buttons-header': true,
          invalid: invalidFinal
        }),
        children: (label || required) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
          className: labelClassName,
          invalid: invalidFinal,
          required: required,
          label: label
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "group-of-radio-buttons",
        children: options.map(function (option) {
          return renderValue(option, name);
        })
      })]
    })
  }) : null;
});
RadioButtons.defaultProps = {
  disabled: false,
  layout: _constants.RADIO_BUTTONS_LAYOUT.vertical,
  manageValue: false,
  options: [],
  readonly: false,
  required: false,
  manageInvalid: false,
  visible: true,
  onChange: _utils.noop,
  onInvalid: _utils.noop,
  className: {},
  labelClassName: {}
};
RadioButtons.propTypes = {
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  layout: _propTypes["default"].oneOf([_constants.RADIO_BUTTONS_LAYOUT.vertical, _constants.RADIO_BUTTONS_LAYOUT.horizontal]),
  manageValue: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].string,
    value: _propTypes["default"].string,
    checked: _propTypes["default"].bool,
    readonly: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool
  })),
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  className: _propTypes["default"].object,
  labelClassName: _propTypes["default"].object
};
var _default = RadioButtons;
exports["default"] = _default;
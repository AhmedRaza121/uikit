"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

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

var Checkbox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var checked = props.checked,
      invalid = props.invalid,
      manageChecked = props.manageChecked,
      manageInvalid = props.manageInvalid,
      onChange = props.onChange,
      onInvalid = props.onInvalid,
      readonly = props.readonly,
      disabled = props.disabled,
      label = props.label,
      name = props.name,
      value = props.value,
      required = props.required,
      visible = props.visible,
      className = props.className,
      labelClassName = props.labelClassName,
      inlineRequired = props.inlineRequired;

  var _useState = (0, React.useState)(checked),
      _useState2 = _slicedToArray(_useState, 2),
      checkedSate = _useState2[0],
      setCheckedState = _useState2[1];

  var _useState3 = (0, React.useState)(invalid),
      _useState4 = _slicedToArray(_useState3, 2),
      invalidSate = _useState4[0],
      setInvalidState = _useState4[1];

  var checkedFinal = manageChecked ? checked : checkedSate;
  var invalidFinal = manageInvalid ? invalid : invalidSate;
  var checkboxRef = (0, React.useRef)(null);

  var onChangeAction = function onChangeAction(e) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    var newValue = checkedFinal === 'indeterminate' || !checkedFinal;
    var canChange = !readonly && !disabled;
    if (!canChange) return;
    !manageChecked && setCheckedState(newValue);
    onChange({
      value: manageChecked ? checked : newValue,
      valueName: value,
      label: label,
      name: name
    });
  };

  var onInvalidAction = function onInvalidAction(e) {
    !manageInvalid && setInvalidState(true);
    onInvalid(e, {
      value: manageInvalid ? invalid : true,
      valueName: value,
      label: label,
      name: name
    });
  };

  var setIndeterminate = function setIndeterminate() {
    if (checkboxRef !== null && checkboxRef !== void 0 && checkboxRef.current) {
      var _isIndeterminate = checkedFinal === 'indeterminate';

      var input = checkboxRef.current.querySelector('input');
      if (input) input.indeterminate = _isIndeterminate;
    }
  };

  var stopEvent = function stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  (0, React.useEffect)(setIndeterminate, []);
  (0, React.useEffect)(setIndeterminate, [checked, checkedSate]);
  var isIndeterminate = checkedFinal === 'indeterminate';
  var checkedInputValue = isIndeterminate || checkedFinal;
  var checkBoxClasses = (0, _classnames["default"])({
    'swf-checkbox-container': true,
    disabled: disabled,
    readonly: readonly,
    invalid: invalidFinal
  });
  return visible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: className,
      ref: ref,
      children: [(label || required) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
        className: labelClassName,
        invalid: invalidFinal,
        required: required,
        label: label
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: checkBoxClasses,
        ref: checkboxRef,
        onClick: onChangeAction,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          className: "checkbox-input",
          type: "checkbox",
          disabled: disabled,
          required: required,
          name: name,
          value: checkedFinal,
          checked: checkedInputValue,
          onInvalid: onInvalidAction,
          onChange: stopEvent,
          onClick: stopEvent
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "checkbox-information",
          children: value && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
            htmlFor: name,
            className: "checkbox-label",
            required: inlineRequired,
            label: value
          })
        })]
      })]
    })
  });
});
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  invalid: false,
  manageChecked: false,
  manageInvalid: false,
  readonly: false,
  required: false,
  visible: true,
  onInvalid: function onInvalid() {
    return void 0;
  },
  onChange: function onChange() {
    return void 0;
  },
  inlineRequired: false,
  className: '',
  labelClassName: ''
};
Checkbox.propTypes = {
  checked: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['indeterminate'])]),
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  manageChecked: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  onInvalid: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  value: _propTypes["default"].string,
  labelClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  inlineRequired: _propTypes["default"].bool
};

var _default = /*#__PURE__*/React.memo(Checkbox);

exports["default"] = _default;
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

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RadioOption = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = props.id,
      checked = props.checked,
      readonly = props.readonly,
      disabled = props.disabled,
      name = props.name,
      value = props.value,
      label = props.label,
      onChangeAction = props.onChangeAction,
      onInvalidAction = props.onInvalidAction,
      invalid = props.invalid,
      isHorizontal = props.isHorizontal,
      required = props.required,
      className = props.className;
  var optionClasses = (0, _classnames["default"])(className, 'radio-option-container', {
    disabled: disabled,
    readonly: readonly,
    invalid: invalid,
    horizontal: isHorizontal
  });
  var canChangeValue = !readonly && !disabled;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: optionClasses,
    onClick: function onClick() {
      return canChangeValue && onChangeAction({
        id: id,
        name: name,
        value: value
      });
    },
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      className: (0, _classnames["default"])('radio-option', {
        checked: checked
      }),
      type: "radio",
      id: id,
      checked: checked,
      value: value || label || '',
      disabled: disabled,
      readOnly: readonly,
      name: name,
      required: required,
      onChange: function onChange() {
        return void 0;
      },
      onInvalid: function onInvalid(e) {
        return onInvalidAction({
          e: e,
          id: id
        });
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: "radio-option-label",
      children: label
    })]
  });
});
RadioOption.defaultProps = {
  name: '',
  label: '',
  className: '',
  onChangeAction: _utils.noop,
  onInvalidAction: _utils.noop
};
RadioOption.propTypes = {
  id: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  isHorizontal: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  onChangeAction: _propTypes["default"].func,
  onInvalidAction: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};

var _default = /*#__PURE__*/React.memo(RadioOption, function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});

exports["default"] = _default;
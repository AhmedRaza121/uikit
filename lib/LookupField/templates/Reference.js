"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reference = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../../index");

var _LookUpContext = require("../context/LookUpContext");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Reference = function Reference(props) {
  var intRef = props.intRef,
      onClear = props.onClear,
      referenceValue = props.referenceValue;

  var _useContext = (0, React.useContext)(_LookUpContext.LookUpContext),
      _useContext$props = _useContext.props,
      name = _useContext$props.name,
      invalid = _useContext$props.invalid,
      required = _useContext$props.required,
      message = _useContext$props.message,
      readonly = _useContext$props.readonly,
      label = _useContext$props.label,
      chars = _useContext.chars,
      setChars = _useContext.setChars;

  var handleInput = function handleInput(event) {
    setChars(event.target.value);
    onClear();
  };

  var showDeleteButton = !!referenceValue.value;
  var showedValue = referenceValue.value ? referenceValue.displayValue : chars;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input, {
    internalRef: intRef,
    className: "swf-reference--input",
    value: showedValue,
    label: label,
    manageValue: true,
    name: name,
    onInput: handleInput,
    readonly: readonly,
    onInvalid: function onInvalid() {
      return void 0;
    },
    invalid: invalid,
    required: required,
    message: message,
    children: !readonly && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.End, {
      children: showDeleteButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
        bare: true,
        variant: "tertiary",
        icon: "x",
        size: "md",
        tooltipContent: "Clear",
        onClick: onClear
      })
    })
  });
};

exports.Reference = Reference;
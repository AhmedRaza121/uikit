"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LookUpContext = void 0;

var _react = require("react");

var _utils = require("../../utils");

var initialValue = {
  props: {
    type: '',
    value: '',
    displayValue: '',
    onValueChange: _utils.noop,
    name: '',
    readonly: false,
    reference: '',
    internalRef: null,
    visible: false,
    onInvalid: _utils.noop,
    message: null,
    label: '',
    invalid: false,
    required: false,
    tableRecordSysId: '',
    table: ''
  },
  chars: '**',
  setChars: _utils.noop,
  loading: false,
  focused: false,
  setFocused: _utils.noop,
  isGlideList: false,
  isReference: true
};
var LookUpContext = /*#__PURE__*/(0, _react.createContext)(initialValue);
exports.LookUpContext = LookUpContext;
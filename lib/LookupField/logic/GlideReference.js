"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlideReference = void 0;

var _react = require("react");

var _Reference = require("../templates/Reference");

var _LookUpContext = require("../context/LookUpContext");

var _jsxRuntime = require("react/jsx-runtime");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var GlideReference = function GlideReference(props) {
  var intRef = props.intRef;
  var context = (0, _react.useContext)(_LookUpContext.LookUpContext);
  var _context$props = context.props,
      name = _context$props.name,
      onValueChange = _context$props.onValueChange,
      _context$props$value = _context$props.value,
      value = _context$props$value === void 0 ? '' : _context$props$value,
      _context$props$displa = _context$props.displayValue,
      displayValue = _context$props$displa === void 0 ? '' : _context$props$displa,
      setSubscriber = context.setSubscriber,
      setFocused = context.setFocused,
      setChars = context.setChars;

  var _useState = (0, _react.useState)({
    value: value,
    displayValue: displayValue
  }),
      _useState2 = _slicedToArray(_useState, 2),
      referenceValue = _useState2[0],
      setReferenceValue = _useState2[1];

  var handleClearValue = function handleClearValue() {
    setReferenceValue(function (_) {
      return {
        value: '',
        displayValue: ''
      };
    });
  };

  var handleClick = function handleClick(record) {
    var sysId = record.sysId,
        referenceData = record.referenceData;

    var _referenceData = _slicedToArray(referenceData, 1),
        data = _referenceData[0];

    setReferenceValue(function (_) {
      return {
        value: sysId,
        displayValue: data === null || data === void 0 ? void 0 : data.value
      };
    });
    setChars('');
    setFocused(false);
  };

  (0, _react.useEffect)(function () {
    onValueChange && onValueChange(name, referenceValue.value.toString(), referenceValue.displayValue);
  }, [referenceValue.value]);
  (0, _react.useEffect)(function () {
    setSubscriber(handleClick);
  }, [setSubscriber]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Reference.Reference, {
    intRef: intRef,
    referenceValue: referenceValue,
    onClear: handleClearValue
  });
};

exports.GlideReference = GlideReference;
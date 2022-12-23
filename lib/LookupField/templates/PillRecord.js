"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Record = exports.PillRecords = void 0;

var React = _interopRequireWildcard(require("react"));

var _Pill = _interopRequireDefault(require("../../Pill/Pill"));

var _index = require("../../index");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Record = function Record(props) {
  var label = props.label,
      onDelete = props.onDelete;
  if (!label) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], {
    label: label,
    canDismiss: true,
    onDelete: onDelete
  }, label);
};

exports.Record = Record;

var PillRecords = function PillRecords(props) {
  var records = props.records,
      onDelete = props.onDelete;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.Start, {
    children: records.map(function (label) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Record, {
        label: label,
        onDelete: onDelete
      });
    })
  });
};

exports.PillRecords = PillRecords;
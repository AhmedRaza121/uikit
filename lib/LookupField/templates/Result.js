"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Result = function Result(props) {
  var records = props.records,
      onClick = props.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: records.map(function (record) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        className: "result--item",
        onMouseDown: function onMouseDown() {
          return onClick(record);
        },
        children: record.referenceData.map(function (data, index) {
          if (index === 0) return /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "main",
            children: data.value
          }, index);
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "additional",
            children: data.value
          }, index);
        })
      }, record.sysId);
    })
  });
};

Result.defaultProps = {
  records: [],
  onClick: _utils.noop
};
Result.propTypes = {
  records: _propTypes["default"].array,
  onClick: _propTypes["default"].func
};
var _default = Result;
exports["default"] = _default;
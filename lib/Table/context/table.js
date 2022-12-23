"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableProvider = exports.TableContext = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TableContext = /*#__PURE__*/(0, _react.createContext)({
  currentPage: 1,
  peerPage: 10,
  offset: 0
});
exports.TableContext = TableContext;

var TableProvider = function TableProvider(_ref) {
  var _ref$offsetChanged = _ref.offsetChanged,
      offsetChanged = _ref$offsetChanged === void 0 ? _utils.noop : _ref$offsetChanged,
      _ref$currentPageChang = _ref.currentPageChanged,
      currentPageChanged = _ref$currentPageChang === void 0 ? _utils.noop : _ref$currentPageChang,
      _ref$peerPageChanged = _ref.peerPageChanged,
      peerPageChanged = _ref$peerPageChanged === void 0 ? _utils.noop : _ref$peerPageChanged,
      children = _ref.children;

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = (0, _react.useState)(50),
      _useState4 = _slicedToArray(_useState3, 2),
      peerPage = _useState4[0],
      setPeerPage = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      offset = _useState6[0],
      setOffset = _useState6[1];

  var handleCurrentPage = function handleCurrentPage(value) {
    setCurrentPage(value);
    currentPageChanged(value);
  };

  var handleOffsetChanged = function handleOffsetChanged(value) {
    setOffset(value);
    offsetChanged(value);
  };

  var handlePeerPageChanged = function handlePeerPageChanged(value) {
    setPeerPage(value);
    peerPageChanged(value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TableContext.Provider, {
    value: {
      currentPage: currentPage,
      peerPage: peerPage,
      offset: offset,
      setCurrentPage: handleCurrentPage,
      setPeerPage: handlePeerPageChanged,
      setOffset: handleOffsetChanged
    },
    children: children
  });
};

exports.TableProvider = TableProvider;
TableProvider.defaulProps = {
  offsetChanged: _utils.noop,
  currentPageChanged: _utils.noop,
  peerPageChanged: _utils.noop
};
TableProvider.propTypes = {
  offsetChanged: _propTypes["default"].func,
  currentPageChanged: _propTypes["default"].func,
  peerPageChanged: _propTypes["default"].func
};
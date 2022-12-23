"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Td = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Td = function Td(_ref) {
  var centered = _ref.centered,
      render = _ref.render,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
    className: (0, _classnames["default"])('swfTd', centered && 'center'),
    children: render ? render({
      centered: centered,
      children: children
    }) : children
  });
};

exports.Td = Td;
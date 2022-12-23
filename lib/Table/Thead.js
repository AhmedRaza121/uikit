"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thead = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Thead = function Thead(_ref) {
  var sticky = _ref.sticky,
      position = _ref.position,
      children = _ref.children;
  var theadRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    theadRef.current.style.setProperty('--position', "".concat(position, "px"));
  }, [position]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
    ref: theadRef,
    className: (0, _classnames["default"])('swfThead', sticky && '--sticky'),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
      children: children
    })
  });
};

exports.Thead = Thead;
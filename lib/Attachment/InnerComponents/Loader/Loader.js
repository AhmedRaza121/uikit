"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Loader = function Loader(props) {
  var loaderRef = (0, React.useRef)(null);
  (0, React.useEffect)(function () {
    if (loaderRef !== null && loaderRef !== void 0 && loaderRef.current) {
      var parentEl = loaderRef.current.parentElement.parentElement;

      if (parentEl) {
        var styles = getComputedStyle(parentEl);
        loaderRef.current.style.minHeight = "".concat(parentEl.offsetHeight - styles.paddingTop.split('px')[0] - styles.paddingBottom.split('px')[0], "px");
      }
    }
  }, []);
  var actionName = props.actionName,
      className = props.className;
  var containerClasses = (0, _classnames["default"])(className, 'swf-loader');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "swf-loader-container",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: containerClasses,
        ref: loaderRef,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "loader-container",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: actionName
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "loader"
          })]
        })
      })
    })
  });
};

Loader.defaultProps = {
  actionName: '',
  className: ''
};
Loader.propTypes = {
  actionName: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};

var _default = /*#__PURE__*/React.memo(Loader);

exports["default"] = _default;
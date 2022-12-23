"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Preloader = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var count = props.count,
      items = props.items,
      width = props.width,
      height = props.height,
      flexDirectionGeneral = props.flexDirectionGeneral,
      background = props.background,
      mainStyles = props.mainStyles,
      blur = props.blur;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "swf-preloader",
    style: {
      flexDirection: flexDirectionGeneral,
      flexWrap: 'wrap'
    },
    ref: ref,
    children: new Array(count).fill(null).map(function (el, i) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])({
          'mock-container': true,
          gray: background
        }),
        style: _objectSpread({
          width: width,
          height: height
        }, mainStyles),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "light-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "light",
            style: {
              filter: "blur(".concat(blur, ")")
            }
          })
        }), items.map(function (_ref, i) {
          var repeat = _ref.repeat,
              width = _ref.width,
              height = _ref.height,
              styles = _ref.styles,
              itemStyles = _ref.itemStyles;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: _objectSpread({
              display: 'flex'
            }, itemStyles),
            children: new Array(repeat).fill(null).map(function (_, i) {
              var style = styles ? styles[i] : {};
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "mock-row",
                style: _objectSpread({
                  width: width,
                  height: height
                }, style)
              }, "".concat(width, "-").concat(height, "-").concat(count, "-").concat(repeat, "-").concat(i, "-preloader-mock-row"));
            })
          }, "".concat(width, "-").concat(height, "-").concat(count, "-").concat(repeat, "-").concat(i, "-preloader-row-container"));
        })]
      }, "".concat(width, "-").concat(height, "-").concat(count, "-").concat(i, "-preloader-mock-container"));
    })
  });
});
Preloader.defaultProps = {
  count: 0,
  items: [],
  width: 'auto',
  height: 'auto',
  flexDirectionGeneral: 'column',
  background: true,
  mainStyles: {},
  blur: '4rem'
};
Preloader.propTypes = {
  count: _propTypes["default"].number,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    repeat: _propTypes["default"].number,
    width: _propTypes["default"].string,
    height: _propTypes["default"].string,
    styles: _propTypes["default"].arrayOf(_propTypes["default"].object),
    itemStyles: _propTypes["default"].object
  })),
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  flexDirectionGeneral: _propTypes["default"].oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  background: _propTypes["default"].bool,
  mainStyles: _propTypes["default"].object,
  blur: _propTypes["default"].string
};
var _default = Preloader;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _constants = require("./constants");

var _Preloader = _interopRequireDefault(require("../Preloader/Preloader"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CardPreloader = function CardPreloader() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preloader["default"], {
    count: 1,
    items: [{
      width: '100%',
      height: '0.8rem',
      repeat: 3,
      styles: [{
        width: '3.75rem',
        height: '1.2rem'
      }, {
        width: '7.5rem',
        height: '1.2rem',
        marginLeft: 'auto'
      }, {
        width: '1.2rem',
        height: '1.2rem',
        minWidth: '1.2rem',
        borderRadius: '0.3rem'
      }]
    }, {
      width: '70%',
      height: '1.7rem',
      repeat: 1
    }, {
      width: '90%',
      height: '0.8rem',
      repeat: 2,
      styles: [{
        width: '1.1rem',
        height: '1.1rem',
        borderRadius: '50%'
      }, {
        width: '3rem',
        margin: '6px 0 0 0'
      }]
    }, {
      width: '4rem',
      height: '0.8rem',
      repeat: 2,
      styles: [{
        margin: '2px'
      }, {
        margin: '2px'
      }]
    }, {
      width: '100%',
      height: '2rem',
      repeat: 2,
      styles: [{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%'
      }, {
        width: '7rem',
        height: '1.2rem',
        marginTop: '10px'
      }]
    }],
    height: "11rem",
    width: _constants.GLOBAL_CONSTANTS.IS_MOBILE ? '280px' : '100%',
    flexDirectionGeneral: "row",
    blur: "3rem"
  });
};

var _default = CardPreloader;
exports["default"] = _default;
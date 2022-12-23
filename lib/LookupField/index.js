"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LookupField = void 0;

var _react = require("react");

var _LookUpProvider = require("./context/LookUpProvider");

var _SearchResult = require("./templates/SearchResult");

var _LookUpContext = require("./context/LookUpContext");

var _GlideReference = require("./logic/GlideReference");

var _GlideList = require("./logic/GlideList");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Field = function Field() {
  var _useContext = (0, _react.useContext)(_LookUpContext.LookUpContext),
      _useContext$props = _useContext.props,
      type = _useContext$props.type,
      _useContext$props$int = _useContext$props.internalRef,
      internalRef = _useContext$props$int === void 0 ? (0, _react.useRef)() : _useContext$props$int,
      _useContext$props$vis = _useContext$props.visible,
      visible = _useContext$props$vis === void 0 ? true : _useContext$props$vis,
      setFocused = _useContext.setFocused;

  var target = (0, _react.useRef)();

  var onFocus = function onFocus() {
    return setFocused(true);
  };

  var onBlur = function onBlur() {
    return setFocused(false);
  };

  var isGlideList = type === 'glide_list';
  var isReference = !isGlideList;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: visible && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swf-reference",
      tabIndex: "0",
      onFocus: onFocus,
      onBlur: onBlur,
      ref: function ref(elm) {
        return internalRef.current = elm;
      },
      children: [isGlideList && /*#__PURE__*/(0, _jsxRuntime.jsx)(_GlideList.GlideList, {
        intRef: target
      }), isReference && /*#__PURE__*/(0, _jsxRuntime.jsx)(_GlideReference.GlideReference, {
        intRef: target
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchResult.SearchResult, {
        target: target
      })]
    })
  });
};

var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inherits(ErrorBoundary, _Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return null;
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(_react.Component);

var LookupField = function LookupField(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ErrorBoundary, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LookUpProvider.LookUpProvider, _objectSpread(_objectSpread({}, props), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Field, {})
    }))
  });
};

exports.LookupField = LookupField;
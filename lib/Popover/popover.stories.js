"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TargetRef = exports.Default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Popover = _interopRequireDefault(require("./Popover"));

var _Toggle = _interopRequireDefault(require("../Toggle/Toggle"));

var _InfoMessage = _interopRequireDefault(require("../InfoMessage/InfoMessage"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Containers/Popover',
  component: _Popover["default"] // args: {
  //
  // }

};
exports["default"] = _default;

var Default = function Default(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Popover["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Target, {
      children: "Target"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          width: '800px',
          height: '100px',
          padding: '10px'
        },
        children: "Example Content"
      })
    })]
  }));
}; // Default.args = {
//     positions: [
//         {
//             target: "bottom-start",
//             content: "top-start"
//         },
//         {
//             target: "center-end",
//             content: "center-start"
//         }
//     ],
//     hideTail: true
// }


exports.Default = Default;

var TargetRef = function TargetRef(args) {
  var PopoverWithRef = /*#__PURE__*/function (_React$Component) {
    _inherits(PopoverWithRef, _React$Component);

    var _super = _createSuper(PopoverWithRef);

    function PopoverWithRef(props) {
      var _this;

      _classCallCheck(this, PopoverWithRef);

      _this = _super.call(this, props);
      _this.state = {
        styles: {
          width: '100px',
          height: '100px',
          padding: '10px'
        },
        current: null
      };
      _this.popoverRef = /*#__PURE__*/(0, _react.createRef)();
      return _this;
    }

    _createClass(PopoverWithRef, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !_.isEqual(nextState, this.state);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        // console.log(this.state.current)
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], {
            content: "Message content"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            ref: function ref(el) {
              return _this2.setState({
                current: el
              });
            },
            children: "Target by ref"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], _objectSpread(_objectSpread({}, this.props), {}, {
            positionTarget: {
              current: this.state.current
            },
            opened: false,
            ref: function ref(el) {
              return _this2.popoverRef.current = el;
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                style: this.state.styles,
                onClick: function onClick() {
                  return _this2.setState({
                    styles: {
                      width: '100px',
                      height: '200px',
                      padding: '10px'
                    }
                  });
                },
                children: ["Example Content", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggle["default"], {})]
              })
            })
          }))]
        });
      }
    }]);

    return PopoverWithRef;
  }(_react["default"].Component);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PopoverWithRef, _objectSpread({}, args));
}; // TargetRef.args = {
//     positions: [
//         {
//             target: "bottom-start",
//             content: "top-start"
//         },
//         {
//             target: "center-end",
//             content: "center-start"
//         }
//     ],
//     hideTail: true
// }


exports.TargetRef = TargetRef;
TargetRef.parameters = {
  docs: {
    source: {
      type: 'code'
    }
  }
};
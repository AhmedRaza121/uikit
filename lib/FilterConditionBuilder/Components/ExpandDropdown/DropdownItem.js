"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../../../Icon/Icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var DropdownItem = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  var _super = _createSuper(DropdownItem);

  function DropdownItem(props) {
    var _this;

    _classCallCheck(this, DropdownItem);

    _this = _super.call(this, props);

    _this.itemSelected = function (_ref) {
      var dropdownClicked = _ref.dropdownClicked;
      var _this$props = _this.props,
          id = _this$props.id,
          disabled = _this$props.disabled,
          onSelectAction = _this$props.onSelectAction,
          listIndex = _this$props.listIndex;
      if (!disabled) onSelectAction({
        id: id,
        dropdownClicked: dropdownClicked,
        listIndex: listIndex
      });
    };

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          expandIcon = _this$props2.expandIcon,
          label = _this$props2.label,
          disabled = _this$props2.disabled,
          isSelected = _this$props2.isSelected,
          reference = _this$props2.reference,
          isDropdown = _this$props2.isDropdown;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "dropdown-item": true,
            "disabled": disabled,
            "selected": isSelected
          }),
          onClick: function onClick(e) {
            _this2.itemSelected({
              dropdownClicked: false
            });

            e.stopPropagation();
          },
          "data-key": id,
          children: [label, expandIcon && !!reference && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              display: "flex",
              alignSelf: "center"
            },
            onClick: function onClick(e) {
              _this2.itemSelected({
                dropdownClicked: true
              });

              e.stopPropagation();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: isDropdown ? "".concat(expandIcon, "-fill") : expandIcon,
              size: "sm"
            })
          })]
        })
      });
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.defaultProps = {
  disabled: false,
  isSelected: false
};
DropdownItem.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onSelectAction: _propTypes["default"].func,
  isSelected: _propTypes["default"].bool,
  icon: _propTypes["default"].string
};
var _default = DropdownItem;
exports["default"] = _default;
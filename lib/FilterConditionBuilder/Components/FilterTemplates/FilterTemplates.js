"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../../../index");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var FilterTemplates = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterTemplates, _React$Component);

  var _super = _createSuper(FilterTemplates);

  function FilterTemplates(props) {
    var _this;

    _classCallCheck(this, FilterTemplates);

    _this = _super.call(this, props);

    _this.handleSelectItem = function (_ref) {
      var _clickedItem$id;

      var clickedItem = _ref.clickedItem;
      var _this$props = _this.props,
          setQuery = _this$props.setQuery,
          setAdvanced = _this$props.setAdvanced;
      var isAdvanced = ["advanced"].includes(clickedItem === null || clickedItem === void 0 ? void 0 : clickedItem.id);

      _this.setState({
        selectedItem: _objectSpread(_objectSpread({}, _this.state.selectedItem), {}, _defineProperty({}, _this.props.table, clickedItem))
      });

      var query = isAdvanced ? "" : (_clickedItem$id = clickedItem === null || clickedItem === void 0 ? void 0 : clickedItem.id) !== null && _clickedItem$id !== void 0 ? _clickedItem$id : "";
      setAdvanced(isAdvanced);
      setQuery({
        query: query
      });
    };

    _this.filters = function () {
      var filterList = _this.props.filterList;
      return [].concat(_toConsumableArray(filterList.map(function (_ref2) {
        var title = _ref2.title,
            filter = _ref2.filter;
        return {
          id: filter,
          label: title
        };
      })), _toConsumableArray(_this.advancedMode));
    };

    _this.advancedMode = [{
      id: "advanced",
      label: "Advanced"
    }];
    _this.state = {
      popoverToogle: false,
      popoverTarget: null,
      btnRef: null,
      filteredValues: [],
      searchValue: "",
      selectedItem: _defineProperty({}, props.table, {
        id: "",
        label: ""
      })
    };
    return _this;
  }

  _createClass(FilterTemplates, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.table !== this.props.table) {
        if (!(this.props.table in this.state.selectedItem)) {
          this.setState({
            selectedItem: _objectSpread(_objectSpread({}, this.state.selectedItem), {}, _defineProperty({}, this.props.table, {
              id: "",
              label: ""
            }))
          });
        }

        this.handleSelectItem({
          clickedItem: this.state.selectedItem[this.props.table]
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _selectedItem$table;

      var table = this.props.table;
      var selectedItem = this.state.selectedItem;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          marginRight: "1rem"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Dropdown, {
          items: this.filters(),
          manageSelectedItems: true,
          onItemSelected: this.handleSelectItem,
          selectedItems: [(_selectedItem$table = selectedItem[table]) === null || _selectedItem$table === void 0 ? void 0 : _selectedItem$table.id],
          select: "single",
          placeholder: "-- Choose filter --"
        })
      });
    }
  }]);

  return FilterTemplates;
}(React.Component);

exports["default"] = FilterTemplates;
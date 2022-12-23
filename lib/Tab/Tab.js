"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabItem = _interopRequireDefault(require("./TabItem"));

var _constants = require("./constants");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Tab = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var hideLabel = props.hideLabel,
      items = props.items,
      tabsAlignment = props.tabsAlignment,
      selectedItem = props.selectedItem,
      manageSelectedItem = props.manageSelectedItem,
      onClick = props.onClick,
      disabled = props.disabled;

  var _useState = (0, React.useState)(selectedItem),
      _useState2 = _slicedToArray(_useState, 2),
      currentSelectedItem = _useState2[0],
      setCurrentSelectedItem = _useState2[1];

  var tabSelected = (0, React.useCallback)(function (item, id, disabled) {
    if (!disabled) {
      onClick({
        id: id,
        item: item
      });
      if (!manageSelectedItem) setCurrentSelectedItem(id);
    }
  }, [disabled, items, manageSelectedItem, onClick]);
  (0, React.useEffect)(function () {
    if (manageSelectedItem) setCurrentSelectedItem(selectedItem);
  }, [selectedItem, manageSelectedItem]);
  var tabsClasses = (0, _classnames["default"])({
    'swf-tabs-container': true,
    'flex-start': tabsAlignment === 'left',
    'flex-end': tabsAlignment === 'right',
    center: tabsAlignment === 'center',
    stretch: tabsAlignment === 'stretch'
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: tabsClasses,
      ref: ref,
      children: _lodash["default"].orderBy(items, ['count'], ['asc']).map(function (item) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabItem["default"], {
          item: item,
          isSelected: currentSelectedItem === item.id,
          hideLabel: hideLabel,
          tabSelected: tabSelected,
          disabled: disabled
        }, item.id);
      })
    })
  });
});
Tab.defaultProps = {
  items: [],
  hideLabel: false,
  manageSelectedItem: false,
  selectedItem: '',
  tabsAlignment: _constants.ALIGNMENT.STRETCH,
  onClick: function onClick() {
    return void 0;
  }
};
Tab.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    count: _propTypes["default"].number,
    presence: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    required: _propTypes["default"].bool,
    invalid: _propTypes["default"].bool,
    infoMessage: _propTypes["default"].string
  })),
  hideLabel: _propTypes["default"].bool,
  manageSelectedItem: _propTypes["default"].bool,
  selectedItem: _propTypes["default"].string,
  tabsAlignment: _propTypes["default"].oneOf(['left', 'right', 'center', 'stretch']),
  onClick: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
};

var _default = /*#__PURE__*/React.memo(Tab);

exports["default"] = _default;
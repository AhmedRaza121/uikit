"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _InfoMessage = _interopRequireDefault(require("../InfoMessage/InfoMessage"));

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

var _utils = require("./utils");

var _constants = require("./constants");

var _utils2 = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Dropdown = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var opened = props.opened,
      invalid = props.invalid,
      selectedItems = props.selectedItems,
      items = props.items,
      visible = props.visible,
      manageInvalid = props.manageInvalid,
      onInvalid = props.onInvalid,
      manageOpened = props.manageOpened,
      onOpened = props.onOpened,
      manageSelectedItems = props.manageSelectedItems,
      onItemSelected = props.onItemSelected,
      select = props.select,
      autoWidth = props.autoWidth,
      onClick = props.onClick;

  var _useState = (0, React.useState)(opened),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = (0, React.useState)(invalid),
      _useState4 = _slicedToArray(_useState3, 2),
      isInvalid = _useState4[0],
      setIsInvalid = _useState4[1];

  var _useState5 = (0, React.useState)(208),
      _useState6 = _slicedToArray(_useState5, 2),
      dropdownWidth = _useState6[0],
      setDropdownWidth = _useState6[1];

  var _useState7 = (0, React.useState)((0, _utils.getCorrectSelected)(items, selectedItems)),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedItemsState = _useState8[0],
      setSelectedItemState = _useState8[1];

  var dropdownRef = (0, React.useRef)(null);
  var itemsContainerRef = (0, React.useRef)(null);
  var itemToScroll = (0, React.useRef)(null);
  var invalidValue = manageInvalid ? invalid : isInvalid;
  var openedValue = manageOpened ? opened : isOpened;
  var selectsItemsValue = manageSelectedItems ? selectedItems : selectedItemsState;

  var onInvalidAction = function onInvalidAction(e) {
    onInvalid(e);
    !manageInvalid && setIsInvalid(true);
  };

  var dropdownClicked = function dropdownClicked(e) {
    onClick(e);
    var makeOpened = items && items.length && !isOpened;
    onOpened({
      opened: manageOpened ? opened : makeOpened
    });
    !manageOpened && setIsOpened(makeOpened);
  };

  var itemSelected = (0, React.useCallback)(function (_ref) {
    var id = _ref.id;
    var currentSelectedIds = selectsItemsValue;

    if (!manageSelectedItems) {
      currentSelectedIds = (0, _utils.getUpdatedSelectedItems)(selectsItemsValue, select, id);
      setSelectedItemState(currentSelectedIds);
    }

    if (select !== _constants.DROPDOWN.SELECT.MULTI) {
      !manageOpened && setIsOpened(false);
      onOpened(manageOpened);
    }

    onItemSelected({
      clickedItem: (0, _utils.getItemById)(id, items),
      selectedItems: currentSelectedIds
    });
  }, [onItemSelected, selectsItemsValue, manageSelectedItems, select, manageOpened, onOpened, items]);
  (0, React.useEffect)(function () {
    if (openedValue && itemToScroll !== null && itemToScroll !== void 0 && itemToScroll.current) itemToScroll.current.scrollIntoView();
  }, [isOpened, opened]);
  (0, React.useEffect)(function () {
    return dropdownRef.current && setDropdownWidth(dropdownRef.current.offsetWidth);
  }, [dropdownRef.current, autoWidth]);

  var renderItems = function renderItems() {
    var scrollToSelected = props.scrollToSelected,
        itemClassName = props.itemClassName;
    var listStyles = {
      '--popover-border-radius': '0 0 0.5rem 0.5rem',
      '--popover-border': '1px solid rgb(228, 230, 231)',
      '--popover-shadow': 'none',
      padding: '0',
      width: "calc( ".concat(dropdownWidth, "px - 2px)"),
      maxHeight: '15rem'
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      hideTail: true,
      manageOpened: true,
      opened: openedValue,
      positions: [{
        target: 'bottom-start',
        content: 'top-start'
      }],
      positionTarget: dropdownRef,
      onOuterPopoverClicked: dropdownClicked,
      contentStyles: listStyles,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-items-container",
          ref: function ref(el) {
            return itemsContainerRef.current = el;
          },
          children: items.map(function (item) {
            var id = item.id,
                disabled = item.disabled;
            var isItemToScroll = scrollToSelected && id === selectsItemsValue[0];
            return /*#__PURE__*/(0, React.createElement)(_DropdownItem["default"], _objectSpread(_objectSpread({}, item), {}, {
              key: id,
              ref: function ref(el) {
                if (isItemToScroll) itemToScroll.current = el;
              },
              onSelectAction: itemSelected,
              disabled: props.disabled || disabled,
              isSelected: selectsItemsValue.includes(id),
              className: itemClassName
            }));
          })
        })
      })
    });
  };

  var renderElement = function renderElement() {
    var disabled = props.disabled,
        placeholder = props.placeholder,
        name = props.name,
        label = props.label,
        required = props.required,
        message = props.message,
        className = props.className,
        labelClassName = props.labelClassName,
        hideCaret = props.hideCaret;
    var hasSelected = selectsItemsValue && selectsItemsValue.length;
    var buttonClasses = (0, _classnames["default"])({
      'dropdown-button': true,
      opened: openedValue,
      disabled: disabled,
      invalid: invalidValue,
      hideCaret: hideCaret
    });
    var labelClasses = (0, _classnames["default"])({
      'dropdown-label': true,
      placeholder: !hasSelected
    });
    var containerClasses = (0, _classnames["default"])('swf-dropdown-main-container', 'dropdown-container', {
      '--autoWidth': autoWidth
    }, className);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: containerClasses,
        ref: ref,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "hidden",
          name: name,
          required: required,
          onInvalid: onInvalidAction,
          value: selectsItemsValue
        }), label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
          label: label,
          required: required,
          invalid: invalidValue,
          className: labelClassName
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          onClick: dropdownClicked,
          disabled: disabled,
          className: buttonClasses,
          ref: function ref(el) {
            return dropdownRef.current = el;
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: labelClasses,
            children: (0, _utils.getDisplayValue)(selectsItemsValue, items, placeholder)
          }), !hideCaret && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            className: "dropdown-caret",
            icon: "caret-down-fill",
            customSize: 12
          })]
        }), (dropdownRef === null || dropdownRef === void 0 ? void 0 : dropdownRef.current) && renderItems(), message.map(function (el) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], _objectSpread({}, el));
        })]
      })
    });
  };

  return visible ? renderElement() : null;
});
Dropdown.defaultProps = {
  disabled: false,
  scrollToSelected: true,
  items: [],
  manageOpened: false,
  manageSelectedItems: false,
  opened: false,
  selectedItems: [],
  required: false,
  invalid: false,
  message: [],
  className: {},
  labelClassName: {},
  itemClassName: {},
  visible: true,
  manageInvalid: true,
  onOpened: function onOpened() {
    return _utils2.noop;
  },
  onInvalid: function onInvalid() {
    return _utils2.noop;
  },
  onItemSelected: function onItemSelected() {
    return _utils2.noop;
  },
  onClick: function onClick() {
    return _utils2.noop;
  },
  select: _constants.DROPDOWN.SELECT.SINGLE,
  hideCaret: false
};
var dropdownItem = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  sublabel: _propTypes["default"].string,
  number: _propTypes["default"].number,
  icon: _propTypes["default"].string
};
var dropdownSection = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  children: _propTypes["default"].arrayOf(_propTypes["default"].shape(dropdownItem))
};
var messageItem = {
  status: _propTypes["default"].oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
  content: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  className: _propTypes["default"].object,
  iconSize: _propTypes["default"].number,
  delay: _propTypes["default"].number
};
Dropdown.propTypes = {
  // basic props
  name: _propTypes["default"].string,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  items: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].shape(dropdownItem), _propTypes["default"].shape(dropdownSection)])),
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape(messageItem)),
  // display characteristic
  select: _propTypes["default"].oneOf([_constants.DROPDOWN.SELECT.NONE, _constants.DROPDOWN.SELECT.SINGLE, _constants.DROPDOWN.SELECT.MULTI]),
  visible: _propTypes["default"].bool,
  scrollToSelected: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  hideCaret: _propTypes["default"].bool,
  // action props
  manageOpened: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  manageSelectedItems: _propTypes["default"].bool,
  onOpened: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  onItemSelected: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  // style
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  labelClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  itemClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  autoWidth: _propTypes["default"].bool
};
var _default = Dropdown;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _utils = require("../utils");

var _findByType = _interopRequireWildcard(require("../../utils/findByType"));

var _CalendarDay = _interopRequireDefault(require("./CalendarDay"));

var _utils2 = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
var CalendarMonth = /*#__PURE__*/React.memo(function (props) {
  var openedDate = props.openedDate,
      onSelected = props.onSelected,
      children = props.children,
      min = props.min,
      max = props.max,
      _props$range = props.range,
      isFirstSelecting = _props$range.isFirstSelecting,
      end = _props$range.end,
      start = _props$range.start,
      selectedDate = props.selectedDate,
      onMonthChange = props.onMonthChange,
      className = props.className,
      hoveredDate = props.hoveredDate,
      onSetHover = props.onSetHover,
      manageHover = props.manageHover,
      manageSelected = props.manageSelected,
      addDisabled = props.addDisabled;
  var range = {
    isFirstSelecting: isFirstSelecting,
    end: end,
    start: start
  };

  var _useWrappedState = (0, _utils.useWrappedState)(openedDate, _utils.getMonthDates),
      _useWrappedState2 = _slicedToArray(_useWrappedState, 2),
      monthDates = _useWrappedState2[0],
      setMonthDates = _useWrappedState2[1];

  var _useWrappedState3 = (0, _utils.useWrappedState)({
    range: range,
    selectedDate: selectedDate
  }, _utils.defineSelected),
      _useWrappedState4 = _slicedToArray(_useWrappedState3, 2),
      selected = _useWrappedState4[0],
      setSelected = _useWrappedState4[1];

  var _useState = (0, React.useState)(hoveredDate),
      _useState2 = _slicedToArray(_useState, 2),
      hovered = _useState2[0],
      setHovered = _useState2[1];

  var hoveredFinal = manageHover ? hoveredDate : hovered;
  var calendarElem = (0, React.useRef)(null);
  (0, React.useEffect)(function () {
    return setMonthDates(openedDate);
  }, [openedDate]);
  (0, React.useEffect)(function () {
    var range = {
      isFirstSelecting: isFirstSelecting,
      end: end,
      start: start
    };
    manageSelected && setSelected({
      range: range,
      selectedDate: selectedDate
    });
  }, [manageSelected, isFirstSelecting, end, start, selectedDate]);
  var changeHover = (0, React.useCallback)(function (date) {
    if (_.isEmpty(range)) return;
    var needHoverForStart = isFirstSelecting && end;
    var needHoverForEnd = !isFirstSelecting && start;

    if (needHoverForStart || needHoverForEnd) {
      !manageHover && setHovered(date);
      onSetHover(date);
    }
  }, [manageHover, onSetHover, isFirstSelecting, end, start]);
  var setDate = (0, React.useCallback)(function (_ref) {
    var dateInMilliseconds = _ref.dateInMilliseconds,
        isActive = _ref.isActive,
        e = _ref.e;
    var range = {
      isFirstSelecting: isFirstSelecting,
      end: end,
      start: start
    };
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    var date = new Date(dateInMilliseconds);
    !isActive && onMonthChange(e, !(date.getDate() > 15), date);
    !manageSelected && setSelected({
      range: range,
      selectedDate: date
    });
    onSelected(date);
  }, [manageSelected, onSelected, onMonthChange, isFirstSelecting, end, start]);

  var renderHeaderElement = function renderHeaderElement(name) {
    var element = (0, _findByType["default"])(children, name);
    var classes = (0, _classnames["default"])({
      'header-part': true,
      '--end': name === 'HeaderEnd'
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes,
      children: element
    });
  };

  var renderCalendarElement = function renderCalendarElement(currentDay) {
    var isActive = currentDay.getMonth() === new Date(openedDate).getMonth();
    var dateObj = currentDay.setHours(0, 0, 0, 0);
    var props = (0, _utils.defineProps)(selected, range, dateObj, hoveredFinal, addDisabled, min, max);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CalendarDay["default"], _objectSpread(_objectSpread({}, props), {}, {
      active: isActive,
      dateInMilliseconds: dateObj,
      onMouseEnter: changeHover,
      onMouseLeave: changeHover,
      onClick: setDate
    }), dateObj);
  };

  var currentDate = (0, _moment["default"])(openedDate);
  var curMonthLabel = "".concat(currentDate.format('MMMM'), " ").concat(currentDate.year());
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])(className, 'ui-kit__calendar-container'),
      ref: function ref(el) {
        calendarElem.current = el;
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "calendar-header",
        children: [renderHeaderElement('HeaderStart'), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "calendar-header-label",
          children: curMonthLabel
        }), renderHeaderElement('HeaderEnd')]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "calendar-view",
        children: [DAYS_OF_WEEK.map(function (el, id) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "calendar-element week-day",
            children: [' ', el]
          }, id);
        }), monthDates.map(renderCalendarElement)]
      })]
    })
  });
}, function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});
CalendarMonth.HeaderStart = (0, _findByType.createSubComponent)('HeaderStart');
CalendarMonth.HeaderEnd = (0, _findByType.createSubComponent)('HeaderEnd');
CalendarMonth.defaultProps = {
  openedDate: new Date().setHours(0, 0, 0, 0),
  onSelected: _utils2.noop,
  onMonthChange: _utils2.noop,
  onSetHover: _utils2.noop,
  className: '',
  range: {},
  addDisabled: true
};
CalendarMonth.propTypes = {
  openedDate: _propTypes["default"].number,
  onSelected: _propTypes["default"].func,
  selectedDate: _propTypes["default"].number,
  range: _propTypes["default"].shape({
    start: _propTypes["default"].number,
    end: _propTypes["default"].number,
    isFirstSelecting: _propTypes["default"].bool
  }),
  hoveredDate: _propTypes["default"].number,
  onMonthChange: _propTypes["default"].func,
  classNames: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  onSetHover: _propTypes["default"].func,
  manageHover: _propTypes["default"].bool,
  manageSelected: _propTypes["default"].bool,
  addDisabled: _propTypes["default"].bool,
  min: _propTypes["default"].number,
  max: _propTypes["default"].number
};
var _default = CalendarMonth;
exports["default"] = _default;
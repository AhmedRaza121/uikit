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

var _CalendarMonth = _interopRequireDefault(require("./InnerComponents/CalendarMonth"));

var _ArrowButton = _interopRequireDefault(require("./InnerComponents/ArrowButton"));

var _utils = require("./utils");

var _utils2 = require("../utils");

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

var RangeCalendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var openedDate = props.openedDate,
      onSelected = props.onSelected,
      addDisabled = props.addDisabled,
      min = props.min,
      max = props.max,
      start = props.startDay,
      end = props.endDay,
      isFirstSelecting = props.isFirstSelecting,
      manageSelected = props.manageSelected;

  var _useWrappedState = (0, _utils.useWrappedState)({
    start: start,
    end: end
  }, _utils.getExtremeDates),
      _useWrappedState2 = _slicedToArray(_useWrappedState, 2),
      extremeDays = _useWrappedState2[0],
      setExtremeDays = _useWrappedState2[1];

  var _useWrappedState3 = (0, _utils.useWrappedState)(openedDate, _utils.getDefinedDate),
      _useWrappedState4 = _slicedToArray(_useWrappedState3, 2),
      openedDateValue = _useWrappedState4[0],
      setOpenedDateValue = _useWrappedState4[1];

  var _useState = (0, React.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      hoverDate = _useState2[0],
      setHoverDate = _useState2[1];

  (0, React.useEffect)(function () {
    return setOpenedDateValue(openedDate);
  }, [openedDate]);
  (0, React.useEffect)(function () {
    return manageSelected && setExtremeDays({
      start: start,
      end: end
    });
  }, [manageSelected, start, end]);
  var changeMonth = (0, React.useCallback)(function (e, isNext, selectedDate) {
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    var additionValue = isNext ? 1 : -1;
    var changedTo = (0, _moment["default"])(openedDateValue).add(additionValue, 'month');
    selectedDate && setSelected(selectedDate);
    setOpenedDateValue(changedTo.toDate());
  }, [openedDateValue]);
  var setSelected = (0, React.useCallback)(function (date) {
    var updatedDates = (0, _utils.updateExtremeDates)(extremeDays, date, isFirstSelecting);
    !manageSelected && setExtremeDays(updatedDates);
    onSelected({
      old: extremeDays,
      updated: updatedDates
    });
  }, [isFirstSelecting, onSelected, manageSelected, extremeDays]);
  var renderArrow = (0, React.useCallback)(function (isNext) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowButton["default"], {
      isNext: isNext,
      onClick: changeMonth
    });
  }, [changeMonth]);
  var renderArrows = (0, React.useCallback)(function (isNext) {
    return isNext ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_CalendarMonth["default"].HeaderEnd, {
      children: renderArrow(isNext)
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_CalendarMonth["default"].HeaderStart, {
      children: renderArrow(isNext)
    });
  }, [renderArrow]);

  var renderCalendarElement = function renderCalendarElement() {
    var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var classes = (0, _classnames["default"])('range-calendar', {
      '--next': isNext
    });
    var nextOpened = (0, _moment["default"])(openedDateValue).add(1, 'month').toDate().setHours(0, 0, 0, 0);
    var openedDate = isNext ? nextOpened : openedDateValue;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CalendarMonth["default"], {
      openedDate: openedDate,
      onSelected: setSelected,
      onMonthChange: changeMonth,
      className: classes,
      onSetHover: setHoverDate,
      hoveredDate: hoverDate,
      range: {
        start: extremeDays.start,
        end: extremeDays.end,
        isFirstSelecting: isFirstSelecting
      },
      manageHover: true,
      manageSelected: true,
      addDisabled: addDisabled,
      max: max,
      min: min,
      children: renderArrows(isNext)
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "range-calendar-container",
    ref: ref,
    children: [renderCalendarElement(), renderCalendarElement(true)]
  });
});
RangeCalendar.defaultProps = {
  openedDate: new Date(),
  onSelected: _utils2.noop,
  addDisabled: true
};
RangeCalendar.propTypes = {
  openedDate: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string, _propTypes["default"].number]),
  onSelected: _propTypes["default"].func,
  startDay: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string, _propTypes["default"].number]),
  endDay: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].number]),
  isFirstSelecting: _propTypes["default"].bool,
  manageSelected: _propTypes["default"].bool,
  addDisabled: _propTypes["default"].bool,
  min: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string, _propTypes["default"].number]),
  max: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string, _propTypes["default"].number])
};

var _default = /*#__PURE__*/React.memo(RangeCalendar);

exports["default"] = _default;
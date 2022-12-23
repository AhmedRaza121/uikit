"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWrappedState = exports.updateExtremeDates = exports.getMonthDates = exports.getExtremeDates = exports.getDefinedDate = exports.defineSelected = exports.defineProps = exports.checkDate = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defineExtreme = function defineExtreme(start, end, current) {
  switch (current) {
    case start:
      return start === end ? 'one' : 'first';

    case end:
      return 'last';

    default:
      return 'none';
  }
};

var getMilliseconds = function getMilliseconds(date) {
  var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!date) return;
  if (!gap) return new Date(date).setHours(0, 0, 0, 0);
  var dateInMilliseconds = new Date(date);
  dateInMilliseconds.setDate(dateInMilliseconds.getDate() + gap);
  return dateInMilliseconds.setHours(0, 0, 0, 0);
};

var defineDisabled = function defineDisabled(_ref) {
  var min = _ref.min,
      max = _ref.max,
      current = _ref.current;
  if (!min && !max) return;

  if (current >= max || current <= min) {
    switch (true) {
      case current === max:
        return 'start';

      case current === min:
        return 'end';

      default:
        return 'none';
    }
  }
};

var defineProps = function defineProps(selectedDate, range, current, hoveredDate, addDisabled, min, max) {
  var startDate = !_.isEmpty(range) || range.isFirstSelecting ? range.start : selectedDate;
  var endDate = !_.isEmpty(range) && (range.isFirstSelecting ? range.end : selectedDate);

  var selected = _.isEqual(startDate, current) || _.isEqual(endDate, current);

  var isNowDate = _.isEqual(current, new Date().setHours(0, 0, 0, 0));

  var inSelectedPeriod = startDate && endDate && current >= startDate && current <= endDate;
  if (_.isEmpty(range)) return {
    selected: selected,
    inSelectedPeriod: inSelectedPeriod,
    isNowDate: isNowDate
  };
  var needDisableStart = range.start && range.end || range.start && !range.isFirstSelecting;
  var needDisableEnd = range.start && range.end || range.end && range.isFirstSelecting;
  var disabledStart = needDisableStart ? startDate : min;
  var disabledEnd = needDisableEnd ? endDate : max;
  var disabled = addDisabled && !inSelectedPeriod && defineDisabled({
    min: getMilliseconds(disabledStart, -1),
    max: getMilliseconds(disabledEnd, 1),
    current: current
  });
  var selectedBorders = selected ? defineBorder(startDate, endDate, current) : [];
  var hoveredData = {};

  if (!disabled && addDisabled) {
    hoveredData = range.isFirstSelecting ? defineHoverProps({
      start: hoveredDate,
      end: endDate,
      current: current
    }) : defineHoverProps({
      start: startDate,
      end: hoveredDate,
      current: current
    });
  }

  return _objectSpread(_objectSpread({}, hoveredData), {}, {
    selected: selected,
    inSelectedPeriod: inSelectedPeriod,
    isNowDate: isNowDate,
    selectedBorders: selectedBorders,
    disabled: disabled
  });
};

exports.defineProps = defineProps;

var defineHoverProps = function defineHoverProps(_ref2) {
  var start = _ref2.start,
      end = _ref2.end,
      current = _ref2.current;
  if (!start || !end) return;
  var hovered = current >= start && current <= end;
  if (!hovered) return;
  var borders = defineBorder(start, end, current);
  var extreme = defineExtreme(start, end, current);
  return {
    hovered: hovered,
    extreme: extreme,
    borders: borders
  };
};

var checkIfHorizontalExtreme = function checkIfHorizontalExtreme(date, current, compareWith) {
  var dayInWeek = new Date(current).getDay();
  return date && _.isEqual(date, current) || dayInWeek === compareWith;
};

var checkIfVerticalExtreme = function checkIfVerticalExtreme(date, current) {
  if (!date || !current) return false;
  var diff = Math.abs(current - date);
  var diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return diffDays < 7;
};

var defineBorder = function defineBorder(start, end, current) {
  var result = [];
  checkIfHorizontalExtreme(start, current, 0) && result.push('left');
  checkIfHorizontalExtreme(end, current, 6) && result.push('right');
  checkIfVerticalExtreme(start, current) && result.push('top');
  checkIfVerticalExtreme(end, current) && result.push('bottom');
  return result;
};

var defineSelected = function defineSelected(_ref3) {
  var range = _ref3.range,
      selectedDate = _ref3.selectedDate;
  if (selectedDate) return selectedDate;
  if (!_.isEmpty(range)) return range.isFirstSelecting ? range.start : range.end;
  return null;
};

exports.defineSelected = defineSelected;

var updateExtremeDates = function updateExtremeDates(oldExtreme, selectedDate, isFirstSelecting) {
  var oldDate = isFirstSelecting ? oldExtreme.end : oldExtreme.start;
  var oldFitSelected = oldDate && isFirstSelecting && selectedDate <= oldDate || !isFirstSelecting && selectedDate >= oldDate;
  var result = oldFitSelected ? oldDate : undefined;
  return {
    start: isFirstSelecting ? selectedDate : result,
    end: isFirstSelecting ? result : selectedDate
  };
};

exports.updateExtremeDates = updateExtremeDates;

var getDateInstance = function getDateInstance(input) {
  var _input$split = input.split('-'),
      _input$split2 = _slicedToArray(_input$split, 3),
      year = _input$split2[0],
      month = _input$split2[1],
      day = _input$split2[2];

  return new Date(year, month - 1, day);
};

var checkDate = function checkDate(input) {
  if (input && (0, _moment["default"])(input).isValid()) {
    if (typeof input === "string") input = getDateInstance(input);
    return new Date(input).setHours(0, 0, 0, 0);
  }
};

exports.checkDate = checkDate;

var getExtremeDates = function getExtremeDates(_ref4) {
  var start = _ref4.start,
      end = _ref4.end;
  return {
    start: checkDate(start),
    end: checkDate(end)
  };
};

exports.getExtremeDates = getExtremeDates;

var getMonthDates = function getMonthDates(openedDate) {
  var result = [];
  var currentWeek = (0, _moment["default"])(openedDate);
  currentWeek.startOf('month').startOf('week');

  for (var w = 0; w < 6; w++) {
    w > 0 && currentWeek.add(1, 'week');
    var currentDay = currentWeek.startOf('week');

    for (var d = 0; d < 7; d++) {
      d > 0 && currentDay.add(1, 'day');
      result.push(currentDay.toDate());
    }
  }

  return result;
};

exports.getMonthDates = getMonthDates;

var getDefinedDate = function getDefinedDate(date) {
  return checkDate(date) || new Date().setHours(0, 0, 0, 0);
};

exports.getDefinedDate = getDefinedDate;

var useWrappedState = function useWrappedState(value) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return void 0;
  };

  var _useState = (0, _react.useState)(func(value)),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setWrappedState = function setWrappedState(value) {
    return setState(func(value));
  };

  return [state, setWrappedState];
};

exports.useWrappedState = useWrappedState;
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

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

var _RengeCalendar = _interopRequireDefault(require("../SmallCalendar/Renge Calendar"));

var _utils = require("./utils");

var _utils2 = require("../DatePicker/utils");

var _InfoMessage = _interopRequireDefault(require("../InfoMessage/InfoMessage"));

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

var RangePicker = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var opened = props.opened,
      format = props.format,
      min = props.min,
      max = props.max,
      visible = props.visible,
      invalid = props.invalid,
      manageValue = props.manageValue,
      onValueChange = props.onValueChange,
      onValueSet = props.onValueSet,
      manageInvalid = props.manageInvalid,
      _onInvalid = props.onInvalid,
      name = props.name,
      manageOpened = props.manageOpened,
      onOpen = props.onOpen,
      label = props.label,
      required = props.required,
      readonly = props.readonly,
      disabled = props.disabled,
      className = props.className,
      _props$value = props.value,
      start = _props$value.start,
      end = _props$value.end,
      message = props.message;

  var _useState = (0, React.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      errorMessages = _useState2[0],
      setErrorMessages = _useState2[1];

  var _useState3 = (0, React.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var _useState5 = (0, React.useState)(invalid),
      _useState6 = _slicedToArray(_useState5, 2),
      isInvalid = _useState6[0],
      setIsInvalid = _useState6[1];

  var _useState7 = (0, React.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      openedDate = _useState8[0],
      setOpenedDate = _useState8[1];

  var _useState9 = (0, React.useState)({
    start: start.value,
    end: end.value
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedDates = _useState10[0],
      setSelectedDate = _useState10[1];

  var _useState11 = (0, React.useState)(true),
      _useState12 = _slicedToArray(_useState11, 2),
      isFirstSelecting = _useState12[0],
      setIsFirstSelecting = _useState12[1];

  var _useState13 = (0, React.useState)(true),
      _useState14 = _slicedToArray(_useState13, 2),
      isOpenedInFirst = _useState14[0],
      setIsOpenedInFirst = _useState14[1];

  var invalidValue = manageInvalid ? invalid : isInvalid;
  var targetRef = (0, React.useRef)(null);
  (0, React.useEffect)(function () {
    return invalidInput(selectedDates);
  }, [openedDate]);
  (0, React.useEffect)(function () {
    return !focused && invalidInput(selectedDates);
  }, [focused]);
  (0, React.useEffect)(function () {
    return manageValue && setDateFromProps();
  }, [manageValue, start, end, format]);
  (0, React.useEffect)(function () {
    if (manageOpened) opened ? changeOpenedDate() : setOpenedDate(null);
  }, [manageOpened, opened]);
  (0, React.useEffect)(function () {
    setDateFromProps();
    opened && changeOpenedDate();
  }, []);
  var onFocused = (0, React.useCallback)(function (isFirst) {
    setFocused(true);
    setIsFirstSelecting(isFirst);
  }, []);
  var changeOpenedDate = (0, React.useCallback)(function () {
    var isStartOpen = !start.disabled && !start.readonly;
    setIsOpenedInFirst(true);
    onFocused(isStartOpen);
    var openedDate = selectedDates.start && isStartOpen ? selectedDates.start : selectedDates.end;
    setOpenedDate(openedDate ? new Date(openedDate) : new Date());
  }, [start, end, onFocused, selectedDates]);
  var openCalendar = (0, React.useCallback)(function () {
    var isOpened = Boolean(openedDate);

    if (!manageOpened) {
      isOpened ? setOpenedDate(null) : changeOpenedDate();
      onOpen(!isOpened);
    } else onOpen(isOpened);
  }, [openedDate, manageOpened, onOpen, changeOpenedDate]);
  var setDateFromProps = (0, React.useCallback)(function () {
    var startValue = start.value;
    var endValue = end.value;

    if ((0, _moment["default"])(startValue, format, true).isValid() && (0, _moment["default"])(endValue, format, true).isValid()) {
      setSelectedDate({
        start: (0, _moment["default"])(startValue).format(format),
        end: (0, _moment["default"])(endValue).format(format)
      });
    } else {
      var valueToSet = {
        start: startValue,
        end: endValue
      };
      setSelectedDate(valueToSet);
    }
  }, [start, end, format]);
  var actAction = (0, React.useCallback)(function (isFirst, action, startParam, endParam) {
    isFirst ? start[action] && start[action](startParam) : end[action] && end[action](endParam);
  }, [start, end]);
  var changeSelectedValue = (0, React.useCallback)(function (isFirst, updatedValue, input) {
    !manageValue && setSelectedDate(updatedValue); // onValueChange({oldValue: selectedDates, input, updatedValue, isFirstSelecting});
    //
    // actAction(isFirst, 'onValueChange',
    //     {oldValue: selectedDates.start, input, updatedValue: updatedValue.start},
    //     {oldValue: selectedDates.end, input, updatedValue: updatedValue.end})

    onValueChange({
      input: input,
      updatedValue: updatedValue,
      isFirstSelecting: isFirstSelecting
    });
    actAction(isFirst, 'onValueChange', {
      input: input,
      updatedValue: updatedValue.start
    }, {
      input: input,
      updatedValue: updatedValue.end
    });
  }, [manageValue, onValueChange, actAction, isFirstSelecting]);
  var setValue = (0, React.useCallback)(function (isFirst, updatedValue) {
    onValueSet(updatedValue);
    actAction(isFirst, 'onValueSet', updatedValue.start, updatedValue.end);
  }, [onValueSet, actAction]);

  var changeValue = function changeValue(e, isFirst) {
    e.preventDefault();
    var input = e.nativeEvent.data;
    var value = isFirst ? selectedDates.start : selectedDates.end;
    var newValue = (0, _utils2.addCharToDate)(format, value, input);
    var updatedDates = isFirst ? {
      start: newValue,
      end: selectedDates.end
    } : {
      start: selectedDates.start,
      end: newValue
    };
    changeSelectedValue(isFirst, updatedDates, input);

    if (!newValue.length) {
      setValue(isFirst, updatedDates);
      invalidInput();
    } else if ((0, _moment["default"])(newValue, format, true).isValid()) {
      setValue(isFirst, updatedDates);
      invalidInput(updatedDates);
    }
  };

  var onSelected = (0, React.useCallback)(function (_ref) {
    var updated = _ref.updated;
    var endValue = isOpenedInFirst ? '' : updated.end && (0, _moment["default"])(updated.end).format(format);
    var updatedDates = {
      start: updated.start && (0, _moment["default"])(updated.start).format(format),
      end: endValue
    };
    isOpenedInFirst && setIsOpenedInFirst(false);
    changeSelectedValue(isFirstSelecting, updatedDates);
    setValue(isFirstSelecting, updatedDates);
    if (isFirstSelecting && !updatedDates.end) setIsFirstSelecting(false);else if (!isFirstSelecting && !updatedDates.start) setIsFirstSelecting(true);else openCalendar();
  }, [isOpenedInFirst, format, changeSelectedValue, setValue, openCalendar]);

  var invalidInput = function invalidInput(selectedDates) {
    var errors = selectedDates ? (0, _utils.getErrors)(selectedDates, format, min, max) : [];
    var isInvalidCurrent = errors.length > 0;

    if (!manageInvalid) {
      setIsInvalid(isInvalidCurrent);
      setErrorMessages(errors);
    }

    if ((0, _utils2.hasChanges)(errors, errorMessages) || isInvalidCurrent !== invalidValue) {
      var onInvalidObj = {
        isInvalid: isInvalidCurrent,
        errors: errors,
        selectedDates: selectedDates
      };

      _onInvalid(onInvalidObj);

      actAction(isFirstSelecting, 'onInvalid', onInvalidObj, onInvalidObj);
    }
  };

  var renderRangeCalendar = function renderRangeCalendar() {
    var calendarPositions = [{
      target: 'bottom-end',
      content: 'top-end'
    }, {
      target: 'bottom-end',
      content: 'top-center'
    }, {
      target: 'top-end',
      content: 'bottom-end'
    }, {
      target: 'bottom-center',
      content: 'top-center'
    }, {
      target: 'top-center',
      content: 'bottom-center'
    }, {
      target: 'center-end',
      content: 'center-start'
    }, {
      target: 'center-start',
      content: 'center-end'
    }];
    var popoverTarget = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current;
    return popoverTarget && Boolean(openedDate) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      hideTail: true,
      manageOpened: true,
      opened: Boolean(openedDate),
      positions: calendarPositions,
      positionTarget: {
        current: popoverTarget
      },
      onOuterPopoverClicked: openCalendar,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RengeCalendar["default"], {
          openedDate: openedDate,
          onSelected: onSelected,
          startDay: selectedDates.start,
          endDay: selectedDates.end,
          isFirstSelecting: isFirstSelecting,
          manageSelected: true,
          addDisabled: !isOpenedInFirst,
          min: min,
          max: max
        })
      })
    });
  };

  var renderDateInput = function renderDateInput(dateValue) {
    var isFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var inputClasses = (0, _classnames["default"])({
      'date-input-control': true,
      '--invalid': invalid,
      '--readonly': readonly,
      '--focus': (focused || openedDate) && isFirst === isFirstSelecting
    });
    var value = isFirst ? selectedDates.start : selectedDates.end;
    var canFocus = !(Boolean(openedDate) && isOpenedInFirst);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      className: inputClasses,
      placeholder: dateValue.placeholder || format,
      value: value || '',
      name: dateValue.name || name,
      "aria-required": required,
      "aria-invalid": dateValue.invalid || invalid,
      onInvalid: function onInvalid(e) {
        return invalidInput(e, dateValue, _onInvalid);
      },
      onChange: function onChange(e) {
        return changeValue(e, isFirst);
      },
      max: max,
      min: min,
      required: required,
      onBlur: function onBlur() {
        return setFocused(false);
      },
      onFocus: function onFocus() {
        return canFocus && onFocused(isFirst);
      },
      readOnly: dateValue.readonly || readonly,
      disabled: dateValue.disabled || disabled
    });
  };

  var renderMessages = function renderMessages() {
    var allMessages = errorMessages.concat(message);
    if (!allMessages) return;
    return allMessages.map(function (el, index) {
      return el && /*#__PURE__*/(0, React.createElement)(_InfoMessage["default"], _objectSpread(_objectSpread({}, el), {}, {
        key: index
      }));
    });
  };

  var containerStyles = (0, _classnames["default"])('range-picker', 'swf-form-group', className, {
    '--focused': focused || openedDate,
    '--readonly': readonly,
    '--invalid': invalid
  });
  var labelClasses = (0, _classnames["default"])('inp-label', {
    '--readonly': readonly
  });
  return visible && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: ref,
    className: "range-picker-container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: containerStyles,
      ref: targetRef,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
        className: labelClasses,
        required: required,
        invalid: invalid,
        label: label,
        htmlFor: name
      }), renderDateInput(start), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "range-picker-element",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: "arrow-right-short"
        })
      }), renderDateInput(end, false), readonly ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        className: "datepicker-button range-picker-element",
        icon: "calendar-range",
        variant: "tertiary",
        onClick: openCalendar
      })]
    }), renderRangeCalendar(), renderMessages()]
  });
});
RangePicker.defaultProps = {
  format: 'YYYY-MM-DD',
  required: false,
  readonly: false,
  invalid: false,
  opened: false,
  manageOpened: false,
  manageInvalid: false,
  manageValue: false,
  onOpen: function onOpen() {
    return void 0;
  },
  onInvalid: function onInvalid() {
    return void 0;
  },
  onValueSet: function onValueSet() {
    return void 0;
  },
  onValueChange: function onValueChange() {
    return void 0;
  },
  visible: true,
  disabled: false,
  value: {}
};
var dateInputShape = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  readonly: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onValueSet: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  onValueChange: _propTypes["default"].func
};
RangePicker.propTypes = {
  name: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].shape({
    start: _propTypes["default"].shape(dateInputShape),
    end: _propTypes["default"].shape(dateInputShape)
  }),
  min: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  max: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  format: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  manageValue: _propTypes["default"].bool,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    className: _propTypes["default"].object,
    iconSize: _propTypes["default"].number
  })),
  onOpen: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  onValueChange: _propTypes["default"].func,
  onValueSet: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = RangePicker;
exports["default"] = _default;
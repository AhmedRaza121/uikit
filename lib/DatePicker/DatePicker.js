"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("../Input/Input"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _SmallCalendar = _interopRequireDefault(require("../SmallCalendar/SmallCalendar"));

var _utils = require("./utils");

var _utils2 = require("../SmallCalendar/utils");

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

var DatePicker = /*#__PURE__*/React.forwardRef(function (props, _ref) {
  var _inputRef$current;

  var opened = props.opened,
      value = props.value,
      format = props.format,
      min = props.min,
      max = props.max,
      visible = props.visible,
      invalid = props.invalid,
      manageValue = props.manageValue,
      onValueChange = props.onValueChange,
      onValueSet = props.onValueSet,
      manageInvalid = props.manageInvalid,
      onInvalid = props.onInvalid,
      manageOpened = props.manageOpened,
      onOpen = props.onOpen;

  var _useState = (0, React.useState)((0, _moment["default"])((0, _utils2.checkDate)(value)).format(format)),
      _useState2 = _slicedToArray(_useState, 2),
      dateValue = _useState2[0],
      setDateValue = _useState2[1];

  var _useState3 = (0, React.useState)(opened),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpened = _useState4[0],
      setIsOpened = _useState4[1];

  var _useState5 = (0, React.useState)(invalid),
      _useState6 = _slicedToArray(_useState5, 2),
      isInvalid = _useState6[0],
      setIsInvalid = _useState6[1];

  var _useState7 = (0, React.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      errorMessages = _useState8[0],
      setErrorMessages = _useState8[1];

  var inputRef = (0, React.useRef)(null);
  (0, React.useEffect)(function () {
    return manageOpened && setIsOpened(opened);
  }, [manageOpened, opened]);
  (0, React.useEffect)(function () {
    return manageInvalid && setIsInvalid(invalid);
  }, [manageInvalid, invalid]);

  var setDateFromProps = function setDateFromProps() {
    if ((0, _moment["default"])(value, format, true).isValid()) {
      var errors = (0, _utils.getErrorMessages)(value, format, min, max);
      invalidInput(errors, value);
      setDateValue((0, _moment["default"])(value).format(format));
    } else setDateValue(value);
  };

  var changeValue = function changeValue(e) {
    e.preventDefault();
    var input = e.nativeEvent.data;
    var newValue = (0, _utils.addCharToDate)(format, dateValue, input);
    !manageValue && setDateValue(newValue);

    if (!newValue.length) {
      onValueSet({
        value: ''
      });
      invalidInput([], '');
    } else if ((0, _moment["default"])(newValue, format, true).isValid()) {
      var errors = (0, _utils.getErrorMessages)(newValue, format, min, max);
      invalidInput(errors, newValue);
      !errors.length && onValueSet({
        value: newValue
      });
    } // onValueChange({oldValue: dateValue, input, newValue});


    onValueChange({
      input: input,
      newValue: newValue
    });
  };

  var invalidInput = (0, React.useCallback)(function () {
    var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var date = arguments.length > 1 ? arguments[1] : undefined;
    var isInvalidCurrent = errors.length > 0;
    var hasErrorChanges = (0, _utils.hasChanges)(errors, errorMessages);

    if (!manageInvalid) {
      setIsInvalid(isInvalidCurrent);
      hasErrorChanges && setErrorMessages(errors);
    }

    if (hasErrorChanges || isInvalidCurrent !== isInvalid) {
      onInvalid({
        isInvalid: isInvalidCurrent,
        errors: errors,
        date: date
      });
    }
  }, [manageInvalid, onInvalid, isInvalid, errorMessages]);
  var dateSelected = (0, React.useCallback)(function (date) {
    var newValue = (0, _moment["default"])(date).format(format);
    var errors = (0, _utils.getErrorMessages)(newValue, format, min, max);
    invalidInput(errors, newValue);
    !manageValue && setDateValue(newValue);
    !errors.length && onValueSet({
      value: newValue
    });
    onValueChange({
      newValue: newValue
    });
  }, [format, min, max, manageValue, onValueChange, onValueSet, invalidInput]);
  var openCalendar = (0, React.useCallback)(function (e, onFocusClose) {
    if (!onFocusClose || isOpened) {
      var openState = isOpened;

      if (!manageOpened) {
        openState = !isOpened;
        setIsOpened(openState);
        var isValidStringDate = (0, _moment["default"])(dateValue, format).isValid();
        setDateValue(isValidStringDate ? (0, _moment["default"])(dateValue).format(format) : '');
      }

      onOpen({
        openState: openState
      });

      if (!onFocusClose && !openState) {
        var errors = (0, _utils.getErrorMessages)(dateValue, format, min, max);
        invalidInput(errors, dateValue);
      }
    }
  }, [isOpened, invalidInput, dateValue, format, min, max, onOpen]);

  var onBlur = function onBlur(e) {
    var _e$target, _e$relatedTarget, _e$relatedTarget$pare;

    var sameParent = ((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.parentElement) === ((_e$relatedTarget = e.relatedTarget) === null || _e$relatedTarget === void 0 ? void 0 : (_e$relatedTarget$pare = _e$relatedTarget.parentElement) === null || _e$relatedTarget$pare === void 0 ? void 0 : _e$relatedTarget$pare.parentElement);

    if (!sameParent) {
      var errors = (0, _utils.getErrorMessages)(dateValue, format, min, max);
      invalidInput(errors, dateValue);
    }
  };

  (0, React.useEffect)(function () {
    return manageValue && setDateFromProps();
  }, [value]);
  (0, React.useEffect)(function () {
    setDateFromProps();

    if (inputRef !== null && inputRef !== void 0 && inputRef.current) {
      var inputEl = inputRef.current.querySelector('input');

      inputEl.onclick = function () {
        return inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;
      };

      inputEl.onkeydown = function () {
        return setTimeout(function () {
          return inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;
        }, 0);
      };
    }
  }, []);

  var renderInput = function renderInput() {
    var label = props.label,
        _props$message = props.message,
        message = _props$message === void 0 ? [] : _props$message,
        required = props.required,
        readonly = props.readonly,
        name = props.name,
        className = props.className;
    var allMessages = errorMessages.concat(message);
    var dateStr = dateValue.toString();
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
      label: label,
      placeholder: label ? '' : format,
      value: dateStr,
      name: name,
      manageInvalid: true,
      invalid: isInvalid,
      onInvalid: function onInvalid(e) {
        return invalidInput([e], dateValue);
      },
      onChange: changeValue,
      onFocus: function onFocus(e) {
        return openCalendar(e, true);
      },
      message: allMessages,
      required: required,
      className: className,
      onBlur: onBlur,
      readonly: readonly,
      manageValue: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"].End, {
        children: readonly ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          className: "datepicker-button",
          icon: "calendar-event",
          variant: "tertiary",
          onClick: openCalendar
        })
      })
    });
  };

  var calendarPositions = [{
    target: 'bottom-end',
    content: 'top-end'
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
  var popoverTarget = inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.getElementsByClassName('input-group')[0];
  return visible && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: function ref(el) {
      inputRef.current = el;
      _ref = {
        el: el
      };
    },
    children: [renderInput(), popoverTarget && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      hideTail: true,
      manageOpened: true,
      opened: isOpened,
      positions: calendarPositions,
      positionTarget: {
        current: popoverTarget
      },
      onOuterPopoverClicked: openCalendar,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SmallCalendar["default"], {
          onSelected: dateSelected,
          selectedDate: dateValue,
          manageValue: true,
          addDisabled: true,
          min: min,
          max: max
        })
      })
    })]
  });
});
DatePicker.defaultProps = {
  value: new Date(),
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
  visible: true
};
DatePicker.propTypes = {
  name: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  min: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  max: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  format: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
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
var _default = DatePicker;
exports["default"] = _default;
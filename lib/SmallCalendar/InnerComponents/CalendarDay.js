"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames3 = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarDay = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classnames;

  var dateInMilliseconds = props.dateInMilliseconds,
      active = props.active,
      selected = props.selected,
      extreme = props.extreme,
      className = props.className,
      _onClick = props.onClick,
      isNowDate = props.isNowDate,
      _onMouseLeave = props.onMouseLeave,
      _onMouseEnter = props.onMouseEnter,
      hovered = props.hovered,
      inSelectedPeriod = props.inSelectedPeriod,
      borders = props.borders,
      selectedBorders = props.selectedBorders,
      disabled = props.disabled;
  var borderStyles = (0, _classnames3["default"])((_classnames = {
    'border-container': true
  }, _defineProperty(_classnames, "--".concat(extreme, "-in-period"), extreme), _defineProperty(_classnames, '--border-top', borders.includes('top')), _defineProperty(_classnames, '--border-bottom', borders.includes('bottom')), _defineProperty(_classnames, '--border-right', borders.includes('right')), _defineProperty(_classnames, '--border-left', borders.includes('left')), _defineProperty(_classnames, '--hovered', hovered && !disabled), _defineProperty(_classnames, '--disabled', disabled), _classnames));
  var dayContainerClasses = (0, _classnames3["default"])(className, 'calendar-day-container', _defineProperty({
    '--disabled': disabled && active,
    '--cursor-default': disabled,
    '--selected': selected,
    '--in-selected-period': active && inSelectedPeriod,
    '--border-top': borders.includes('top'),
    '--border-bottom': borders.includes('bottom'),
    '--selected-border-top': selectedBorders.includes('top'),
    '--selected-border-bottom': selectedBorders.includes('bottom'),
    '--selected-border-right': selectedBorders.includes('right'),
    '--selected-border-left': selectedBorders.includes('left')
  }, "--".concat(disabled, "-disabled"), disabled));
  var dayClasses = (0, _classnames3["default"])({
    'calendar-element': true,
    'day-element': true,
    notActive: !active,
    active: active,
    selected: selected,
    'now-date': isNowDate,
    '--can-hover': !disabled
  });

  var actEvent = function actEvent(event, params) {
    return !disabled ? event(params) : function () {
      return void 0;
    };
  };

  var date = new Date(dateInMilliseconds);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: dayContainerClasses,
    ref: ref,
    onClick: function onClick(e) {
      return actEvent(_onClick, {
        dateInMilliseconds: dateInMilliseconds,
        isActive: active,
        e: e
      });
    },
    onMouseEnter: function onMouseEnter() {
      return actEvent(_onMouseEnter, dateInMilliseconds);
    },
    onMouseLeave: function onMouseLeave() {
      return actEvent(_onMouseLeave, null);
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: borderStyles
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: dayClasses,
      children: date.getDate()
    })]
  });
});
CalendarDay.propTypes = {
  dateInMilliseconds: _propTypes["default"].number,
  isNowDate: _propTypes["default"].bool,
  active: _propTypes["default"].bool,
  selected: _propTypes["default"].bool,
  disabled: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['none', 'start', 'end']), _propTypes["default"].bool]),
  hovered: _propTypes["default"].bool,
  inSelectedPeriod: _propTypes["default"].bool,
  extreme: _propTypes["default"].oneOf(['first', 'last', 'one', 'none']),
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  borders: _propTypes["default"].arrayOf(_propTypes["default"].string),
  selectedBorders: _propTypes["default"].arrayOf(_propTypes["default"].string)
};
CalendarDay.defaultProps = {
  borders: [],
  selectedBorders: [],
  dateInMilliseconds: 0,
  active: true,
  className: '',
  onClick: _utils.noop,
  onMouseEnter: _utils.noop,
  onMouseLeave: _utils.noop
};

var _default = /*#__PURE__*/React.memo(CalendarDay, function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});

exports["default"] = _default;
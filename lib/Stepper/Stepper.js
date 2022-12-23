"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _utils = require("./utils");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Step = _interopRequireDefault(require("./Step"));

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

var Stepper = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var palette = props.palette,
      vertical = props.vertical,
      completedCounter = props.completedCounter,
      steps = props.steps,
      iconSize = props.iconSize,
      selectedItem = props.selectedItem,
      disableScroll = props.disableScroll,
      hideLabels = props.hideLabels,
      onStepClick = props.onStepClick;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      visibleStepsAmount = _useState2[0],
      setVisibleStepsAmount = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      stepsCurrShiftedPos = _useState4[0],
      setStepsCurrShiftedPos = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isArrowsNeeded = _useState6[0],
      setIsArrowsNeeded = _useState6[1];

  var stepSize = vertical ? 120 : 140;
  var arrowsSize = parseInt((0, _utils.getCircleSize)(iconSize));
  var stepperContainerRef = (0, _react.useRef)(null);
  var updateVisibleStepsAmount = (0, _react.useCallback)(function () {
    var containerSize = stepperContainerRef === null || stepperContainerRef === void 0 ? void 0 : stepperContainerRef.current[vertical ? 'clientHeight' : 'clientWidth'];
    var isArrowsNeeded = steps.length * stepSize > containerSize;
    var currArrowsSize = isArrowsNeeded ? arrowsSize : 0;
    setIsArrowsNeeded(isArrowsNeeded);
    setVisibleStepsAmount(Math.floor((containerSize - currArrowsSize * 2) / stepSize) || 1);
  }, [stepperContainerRef, vertical, stepSize, steps.length, arrowsSize]);
  (0, _react.useEffect)(function () {
    if (!disableScroll) {
      updateVisibleStepsAmount();
      window.addEventListener('resize', updateVisibleStepsAmount);
      shiftStepsAccordinglyToSelectedItem();
    }

    return window.removeEventListener('resize', updateVisibleStepsAmount);
  }, [updateVisibleStepsAmount]);
  (0, _react.useEffect)(function () {
    !disableScroll && shiftStepsAccordinglyToSelectedItem();
  }, [selectedItem]);

  var shiftStepsAccordinglyToSelectedItem = function shiftStepsAccordinglyToSelectedItem() {
    if (!isArrowsNeeded) return;
    var newStepsPosValue = selectedItem * stepSize;
    var maxStepsPos = stepSize * (steps.length - visibleStepsAmount);
    setStepsCurrShiftedPos(Math.min(Math.max(newStepsPosValue, 0), maxStepsPos));
  };

  var onArrowClick = function onArrowClick(direction) {
    var newStepsPosValue = stepsCurrShiftedPos + stepSize * direction;
    var maxStepsPos = stepSize * (steps.length - visibleStepsAmount);
    setStepsCurrShiftedPos(Math.min(Math.max(newStepsPosValue, 0), maxStepsPos));
  };

  var renderSteps = function renderSteps() {
    var icon = palette.icon;
    return steps.map(function (step, index) {
      var isSelected = selectedItem === index;
      var isBeforeSelected = selectedItem > index;
      var iconColor = (isSelected || isBeforeSelected) && step.progress !== 'none' && step.progress !== 'partial' || step.progress === 'done' ? icon.finished || 'white' : icon.unfinished || 'black';
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])({
          'steps-item': true,
          '--selected': isSelected,
          '--before-selected': isBeforeSelected,
          '--disabled': step.disabled
        }),
        onClick: function onClick() {
          return !step.disabled && onStepClick({
            index: index,
            id: step.id
          });
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
          iconColor: iconColor,
          step: step,
          hideLabel: hideLabels,
          isSelected: isSelected,
          isBeforeSelected: isBeforeSelected
        })
      }, "step".concat(index));
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames["default"])({
      stepper: true,
      '--vertical': vertical
    }),
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
      type: "text/css",
      children: (0, _utils.createCssVariables)(palette, iconSize)
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "stepper-container",
      ref: function ref(elm) {
        return stepperContainerRef.current = elm;
      },
      children: [isArrowsNeeded && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "arrow arrow-left",
        onClick: function onClick() {
          return onArrowClick(-1);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "arrow-icon",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            icon: vertical ? 'chevron-up' : 'chevron-left',
            color: palette.arrows
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])({
          'steps-shown': true,
          '--vertical': vertical
        }),
        style: {
          width: vertical || disableScroll ? '100%' : visibleStepsAmount * stepSize,
          height: vertical ? visibleStepsAmount * stepSize : arrowsSize * 4
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "steps-all",
          style: {
            width: isArrowsNeeded && !vertical ? steps.length * stepSize : '100%',
            right: vertical ? 0 : stepsCurrShiftedPos,
            bottom: vertical ? stepsCurrShiftedPos : 0
          },
          children: renderSteps()
        })
      }), isArrowsNeeded && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "arrow arrow-right",
        onClick: function onClick() {
          return onArrowClick(1);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "arrow-icon",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            icon: vertical ? 'chevron-down' : 'chevron-right',
            color: palette.arrows
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "stepper-counter",
      children: completedCounter && "".concat(selectedItem + 1, "/").concat(steps.length, " Completed")
    })]
  });
});

Stepper.propTypes = {
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    icon: _propTypes["default"].string,
    label: _propTypes["default"].string,
    sublabel: _propTypes["default"].string,
    progress: _propTypes["default"].oneOf(['none', 'partial', 'done']),
    disabled: _propTypes["default"].bool
  })),
  palette: _propTypes["default"].shape({
    icon: _propTypes["default"].shape({
      finished: _propTypes["default"].string,
      unfinished: _propTypes["default"].string
    }),
    circle: _propTypes["default"].string,
    link: _propTypes["default"].string,
    label: _propTypes["default"].string,
    arrows: _propTypes["default"].string
  }),
  iconSize: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  hideLabels: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool,
  completedCounter: _propTypes["default"].bool,
  selectedItem: _propTypes["default"].number,
  onStepClick: _propTypes["default"].func,
  disableScroll: _propTypes["default"].bool
};
Stepper.defaultProps = {
  steps: [],
  palette: {
    icon: {
      finished: '',
      unfinished: ''
    },
    circle: '',
    link: '',
    label: '',
    arrows: 'black'
  },
  iconSize: 'sm',
  hideLabels: false,
  vertical: false,
  completedCounter: false,
  selectedItem: 0,
  disableScroll: false,
  onStepClick: _utils2.noop
};

var _default = /*#__PURE__*/_react["default"].memo(Stepper);

exports["default"] = _default;
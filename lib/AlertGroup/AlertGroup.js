"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Alert = _interopRequireDefault(require("../Alert/Alert"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AlertGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classnames;

  var alerts = props.alerts,
      delay = props.delay,
      className = props.className,
      defaultPosition = props.defaultPosition,
      verticalPositions = props.verticalPositions,
      horizontalPositions = props.horizontalPositions;
  var alertGroupClasses = (0, _classnames2["default"])(className, 'swf-alert-group', (_classnames = {
    '--fixed': !defaultPosition
  }, _defineProperty(_classnames, "--vertical-".concat(verticalPositions), verticalPositions), _defineProperty(_classnames, "--horizontal-".concat(horizontalPositions), horizontalPositions), _classnames));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    className: alertGroupClasses,
    children: alerts.map(function (el, i) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert["default"], _objectSpread(_objectSpread({}, el), {}, {
        defaultPosition: true,
        delay: delay || el.delay
      }), i + el.content);
    })
  });
});
AlertGroup.defaultProps = {
  className: '',
  verticalPositions: 'top',
  horizontalPositions: 'start'
};
var alertObj = {
  action: _propTypes["default"].shape({
    type: _propTypes["default"].oneOf(['dismiss', 'acknowledge', 'open']).isRequired,
    href: _propTypes["default"].string,
    label: _propTypes["default"].string
  }),
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  expanded: _propTypes["default"].bool,
  header: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  manageExpanded: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
  textLinkProps: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    href: _propTypes["default"].string,
    openWindows: _propTypes["default"].bool,
    download: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
  }),
  onExpandAction: _propTypes["default"].func,
  onTextLinkClicked: _propTypes["default"].func,
  onButtonClick: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  manageVisibility: _propTypes["default"].bool,
  delay: _propTypes["default"].number,
  onCloseAction: _propTypes["default"].func,
  manageButtonClick: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
AlertGroup.propTypes = {
  alerts: _propTypes["default"].arrayOf(_propTypes["default"].shape(alertObj)),
  delay: _propTypes["default"].number,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  defaultPosition: _propTypes["default"].bool,
  verticalPositions: _propTypes["default"].oneOf(['top', 'center', 'bottom']),
  horizontalPositions: _propTypes["default"].oneOf(['start', 'center', 'end'])
};

var _default = /*#__PURE__*/React.memo(AlertGroup);

exports["default"] = _default;
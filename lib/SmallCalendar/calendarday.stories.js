"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Try = void 0;

var _react = _interopRequireDefault(require("react"));

var _CalendarDay = _interopRequireDefault(require("./InnerComponents/CalendarDay"));

var _index = require("../index");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/DataVisualisation/CalendarDay',
  component: _CalendarDay["default"]
};
exports["default"] = _default;

var Try = function Try(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      width: '2rem',
      height: '1rem'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CalendarDay["default"], _objectSpread({}, args))
  });
}; // export const Standard  = (args) => <div>
//     <LabelValue inline={true} label={"default"}>
//         <LabelValue.Value>
//             <CalendarDay/>
//         </LabelValue.Value>
//     </LabelValue>
//     <LabelValue inline={true} label={"not active"}>
//         <LabelValue.Value>
//             <CalendarDay isActive={false}/>
//         </LabelValue.Value>
//     </LabelValue>
//     <LabelValue inline={true} label={"selected"}>
//         <LabelValue.Value>
//             <CalendarDay selected={true}/>
//         </LabelValue.Value>
//     </LabelValue>
//     <LabelValue inline={true} label={"selected-period"}>
//         <LabelValue.Value>
//             <CalendarDay selected={true}/>
//         </LabelValue.Value>
//     </LabelValue>
// </div>;


exports.Try = Try;
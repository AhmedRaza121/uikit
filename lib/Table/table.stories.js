"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithRender = exports.Standard = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headers = [{
  label: 'Name',
  key: 'name'
}, {
  label: 'Start',
  key: 'start'
}, {
  label: 'End',
  key: 'end'
}, {
  label: 'Duration',
  key: 'duration'
}, {
  label: 'Type',
  key: 'type'
}, {
  label: 'Status',
  key: 'status'
}];
var renderHeaders = [{
  label: 'Name',
  key: 'name'
}, {
  label: 'Start',
  key: 'start'
}, {
  label: 'End',
  key: 'end'
}, {
  label: 'Duration',
  key: 'duration'
}, {
  label: 'Type',
  key: 'type'
}, {
  label: 'Status',
  key: 'status',
  render: function render(_ref) {
    var value = _ref.value;
    if (value === 'Requested') return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        background: 'yellow'
      },
      children: value
    });
    if (value === 'Approved') return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        background: 'green',
        color: '#fff'
      },
      children: value
    });
    if (value === 'Rejected') return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        background: 'red',
        color: '#fff'
      },
      children: value
    });
    return null;
  }
}];
var dataSource = Array(8).fill(null).map(function (_, index) {
  return {
    name: 'Test',
    start: '01-01-1970',
    end: '01-01-1970',
    duration: 1,
    type: 'Test',
    status: index % 3 === 0 ? 'Approved' : index % 4 ? 'Rejected' : 'Requested'
  };
});
var _default = {
  title: 'swf-ui-kit/DataVisualisation/Table',
  component: _index["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  headers: headers,
  dataSource: dataSource
};
var WithRender = Template.bind({});
exports.WithRender = WithRender;
WithRender.args = {
  headers: renderHeaders,
  dataSource: dataSource
};
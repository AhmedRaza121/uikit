"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MockRequest = exports.ExampleData = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookAddonMock = _interopRequireDefault(require("storybook-addon-mock"));

var _index = require("../index");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/LookupField',
  component: _index.LookupField
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.LookupField, _objectSpread({}, args));
};

var mockData = [{
  sysId: -1,
  referenceData: [{
    value: 'Test value'
  }]
}, {
  sysId: -2,
  referenceData: [{
    value: 'Test value 2'
  }]
}, {
  sysId: -3,
  referenceData: [{
    value: 'Test value 3'
  }]
}];

var MockRequest = function MockRequest(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.LookupField, _objectSpread({}, args));
}; //    MockRequest.decorators = [withMock],
//  MockRequest.parameters = {
//     mockData: [{
//             url: '/api/now/graphql',
//             method: 'POST',
//             status: 200,
//             response: JSON.stringify([
//                 {data: {
//                         'GlideLayout_Query': {
//                             referenceDataRetriever: {
//                                 referenceDataList: mockData,
//                                 referenceRecentDataList: [],
//                                 totalCount: mockData.length
//                             }
//                         }
//                     }
//                 }
//             ]),
//         }
//     ],
// }


exports.MockRequest = MockRequest;

var ExampleData = function ExampleData(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.LookupField, _objectSpread({}, args));
};

exports.ExampleData = ExampleData;
ExampleData.args = {
  // label: "LookupField",
  // content: "d5640bdadbfb2300f0ee760a689619e6",
  // declarativeUiActions: Proxy {0: Proxy, 1: Proxy, Symbol(mobx administration): e},
  displayValue: 'Viktor Bardakov - Admin',
  label: 'Creator',
  name: 'opened_by',
  table: 'x_aaro2_teamwork_container',
  tableRecordSysId: 'e40fcb88db5be8505884eb184b96191b',
  type: 'reference',
  value: 'd5640bdadbfb2300f0ee760a689619e6'
};
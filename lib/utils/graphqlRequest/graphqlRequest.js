"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = graphqlRequest;

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_GQL_ENDPOINT = 'api/now/graphql';

function graphqlRequest(_ref) {
  var _ref$operationName = _ref.operationName,
      operationName = _ref$operationName === void 0 ? '' : _ref$operationName,
      _ref$query = _ref.query,
      query = _ref$query === void 0 ? {} : _ref$query,
      _ref$variables = _ref.variables,
      variables = _ref$variables === void 0 ? {} : _ref$variables,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params;

  var options = _objectSpread(_objectSpread({
    method: 'POST'
  }, params), {}, {
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
      'X-Transaction-Source': window.transaction_source,
      'X-UserToken': window.g_ck
    },
    body: JSON.stringify([{
      operationName: operationName,
      query: query,
      variables: variables
    }])
  });

  return (0, _crossFetch["default"])(DEFAULT_GQL_ENDPOINT, options);
}
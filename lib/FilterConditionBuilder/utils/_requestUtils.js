"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REQUEST_UTILS = void 0;

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var REQUEST_UTILS = {
  prepareQueryParams: function prepareQueryParams(obj) {
    return Object.keys(obj).map(function (k) {
      return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(obj[k]));
    }).join('&');
  },
  fetchRequest: function fetchRequest(_ref) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var url, params, result, response, resultJson;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _ref.url, params = _ref.params;
              _context.prev = 1;
              _context.next = 4;
              return (0, _crossFetch["default"])(url, _objectSpread(_objectSpread({}, params), {}, {
                credentials: 'same-origin',
                headers: {
                  'content-type': 'application/json',
                  'X-Transaction-Source': window.transaction_source,
                  'X-UserToken': window.g_ck
                }
              }));

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              resultJson = _context.sent;
              result = resultJson.result;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);

            case 14:
              return _context.abrupt("return", result);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }))();
  },
  fetchTableData: function fetchTableData(_ref2) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var table, queryParams, endpoint, query, url, params;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              table = _ref2.table, queryParams = _ref2.queryParams;
              endpoint = "".concat(window.location.origin, "/api/now/ui/meta/").concat(table);
              query = queryParams ? _this.prepareQueryParams(queryParams) : '';
              url = "".concat(endpoint, "?").concat(query);
              params = {
                method: 'GET'
              };
              _context2.next = 7;
              return _this.fetchRequest({
                url: url,
                params: params
              });

            case 7:
              return _context2.abrupt("return", _context2.sent);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  fetchReferenceData: function fetchReferenceData(_ref3) {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var table, queryParams, endpoint, query, url, params;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              table = _ref3.table, queryParams = _ref3.queryParams;
              endpoint = "".concat(window.location.origin, "/api/now/table/").concat(table);
              query = queryParams ? _this2.prepareQueryParams(queryParams) : '';
              url = "".concat(endpoint, "?").concat(query);
              params = {
                method: 'GET'
              };
              _context3.next = 7;
              return _this2.fetchRequest({
                url: url,
                params: params
              });

            case 7:
              return _context3.abrupt("return", _context3.sent);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  fetchFilterTemplates: function fetchFilterTemplates(_ref4) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var table, filter, endpoint, queryParams, query, url, params;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              table = _ref4.table, filter = _ref4.filter;
              endpoint = "".concat(window.location.origin, "/api/now/table/sys_filter");
              queryParams = {
                sysparm_query: "table=".concat(table, "^").concat(filter),
                sysparm_fields: 'filter,sys_id,sys_name,table,title,user,group'
              };
              query = _this3.prepareQueryParams(queryParams);
              url = "".concat(endpoint, "?").concat(query);
              params = {
                method: 'GET'
              };
              _context4.next = 8;
              return _this3.fetchRequest({
                url: url,
                params: params
              });

            case 8:
              return _context4.abrupt("return", _context4.sent);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  fetchGroup: function fetchGroup(_ref5) {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var sys_id, endpoint, queryParams, query, url, params;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              sys_id = _ref5.sys_id;
              endpoint = "".concat(window.location.origin, "/api/now/table/sys_user_group");
              queryParams = {
                sysparm_query: "sys_id=".concat(sys_id)
              };
              query = _this4.prepareQueryParams(queryParams);
              url = "".concat(endpoint, "?").concat(query);
              params = {
                method: 'GET'
              };
              _context5.next = 8;
              return _this4.fetchRequest({
                url: url,
                params: params
              });

            case 8:
              return _context5.abrupt("return", _context5.sent);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
};
exports.REQUEST_UTILS = REQUEST_UTILS;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFilter = exports.fetchGroupList = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var url, _ref$params, params, result, response, resultJson;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params;
            _context.prev = 1;
            _context.next = 4;
            return fetch(url, _objectSpread(_objectSpread({}, params), {}, {
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
            result = Array.isArray(resultJson.result) ? resultJson.result.slice(0) : resultJson;
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
  }));

  return function fetchRequest(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var prepareQueryParams = function prepareQueryParams(obj) {
  return Object.keys(obj).map(function (k) {
    return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(obj[k]));
  }).join('&');
};

var fetchGroupList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var endpoint, queryParams, query, url, params;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            endpoint = '/api/now/table/sys_user_group';
            queryParams = {
              sysparm_query: 'active=true',
              sysparm_fields: 'sys_id,name,description'
            };
            query = prepareQueryParams(queryParams);
            url = "".concat(endpoint, "?").concat(query);
            params = {
              method: 'GET'
            };
            _context2.next = 7;
            return fetchRequest({
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
  }));

  return function fetchGroupList() {
    return _ref3.apply(this, arguments);
  };
}();

exports.fetchGroupList = fetchGroupList;

var postFilter = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var url, params;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = '/api/now/table/sys_filter';
            params = {
              method: 'POST',
              body: JSON.stringify(data)
            };
            _context3.next = 4;
            return fetchRequest({
              url: url,
              params: params
            });

          case 4:
            return _context3.abrupt("return", _context3.sent);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function postFilter(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.postFilter = postFilter;
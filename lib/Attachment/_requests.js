"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadRequest = exports.downloadRequest = exports.deleteRequest = void 0;

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var errorMessage = function errorMessage(error, delay) {
  var errorIcon = 'exclamation-circle';
  return {
    systemMessages: [{
      content: error.toString(),
      icon: errorIcon,
      delay: delay
    }]
  };
};

var downloadRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(attachmentSysId, delay) {
    var _window, _window2, url, requestOptions, response, data, error;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!attachmentSysId) {
              _context.next = 19;
              break;
            }

            url = "/api/now/attachment/".concat(attachmentSysId);
            requestOptions = {
              method: 'GET',
              credentials: 'same-origin',
              headers: {
                'content-type': 'application/json',
                'X-Transaction-Source': (_window = window) === null || _window === void 0 ? void 0 : _window.transaction_source,
                'X-UserToken': (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.g_ck
              }
            };
            _context.prev = 3;
            _context.next = 6;
            return (0, _crossFetch["default"])(url, requestOptions);

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            data = _context.sent;

            if (response.ok) {
              _context.next = 13;
              break;
            }

            error = data && data.message || response.statusText;
            return _context.abrupt("return", errorMessage(error, delay));

          case 13:
            return _context.abrupt("return", data.result);

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 16]]);
  }));

  return function downloadRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.downloadRequest = downloadRequest;

var uploadRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file, tableSysId, tableName, delay) {
    var url, modifiedTableName, data, requestOptions, response, _data, error;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(tableName && tableSysId)) {
              _context2.next = 24;
              break;
            }

            url = '/api/now/attachment/upload';
            modifiedTableName = "ZZ_YY".concat(tableName);
            data = new FormData();
            data.append('table_name', modifiedTableName);
            data.append('table_sys_id', tableSysId);
            data.append('file', file);
            requestOptions = {
              method: 'POST',
              credentials: 'same-origin',
              headers: {
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
              },
              body: data
            };
            _context2.prev = 8;
            _context2.next = 11;
            return (0, _crossFetch["default"])(url, requestOptions);

          case 11:
            response = _context2.sent;
            _context2.next = 14;
            return response === null || response === void 0 ? void 0 : response.json();

          case 14:
            _data = _context2.sent;

            if (response.ok) {
              _context2.next = 18;
              break;
            }

            error = _data && _data.message || response.statusText;
            return _context2.abrupt("return", errorMessage(error, delay));

          case 18:
            return _context2.abrupt("return", _data.result);

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](8);
            console.log(_context2.t0);

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[8, 21]]);
  }));

  return function uploadRequest(_x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.uploadRequest = uploadRequest;

var deleteRequest = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(attachmentSysId, delay) {
    var url, requestOptions, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!attachmentSysId) {
              _context3.next = 14;
              break;
            }

            url = "/api/now/attachment/".concat(attachmentSysId);
            requestOptions = {
              method: 'DELETE',
              credentials: 'same-origin',
              headers: {
                'content-type': 'application/json',
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
              }
            };
            _context3.prev = 3;
            _context3.next = 6;
            return (0, _crossFetch["default"])(url, requestOptions);

          case 6:
            response = _context3.sent;

            if (response.ok) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", errorMessage(response.statusText, delay));

          case 9:
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 11]]);
  }));

  return function deleteRequest(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteRequest = deleteRequest;
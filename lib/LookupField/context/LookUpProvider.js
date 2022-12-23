"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LookUpProvider = void 0;

var _react = require("react");

var _lodash = _interopRequireDefault(require("lodash"));

var _request = require("../requests/graphql/request");

var _LookUpContext = require("./LookUpContext");

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LookUpProvider = function LookUpProvider(props) {
  var _useState = (0, _react.useState)({
    props: props,
    chars: '',
    setChars: _utils.noop,
    loading: false,
    focused: false,
    setFocused: _utils.noop,
    searchResults: [],
    setSearchResults: _utils.noop,
    isGlideList: false,
    isReference: true,
    subscribers: [],
    setSubscriber: _utils.noop
  }),
      _useState2 = _slicedToArray(_useState, 2),
      context = _useState2[0],
      setContext = _useState2[1];

  var abortController = (0, _react.useRef)();

  var setChars = function setChars(chars) {
    setContext(function (_) {
      return _objectSpread(_objectSpread({}, _), {}, {
        chars: chars
      });
    });
  };

  var setFocused = function setFocused(focused) {
    setContext(function (_) {
      return _objectSpread(_objectSpread({}, _), {}, {
        focused: focused
      });
    });
  };

  var setSubscriber = function setSubscriber(subscriber) {
    setContext(function (_) {
      return _objectSpread(_objectSpread({}, _), {}, {
        subscribers: [].concat(_toConsumableArray(_.subscribers), [subscriber])
      });
    });
  };

  var searchRecords = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result, _$get, referenceDataList, referenceRecentDataList, totalCount;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setContext(_objectSpread(_objectSpread({}, context), {}, {
                loading: true
              }));

              if (abortController !== null && abortController !== void 0 && abortController.current) {
                abortController.current.abort();
              }

              abortController.current = new AbortController();
              _context.next = 5;
              return (0, _request.glRequest)({
                chars: context.chars || '**',
                name: props.name,
                sys_id: props.tableRecordSysId,
                table: props.table,
                controller: abortController
              });

            case 5:
              result = _context.sent;
              _$get = _lodash["default"].get(result, '[0].data.GlideLayout_Query.referenceDataRetriever'), referenceDataList = _$get.referenceDataList, referenceRecentDataList = _$get.referenceRecentDataList, totalCount = _$get.totalCount;
              setContext(function (_) {
                return _objectSpread(_objectSpread({}, _), {}, {
                  searchResults: [].concat(_toConsumableArray(referenceDataList), _toConsumableArray(referenceRecentDataList)),
                  loading: false
                });
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function searchRecords() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setContext(function (_) {
      return _objectSpread(_objectSpread({}, _), {}, {
        setChars: setChars,
        setFocused: setFocused,
        setSubscriber: setSubscriber
      });
    });
  }, []);
  (0, _react.useEffect)(function () {
    setContext(function (_) {
      return _objectSpread(_objectSpread({}, _), {}, {
        props: props
      });
    });
  }, [props.value, props.displayValue]);
  (0, _react.useEffect)(function () {
    context.focused && searchRecords();
  }, [context.chars, context.focused]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LookUpContext.LookUpContext.Provider, {
    value: context,
    children: props.children
  });
};

exports.LookUpProvider = LookUpProvider;
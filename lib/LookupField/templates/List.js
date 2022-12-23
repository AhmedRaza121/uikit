"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var React = _interopRequireWildcard(require("react"));

var _LookUpContext = require("../context/LookUpContext");

var _PillRecord = require("./PillRecord");

var _index = require("../../index");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var List = function List(props) {
  var intRef = props.intRef,
      _props$records = props.records,
      records = _props$records === void 0 ? {
    value: [],
    displayValue: []
  } : _props$records,
      onInvalid = props.onInvalid,
      onPaste = props.onPaste,
      onDelete = props.onDelete;

  var _useState = (0, React.useState)({
    value: [],
    displayValue: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      renderedRecords = _useState2[0],
      setRenderedRecords = _useState2[1];

  var observerRef = (0, React.useRef)();
  var sliceRange = (0, React.useRef)({
    start: 0,
    end: 60
  });

  var _useContext = (0, React.useContext)(_LookUpContext.LookUpContext),
      _useContext$props = _useContext.props,
      name = _useContext$props.name,
      invalid = _useContext$props.invalid,
      required = _useContext$props.required,
      message = _useContext$props.message,
      readonly = _useContext$props.readonly,
      label = _useContext$props.label,
      chars = _useContext.chars,
      setChars = _useContext.setChars;

  var handleInput = function handleInput(event) {
    setChars(event.target.value);
  };

  var startObserver = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var pillsContainer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new Promise(function (resolve, reject) {
                return setTimeout(resolve, 500);
              });

            case 2:
              pillsContainer = intRef.current.querySelectorAll('.pill');
              Array.from(pillsContainer).forEach(function (element) {
                return observerRef.current.observe(element);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function startObserver() {
      return _ref.apply(this, arguments);
    };
  }();

  var intersectionCallback = (0, React.useCallback)(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var pillsContainer = intRef.current.querySelector('.form-control--start');
        var lastElement = pillsContainer.lastChild;

        if (lastElement === entry.target) {
          sliceRange.current.end = sliceRange.current.end + 60;
          setRenderedRecords(function (_) {
            return _objectSpread(_objectSpread({}, records), {}, {
              displayValue: records.displayValue.slice(sliceRange.current.start, sliceRange.current.end)
            });
          });
        }
      }
    });
  }, [records.displayValue.toString()]);
  (0, React.useEffect)(function () {
    return function () {
      return observerRef.current.disconnect();
    };
  }, []);
  (0, React.useEffect)(function () {
    setRenderedRecords(function (_) {
      return _objectSpread(_objectSpread({}, records), {}, {
        displayValue: records.displayValue.slice(sliceRange.current.start, sliceRange.current.end)
      });
    });
  }, [records.displayValue.toString()]);
  (0, React.useEffect)(function () {
    observerRef.current = new IntersectionObserver(intersectionCallback);
    startObserver();
  }, [renderedRecords.displayValue.toString()]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input, {
    internalRef: intRef,
    className: "swf-reference--input",
    value: chars,
    containerClass: "list-field-group",
    label: "".concat(label, " ").concat(records.value.length, " selected"),
    manageValue: true,
    name: name,
    onInput: handleInput,
    readonly: readonly,
    onInvalid: onInvalid,
    onPaste: onPaste,
    invalid: invalid,
    required: required,
    message: message,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.Start, {
      children: renderedRecords.displayValue.map(function (label) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PillRecord.Record, {
          label: label,
          onDelete: onDelete
        }, label);
      })
    })
  });
};

exports.List = List;
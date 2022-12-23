"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlideList = void 0;

var _react = require("react");

var _utils = require("../utils");

var _http = require("../../utils/http");

var _List = require("../templates/List");

var _LookUpContext = require("../context/LookUpContext");

var _jsxRuntime = require("react/jsx-runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var GlideList = function GlideList(props) {
  var context = (0, _react.useContext)(_LookUpContext.LookUpContext);
  var intRef = props.intRef;
  var _context$props = context.props,
      name = _context$props.name,
      reference = _context$props.reference,
      onValueChange = _context$props.onValueChange,
      value = _context$props.value,
      displayValue = _context$props.displayValue,
      setFocused = context.setFocused,
      setSubscriber = context.setSubscriber;

  var _useState = (0, _react.useState)({
    value: (0, _utils.stringToArray)(value, {
      divider: ','
    }),
    displayValue: (0, _utils.stringToArray)(displayValue, {
      divider: ','
    })
  }),
      _useState2 = _slicedToArray(_useState, 2),
      records = _useState2[0],
      setRecords = _useState2[1];

  var deleteHandler = function deleteHandler(label) {
    return function (prev, curr, indx) {
      if (curr !== label) return prev;
      prev.value = records.value.filter(function (_, i) {
        return i !== indx;
      });
      prev.displayValue = records.displayValue.filter(function (_, i) {
        return i !== indx;
      });
      return prev;
    };
  };

  var getValuesArray = function getValuesArray(records, record) {
    if (!records) return {
      value: [],
      displayValue: []
    };
    if (records.value.includes(record.sysId)) return records;
    records.value.push(record.sysId);
    records.displayValue.push(record.displayValue);
    return _objectSpread({}, records);
  };

  var handleClick = function handleClick(record) {
    var sysId = record.sysId,
        referenceData = record.referenceData;

    var _referenceData = _slicedToArray(referenceData, 1),
        data = _referenceData[0];

    setRecords(function (_) {
      var newRecords = getValuesArray(_, {
        sysId: sysId,
        displayValue: data === null || data === void 0 ? void 0 : data.value
      });
      onValueChange && onValueChange(name, newRecords.value.toString(), newRecords.displayValue);
      return newRecords;
    });
  };

  var handleDeleteClick = function handleDeleteClick(_ref) {
    var label = _ref.label;
    setRecords(function (_) {
      var newRecords = records.displayValue.reduce(deleteHandler(label), {
        value: [],
        displayValue: []
      });
      onValueChange && onValueChange(name, newRecords.value.toString(), newRecords.displayValue);
      return newRecords;
    });
  };

  var onPaste = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var value, charsArray, _yield$request, data, records;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              event.stopPropagation();
              value = event.clipboardData.getData('Text');

              if (value) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              setFocused(false);
              charsArray = value.split(/,|\\n/).map(function (chars) {
                return chars.trim();
              });
              _context.next = 9;
              return (0, _http.request)({
                method: 'POST',
                url: 'api/x_aaro2_teamwork/swf_api/list',
                data: {
                  table: reference,
                  search_string: charsArray
                }
              });

            case 9:
              _yield$request = _context.sent;
              data = _yield$request.data;
              records = data.reduce(function (prev, curr) {
                var sysId = curr.sysId,
                    referenceData = curr.referenceData;
                var displayValue = referenceData[0].value;
                return getValuesArray(prev, {
                  sysId: sysId,
                  displayValue: displayValue
                });
              }, {
                value: [],
                displayValue: []
              });
              setRecords(function (_) {
                return records;
              });
              onValueChange && onValueChange(name, records.value.toString(), records.displayValue);
              setFocused(true);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onPaste(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (value === records.value.toString() && displayValue === records.displayValue.toString()) return;
    setRecords(function (_) {
      return {
        value: (0, _utils.stringToArray)(value, {
          divider: ','
        }),
        displayValue: (0, _utils.stringToArray)(displayValue, {
          divider: ','
        })
      };
    });
  }, [value, displayValue]);
  (0, _react.useEffect)(function () {
    setSubscriber(handleClick);
  }, [setSubscriber]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.List, {
    intRef: intRef,
    onPaste: onPaste,
    onDelete: handleDeleteClick,
    records: records
  });
};

exports.GlideList = GlideList;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _graphqlRequest = _interopRequireDefault(require("../utils/graphqlRequest/graphqlRequest"));

var _datasource = require("./datasource");

var _index = require("../index");

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LookupTable = function LookupTable(props) {
  var onValueChange = props.onValueChange,
      name = props.name,
      readonly = props.readonly,
      table = props.table,
      internalRef = props.internalRef,
      onInvalid = props.onInvalid,
      message = props.message,
      label = props.label,
      invalid = props.invalid,
      required = props.required,
      searchFields = props.searchFields,
      manageValue = props.manageValue,
      value = props.value;
  var inputRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      records = _useState2[0],
      setRecords = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      focused = _useState6[0],
      setFocused = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1];

  var makeRequest = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var chars,
          isList,
          response,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              chars = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
              isList = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
              _context.next = 4;
              return (0, _graphqlRequest["default"])({
                operationName: 'reference',
                query: _datasource.query,
                variables: {
                  searchFields: isList ? searchFields : ['sys_id'],
                  value: chars,
                  table: table
                }
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              return _context.abrupt("return", _context.sent);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function makeRequest() {
      return _ref.apply(this, arguments);
    };
  }();

  var getReferenceList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(value) {
      var data, _$get, getListItems;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setLoading(true);
              setRecords([]);
              _context2.next = 5;
              return makeRequest(value);

            case 5:
              data = _context2.sent;
              _$get = _lodash["default"].get(data, '[0].data.xAaro2Swf.referenceList'), getListItems = _$get.getListItems;
              setLoading(false);
              setRecords(getListItems);
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function getReferenceList(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getReferenceItem = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
      var data, _$get2, getListItems;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return makeRequest(id, false);

            case 2:
              data = _context3.sent;
              _$get2 = _lodash["default"].get(data, '[0].data.xAaro2Swf.referenceList'), getListItems = _$get2.getListItems;
              setSearchValue(getListItems[0].value);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getReferenceItem(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var onChange = function onChange(event) {
    var value = event.target.value;
    setFocused(true);
    setSearchValue(value);
    getReferenceList(value).then();
  };

  var _onClick = function onClick(record) {
    setFocused(false);
    setSearchValue(record.value);
    onValueChange(record);
  };

  var onFocus = function onFocus() {
    if (focused || searchValue) return;
    !readonly && getReferenceList();
    setFocused(true);
  };

  var clearValue = function clearValue(e) {
    setSearchValue('');
    onValueChange(name, '', []);
  };

  (0, _react.useEffect)(function () {
    var handler = function handler(_ref4) {
      var path = _ref4.path;
      if (internalRef && internalRef.current && path.includes(internalRef.current)) return;
      setFocused(false);
    };

    document.addEventListener('click', handler);
    return function () {
      document.removeEventListener('click', handler);
    };
  }, [internalRef]);
  (0, _react.useEffect)(function () {
    if (manageValue && value) {
      getReferenceItem(value);
    }
  }, [value, manageValue]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "swf-lookup-table",
    ref: function ref(elm) {
      return internalRef.current = elm;
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input, {
      onFocus: onFocus,
      internalRef: inputRef,
      className: "swf-reference--input",
      value: searchValue,
      label: label,
      manageValue: true,
      manageInvalid: true,
      name: name,
      onInput: onChange,
      readonly: readonly,
      onInvalid: onInvalid,
      invalid: invalid,
      required: required,
      message: message,
      children: !!searchValue && !readonly && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.End, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
          bare: true,
          icon: "x",
          size: "md",
          variant: "tertiary",
          onClick: clearValue,
          tooltipContent: "Clear"
        })
      })
    }), inputRef && inputRef.current && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      hideTail: true,
      manageOpened: true,
      opened: focused,
      positionTarget: inputRef,
      positions: [{
        target: 'bottom-start',
        content: 'top-start'
      }, {
        target: 'bottom-start',
        content: 'top-start'
      }],
      contentStyles: {
        width: 'calc(100% - 2rem)'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "result",
          children: [loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "message",
            children: "Loading..."
          }) : null, !loading && !records.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "message",
            children: "No Results Found"
          }) : null, !loading && records.map(function (record) {
            var sys_id = record.sys_id,
                value = record.value;
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "result--item",
              onClick: function onClick() {
                return _onClick(record);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "additional",
                children: value
              })
            }, sys_id);
          })]
        })
      })
    })]
  });
};

LookupTable.defaultProps = {
  onValueChange: function onValueChange() {
    return void 0;
  },
  searchFields: [],
  name: '',
  readonly: false,
  table: '',
  internalRef: /*#__PURE__*/_react["default"].createRef(),
  onInvalid: function onInvalid() {
    return void 0;
  },
  message: [],
  label: '',
  invalid: false,
  required: false,
  value: '',
  manageValue: false
};
LookupTable.propTypes = {
  value: _propTypes["default"].string,
  manageValue: _propTypes["default"].bool,
  onValueChange: _propTypes["default"].func,
  name: _propTypes["default"].string,
  searchFields: _propTypes["default"].arrayOf(_propTypes["default"].string),
  readonly: _propTypes["default"].bool,
  table: _propTypes["default"].string,
  internalRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]),
  onInvalid: _propTypes["default"].func,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(['critical', 'warning', 'positive', 'info', 'suggestion']),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    className: _propTypes["default"].object,
    iconSize: _propTypes["default"].number
  })),
  label: _propTypes["default"].string,
  invalid: _propTypes["default"].bool,
  required: _propTypes["default"].bool
};
var _default = LookupTable;
exports["default"] = _default;
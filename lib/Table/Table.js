"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

var _react = require("react");

var _utils = require("../utils");

var _table = require("./context/table");

var _table2 = require("./table.shema");

var _Th = require("./Th");

var _Tr = require("./Tr");

var _Td = require("./Td");

var _Tbody = require("./Tbody");

var _Thead = require("./Thead");

var _Loader = _interopRequireDefault(require("../Loader/Loader"));

var _Pagination = require("./Pagination");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tableRow = function tableRow(_ref) {
  var record = _ref.data,
      key = _ref.key,
      render = _ref.render;

  if (!key) {
    return console.error('Key is empty in headers props');
  }

  var value = record[key];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Td.Td, {
    children: render ? render({
      record: record,
      value: value
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      title: value,
      children: value
    })
  }, "".concat(key));
};

var Table = function Table(props) {
  var _props$name = props.name,
      name = _props$name === void 0 ? '' : _props$name,
      _props$headers = props.headers,
      headers = _props$headers === void 0 ? [] : _props$headers,
      _props$dataSource = props.dataSource,
      dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
      paginationBottom = props.paginationBottom,
      paginationTop = props.paginationTop,
      total = props.total,
      loading = props.loading,
      stickyHeader = props.stickyHeader,
      headerPosition = props.headerPosition;

  var _useContext = (0, _react.useContext)(_table.TableContext),
      setCurrentPage = _useContext.setCurrentPage,
      setOffset = _useContext.setOffset;

  var rowsCount = Array(dataSource.length).fill(null);
  (0, _react.useEffect)(function () {
    setCurrentPage(1);
    setOffset(0);
  }, [name]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "swfTableResponsive",
    children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "swfTableLoader",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loader["default"], {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination.Pagination, _objectSpread({
      total: total || rowsCount.length
    }, paginationTop)), /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
      className: "swfTable",
      cellPadding: 0,
      cellSpacing: 0,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Thead.Thead, {
        sticky: stickyHeader,
        position: headerPosition,
        children: headers.map(function (_ref2) {
          var label = _ref2.label,
              key = _ref2.key;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Th.Th, {
            children: label
          }, "".concat(key, ":").concat(label));
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tbody.Tbody, {
        children: rowsCount.map(function (_, index) {
          var _dataSource$index$onC;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tr.Tr, {
            onClick: (_dataSource$index$onC = dataSource[index].onClick) !== null && _dataSource$index$onC !== void 0 ? _dataSource$index$onC : _utils.noop,
            children: headers.map(function (_ref3) {
              var key = _ref3.key,
                  render = _ref3.render;
              return tableRow({
                data: dataSource[index],
                key: key,
                render: render
              });
            })
          }, "tr:".concat(index));
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination.Pagination, _objectSpread({
      total: total || rowsCount.length,
      property: "--positionBottom"
    }, paginationBottom))]
  });
};

exports.Table = Table;
Table.defaultProp = _table2.TableDefaultProps;
Table.propTypes = _table2.TablePropTypes;
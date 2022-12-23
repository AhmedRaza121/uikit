"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Table = _interopRequireDefault(require("../Table"));

var _shemas = require("./shemas");

var _useGraphQL2 = _interopRequireDefault(require("../utils/useGraphQL"));

var _utils = require("../utils");

var _index = require("../index");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SNTable = function SNTable(props) {
  var _props$table = props.table,
      table = _props$table === void 0 ? 'incident' : _props$table,
      _props$view = props.view,
      view = _props$view === void 0 ? 'default' : _props$view,
      _props$query = props.query,
      query = _props$query === void 0 ? '' : _props$query,
      paginationTop = props.paginationTop,
      paginationBottom = props.paginationBottom,
      onClick = props.onClick,
      stickyHeader = props.stickyHeader,
      headerPosition = props.headerPosition;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      headers = _useState2[0],
      setHeaders = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      dataSource = _useState4[0],
      setDataSource = _useState4[1];

  var _useState5 = (0, _react.useState)(50),
      _useState6 = _slicedToArray(_useState5, 2),
      limit = _useState6[0],
      setLimit = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      offset = _useState8[0],
      setOffset = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      total = _useState10[0],
      setTotal = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      error = _useState12[0],
      setError = _useState12[1];

  var _useGraphQL = (0, _useGraphQL2["default"])({
    operationName: 'nowRecordListConnected',
    query: _shemas.listQueryModel,
    variables: {
      table: table,
      view: view,
      columns: '',
      query: query,
      limit: limit,
      offset: offset,
      queryCategory: 'list',
      workspaceConfigId: '',
      runHighlightedValuesQuery: true,
      runQuery: true,
      isDeclarativeActionsRequired: false,
      source: 'list',
      disableLiveList: true
    }
  }, [table, view, query, offset, limit]),
      loading = _useGraphQL.loading,
      data = _useGraphQL.data;

  var handleLimit = (0, _react.useCallback)(function (value) {
    setLimit(value);
  }, [setLimit]);
  var handleOffset = (0, _react.useCallback)(function (value) {
    setOffset(value);
  }, [setOffset]);
  (0, _react.useEffect)(function () {
    if (!data) return;

    var error = _.get(data, '[0].errors', []);

    if (error.length > 0) {
      return setError('No records for display');
    }

    var _$get = _.get(data, '[0].data.GlideListLayout_Query.getListLayout'),
        allColumns = _$get.allColumns,
        layoutQuery = _$get.layoutQuery;

    var headers = allColumns.map(function (_ref) {
      var columnData = _ref.columnData,
          columnName = _ref.columnName;
      var label = columnData.label;
      return {
        label: label,
        key: columnName
      };
    });
    var dataSource = layoutQuery.queryRows.map(function (_ref2) {
      var className = _ref2.className,
          rowData = _ref2.rowData,
          uniqueId = _ref2.uniqueId;
      var dataSource = rowData.reduce(function (acc, _ref3) {
        var columnName = _ref3.columnName,
            columnData = _ref3.columnData;
        acc[columnName] = columnData.displayValue;
        return acc;
      }, {});

      dataSource.onClick = function () {
        onClick({
          table: className,
          sys_id: uniqueId
        });
        return {
          table: className,
          sys_id: uniqueId
        };
      };

      return dataSource;
    });

    if (dataSource.length === 0) {
      return setError('No records for display');
    }

    setTotal(layoutQuery.count);
    setHeaders(headers);
    setDataSource(dataSource);
    setError(null);
  }, [data]);

  if (error) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.InfoMessage, {
      content: error,
      status: "blue"
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Table["default"], {
    name: table,
    headers: headers,
    dataSource: dataSource,
    offsetChanged: handleOffset,
    peerPageChanged: handleLimit,
    total: total,
    loading: loading,
    paginationTop: paginationTop,
    paginationBottom: paginationBottom,
    stickyHeader: stickyHeader,
    headerPosition: headerPosition
  });
};

SNTable.defaultProps = {
  stickyHeader: false,
  headerPosition: 0,
  paginationTop: {
    alignment: 'end',
    sticky: false,
    position: 0
  },
  paginationBottom: {
    alignment: 'end',
    sticky: false,
    position: 0
  },
  onClick: _utils.noop
};
var paginationPropTypes = {
  alignment: _propTypes["default"].oneOf(['start', 'center', 'end', 'none']),
  sticky: _propTypes["default"].bool,
  position: _propTypes["default"].number
};
SNTable.propTypes = {
  table: _propTypes["default"].string,
  view: _propTypes["default"].string,
  query: _propTypes["default"].string,
  paginationTop: _propTypes["default"].shape(paginationPropTypes),
  paginationBottom: _propTypes["default"].shape(paginationPropTypes),
  stickyHeader: _propTypes["default"].bool,
  headerPosition: _propTypes["default"].number,
  onClick: _propTypes["default"].func
};
var _default = SNTable;
exports["default"] = _default;
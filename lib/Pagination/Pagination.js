"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PaginationView = _interopRequireDefault(require("./PaginationView"));

var _constants = require("./constants");

var _utils = require("./utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Pagination = function Pagination(props) {
  var totalRecords = props.totalRecords,
      currentPageSiblingsAmount = props.currentPageSiblingsAmount,
      pageLimit = props.pageLimit,
      displayPageLimitDropdown = props.displayPageLimitDropdown,
      onPageChange = props.onPageChange,
      onPageLimitChange = props.onPageLimitChange;

  var _useState = (0, React.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      totalPages = _useState2[0],
      setTotalPages = _useState2[1];

  var _useState3 = (0, React.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = (0, React.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      pagesArray = _useState6[0],
      setPagesArray = _useState6[1];

  var _useState7 = (0, React.useState)(pageLimit),
      _useState8 = _slicedToArray(_useState7, 2),
      recordsPerPage = _useState8[0],
      setRecordsPerPage = _useState8[1];

  (0, React.useEffect)(function () {
    setTotalPages(Math.ceil(totalRecords / recordsPerPage));
    setCurrentPage(1);
  }, [totalRecords, pageLimit, recordsPerPage]);
  (0, React.useEffect)(function () {
    setPagesArray(getPagesArray());
  }, [currentPage, totalPages]);

  var gotoPage = function gotoPage(page) {
    var currentPage = Math.max(0, Math.min(page, totalPages));
    var paginationData = {
      currentPage: currentPage,
      totalPages: totalPages,
      pageLimit: recordsPerPage,
      totalRecords: totalRecords
    };
    setCurrentPage(currentPage);
    onPageChange(paginationData);
  };

  var getPagesArray = function getPagesArray() {
    var totalShownNumbers = currentPageSiblingsAmount * 2 + 3;
    var totalShownButtons = totalShownNumbers + 2;

    if (totalPages > totalShownButtons) {
      var startPage = Math.max(2, currentPage - currentPageSiblingsAmount);
      var endPage = Math.min(totalPages - 1, currentPage + currentPageSiblingsAmount);
      var pages = (0, _utils.range)(startPage, endPage);
      var hasLeftExtraPages = startPage > 2;
      var hasRightExtraPages = totalPages - endPage > 1;
      var extraPagesOffset = totalShownNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftExtraPages && !hasRightExtraPages:
          {
            var extraPages = (0, _utils.range)(startPage - extraPagesOffset, startPage - 1);
            pages = [_constants.LEFT_PAGE].concat(_toConsumableArray(extraPages), _toConsumableArray(pages));
            break;
          }
        // handle: (1) {2 3} [4] {5 6} > (10)

        case !hasLeftExtraPages && hasRightExtraPages:
          {
            var _extraPages = (0, _utils.range)(endPage + 1, endPage + extraPagesOffset);

            pages = [].concat(_toConsumableArray(pages), _toConsumableArray(_extraPages), [_constants.RIGHT_PAGE]);
            break;
          }
        // handle: (1) < {4 5} [6] {7 8} > (10)

        case hasLeftExtraPages && hasRightExtraPages:
        default:
          {
            pages = [_constants.LEFT_PAGE].concat(_toConsumableArray(pages), [_constants.RIGHT_PAGE]);
            break;
          }
      }

      return [1].concat(_toConsumableArray(pages), [totalPages]);
    }

    return (0, _utils.range)(1, totalPages);
  };

  var onPageClick = function onPageClick(page) {
    return function (e) {
      e.preventDefault();
      gotoPage(page);
    };
  };

  var onLeftClick = function onLeftClick(e) {
    e.preventDefault();
    gotoPage(currentPage - currentPageSiblingsAmount * 2 - 1);
  };

  var onRightClick = function onRightClick(e) {
    e.preventDefault();
    gotoPage(currentPage + currentPageSiblingsAmount * 2 + 1);
  };

  var onRecordsPerPageSelect = function onRecordsPerPageSelect(e) {
    onPageLimitChange(e.clickedItem.id);
    setRecordsPerPage(e.clickedItem.id);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaginationView["default"], {
    pages: pagesArray,
    totalPages: totalPages,
    currentPage: currentPage,
    onLeftClick: onLeftClick,
    onRightClick: onRightClick,
    onPageClick: onPageClick,
    recordsPerPage: recordsPerPage,
    onRecordsPerPageSelect: onRecordsPerPageSelect,
    displayPageLimitDropdown: displayPageLimitDropdown
  });
};

Pagination.propTypes = {
  totalRecords: _propTypes["default"].number,
  pageLimit: _propTypes["default"].number,
  displayPageLimitDropdown: _propTypes["default"].bool,
  currentPageSiblingsAmount: _propTypes["default"].oneOf([0, 1, 2]),
  onPageChange: _propTypes["default"].func,
  onPageLimitChange: _propTypes["default"].func
};
Pagination.defaultProps = {
  totalRecords: 1,
  pageLimit: 20,
  displayPageLimitDropdown: true,
  currentPageSiblingsAmount: 1,
  onPageChange: function onPageChange() {},
  onPageLimitChange: function onPageLimitChange() {}
};
var _default = Pagination;
exports["default"] = _default;
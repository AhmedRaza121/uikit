"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _react = require("react");

var _classnames = _interopRequireDefault(require("classnames"));

var _index = require("../index");

var _table = require("./context/table");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
interface IPagination {
    current?: number,
    total?: number,
    pageSize?: number,
    alignment?: "start" | "center" | "end",
    pageSizeOptions?: number[],
    showQuickJumper?: boolean,
    maxPagination?: number,
    onChange?: (page: number) => void
} */
var PaginationItem = function PaginationItem(_ref) {
  var label = _ref.label,
      active = _ref.active,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
    className: "swfRoundedButton",
    variant: active ? 'primary' : 'secondary',
    onClick: onClick,
    children: label
  });
};

var More = /*#__PURE__*/(0, _react.memo)(function (_ref2) {
  var icon = _ref2.icon,
      show = _ref2.show,
      onClick = _ref2.onClick;
  if (!show) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
    icon: icon,
    className: "swfMoreButton",
    size: "sm",
    onClick: onClick
  });
}, function (p, n) {
  return p.show === n.show;
});

var Pagination = function Pagination(props) {
  var _props$current = props.current,
      current = _props$current === void 0 ? 1 : _props$current,
      _props$total = props.total,
      total = _props$total === void 0 ? 1 : _props$total,
      _props$maxPagination = props.maxPagination,
      maxPagination = _props$maxPagination === void 0 ? 4 : _props$maxPagination,
      _props$pageSize = props.pageSize,
      pageSize = _props$pageSize === void 0 ? 10 : _props$pageSize,
      _props$pageSizeOption = props.pageSizeOptions,
      pageSizeOptions = _props$pageSizeOption === void 0 ? [10, 20, 50, 100] : _props$pageSizeOption,
      _props$showQuickJumpe = props.showQuickJumper,
      showQuickJumper = _props$showQuickJumpe === void 0 ? true : _props$showQuickJumpe,
      _props$alignment = props.alignment,
      alignment = _props$alignment === void 0 ? 'end' : _props$alignment,
      sticky = props.sticky,
      position = props.position,
      _props$property = props.property,
      property = _props$property === void 0 ? '--positionTop' : _props$property;
  var paginationRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    paginationRef.current.style.setProperty(property, "".concat(position, "px"));
  }, [position]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      peerPageOpened = _useState2[0],
      setPeerPageOpened = _useState2[1];

  var _useContext = (0, _react.useContext)(_table.TableContext),
      page = _useContext.currentPage,
      peerPage = _useContext.peerPage,
      setTab = _useContext.setCurrentPage,
      setPeerPage = _useContext.setPeerPage,
      setOffset = _useContext.setOffset;

  var pages = Math.ceil(total / peerPage) || 1;
  var showAll = pages <= maxPagination + 1;
  var isFirstNElements = showAll || page < maxPagination;
  var isLastNElements = showAll || !isFirstNElements && page + maxPagination > pages;
  var isFirstPage = page === 1;
  var isLastPage = page === pages;
  var showMoreIconRight = !isLastNElements;
  var showMoreIconLeft = !isFirstNElements;

  var setCurrentPageGap = function setCurrentPageGap(gap) {
    setTab(function (current) {
      var newPage = current + gap;
      setOffset(peerPage * (newPage - 1));
      return newPage;
    });
  };

  var handleNextPage = function handleNextPage() {
    setCurrentPageGap(1);
  };

  var handlePrevPage = function handlePrevPage() {
    setCurrentPageGap(-1);
  };

  var handleClick = function handleClick(i) {
    return function () {
      setCurrentPageGap(i - page);
    };
  };

  var jumpToNext = function jumpToNext() {
    setCurrentPageGap(5);
  };

  var jumpToPrev = function jumpToPrev() {
    setCurrentPageGap(-5);
  };

  var generatePaginationItems = function generatePaginationItems(start, end) {
    var items = [];

    for (var i = start; i <= end; i++) {
      items.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(PaginationItem, {
        label: i,
        active: page === i,
        onClick: handleClick(i)
      }, "item_".concat(i)));
    }

    return items;
  };

  var firstItem = function firstItem() {
    if (isFirstNElements) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(PaginationItem, {
      label: 1,
      active: page === 1,
      onClick: handleClick(1)
    }, "first");
  };

  var lastItem = function lastItem() {
    if (isLastNElements) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(PaginationItem, {
      label: pages,
      active: page === pages,
      onClick: handleClick(pages)
    }, "last");
  };

  var mainItems = function mainItems() {
    var start = 1;
    var end = pages;

    if (isFirstNElements) {
      end = showAll ? pages : maxPagination;
    } else if (isLastNElements) {
      start = showAll ? 1 : pages - maxPagination;
    } else {
      start = page - 2;
      end = page + 2;
    }

    return generatePaginationItems(start, end);
  };

  var handleSelectedItem = function handleSelectedItem(_ref3) {
    var clickedItem = _ref3.clickedItem;
    setPeerPageOpened(function () {
      return false;
    });
    setPeerPage(clickedItem.label);
    var pages = Math.ceil(total / clickedItem.label) || 1;
    if (pages > page) return setCurrentPageGap(0);
    return setCurrentPageGap(pages - page);
  };

  var handleOpened = function handleOpened(_ref4) {
    var opened = _ref4.opened;
    setPeerPageOpened(function (current) {
      if (opened === undefined) return false;
      return !current;
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: paginationRef,
    className: (0, _classnames["default"])('swfPaginationContainer', alignment, sticky && '--sticky'),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])('swfPagination', alignment),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
        icon: "arrow-left-short",
        disabled: isFirstPage,
        className: "swfRoundedButton",
        onClick: handlePrevPage
      }), firstItem(), /*#__PURE__*/(0, _jsxRuntime.jsx)(More, {
        show: showMoreIconLeft,
        icon: "chevron-double-left",
        onClick: jumpToPrev
      }), mainItems(), /*#__PURE__*/(0, _jsxRuntime.jsx)(More, {
        show: showMoreIconRight,
        icon: "chevron-double-right",
        onClick: jumpToNext
      }), lastItem(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
        icon: "arrow-right-short",
        disabled: isLastPage,
        className: "swfRoundedButton",
        onClick: handleNextPage
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Dropdown, {
      items: pageSizeOptions.map(function (number) {
        return {
          id: number,
          label: number
        };
      }),
      className: "swfPaginationDropdown",
      selectedItems: [peerPage],
      scrollToSelected: false,
      opened: peerPageOpened,
      onItemSelected: handleSelectedItem,
      manageSelectedItems: true,
      manageOpened: true,
      onOpened: handleOpened
    })]
  });
};

exports.Pagination = Pagination;
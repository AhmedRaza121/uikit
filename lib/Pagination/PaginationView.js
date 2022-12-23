"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Dropdown = _interopRequireDefault(require("../Dropdown/Dropdown"));

var _constants = require("./constants");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PaginationView = function PaginationView(props) {
  var pages = props.pages,
      totalPages = props.totalPages,
      currentPage = props.currentPage,
      onLeftClick = props.onLeftClick,
      onRightClick = props.onRightClick,
      onPageClick = props.onPageClick,
      recordsPerPage = props.recordsPerPage,
      onRecordsPerPageSelect = props.onRecordsPerPageSelect,
      displayPageLimitDropdown = props.displayPageLimitDropdown;

  var getButtonData = function getButtonData(page) {
    if (page === _constants.LEFT_PAGE) {
      return {
        onClick: onLeftClick,
        label: '«',
        className: 'pagination__button pagination__button_arrow'
      };
    }

    if (page === _constants.RIGHT_PAGE) {
      return {
        onClick: onRightClick,
        label: '»',
        className: 'pagination__button pagination__button_arrow'
      };
    }

    return {
      onClick: onPageClick(page),
      label: page,
      className: "pagination__button ".concat(currentPage === page && 'pagination__button_active')
    };
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("nav", {
    className: "pagination pagination__container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pagination__buttons-container",
      children: totalPages > 1 && pages.map(function (page, i) {
        var buttonData = getButtonData(page);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          className: buttonData.className,
          size: "md",
          onClick: buttonData.onClick,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: buttonData.label
          })
        }, i);
      })
    }), displayPageLimitDropdown && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "pagination__dropdown-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "Records per page:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
        selectedItems: [recordsPerPage],
        onItemSelected: onRecordsPerPageSelect,
        items: _constants.DROPDOWN_ITEMS,
        scrollToSelected: false
      })]
    })]
  });
};

var _default = PaginationView;
exports["default"] = _default;
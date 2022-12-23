"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchResult = void 0;

var React = _interopRequireWildcard(require("react"));

var _Popover = _interopRequireDefault(require("../../Popover/Popover"));

var _SearchContent = require("./SearchContent");

var _LookUpContext = require("../context/LookUpContext");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SearchResult = function SearchResult(props) {
  var _useContext = (0, React.useContext)(_LookUpContext.LookUpContext),
      focused = _useContext.focused,
      searchResults = _useContext.searchResults,
      loading = _useContext.loading,
      subscribers = _useContext.subscribers;

  var target = props.target,
      noResults = props.noResults;

  var listWidth = function listWidth() {
    var _target$current;

    return (target === null || target === void 0 ? void 0 : (_target$current = target.current) === null || _target$current === void 0 ? void 0 : _target$current.offsetWidth) - 16;
  };

  var hasTarget = function hasTarget(_) {
    var _target$current2;

    return (_target$current2 = !!(target !== null && target !== void 0 && target.current)) !== null && _target$current2 !== void 0 ? _target$current2 : false;
  };

  var handleResultClick = function handleResultClick(record) {
    subscribers.forEach(function (subscriber) {
      return subscriber(record);
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: hasTarget() && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      hideTail: true,
      manageOpened: true,
      opened: focused,
      positionTarget: target,
      positions: [{
        target: 'bottom-center',
        content: 'top-center'
      }, {
        target: 'top-center',
        content: 'bottom-center'
      }],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          className: "result",
          style: {
            width: "".concat(listWidth(), "px")
          },
          children: focused && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchContent.SearchContent, {
            loading: loading,
            noResults: noResults,
            records: searchResults,
            onClick: handleResultClick
          })
        })
      })
    })
  });
};

exports.SearchResult = SearchResult;
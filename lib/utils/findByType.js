"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createSubComponent = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findByType = function findByType(children, type) {
  return _react["default"].Children.map(children, function (child) {
    var _child$type;

    return (child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === type ? child : null;
  });
};

var createSubComponent = function createSubComponent(name) {
  var subComponent = function subComponent(_ref) {
    var children = _ref.children;
    return children;
  };

  Object.defineProperty(subComponent, 'displayName', {
    value: name,
    writable: false
  });
  return subComponent;
};

exports.createSubComponent = createSubComponent;
var _default = findByType;
exports["default"] = _default;
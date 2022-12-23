"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TablePropTypes = exports.TableDefaultProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TableDefaultProps = {
  headers: [],
  dataSource: [],
  paginationTop: {
    alignment: 'end'
  },
  paginationBottom: {
    alignment: 'end'
  },
  total: undefined,
  loading: false
};
exports.TableDefaultProps = TableDefaultProps;
var TablePropTypes = {
  name: _propTypes["default"].string,
  headers: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    key: _propTypes["default"].string,
    render: _propTypes["default"].func
  })),
  dataSource: _propTypes["default"].arrayOf(_propTypes["default"].object),
  paginationTop: _propTypes["default"].shape({
    alignment: _propTypes["default"].oneOf(['start', 'center', 'end'])
  }),
  paginationBottom: _propTypes["default"].shape({
    alignment: _propTypes["default"].oneOf(['start', 'center', 'end'])
  }),
  total: _propTypes["default"].number,
  loading: _propTypes["default"].bool
};
exports.TablePropTypes = TablePropTypes;
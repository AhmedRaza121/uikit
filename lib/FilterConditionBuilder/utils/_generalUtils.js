"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GENERAL_UTILS = void 0;
var GENERAL_UTILS = {
  clone: function clone(item) {
    return JSON.parse(JSON.stringify(item));
  },
  generateID: function generateID() {
    return "f".concat((+new Date()).toString(16));
  },
  findOperator: function findOperator(condition, operators) {
    var operator = '';

    for (var i = 0; i < operators.length; i++) {
      if (condition.indexOf(operators[i]) > -1) {
        operator = operators[i];
        break;
      }
    }

    return operator;
  }
};
exports.GENERAL_UTILS = GENERAL_UTILS;
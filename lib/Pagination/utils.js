"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = void 0;

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
var range = function range(from, to) {
  return new Array(to + 1 - from).fill().map(function (_, i) {
    return i + from;
  });
};

exports.range = range;
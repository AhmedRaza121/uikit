"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToArray = void 0;

var trimString = function trimString(string) {
  return string.trimStart();
};

var stringToArray = function stringToArray(string, _ref) {
  var divider = _ref.divider;
  if (!string) return [];
  return string.split(divider).filter(Boolean);
};

exports.stringToArray = stringToArray;
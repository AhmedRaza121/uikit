"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeURL = exports.noop = void 0;

var noop = function noop() {
  return undefined;
};

exports.noop = noop;

var normalizeURL = function normalizeURL(url) {
  var isLocal = globalThis.location.hostname === 'localhost';
  return isLocal ? "https://ven04075.service-now.com".concat(url) : url;
};

exports.normalizeURL = normalizeURL;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = exports.cancelToken = void 0;

var _snHttpRequest = require("sn-http-request");

var snHttp = (0, _snHttpRequest.snHttpFactory)({
  xsrfToken: window.g_ck,
  batching: false
});

var cancelToken = function cancelToken() {
  return snHttp.client.getSource();
};

exports.cancelToken = cancelToken;

var request = function request(_ref) {
  var method = _ref.method,
      url = _ref.url,
      data = _ref.data,
      source = _ref.source;
  return snHttp.request(url, method, {
    data: data,
    source: source
  });
};

exports.request = request;
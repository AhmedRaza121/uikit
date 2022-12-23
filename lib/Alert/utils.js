"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openLink = void 0;

var openLink = function openLink(href) {
  var a = document.createElement('a');
  a.href = href;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
  }, 0);
};

exports.openLink = openLink;
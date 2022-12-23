"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconSize = exports.addStyles = void 0;

var _constants = require("./constants");

var addStyles = function addStyles(customStyle) {
  var styles = {};
  var hasStyles = customStyle !== null;

  if (hasStyles) {
    _constants.SWF_BUTTON.AVAILABLE_CUSTOM_STYLES.forEach(function (styleName) {
      if (customStyle[styleName] !== undefined) styles["--".concat(styleName)] = customStyle[styleName];
    });
  }

  return styles;
};

exports.addStyles = addStyles;

var getCustomIconSize = function getCustomIconSize(sizeStr) {
  var result;

  switch (true) {
    case sizeStr.includes('px'):
      result = parseInt(sizeStr.replace('px', ''));
      break;

    case sizeStr.includes('rem'):
      result = parseFloat(sizeStr.replace('rem', ''));
      result *= 16;
      break;

    default:
      result = 16;
      break;
  }

  return result;
};

var getStandardIconSize = function getStandardIconSize(size) {
  var result = 1;
  if (size === 'sm') result = 0.75;else if (size === 'lg') result = 1.5;
  result *= 16;
  return result;
};

var getIconSize = function getIconSize(customStyle, icon, size) {
  var hasStyles = customStyle !== null;
  var hasIcon = (icon === null || icon === void 0 ? void 0 : icon.length) > 0;
  var hasCustomIconSize = hasStyles && customStyle['font-size'] !== undefined;
  var iconSize = 16;
  if (hasIcon && hasCustomIconSize) iconSize = getCustomIconSize(customStyle['font-size']);else if (hasIcon) iconSize = getStandardIconSize(size);
  return iconSize;
};

exports.getIconSize = getIconSize;
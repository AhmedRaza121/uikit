"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPointInsideTheElement = exports.hasChanges = exports.getErrorOnBoundaryValue = exports.getErrorMessages = exports.addCharToDate = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isLetter = function isLetter(_char) {
  return _char.match(/[a-zA-Z]/i);
};

var isNumber = function isNumber(_char2) {
  return _char2 >= '0' && _char2 <= '9';
};

var isExpectedTypeOfChar = function isExpectedTypeOfChar(_char3, expectedChar) {
  switch (true) {
    case isLetter(expectedChar):
      return isLetter(_char3);

    case isNumber(expectedChar):
      return isNumber(_char3);

    default:
      return _char3 === expectedChar;
  }
};

var isZeroAvailable = function isZeroAvailable(format, position) {
  return position === 0 || !isLetter(format.charAt(position - 1));
};

var nextChar = function nextChar(format, position) {
  var result = '';
  var nextPosition = position + 1;
  if (format.length > nextPosition && !isLetter(format.charAt(nextPosition))) result += format.charAt(nextPosition);
  return result;
};

var addCharToDate = function addCharToDate(format, curStr, _char4) {
  var dateStr = (0, _moment["default"])().format(format);
  if (!curStr) curStr = '';
  var possibleResult = curStr + _char4;
  var result = '';
  var isValidDate = false;

  if (_char4 == null) {
    result = curStr.length > 0 ? curStr.slice(0, -1) : '';
  } else {
    isValidDate = (0, _moment["default"])(possibleResult, format, false).isValid();
    var expectedChar = dateStr.charAt(curStr.length);
    var isZero = _char4 === '0' && isZeroAvailable(format, curStr.length);
    var isNeededChar = isZero || isValidDate && isExpectedTypeOfChar(_char4.charAt(0), expectedChar);
    result = isNeededChar ? curStr + _char4.charAt(0) + nextChar(format, curStr.length) : curStr;
  }

  return result;
};

exports.addCharToDate = addCharToDate;

var isPointInsideTheElement = function isPointInsideTheElement(element, pointX, pointY) {
  var elementDimensions = element.getBoundingClientRect();
  var elementPoints = {
    startY: elementDimensions.y,
    startX: elementDimensions.x,
    endY: elementDimensions.y + elementDimensions.height,
    endX: elementDimensions.x + elementDimensions.width
  };
  var insideX = pointX < elementPoints.endX && pointX > elementPoints.startX;
  var insideY = pointY < elementPoints.endY && pointY > elementPoints.startY;
  return insideY && insideX;
};

exports.isPointInsideTheElement = isPointInsideTheElement;

var getErrorOnBoundaryValue = function getErrorOnBoundaryValue(current, boundary, format) {
  var isMin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (current && boundary) {
    var currentDate = new Date(current);
    var boundaryDate = new Date(boundary);
    var invalidCheck = isMin && currentDate < boundaryDate || !isMin && currentDate > boundaryDate;

    if (invalidCheck) {
      return {
        content: "Date should be ".concat(isMin ? 'bigger' : 'smaller', " than ").concat((0, _moment["default"])(boundaryDate).format(format)),
        icon: 'exclamation-circle'
      };
    }
  }

  return undefined;
};

exports.getErrorOnBoundaryValue = getErrorOnBoundaryValue;
var invalidFormatMess = {
  content: 'Invalid date format',
  icon: 'exclamation-circle'
};

var getErrorMessages = function getErrorMessages(stringDate, format, min, max) {
  var isEmptyStr = !stringDate || stringDate.length < 1;
  var isValidValue = isEmptyStr || (0, _moment["default"])(stringDate, format, true).isValid();
  if (!isValidValue) return [invalidFormatMess];
  var minError = getErrorOnBoundaryValue(stringDate, min, format);
  var maxError = getErrorOnBoundaryValue(stringDate, max, format, false);
  var hasError = minError || maxError;
  if (hasError) return [hasError];
  return [];
};

exports.getErrorMessages = getErrorMessages;

var hasChanges = function hasChanges(a, b) {
  return !_.isEqual(_.sortBy(a, 'content'), _.sortBy(b, 'content'));
};

exports.hasChanges = hasChanges;
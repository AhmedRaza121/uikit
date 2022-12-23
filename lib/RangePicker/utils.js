"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrors = void 0;

var _utils = require("../DatePicker/utils");

var isRangeCorrect = function isRangeCorrect(start, end) {
  if (!start || !end) return true;
  var startInSeconds = new Date(start).setHours(0, 0, 0, 0);
  var endInSeconds = new Date(end).setHours(0, 0, 0, 0);
  return startInSeconds <= endInSeconds;
};

var getErrors = function getErrors(_ref, format, min, max) {
  var start = _ref.start,
      end = _ref.end;
  var startErrors = (0, _utils.getErrorMessages)(start, format, min, max);
  var endErrors = (0, _utils.getErrorMessages)(end, format, min, max);

  var errors = _.unionWith(startErrors, endErrors, _.isEqual);

  if (!isRangeCorrect(start, end)) {
    errors.push({
      content: 'Start date should be smaller than end date',
      icon: 'exclamation-circle'
    });
  }

  return errors;
};

exports.getErrors = getErrors;
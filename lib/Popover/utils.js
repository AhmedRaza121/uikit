"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopoverStyle = exports.getAllPossibleVariants = void 0;

var _constants = require("./constants");

var ALIGNMENT = _constants.POPOVER.ALIGNMENT,
    ARROW_SIZE = _constants.POPOVER.ARROW_SIZE,
    ARROW_ALIGN = _constants.POPOVER.ARROW_ALIGN,
    NO_ARROW_POSITIONS = _constants.POPOVER.NO_ARROW_POSITIONS,
    ARROW_SIDES = _constants.POPOVER.ARROW_SIDES,
    ARROW_SPACE = _constants.POPOVER.ARROW_SPACE,
    PADDING_SIZE = _constants.POPOVER.PADDING_SIZE;
var verticalAlignment = [ALIGNMENT.TOP, ALIGNMENT.CENTER, ALIGNMENT.BOTTOM];
var horizontalAlignment = [ALIGNMENT.START, ALIGNMENT.CENTER, ALIGNMENT.END];

var setArrowColor = function setArrowColor(align) {
  return "--arrow-".concat(align, "-color");
};

var setMargin = function setMargin(align) {
  return "margin-".concat(align);
};

var setArrowSize = function setArrowSize(align) {
  return "--arrow-".concat(align, "-size");
};

var hasArrowByPosition = function hasArrowByPosition(position, roundBorder) {
  return !(isOneOfNoArrow(position) || roundBorder && !isCenterArrow(position));
};

var isOneOfNoArrow = function isOneOfNoArrow(position) {
  var targetPosition = position.target.split('-');
  var contentPosition = position.content.split('-');
  var result = false;
  NO_ARROW_POSITIONS.forEach(function (_ref) {
    var content = _ref.content,
        target = _ref.target;
    var elTargetPosition = target.split('-');
    var elContentPosition = content.split('-');
    var isSameTargetParams = targetPosition[0] === elTargetPosition[0] && targetPosition[1] === elTargetPosition[1];
    var isSameContentParams = contentPosition[0] === elContentPosition[0] && contentPosition[1] === elContentPosition[1];
    if (isSameTargetParams && isSameContentParams) result = true;
  });
  return result;
};

var isCenterArrow = function isCenterArrow(position) {
  var contentPosition = position.content.split('-');
  return contentPosition[0] === ALIGNMENT.CENTER || contentPosition[1] === ALIGNMENT.CENTER;
};

var calculatePosition = function calculatePosition(alignType, arrayType, size) {
  var addPx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var result = addPx;
  if (alignType === arrayType[1]) result = Math.round(size / 2) + addPx;else if (alignType === arrayType[2]) result = size + addPx;
  return result;
};

var getArrowAlignment = function getArrowAlignment(arrayType, align, parentSize, size) {
  if (align === arrayType[1]) return Math.round(parentSize / 2) - size;
  if (align === arrayType[2]) return parentSize - size * 2;
  return 0;
};

var getArrowStyles = function getArrowStyles(position, contentDimensions) {
  var style = {};
  var targetPosition = position.target.split('-');
  var contentPosition = position.content.split('-');
  var margin = "".concat(ARROW_SIZE + ARROW_SPACE, "px");
  var isDown = targetPosition[0] === ALIGNMENT.TOP && contentPosition[0] === ALIGNMENT.BOTTOM;
  var isLeft = targetPosition[1] === ALIGNMENT.END && contentPosition[1] === ALIGNMENT.START;
  var isRight = targetPosition[1] === ALIGNMENT.START && contentPosition[1] === ALIGNMENT.END;
  var isUp = targetPosition[0] === ALIGNMENT.BOTTOM && contentPosition[0] === ALIGNMENT.TOP;
  var hasArrow = true;
  var sideToZero = null;
  var colorSide = null;
  var top = 0;
  var left = 0;

  switch (true) {
    case isDown:
      sideToZero = ARROW_SIDES.BOTTOM;
      colorSide = ARROW_SIDES.TOP;
      top = contentDimensions.height;
      left = getArrowAlignment(horizontalAlignment, contentPosition[1], contentDimensions.width, ARROW_SIZE);
      break;

    case isRight:
      sideToZero = ARROW_SIDES.RIGHT;
      colorSide = ARROW_SIDES.LEFT;
      top = getArrowAlignment(verticalAlignment, contentPosition[0], contentDimensions.height, ARROW_SIZE);
      left = contentDimensions.width;
      break;

    case isLeft:
      sideToZero = ARROW_SIDES.LEFT;
      colorSide = ARROW_SIDES.RIGHT;
      top = getArrowAlignment(verticalAlignment, contentPosition[0], contentDimensions.height, ARROW_SIZE);
      left = -ARROW_SIZE;
      break;

    case isUp:
      sideToZero = ARROW_SIDES.TOP;
      colorSide = ARROW_SIDES.BOTTOM;
      top = -ARROW_SIZE;
      left = getArrowAlignment(horizontalAlignment, contentPosition[1], contentDimensions.width, ARROW_SIZE);
      break;

    default:
      hasArrow = false;
      break;
  }

  if (hasArrow) {
    style[ARROW_ALIGN.TOP] = "".concat(top, "px");
    style[ARROW_ALIGN.LEFT] = "".concat(left, "px");
    style[setArrowColor(colorSide)] = 'var(--popover-background)';
    style[setArrowSize(sideToZero)] = 0;
    style[setMargin(sideToZero)] = margin;
  }

  return {
    hasArrow: hasArrow,
    style: style
  };
};

var getTopAndLeft = function getTopAndLeft(targetPosition, targetDimensions, contentPosition, hasArrow, contentDimensions) {
  var verticalAlign = targetPosition[0];
  var horizontalAlign = targetPosition[1];
  var targetWidth = targetDimensions.width;
  var targetHeight = targetDimensions.height;
  var addPx = 0;
  var addPxY = 0;
  var needMoveContent = verticalAlign === ALIGNMENT.TOP && contentPosition[0] === ALIGNMENT.BOTTOM;
  var needMoveContentY = horizontalAlign === ALIGNMENT.START && contentPosition[1] === ALIGNMENT.END;
  if (needMoveContent && hasArrow) addPx = -ARROW_SIZE - ARROW_SPACE;
  if (needMoveContentY && hasArrow) addPxY = -ARROW_SIZE - ARROW_SPACE;
  var top = targetDimensions.y - contentDimensions.y + calculatePosition(verticalAlign, verticalAlignment, targetHeight, addPx);
  var left = targetDimensions.x - contentDimensions.x + calculatePosition(horizontalAlign, horizontalAlignment, targetWidth, addPxY);
  return {
    top: top,
    left: left
  };
};

var getTransform = function getTransform(contentPosition, width, height) {
  var verticalAlign = contentPosition[0];
  var horizontalAlign = contentPosition[1];
  var translateY = calculatePosition(verticalAlign, verticalAlignment, -height);
  var translateX = calculatePosition(horizontalAlign, horizontalAlignment, -width);
  return {
    x: translateX,
    y: translateY,
    stringValue: "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)")
  };
};

var getStyleByPosition = function getStyleByPosition(position, targetDimensions, contentDimensions, windowParam, hasArrow, updatedContentSizes, padding) {
  var style = {};
  var targetPosition = position.target.split('-');
  var contentPosition = position.content.split('-');
  var top = 0;
  var left = 0;

  if (targetPosition) {
    var positionByTarget = getTopAndLeft(targetPosition, targetDimensions, contentPosition, hasArrow, contentDimensions);
    top = positionByTarget.top;
    left = positionByTarget.left;
  }

  style.top = "".concat(top, "px");
  style.left = "".concat(left, "px");
  style.transform = getTransform(contentPosition, updatedContentSizes.width, updatedContentSizes.height).stringValue;
  style.maxWidth = "".concat(updatedContentSizes.width - padding * 2, "px");
  style.maxHeight = "".concat(updatedContentSizes.height - padding * 2, "px");
  return style;
};

var getAllStyles = function getAllStyles(position, targetDimensions, contentDimensions, windowParam, hasArrow, updatedContentSizes, pudding) {
  var arrowStyles = {
    hasArrow: false,
    style: {}
  };
  var popoverStyles = getStyleByPosition(position, targetDimensions, contentDimensions, windowParam, hasArrow, updatedContentSizes, pudding);
  if (hasArrow) arrowStyles = getArrowStyles(position, updatedContentSizes);
  return {
    style: popoverStyles,
    hasArrow: arrowStyles.hasArrow,
    arrowStyle: arrowStyles.style
  };
};

var dividePosition = function dividePosition(position) {
  var splittedPos = position.split('-');
  return {
    vertical: splittedPos[0],
    horizontal: splittedPos[1]
  };
};

var getAvailableSize = function getAvailableSize(targetPosition, contentPosition, targetStart, targetSize, contentSize, windowStart, windowEnd, alignment, margin, padding) {
  var availableStart;
  var availableEnd;
  var targetPos = targetStart + calculatePosition(targetPosition, alignment, targetSize);

  if (contentPosition === alignment[1]) {
    var minValue = windowEnd - targetPos > targetPos - windowStart ? targetPos - windowStart : windowEnd - targetPos;
    availableEnd = targetPos + minValue;
    availableStart = targetPos - minValue;
  } else if (contentPosition === alignment[0]) {
    availableEnd = windowEnd;
    availableStart = targetPos;
  } else {
    availableStart = windowStart;
    availableEnd = targetPos;
  }

  var availableSize = availableEnd - availableStart;
  return {
    size: contentSize + margin > availableSize ? availableSize - margin : contentSize,
    needCut: contentSize + margin > availableSize
  };
};

var getAvailableDimensions = function getAvailableDimensions(position, targetDimensions, contentDimensions, windowParam, hasArrow, padding) {
  var targetPosition = dividePosition(position.target);
  var contentPosition = dividePosition(position.content);
  var realContentWidth = contentDimensions.width;
  var realContentHeight = contentDimensions.height;
  var checkWithMargin = hasArrow && contentPosition.vertical === verticalAlignment[1];
  var margin = checkWithMargin ? ARROW_SIZE + ARROW_SPACE : 0;
  var availableWidth = getAvailableSize(targetPosition.horizontal, contentPosition.horizontal, targetDimensions.x, targetDimensions.width, realContentWidth, windowParam.startX, windowParam.endX, horizontalAlignment, margin, padding);
  checkWithMargin = hasArrow && contentPosition.horizontal === verticalAlignment[1];
  margin = checkWithMargin ? ARROW_SIZE + ARROW_SPACE : 0;
  var availableHeight = getAvailableSize(targetPosition.vertical, contentPosition.vertical, targetDimensions.y, targetDimensions.height, realContentHeight, windowParam.startY, windowParam.endY, verticalAlignment, margin, padding);
  return {
    content: {
      width: availableWidth.size,
      height: availableHeight.size
    },
    needCut: availableWidth.needCut || availableHeight.needCut
  };
};

var getPopoverStyle = function getPopoverStyle(positions, targetDimensions, contentDimensions, hideTail, roundBorder, padding) {
  var result = {};
  var hasArrow;
  var availableDimensions;
  var paddings = padding || PADDING_SIZE;
  var windowParam = {
    startY: 0,
    startX: 0,
    endY: window.innerHeight,
    endX: window.innerWidth
  };

  for (var i = 0; i < positions.length; i++) {
    hasArrow = !hideTail && hasArrowByPosition(positions[i], roundBorder);
    availableDimensions = getAvailableDimensions(positions[i], targetDimensions, contentDimensions, windowParam, hasArrow, paddings);

    if (!availableDimensions.needCut) {
      var updatedSizes = availableDimensions.content;
      result = getAllStyles(positions[i], targetDimensions, contentDimensions, windowParam, hasArrow, updatedSizes, paddings);
      break;
    } else if (i === positions.length - 1) {
      hasArrow = !hideTail && hasArrowByPosition(positions[0], roundBorder);
      availableDimensions = getAvailableDimensions(positions[0], targetDimensions, contentDimensions, windowParam, hasArrow, paddings);
      result = getAllStyles(positions[0], targetDimensions, contentDimensions, windowParam, hasArrow, availableDimensions.content, paddings);
    }
  }

  return result;
};

exports.getPopoverStyle = getPopoverStyle;

var isOuterPosition = function isOuterPosition(position) {
  var targetPosition = dividePosition(position.target);
  var contentPosition = dividePosition(position.content);
  var isDown = targetPosition.vertical === ALIGNMENT.TOP && contentPosition.vertical === ALIGNMENT.BOTTOM;
  var isLeft = targetPosition.horizontal === ALIGNMENT.END && contentPosition.horizontal === ALIGNMENT.START;
  var isRight = targetPosition.horizontal === ALIGNMENT.START && contentPosition.horizontal === ALIGNMENT.END;
  var isUp = targetPosition.vertical === ALIGNMENT.BOTTOM && contentPosition.vertical === ALIGNMENT.TOP;
  return isDown || isLeft || isRight || isUp;
};

var getAllPossiblePositions = function getAllPossiblePositions() {
  var result = [];
  verticalAlignment.forEach(function (v) {
    horizontalAlignment.forEach(function (h) {
      result.push("".concat(v, "-").concat(h));
    });
  });
  return result;
};

var getAllPossibleVariants = function getAllPossibleVariants() {
  var result = [];
  var allPositions = getAllPossiblePositions();
  allPositions.forEach(function (targetPos) {
    allPositions.forEach(function (contentPos) {
      var position = {
        target: targetPos,
        content: contentPos
      };
      if (isOuterPosition(position)) result.unshift(position);else result.push(position);
    });
  });
  return result;
};

exports.getAllPossibleVariants = getAllPossibleVariants;
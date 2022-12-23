"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POPOVER = void 0;
var POPOVER = {
  ALIGNMENT: {
    TOP: 'top',
    CENTER: 'center',
    BOTTOM: 'bottom',
    START: 'start',
    END: 'end'
  },
  NO_ARROW_POSITIONS: [{
    target: 'top-start',
    content: 'bottom-end'
  }, {
    target: 'top-end',
    content: 'bottom-start'
  }, {
    target: 'bottom-end',
    content: 'top-start'
  }, {
    target: 'bottom-start',
    content: 'top-end'
  }],
  ARROW_ALIGN: {
    TOP: '--popover-arrow-top',
    LEFT: '--popover-arrow-left'
  },
  ARROW_SIDES: {
    RIGHT: 'right',
    LEFT: 'left',
    BOTTOM: 'bottom',
    TOP: 'top'
  },
  ARROW_SIZE: 9,
  ARROW_SPACE: 3,
  PADDING_SIZE: 8,
  hiddenStyles: {
    visibility: 'hidden',
    transform: 'translate3d(0, 0, 0)',
    left: 0,
    top: 0,
    margin: 0
  }
};
exports.POPOVER = POPOVER;
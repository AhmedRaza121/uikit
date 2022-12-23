"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWF_MODAL = void 0;
var SWF_MODAL = {
  MODAL_SIZE: {
    DEFAULT: 'default',
    FULL: 'full',
    HIDDEN: 'hidden'
  },
  MODAL: {
    SIZE: {
      CHANGED: 'SWF_MODAL#MODAL_SIZE_CHANGED'
    }
  },
  MODAL_CLOSED: 'SWF_MODAL#MODAL_CLOSED',
  MOBILE_REGEXP: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
  MOBILE_EVENTS: {
    SWIPE: {
      RIGHT: 'swiperight'
    }
  }
};
exports.SWF_MODAL = SWF_MODAL;
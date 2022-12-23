"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ATTACHMENT = void 0;
var ATTACHMENT = {
  ERROR_TYPE: {
    size: 'size',
    type: 'contentType',
    extensions: 'extensions'
  },
  CONTENT_TYPE: {
    MEDIA_TYPE: {
      IMAGE: 'image',
      VIDEO: 'video',
      AUDIO: 'audio'
    },
    WORD: ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/rtf'],
    PDF: ['application/pdf'],
    EXCEL: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    POWER_POINT: ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    ARCHIVE: ['application/zip', 'application/x-7z-compressed', 'application/vnd.rar', 'application/x-freearc', 'application/x-bzip', 'application/x-bzip2', 'application/gzip', 'application/java-archive', 'application/x-tar']
  },
  IMAGE_ICON: {
    IMAGE: 'file-earmark-image',
    EXCEL: 'file-earmark-ruled',
    POWER_POINT: 'file-earmark-ppt',
    PDF: 'file-earmark-richtext',
    AUDIO: 'file-earmark-music',
    VIDEO: 'file-earmark-play',
    WORD: 'file-earmark-word',
    DEFAULT: 'file-earmark-text',
    ARCHIVE: 'file-earmark-zip'
  }
};
exports.ATTACHMENT = ATTACHMENT;
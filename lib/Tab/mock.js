"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITEMS = void 0;
var ITEMS = [{
  id: '1',
  label: 'Week',
  // icon: 'app-indicator',
  count: 3,
  presence: '',
  disabled: false,
  infoMessage: 'information'
}, {
  id: '2',
  label: 'Month',
  // icon: 'arrow-down-left-circle-fill',
  count: 2,
  presence: '',
  disabled: false,
  required: true
}, {
  id: '3',
  label: 'Year',
  // icon: 'binoculars-fill',
  count: 1,
  presence: '',
  disabled: false,
  invalid: true,
  required: true,
  infoMessage: 'Hello'
}];
exports.ITEMS = ITEMS;
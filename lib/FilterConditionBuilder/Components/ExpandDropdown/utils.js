"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemById = exports.calculateScroll = void 0;

var getItemById = function getItemById(id, items) {
  var result = null;
  items.map(function (el) {
    if (el.id === id) result = el;
  });
  return result;
};

exports.getItemById = getItemById;

var calculateScroll = function calculateScroll(container, selectedItems) {
  var result = container.scrollTop;
  var hasSelectedItems = selectedItems && selectedItems.length > 0;

  if (container && hasSelectedItems) {
    var selectedEl = container.querySelector("div[data-key=\"".concat(selectedItems[0], "\"]"));
    var itemDimensions = selectedEl.getBoundingClientRect();
    var containerDimensions = container.getBoundingClientRect();
    var containerEndX = containerDimensions.y + containerDimensions.height;
    var itemEndX = itemDimensions.y + itemDimensions.height;
    if (itemEndX > containerEndX) result = itemDimensions.y - containerDimensions.y;else if (itemDimensions.y < containerDimensions.y) result = container.scrollTop - (containerDimensions.y - itemDimensions.y);
  }

  return result;
};

exports.calculateScroll = calculateScroll;
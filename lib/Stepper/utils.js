"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCircleSize = exports.createCssVariables = void 0;

var getCircleSize = function getCircleSize(iconSize) {
  switch (iconSize) {
    case 'xs':
      return '16px';

    case 'sm':
      return '32px';

    case 'md':
      return '48px';

    case 'lg':
      return '64px';

    case 'xl':
      return '96px';

    case 'xxl':
      return '128px';

    default:
      return "".concat(iconSize * 2, "px");
  }
};

exports.getCircleSize = getCircleSize;

var createCssVariables = function createCssVariables(palette, iconSize) {
  var link = palette.link,
      label = palette.label,
      circle = palette.circle;
  return '.stepper{' + "--circle-color:".concat(circle || '#39A450', ";") + "--link-color:".concat(link || circle || '#39A450', ";") + "--label-color:".concat(label || '#000000', ";") + "--circle-size:".concat(getCircleSize(iconSize) || '16px') + '}';
}; // const aaronsExamplePalette = {
//     icon: {
//         finished: 'white',
//         unfinished: 'black'
//     },
//     circle: '#0069C8',
//     link: '#0069C8',
//     label: 'black'
// }


exports.createCssVariables = createCssVariables;
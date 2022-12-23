"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _LabelValue = _interopRequireDefault(require("./LabelValue"));

var _testTemplates = require("../../.storybook/testTemplates");

var _Toggle = _interopRequireDefault(require("../Toggle/Toggle"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('LabelValue', function () {
  var component;
  it('Should have ref', function () {
    var checkRef = /*#__PURE__*/React.createRef();
    component = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelValue["default"], {
      ref: checkRef
    }));
    expect(component.getDOMNode()).toEqual(checkRef.current);
  });
  it('Should be clickable', function () {
    var onClick = jest.fn();
    component = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelValue["default"], {
      onClick: onClick
    }));

    _testTemplates.TEST_TEMPLATES.testOnClick(component, onClick);
  });
  it('Should render value as element', function () {
    var value = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggle["default"], {});
    component = (0, _enzyme.shallow)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelValue["default"], {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelValue["default"].Value, {
        children: value
      })
    }));
    expect(component.exists('.value-content')).toBeTruthy();
    expect(component.contains(value)).toBeTruthy();
  });
  describe('view', function () {
    beforeAll(function () {
      return component = (0, _enzyme.shallow)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelValue["default"], {}));
    });
    it('Should render component', function () {
      expect(component.exists('div')).toBeTruthy();
      expect(component.exists('.label-value-container')).toBeTruthy();
    });
    it('Should render label', function () {
      var label = 'Hello';
      expect(component.exists('label')).toBeFalsy();
      component.setProps({
        label: label
      });
      expect(component.exists('label')).toBeTruthy();
      expect(component.text()).toMatch(label);
    });
    it('Should render value as text', function () {
      var value = 'value';
      expect(component.exists('.value-content')).toBeFalsy();
      component.setProps({
        value: value
      });
      expect(component.exists('.value-content')).toBeTruthy();
      expect(component.find('.value-content').text()).toMatch(value);
    });
    it('Should contain container className', function () {
      _testTemplates.TEST_TEMPLATES.testClassNameProp(component);
    });
    it('Should contain label className', function () {
      var labelClassName = 'labelClassName';
      component.setProps({
        labelClassName: labelClassName
      });
      component.setProps({
        label: 'Hello'
      });
      expect(component.find('label').hasClass(labelClassName)).toBeTruthy();
    });
    it('Should contain value className', function () {
      var valueClassName = 'valueClassName';
      component.setProps({
        valueClassName: valueClassName
      });
      component.setProps({
        value: 'Hello'
      });
      expect(component.find('.value-content').hasClass(valueClassName)).toBeTruthy();
    });
    it('Should contain inline classes', function () {
      component.setProps({
        inline: true
      });
      component.setProps({
        value: 'Hello'
      });
      expect(component.hasClass('--display-flex')).toBeTruthy();
      expect(component.find('.value-content').hasClass('--inline')).toBeTruthy();
    });
    it('Should contain class to make label bold', function () {
      component.setProps({
        label: 'Hыello'
      });
      expect(component.hasClass('--unimportant')).toBeFalsy();
      expect(component.find('label').hasClass('--unimportant')).toBeFalsy();
      component.setProps({
        importantLabel: false
      });
      expect(component.hasClass('--unimportant')).toBeTruthy();
      expect(component.find('label').hasClass('--unimportant')).toBeTruthy();
    });
    it('Should contain classes for size property', function () {
      expect(component.hasClass('--md')).toBeTruthy();
      var sizes = ['sm', 'md', 'lg'];
      sizes.forEach(function (size) {
        component.setProps({
          size: size
        });
        expect(component.hasClass("--".concat(size))).toBeTruthy();
      });
    });
  });
});
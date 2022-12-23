"use strict";

var _enzyme = require("enzyme");

var _Badge = _interopRequireDefault(require("./Badge"));

var _testTemplates = require("../../.storybook/testTemplates");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Badge', function () {
  var component;
  describe('view', function () {
    beforeAll(function () {
      return component = (0, _enzyme.shallow)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge["default"], {}));
    });
    describe('Contain classes', function () {
      it('Should contain class .swf-badge-root', function () {
        expect(component.find('.swf-badge-root').length).toBe(1);
      });
      it('Should contain class .swf-badge', function () {
        expect(component.find('.swf-badge').length).toBe(1);
      });
      it('Should contain class according to prop className', function () {
        _testTemplates.TEST_TEMPLATES.testClassNameProp(component);
      });
    });
    describe('Prop "text" ', function () {
      it('Should contain text', function () {
        var text = 'Badge';
        component.setProps({
          text: text
        });
        expect(component.text()).toMatch(text);
      });
      it('Should not contain text', function () {
        var text = '';
        component.setProps({
          text: text
        });
        expect(component.text()).toMatch(text);
      });
    });
    it('Should contain class when exist props \'variant\'', function () {
      var variants = ['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue'];
      variants.map(function (variant) {
        component.setProps({
          variant: variant
        });
        var el = component.find('span');
        expect(el.hasClass(variant)).toBe(true);
      });
    });
  });
  it('Should have ref', function () {
    var checkRef = {};
    component = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge["default"], {
      ref: checkRef
    }));
    expect(component.getDOMNode()).toEqual(checkRef.current);
  });
});
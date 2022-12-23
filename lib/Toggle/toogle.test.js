"use strict";

var _enzyme = require("enzyme");

var _Toggle = _interopRequireDefault(require("./Toggle"));

var _testTemplates = require("../../.storybook/testTemplates");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require('enzyme'),
    shallow = _require.shallow;

describe('Toggle', function () {
  var component;
  describe('view', function () {
    beforeAll(function () {
      return component = shallow( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggle["default"], {}));
    });
    it('Should have prop className', function () {
      _testTemplates.TEST_TEMPLATES.testClassNameProp(component);
    });
    it("Should have class according 'size' prop", function () {
      var sizes = ['sm', 'md'];
      sizes.map(function (size) {
        component.setProps({
          size: size
        });
        expect(component.hasClass("toggle-".concat(size))).toBeTruthy();
      });
    });
    it("Should have 'disable' class if 'disable' prop true", function () {
      component.setProps({
        disabled: true
      });
      expect(component.hasClass('disabled')).toBeTruthy();
    });
    it('Should have prop visible', function () {
      expect(component.exists('label')).toBeTruthy();
      expect(component.exists('input')).toBeTruthy();
      component.setProps({
        visible: false
      });
      expect(component).toEqual({});
    });
  });
  describe('action', function () {
    var onClick;
    beforeEach(function () {
      onClick = jest.fn();
      component = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggle["default"], {
        onClick: onClick
      }));
    });
    it('Should be clickable', function () {
      component.find('input').simulate('change');
      expect(onClick.mock.calls.length).toBe(1);
    });
    it('Should not be clickable if disabled', function () {
      component.setProps({
        disabled: true
      });
      component.find('input').simulate('change');
      expect(onClick.mock.calls.length).toBe(0);
    });
  });
  describe('managing checked', function () {
    it('Should change isChecked state if manageChecked = false', function () {
      component = shallow( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggle["default"], {}));
      var input = component.find('input');
      expect(input.get(0).props.checked).toBe(false);
      input.simulate('change');
      component.update();
      expect(component.find('input').get(0).props.checked).toBe(true);
      component.setProps({
        checked: false
      });
      expect(component.find('input').get(0).props.checked).toBe(true);
      component = shallow( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggle["default"], {
        checked: true
      }));
      expect(component.find('input').get(0).props.checked).toBe(true);
    });
    it('Should not change isChecked state if manageChecked = true', function () {
      component = shallow( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggle["default"], {
        manageChecked: true,
        checked: true
      }));
      var input = component.find('input');
      expect(input.get(0).props.checked).toBe(true);
      component.setProps({
        checked: false
      });
      expect(component.find('input').get(0).props.checked).toBe(false);
      input.simulate('change');
      component.update();
      expect(component.find('input').get(0).props.checked).toBe(false);
    });
  });
  it('Should have ref', function () {
    var checkRef = {};
    component = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggle["default"], {
      ref: checkRef
    }));
    expect(component.getDOMNode()).toEqual(checkRef.current);
  });
});
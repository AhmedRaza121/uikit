"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputValue = void 0;

var _DatePicker = _interopRequireDefault(require("../../../DatePicker/DatePicker"));

var _TextArea = _interopRequireDefault(require("../../../TextArea/TextArea"));

var _Dropdown = _interopRequireDefault(require("../../../Dropdown/Dropdown"));

var _Input = _interopRequireDefault(require("../../../Input/Input"));

var _ = require("../../..");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputValue = function inputValue(_ref) {
  var inputValuePayload = _ref.inputValuePayload;
  var state = inputValuePayload.state,
      conditionOptions = inputValuePayload.conditionOptions,
      itemClicked = inputValuePayload.itemClicked,
      onDatePickerChange = inputValuePayload.onDatePickerChange,
      inputValueSet = inputValuePayload.inputValueSet,
      textAreaValueSet = inputValuePayload.textAreaValueSet,
      lookupFieldValueSet = inputValuePayload.lookupFieldValueSet;
  var dropdownsIsActive = state.dropdownsIsActive,
      selectedItem = state.selectedItem,
      generalTable = state.generalTable,
      refFieldValue = state.refFieldValue;
  var editor = conditionOptions.operator.editor;

  var dropdownValueHandle = function dropdownValueHandle(_ref2) {
    var item = _ref2.item,
        index = _ref2.index;
    var newItem = index ? _objectSpread(_objectSpread({}, item), {}, {
      index: index
    }) : _objectSpread({}, item);
    itemClicked(newItem);
  };

  switch (editor) {
    case 'boolean':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container boolean-dropdown",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
          items: [{
            id: 'true',
            label: 'true',
            dropdown: 'value'
          }, {
            id: 'false',
            label: 'false',
            dropdown: 'value'
          }],
          selectedItems: [conditionOptions.value],
          select: "single",
          disabled: !dropdownsIsActive.value,
          placeholder: "--choose value--",
          variant: "tertiary",
          size: "md",
          manageSelectedItems: true,
          onItemSelected: function onItemSelected(item) {
            return dropdownValueHandle({
              item: item.clickedItem
            });
          }
        })
      });

    case 'choice_field_names':
    case 'choice':
    case 'choice_dynamic':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
        items: conditionOptions.valueAdditionalData,
        selectedItems: [conditionOptions.value],
        select: "single",
        disabled: !dropdownsIsActive.value,
        placeholder: "--choose value--",
        variant: "tertiary",
        size: "md",
        onItemSelected: function onItemSelected(item) {
          return dropdownValueHandle({
            item: item.clickedItem
          });
        }
      });

    case 'reference':
      var items = conditionOptions.fieldItems.items;
      var table = items.length < 2 ? generalTable : items[items.length - 2].table;
      var name = items[items.length - 1].id;
      var label = items[items.length - 1].label;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container choice-dropdown",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LookupField, {
          table: table,
          name: name,
          label: label,
          onValueChange: function onValueChange(name, sys_id, displayVal) {
            return lookupFieldValueSet({
              name: name,
              sys_id: sys_id,
              displayVal: displayVal
            });
          },
          displayValue: refFieldValue.displayVal,
          value: conditionOptions.value
        })
      });

    case 'choice_multiple':
      var selectedItems = conditionOptions.value ? conditionOptions.value.split(',') : [''];
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container choice-multiple-dropdown",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
          items: conditionOptions.valueAdditionalData,
          selectedItems: selectedItems,
          select: "multi",
          disabled: !dropdownsIsActive.value,
          placeholder: "--choose value--",
          variant: "tertiary",
          size: "md",
          onItemSelected: function onItemSelected(item) {
            return dropdownValueHandle({
              item: item.clickedItem
            });
          }
        })
      });

    case 'string':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container string-input",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
          step: "any",
          type: "text",
          value: conditionOptions.value,
          onInput: function onInput(e) {
            return inputValueSet({
              value: e.target.value,
              type: editor,
              index: 0
            });
          }
        })
      });

    case 'integer':
    case 'decimal':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container number-input",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
          min: 0,
          step: conditionOptions.operator.editor === 'integer' ? 1 : 0.001,
          type: "number",
          value: conditionOptions.value,
          onInput: function onInput(e) {
            return inputValueSet({
              value: e.target.value,
              type: editor,
              index: 0
            });
          }
        })
      });

    case 'between_field':
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container between-field-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker["default"], {
            value: conditionOptions.value['0'],
            format: "YYYY-MM-DD",
            onValueChange: function onValueChange(item) {
              return onDatePickerChange({
                value: item,
                type: editor,
                index: 0
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "and"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container between-field-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker["default"], {
            value: conditionOptions.value['1'],
            format: "YYYY-MM-DD",
            onValueChange: function onValueChange(item) {
              return onDatePickerChange({
                value: item,
                type: editor,
                index: 1
              });
            }
          })
        })]
      });

    case 'textarea':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container textarea-input",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea["default"], {
          autoresize: false,
          value: state.textAreaValue || conditionOptions.value,
          resize: "vertical",
          onKeyDown: function onKeyDown(e) {
            textAreaValueSet({
              value: e.target.value
            });
          },
          className: "limited-area"
        })
      });

    case 'relative_field':
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      conditionOptions.value['2'] = conditionOptions.value['2'] || '';
      conditionOptions.value['3'] = conditionOptions.value['3'] || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container relative-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              id: 'after',
              label: 'after',
              dropdown: 'value',
              type: 'relative-field',
              index: '0'
            }, {
              id: 'before',
              label: 'before',
              dropdown: 'value',
              type: 'relative-field',
              index: '0'
            }],
            selectedItems: [conditionOptions.value['0']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 0
              });
            },
            select: "single",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container relative-field-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            min: 0,
            step: 1,
            type: "number",
            value: conditionOptions.value['1'],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 1
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container relative-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              id: 'minute',
              label: 'Minutes',
              dropdown: 'value',
              type: 'relative-field',
              index: '2'
            }, {
              id: 'hour',
              label: 'Hours',
              dropdown: 'value',
              type: 'relative-field',
              index: '2'
            }, {
              id: 'dayofweek',
              label: 'Days',
              dropdown: 'value',
              type: 'relative-field',
              index: '2'
            }, {
              id: 'month',
              label: 'Months',
              dropdown: 'value',
              type: 'relative-field',
              index: '2'
            }, {
              id: 'quarter',
              label: 'Quarters',
              dropdown: 'value',
              type: 'relative-field',
              index: '2'
            }, {
              id: 'year',
              label: 'Years',
              dropdown: 'value',
              type: 'relative-field',
              index: '2'
            }],
            selectedItems: [conditionOptions.value['2']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 2
              });
            },
            select: "single",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container relative-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              id: 'ago',
              label: 'ago',
              dropdown: 'value',
              type: 'relative-field',
              index: '3'
            }, {
              id: 'ahead',
              label: 'from now',
              dropdown: 'value',
              type: 'relative-field',
              index: '3'
            }],
            selectedItems: [conditionOptions.value['3']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 3
              });
            },
            select: "single",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        })]
      });

    case 'glide_duration':
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      conditionOptions.value['2'] = conditionOptions.value['2'] || '';
      conditionOptions.value['3'] = conditionOptions.value['3'] || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-duration-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            placeholder: "Days",
            min: 0,
            max: 9999,
            step: 1,
            type: "number",
            value: conditionOptions.value[0],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 0
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-duration-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            placeholder: "Hours",
            min: 0,
            max: 23,
            step: 1,
            type: "number",
            value: conditionOptions.value[1],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 1
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-duration-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            placeholder: "Minutes",
            min: 0,
            max: 59,
            step: 1,
            type: "number",
            value: conditionOptions.value[2],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 2
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-duration-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            placeholder: "Seconds",
            min: 0,
            max: 59,
            step: 1,
            type: "number",
            value: conditionOptions.value[3],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 3
              });
            }
          })
        })]
      });

    case 'glide_date_choice':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container glide-date-choice-input",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker["default"], {
          format: "YYYY-MM-DD",
          value: conditionOptions.value,
          onValueChange: function onValueChange(value) {
            return onDatePickerChange({
              value: value,
              type: editor
            });
          }
        })
      });

    case 'trend_field':
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      conditionOptions.value['2'] = conditionOptions.value['2'] || {
        id: ''
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container trend-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              id: 'GE',
              label: 'on or after',
              dropdown: 'value',
              type: 'trend_field',
              index: '0'
            }, {
              id: 'LE',
              label: 'on or before',
              dropdown: 'value',
              type: 'trend_field',
              index: '0'
            }, {
              id: 'GT',
              label: 'after',
              dropdown: 'value',
              type: 'trend_field',
              index: '0'
            }, {
              id: 'LT',
              label: 'before',
              dropdown: 'value',
              type: 'trend_field',
              index: '0'
            }, {
              id: 'EE',
              label: 'on',
              dropdown: 'value',
              type: 'trend_field',
              index: '0'
            }],
            selectedItems: [conditionOptions.value['0']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 0
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container trend-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              id: 'dayofweek',
              label: 'day',
              dropdown: 'value',
              type: 'trend_field',
              index: '1'
            }, {
              id: 'month',
              label: 'month',
              dropdown: 'value',
              type: 'trend_field',
              index: '1'
            }, {
              id: 'quarter',
              label: 'quarter',
              dropdown: 'value',
              type: 'trend_field',
              index: '1'
            }, {
              id: 'year',
              label: 'year',
              dropdown: 'value',
              type: 'trend_field',
              index: '1'
            }, {
              id: 'week',
              label: 'week',
              dropdown: 'value',
              type: 'trend_field',
              index: '1'
            }, {
              id: 'hour',
              label: 'hour',
              dropdown: 'value',
              type: 'trend_field',
              index: '1'
            }],
            selectedItems: [conditionOptions.value['1']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 1
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container trend-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: conditionOptions.valueAdditionalData,
            selectedItems: [conditionOptions.value['2'].id],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 2
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        })]
      });

    case 'glide_date_equivalent':
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-equivalent-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              id: 'day',
              label: 'day',
              dropdown: 'value',
              type: 'glide_date_equivalent',
              index: '0'
            }, {
              id: 'month',
              label: 'month',
              dropdown: 'value',
              type: 'glide_date_equivalent',
              index: '0'
            }, {
              id: 'quarter',
              label: 'quarter',
              dropdown: 'value',
              type: 'glide_date_equivalent',
              index: '0'
            }, {
              id: 'year',
              label: 'year',
              dropdown: 'value',
              type: 'glide_date_equivalent',
              index: '0'
            }, {
              id: 'week',
              label: 'week',
              dropdown: 'value',
              type: 'glide_date_equivalent',
              index: '0'
            }, {
              id: 'hour',
              label: 'hour',
              dropdown: 'value',
              type: 'glide_date_equivalent',
              index: '0'
            }],
            selectedItems: [conditionOptions.value['0']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 0
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "and"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-equivalent-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: conditionOptions.valueAdditionalData,
            selectedItems: [conditionOptions.value['1']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 1
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        })]
      });

    case 'glide_date_comparative':
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '0';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      conditionOptions.value['2'] = conditionOptions.value['2'] || '';
      conditionOptions.value['3'] = conditionOptions.value['3'] || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-comparative-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            min: 0,
            step: 1,
            type: "number",
            value: conditionOptions.value['0'],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 0
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-comparative-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              id: 'day',
              label: 'day',
              dropdown: 'value',
              type: 'glide_date_comparative',
              index: '1'
            }, {
              id: 'month',
              label: 'month',
              dropdown: 'value',
              type: 'glide_date_comparative',
              index: '1'
            }, {
              id: 'quarter',
              label: 'quarter',
              dropdown: 'value',
              type: 'glide_date_comparative',
              index: '1'
            }, {
              id: 'year',
              label: 'year',
              dropdown: 'value',
              type: 'glide_date_comparative',
              index: '1'
            }, {
              id: 'week',
              label: 'week',
              dropdown: 'value',
              type: 'glide_date_comparative',
              index: '1'
            }, {
              id: 'hour',
              label: 'hour',
              dropdown: 'value',
              type: 'glide_date_comparative',
              index: '1'
            }],
            selectedItems: [conditionOptions.value['1']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 1
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-comparative-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              id: 'before',
              label: 'before',
              dropdown: 'value',
              type: 'glide_date_comparative',
              index: '2'
            }, {
              id: 'after',
              label: 'after',
              dropdown: 'value',
              type: 'glide_date_comparative',
              index: '2'
            }, {
              id: 'before or after',
              label: 'before or after',
              dropdown: 'value',
              type: 'glide_date_comparative',
              index: '2'
            }],
            selectedItems: [conditionOptions.value['2']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 2
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-comparative-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: conditionOptions.valueAdditionalData,
            selectedItems: [conditionOptions.value['3']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 3
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        })]
      });

    default:
  }
};

exports.inputValue = inputValue;
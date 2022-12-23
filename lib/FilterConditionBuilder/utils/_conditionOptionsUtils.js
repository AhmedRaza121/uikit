"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONDITION_OPTIONS_UTILS = void 0;

var _index = require("./index");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CONDITION_OPTIONS_UTILS = {
  setConditionOptions: function setConditionOptions(_ref) {
    var value = _ref.value,
        conditionOption = _ref.conditionOption,
        currentConditionID = _ref.currentConditionID,
        globalConditionID = _ref.globalConditionID;
    var conditionsArray = this.state.conditionsArray;
    var properCurrentConditionID = currentConditionID || this.state.currentConditionID;
    var properGlobalConditionID = globalConditionID || this.state.globalConditionID;

    var copyConditionArray = _index.GENERAL_UTILS.clone(conditionsArray);

    var globalConditionInArrInd = copyConditionArray.findIndex(function (cond) {
      return cond.id === properGlobalConditionID;
    });
    var currentConditionInArrInd = copyConditionArray[globalConditionInArrInd].relatedConditions.findIndex(function (cond) {
      return cond.id === properCurrentConditionID;
    });
    var currentConditionInArr;
    var copyConditionOptions;

    if (currentConditionInArrInd > -1) {
      currentConditionInArr = copyConditionArray[globalConditionInArrInd].relatedConditions[currentConditionInArrInd];
      copyConditionOptions = _objectSpread({}, copyConditionArray[globalConditionInArrInd].relatedConditions[currentConditionInArrInd].conditionOptions);
    } else {
      copyConditionArray[globalConditionInArrInd].relatedConditions.forEach(function (cond, parentInd) {
        cond.relatedConditions.forEach(function (cond, childInd) {
          if (cond.id === properCurrentConditionID) {
            currentConditionInArr = copyConditionArray[globalConditionInArrInd].relatedConditions[parentInd].relatedConditions[childInd];
            copyConditionOptions = _objectSpread({}, cond.conditionOptions);
          }
        });
      });
    }

    switch (conditionOption) {
      case 'field':
        currentConditionInArr.conditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsField({
          conditionOptions: copyConditionOptions,
          value: value,
          properCurrentConditionID: properCurrentConditionID,
          properGlobalConditionID: properGlobalConditionID
        });
        break;

      case 'fieldsData':
        currentConditionInArr.conditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsFieldData({
          conditionOptions: copyConditionOptions,
          value: value
        });
        break;

      case 'operator':
        currentConditionInArr.conditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsOperator({
          value: value,
          conditionOptions: copyConditionOptions,
          properCurrentConditionID: properCurrentConditionID,
          properGlobalConditionID: properGlobalConditionID
        });
        break;

      case 'value':
        currentConditionInArr.conditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsValue({
          value: value,
          conditionOptions: copyConditionOptions,
          conditionOption: conditionOption
        });
        break;

      case 'valueAditionalData':
        currentConditionInArr.conditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsValueAdditional({
          value: value,
          conditionOptions: copyConditionOptions
        });
        break;
    }

    this.setState({
      conditionsArray: copyConditionArray
    });
  },
  setConditionOptionsField: function setConditionOptionsField(_ref2) {
    var conditionOptions = _ref2.conditionOptions,
        value = _ref2.value;
    var fieldsData = conditionOptions.fieldsData;
    var currentFieldsData = fieldsData[value.items[value.items.length - 1].index];
    var currentValue = value.items[value.items.length - 1].id;
    var currentValueIndex = conditionOptions.fieldsDropdownData.findIndex(function (data) {
      return data.items[0].index === value.items[value.items.length - 1].index;
    });
    var deletedFieldsData = conditionOptions.fieldsDropdownData.splice(currentValueIndex + 1);
    var operatorsArray = currentFieldsData[currentValue].operators.map(function (operation) {
      return {
        id: operation.operator,
        label: operation.label,
        dropdown: 'operation',
        editor: operation.advancedEditor
      };
    });

    var copyConditionOptions = _objectSpread(_objectSpread({}, conditionOptions), {}, {
      field: value.value,
      fieldItems: value,
      operator: {
        operator: operatorsArray[0].id,
        editor: operatorsArray[0].editor
      },
      value: '',
      operatorsArray: operatorsArray,
      activeFieldsData: _objectSpread({}, currentFieldsData),
      activeField: currentValue
    });

    deletedFieldsData = deletedFieldsData.map(function (data) {
      return data.items[0].index;
    });
    deletedFieldsData.forEach(function (key) {
      return delete conditionOptions.fieldsData[key];
    });
    copyConditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsOperator({
      value: {
        operator: operatorsArray[0].id,
        editor: operatorsArray[0].editor
      },
      conditionOptions: copyConditionOptions
    });
    return copyConditionOptions;
  },
  setConditionOptionsFieldData: function setConditionOptionsFieldData(_ref3) {
    var conditionOptions = _ref3.conditionOptions,
        value = _ref3.value;

    var fieldsDataID = _index.GENERAL_UTILS.generateID();

    var newFieldsDropdownData = _index.DATA_UTILS.getDropdownFieldsItems({
      tableFields: value.result,
      index: fieldsDataID
    });

    if (value.listIndex < conditionOptions.fieldsDropdownData.length - 1) {
      var deletedFieldsData = conditionOptions.fieldsDropdownData.splice(value.listIndex + 1);
      deletedFieldsData = deletedFieldsData.map(function (data) {
        return data.items[0].index;
      });
      deletedFieldsData.forEach(function (key) {
        return delete conditionOptions.fieldsData[key];
      });
    }

    conditionOptions.fieldsDropdownData.push({
      items: newFieldsDropdownData
    });
    conditionOptions.fieldsData[fieldsDataID] = value.result;
    conditionOptions.fieldItems = value.selectedItems;
    return conditionOptions;
  },
  setConditionOptionsOperator: function setConditionOptionsOperator(_ref4) {
    var value = _ref4.value,
        conditionOptions = _ref4.conditionOptions,
        currentConditionID = _ref4.currentConditionID,
        globalConditionID = _ref4.globalConditionID;
    var _conditionOptions = conditionOptions,
        activeField = _conditionOptions.activeField,
        activeFieldsData = _conditionOptions.activeFieldsData;
    var valueAdditionalData = [];
    valueAdditionalData = _index.DATA_UTILS.getValueAdditionalData({
      state: this.state,
      tableFields: activeFieldsData,
      editor: value.editor,
      field: activeField,
      currentID: currentConditionID,
      globalID: globalConditionID
    });
    conditionOptions = _objectSpread(_objectSpread({}, conditionOptions), {}, {
      operator: value,
      value: '',
      valueAdditionalData: valueAdditionalData
    });
    return conditionOptions;
  },
  setConditionOptionsValue: function setConditionOptionsValue(_ref5) {
    var value = _ref5.value,
        conditionOptions = _ref5.conditionOptions,
        conditionOption = _ref5.conditionOption;
    var editor = conditionOptions.operator.editor;

    switch (editor) {
      case 'choice_multiple':
      case 'textarea':
        conditionOptions.value = value;
        return conditionOptions;

      case 'between_field':
      case 'relative_field':
      case 'glide_duration':
      case 'glide_date_equivalent':
      case 'glide_date_comparative':
        if (!conditionOptions.value) conditionOptions.value = {};
        conditionOptions.value[value.index] = value.value;
        return conditionOptions;

      case 'trend_field':
        if (value.index == 1) {
          conditionOptions.valueAdditionalData = _index.DATA_UTILS.getTrendData(value.value);
        }

        if (!conditionOptions.value) {
          conditionOptions.value = {};
        }

        conditionOptions.value[value.index] = value.value;
        return conditionOptions;

      default:
        conditionOptions[conditionOption] = value;
        return conditionOptions;
    }
  },
  setConditionOptionsValueAdditional: function setConditionOptionsValueAdditional(_ref6) {
    var value = _ref6.value,
        conditionOptions = _ref6.conditionOptions;
    conditionOptions.valueAdditionalData = value;
    return conditionOptions;
  }
};
exports.CONDITION_OPTIONS_UTILS = CONDITION_OPTIONS_UTILS;
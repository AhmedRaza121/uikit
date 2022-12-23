"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BUTTONS_EFFECTS = void 0;

var _utils = require("../utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BUTTONS_EFFECTS = {
  clearAll: function clearAll(_ref) {
    var payload = _ref.payload;
    var tableFields = payload.tableFields,
        blockFields = payload.blockFields,
        allowFileds = payload.allowFileds;

    var fieldsDataID = _utils.GENERAL_UTILS.generateID();

    var fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
      tableFields: tableFields.columns,
      index: fieldsDataID,
      blockFields: blockFields,
      allowFileds: allowFileds
    });

    return {
      conditionsArray: [{
        id: _utils.GENERAL_UTILS.generateID(),
        condition: '',
        operator: '',
        relatedConditions: [{
          id: _utils.GENERAL_UTILS.generateID() + 1,
          condition: '',
          operator: '',
          conditionOptions: {
            operator: {
              operator: '',
              editior: ''
            },
            field: '',
            value: '',
            fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
            fieldsDropdownData: [{
              items: fieldsDropdownData
            }]
          },
          relatedConditions: []
        }]
      }],
      isSave: false,
      breadcrumbsItems: [{
        label: 'All',
        conditionId: 'all'
      }],
      query: ''
    };
  },
  deleteCondition: function deleteCondition(_ref2) {
    var payload = _ref2.payload;
    var conditionsArray = payload.conditionsArray,
        globalConditionID = payload.globalConditionID,
        currentConditionID = payload.currentConditionID,
        tableFields = payload.tableFields;
    var globalConditionIndexInArr = conditionsArray.findIndex(function (cond) {
      return cond.id === globalConditionID;
    });
    var currentConditionIndexInArr = conditionsArray[globalConditionIndexInArr].relatedConditions.findIndex(function (cond) {
      return cond.id === currentConditionID;
    });
    var path = [];
    var newConditionsArray;
    var indexToDelete;

    if (currentConditionIndexInArr > -1) {
      path = conditionsArray[globalConditionIndexInArr].relatedConditions;
      indexToDelete = currentConditionIndexInArr;

      if (conditionsArray[globalConditionIndexInArr].relatedConditions.length === 1) {
        path = conditionsArray;
        indexToDelete = globalConditionIndexInArr;
      } else if (currentConditionIndexInArr === 0) {
        path[1].operator = '';
        conditionsArray[globalConditionIndexInArr].relatedConditions[1].operator = path[1].operator;
      }
    } else {
      conditionsArray[globalConditionIndexInArr].relatedConditions.forEach(function (parentCond, pIndex) {
        parentCond.relatedConditions.forEach(function (childCond, chIndex) {
          if (childCond.id === currentConditionID) {
            path = conditionsArray[globalConditionIndexInArr].relatedConditions[pIndex].relatedConditions;
            indexToDelete = chIndex;
          }
        });
      });
    }

    if (conditionsArray.length === 1 && path === conditionsArray) {
      var fieldsDataID = _utils.GENERAL_UTILS.generateID();

      var fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
        tableFields: tableFields.columns,
        index: fieldsDataID
      });

      newConditionsArray = [{
        id: _utils.GENERAL_UTILS.generateID(),
        condition: '',
        operator: '',
        relatedConditions: [{
          id: _utils.GENERAL_UTILS.generateID() + 1,
          condition: '',
          operator: '',
          conditionOptions: {
            operator: {
              operator: '',
              editior: ''
            },
            field: '',
            value: '',
            fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
            fieldsDropdownData: [{
              items: fieldsDropdownData
            }]
          },
          relatedConditions: []
        }]
      }];
      return {
        conditionsArray: newConditionsArray
      };
    }

    path.splice(indexToDelete, 1);
    conditionsArray.relatedConditions = path;
    newConditionsArray = conditionsArray;
    return {
      conditionsArray: newConditionsArray
    };
  },
  applyQuery: function applyQuery(_ref3) {
    var payload = _ref3.payload;
    var type = payload.type,
        conditionsArray = payload.conditionsArray,
        onSendQuery = payload.onSendQuery,
        isSave = payload.isSave;
    var newState;

    switch (type) {
      case 'run':
      case 'save':
        var copyConditionArray = _utils.GENERAL_UTILS.clone(conditionsArray);

        copyConditionArray = copyConditionArray.map(function (globalCond) {
          globalCond.relatedConditions.map(function (parentCond) {
            parentCond.failed = false;
            parentCond.relatedConditions.map(function (childCond) {
              childCond.failed = false;
              return childCond;
            });
            return parentCond;
          });
          return globalCond;
        });
        newState = _utils.QUERY_UTILS.generateQuery({
          payload: {
            conditionsArray: copyConditionArray,
            onSendQuery: onSendQuery,
            isSave: isSave,
            operation: type
          }
        });
        return _objectSpread(_objectSpread({}, newState), {}, {
          conditionsArray: copyConditionArray
        });
    }
  },
  addNewOperator: function addNewOperator(_ref4) {
    var payload = _ref4.payload;
    var conditionsArray = payload.conditionsArray,
        tableFields = payload.tableFields,
        blockFields = payload.blockFields,
        allowFields = payload.allowFields,
        value = payload.value,
        currentConditionID = payload.currentConditionID,
        globalConditionID = payload.globalConditionID;
    var globalConditionIndexInArr = conditionsArray.findIndex(function (cond) {
      return cond.id === globalConditionID;
    });

    var fieldsDataID = _utils.GENERAL_UTILS.generateID();

    var fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
      tableFields: tableFields.columns,
      index: fieldsDataID,
      blockFields: blockFields,
      allowFields: allowFields
    });

    switch (value) {
      case '^':
        conditionsArray[globalConditionIndexInArr].relatedConditions.push({
          id: _utils.GENERAL_UTILS.generateID(),
          condition: '',
          operator: value,
          conditionOptions: {
            operator: {
              operator: '',
              editior: ''
            },
            field: '',
            value: '',
            fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
            fieldsDropdownData: [{
              items: fieldsDropdownData
            }]
          },
          relatedConditions: []
        });
        break;

      case '^OR':
        var currentConditionIndexInArr = conditionsArray[globalConditionIndexInArr].relatedConditions.findIndex(function (cond) {
          return cond.id === currentConditionID;
        });
        var parrentConditionOptions = conditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].conditionOptions;
        var activeField = parrentConditionOptions.activeField,
            activeFieldsData = parrentConditionOptions.activeFieldsData,
            field = parrentConditionOptions.field,
            fieldItems = parrentConditionOptions.fieldItems,
            operator = parrentConditionOptions.operator,
            operatorsArray = parrentConditionOptions.operatorsArray,
            fieldsData = parrentConditionOptions.fieldsData,
            valueAdditionalData = parrentConditionOptions.valueAdditionalData;
        conditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].relatedConditions.push({
          id: _utils.GENERAL_UTILS.generateID(),
          condition: '',
          operator: value,
          conditionOptions: {
            operator: operator,
            field: field,
            value: '',
            activeField: activeField,
            operatorsArray: operatorsArray,
            activeFieldsData: activeFieldsData,
            fieldItems: fieldItems,
            fieldsData: fieldsData,
            fieldsDropdownData: parrentConditionOptions.fieldsDropdownData,
            valueAdditionalData: valueAdditionalData
          }
        });
        break;

      case '^NQ':
        conditionsArray.push({
          id: _utils.GENERAL_UTILS.generateID(),
          condition: '',
          operator: value,
          relatedConditions: [{
            id: _utils.GENERAL_UTILS.generateID() + 1,
            condition: '',
            operator: '',
            conditionOptions: {
              operator: {
                operator: '',
                editior: ''
              },
              field: '',
              value: '',
              fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
              fieldsDropdownData: [{
                items: fieldsDropdownData
              }]
            },
            relatedConditions: []
          }]
        });
    }

    return {
      conditionsArray: conditionsArray
    };
  },
  toogleFilter: function toogleFilter(_ref5) {
    var payload = _ref5.payload;
    var isFilterOpened = payload.isFilterOpened;
    return {
      isFilterOpened: !isFilterOpened
    };
  },
  toogleSave: function toogleSave(_ref6) {
    var payload = _ref6.payload;
    var isSave = payload.isSave;
    var newState = BUTTONS_EFFECTS.applyQuery({
      payload: _objectSpread(_objectSpread({}, payload), {}, {
        type: 'save'
      })
    });
    return _objectSpread(_objectSpread({}, newState), {}, {
      isSave: !isSave
    });
  },
  handleSaveClicked: function handleSaveClicked(_ref7) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref7.payload;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  breadcrumbItemClicked: function breadcrumbItemClicked(_ref8) {
    var payload = _ref8.payload;
    var breadcrumbsItems = payload.breadcrumbsItems,
        data = payload.data,
        operation = payload.operation,
        conditionsArray = payload.conditionsArray,
        tableFields = payload.tableFields;
    var itemIndex = breadcrumbsItems.findIndex(function (breadcrumb) {
      return breadcrumb.conditionId === data.conditionId;
    });
    var newState;

    switch (operation) {
      case 'remove-next':
        breadcrumbsItems.splice(itemIndex, 1);
        newState = BUTTONS_EFFECTS.deleteCondition({
          payload: {
            tableFields: tableFields,
            conditionsArray: conditionsArray,
            currentConditionID: data.conditionId,
            globalConditionID: data.globalConditionId
          }
        });
        return _objectSpread(_objectSpread({}, newState), {}, {
          breadcrumbsItems: breadcrumbsItems
        });

      case 'remove-subsequent':
        var deletedItems = itemIndex === 0 ? breadcrumbsItems.splice(1) : breadcrumbsItems.splice(itemIndex + 1);
        deletedItems.forEach(function (item) {
          return newState = BUTTONS_EFFECTS.deleteCondition({
            payload: {
              currentConditionID: item.conditionId,
              globalConditionID: item.globalConditionId,
              tableFields: tableFields,
              conditionsArray: conditionsArray
            }
          });
        });
        return _objectSpread(_objectSpread({}, newState), {}, {
          breadcrumbsItems: breadcrumbsItems
        });
    }
  },
  clickBtn: function clickBtn(_ref9) {
    var action = _ref9.action,
        payload = _ref9.payload;
    var newState;
    var _this$state = this.state,
        conditionsArray = _this$state.conditionsArray,
        blockFields = _this$state.blockFields,
        allowFields = _this$state.allowFields,
        tableFields = _this$state.tableFields,
        isFilterOpened = _this$state.isFilterOpened,
        isSave = _this$state.isSave,
        breadcrumbsItems = _this$state.breadcrumbsItems;
    var onSendQuery = this.props.onSendQuery;

    switch (action) {
      case 'clearAll':
        newState = BUTTONS_EFFECTS.clearAll({
          payload: {
            blockFields: blockFields,
            allowFields: allowFields,
            tableFields: tableFields
          }
        });
        break;

      case 'deleteCondition':
        newState = BUTTONS_EFFECTS.deleteCondition({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            conditionsArray: conditionsArray,
            blockFields: blockFields,
            allowFields: allowFields,
            tableFields: tableFields
          })
        });
        break;

      case 'addNewOperator':
        newState = BUTTONS_EFFECTS.addNewOperator({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            tableFields: tableFields,
            conditionsArray: conditionsArray,
            blockFields: blockFields,
            allowFields: allowFields
          })
        });
        break;

      case 'applyQuery':
        newState = BUTTONS_EFFECTS.applyQuery({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            conditionsArray: conditionsArray,
            isSave: isSave,
            onSendQuery: onSendQuery
          })
        });
        break;

      case 'filterToogle':
        newState = BUTTONS_EFFECTS.toogleFilter({
          payload: {
            isFilterOpened: isFilterOpened
          }
        });
        break;

      case 'toogleSave':
        newState = BUTTONS_EFFECTS.toogleSave({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            conditionsArray: conditionsArray,
            onSendQuery: onSendQuery
          })
        });
        break;

      case 'save':
        break;

      case 'breadcrumbs':
        newState = BUTTONS_EFFECTS.breadcrumbItemClicked({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            breadcrumbsItems: breadcrumbsItems,
            conditionsArray: conditionsArray,
            tableFields: tableFields
          })
        });
        break;
    }

    this.setState(newState);
  }
};
exports.BUTTONS_EFFECTS = BUTTONS_EFFECTS;
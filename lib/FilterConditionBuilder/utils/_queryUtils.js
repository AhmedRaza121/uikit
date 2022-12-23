"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_UTILS = void 0;

var _index = require("./index");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncIterator(iterable) { var method, async, sync, retry = 2; if (typeof Symbol !== "undefined") { async = Symbol.asyncIterator; sync = Symbol.iterator; } while (retry--) { if (async && (method = iterable[async]) != null) { return method.call(iterable); } if (sync && (method = iterable[sync]) != null) { return new AsyncFromSyncIterator(method.call(iterable)); } async = "@@asyncIterator"; sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s; this.n = s.next; }; AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; if (ret === undefined) { return Promise.resolve({ value: value, done: true }); } return AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; if (thr === undefined) return Promise.reject(value); return AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }; function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) { return Promise.reject(new TypeError(r + " is not an object.")); } var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return new AsyncFromSyncIterator(s); }

var QUERY_UTILS = {
  parseConditionValue: function parseConditionValue(_ref) {
    var condition = _ref.condition,
        operators = _ref.operators,
        tableFields = _ref.tableFields,
        globalID = _ref.globalID,
        currentID = _ref.currentID;

    var operator = _index.GENERAL_UTILS.findOperator(condition, operators);

    var field = '';
    var value = '';
    var editor = '';
    var valueAdditionalData = [];
    var fieldItems = [];
    var fieldsDropdownData = [];

    var fieldsDataID = _index.GENERAL_UTILS.generateID();

    if (!operator) {
      field = condition;
      operator = '';
    } else {
      field = condition.slice(0, condition.indexOf(operator));
      value = condition.slice(field.length + operator.length);
      editor = tableFields[field].operators.find(function (op) {
        return op.operator === operator;
      }).advancedEditor;
      valueAdditionalData = _index.DATA_UTILS.getValueAdditionalData({
        tableFields: tableFields,
        editor: editor,
        field: field,
        globalID: globalID,
        currentID: currentID
      });
      value = _index.DATA_UTILS.getValue({
        value: value,
        editor: editor
      });
    }

    var fields = field.split('.');
    fieldsDropdownData = _index.DATA_UTILS.getDropdownFieldsItems({
      tableFields: tableFields,
      index: fieldsDataID
    });
    fieldItems = fields.map(function (fieldName) {
      return _objectSpread(_objectSpread({}, fieldsDropdownData.find(function (data) {
        return data.id === fieldName;
      })), {}, {
        listIndex: 0,
        dropdownClick: false
      });
    });
    fieldItems = {
      label: tableFields[field].label,
      value: field,
      items: fieldItems
    };
    var operatorsArray = tableFields[field].operators.map(function (operation) {
      return {
        id: operation.operator,
        label: operation.label,
        dropdown: 'operation'
      };
    });

    if (editor === 'trend_field') {
      valueAdditionalData = _index.DATA_UTILS.getTrendData(value['1']);
    }

    return {
      field: field,
      operator: {
        operator: operator,
        editor: editor
      },
      value: value,
      operatorsArray: operatorsArray,
      valueAdditionalData: valueAdditionalData,
      fieldItems: fieldItems,
      fieldsData: _defineProperty({}, fieldsDataID, tableFields),
      fieldsDropdownData: [{
        items: fieldsDropdownData
      }],
      activeFieldsData: tableFields,
      activeField: fieldItems.items[fieldItems.items.length - 1].id
    };
  },
  parseConditionValueWithRef: function () {
    var _parseConditionValueWithRef = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
      var condition, operators, tableFields, globalID, currentID, operator, lastTableFields, field, value, editor, valueAdditionalData, fieldItems, fieldsDropdownData, fieldsDataID, referenceField, fields, isReferenceField, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ret;

      return regeneratorRuntime.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              condition = _ref2.condition, operators = _ref2.operators, tableFields = _ref2.tableFields, globalID = _ref2.globalID, currentID = _ref2.currentID;
              operator = _index.GENERAL_UTILS.findOperator(condition, operators);
              field = '';
              value = '';
              editor = '';
              valueAdditionalData = [];
              fieldItems = [];
              fieldsDropdownData = [];
              fieldsDataID = _index.GENERAL_UTILS.generateID();
              referenceField = condition.slice(0, condition.indexOf(operator)).split('.');
              fields = _index.GENERAL_UTILS.clone(referenceField);
              isReferenceField = referenceField.length > 1;

              if (!isReferenceField) {
                _context3.next = 17;
                break;
              }

              return _context3.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var dropdownFields, fieldsData, nextData, queryParams, lastField, allFields, i, _loop, dataForFieldItems, _iterator2, _step2, key, operatorsArray;

                return regeneratorRuntime.wrap(function _callee$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        dropdownFields = [{
                          items: _index.DATA_UTILS.getDropdownFieldsItems({
                            tableFields: tableFields,
                            index: fieldsDataID,
                            listIndex: 0
                          })
                        }];
                        fieldsData = _defineProperty({}, fieldsDataID, tableFields);
                        nextData = tableFields[referenceField[0]];
                        referenceField = referenceField.reverse();
                        referenceField.pop();
                        referenceField = referenceField.reverse();
                        queryParams = {
                          sysparm_operators: true,
                          sysparm_get_extended_tables: true,
                          sysparm_keywords: true
                        };
                        lastField = '';
                        allFields = condition.slice(0, condition.indexOf(operator));
                        value = condition.slice(allFields.length + operator.length);
                        i = 1;
                        _iteratorAbruptCompletion = false;
                        _didIteratorError = false;
                        _context2.prev = 13;
                        _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                          var key;
                          return regeneratorRuntime.wrap(function _loop$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  key = _step.value;
                                  fieldsDataID = _index.GENERAL_UTILS.generateID();
                                  _context.next = 4;
                                  return _index.REQUEST_UTILS.fetchTableData({
                                    table: nextData.reference,
                                    queryParams: queryParams
                                  }).then(function (res) {
                                    fieldsData = _objectSpread(_objectSpread({}, fieldsData), {}, _defineProperty({}, fieldsDataID, res.columns));
                                    nextData = res.columns[key];
                                    lastTableFields = res.columns;
                                    dropdownFields.push({
                                      items: _index.DATA_UTILS.getDropdownFieldsItems({
                                        tableFields: Object.values(res.columns),
                                        index: fieldsDataID,
                                        listIndex: i
                                      })
                                    });
                                    i++;
                                  });

                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _loop);
                        });
                        _iterator = _asyncIterator(referenceField);

                      case 16:
                        _context2.next = 18;
                        return _iterator.next();

                      case 18:
                        if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
                          _context2.next = 23;
                          break;
                        }

                        return _context2.delegateYield(_loop(), "t0", 20);

                      case 20:
                        _iteratorAbruptCompletion = false;
                        _context2.next = 16;
                        break;

                      case 23:
                        _context2.next = 29;
                        break;

                      case 25:
                        _context2.prev = 25;
                        _context2.t1 = _context2["catch"](13);
                        _didIteratorError = true;
                        _iteratorError = _context2.t1;

                      case 29:
                        _context2.prev = 29;
                        _context2.prev = 30;

                        if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                          _context2.next = 34;
                          break;
                        }

                        _context2.next = 34;
                        return _iterator["return"]();

                      case 34:
                        _context2.prev = 34;

                        if (!_didIteratorError) {
                          _context2.next = 37;
                          break;
                        }

                        throw _iteratorError;

                      case 37:
                        return _context2.finish(34);

                      case 38:
                        return _context2.finish(29);

                      case 39:
                        fieldsDropdownData = dropdownFields;
                        dataForFieldItems = fieldsDropdownData.map(function (field) {
                          return field.items;
                        });
                        i = 0;
                        _iterator2 = _createForOfIteratorHelper(dataForFieldItems);

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            key = _step2.value;
                            fieldItems = [].concat(_toConsumableArray(fieldItems), [_objectSpread(_objectSpread({}, key.find(function (data) {
                              return fields[i] === data.id;
                            })), {}, {
                              dropdownClicked: i < dataForFieldItems.length - 1
                            })]);
                            i++;
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }

                        field = fieldItems.map(function (field) {
                          return field.id;
                        }).join('.');
                        lastField = field.split('.');
                        lastField = lastField[lastField.length - 1];
                        editor = lastTableFields[lastField].operators.find(function (op) {
                          return op.operator === operator;
                        }).advancedEditor;
                        operatorsArray = lastTableFields[lastField].operators.map(function (operation) {
                          return {
                            id: operation.operator,
                            label: operation.label,
                            dropdown: 'operation'
                          };
                        });
                        value = _index.DATA_UTILS.getValue({
                          value: value,
                          editor: editor
                        });
                        fieldItems = {
                          label: fieldItems.map(function (field) {
                            return field.label;
                          }).join(' . '),
                          value: fieldItems.map(function (field) {
                            return field.id;
                          }).join('.'),
                          items: fieldItems
                        };
                        valueAdditionalData = editor === 'trend_field' ? _index.DATA_UTILS.getTrendData(value['1']) : _index.DATA_UTILS.getValueAdditionalData({
                          tableFields: lastTableFields,
                          editor: editor,
                          field: lastField,
                          globalID: globalID,
                          currentID: currentID
                        });
                        return _context2.abrupt("return", {
                          v: {
                            field: field,
                            operator: {
                              operator: operator,
                              editor: editor
                            },
                            value: value,
                            operatorsArray: operatorsArray,
                            valueAdditionalData: valueAdditionalData,
                            fieldItems: fieldItems,
                            fieldsData: fieldsData,
                            fieldsDropdownData: fieldsDropdownData,
                            activeFieldsData: lastTableFields,
                            activeField: fieldItems.items[fieldItems.items.length - 1].id
                          }
                        });

                      case 53:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee, null, [[13, 25, 29, 39], [30,, 34, 38]]);
              })(), "t0", 14);

            case 14:
              _ret = _context3.t0;

              if (!(_typeof(_ret) === "object")) {
                _context3.next = 17;
                break;
              }

              return _context3.abrupt("return", _ret.v);

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2);
    }));

    function parseConditionValueWithRef(_x) {
      return _parseConditionValueWithRef.apply(this, arguments);
    }

    return parseConditionValueWithRef;
  }(),
  generateCurrentConditionQuery: function generateCurrentConditionQuery(_ref3) {
    var payload = _ref3.payload;
    var conditionData = payload.conditionData,
        operation = payload.operation,
        breadcrumbItem = payload.breadcrumbItem;
    var _conditionData$condit = conditionData.conditionOptions,
        field = _conditionData$condit.field,
        _conditionData$condit2 = _conditionData$condit.operator,
        operator = _conditionData$condit2.operator,
        editor = _conditionData$condit2.editor,
        value = _conditionData$condit.value,
        fieldItems = _conditionData$condit.fieldItems,
        operatorsArray = _conditionData$condit.operatorsArray,
        valueAdditionalData = _conditionData$condit.valueAdditionalData;
    var conditionQuery = '';

    if (field && operator && operation === 'run') {
      var valueLabel;

      switch (editor) {
        case 'between_field':
          conditionQuery = value['0'] && value['1'] ? "".concat(field).concat(operator, "javascript:gs.dateGenerate('").concat(value['0'], "','00:00:00')@javascript:gs.dateGenerate('").concat(value['1'], "','23:59:59')") : '';
          conditionQuery ? valueLabel = "".concat(value['0'], " and ").concat(value['1']) : '';
          break;

        case 'relative_field':
          var currentOperator = value['0'] === 'before' ? 'RELATIVELT' : 'RELATIVEGT';
          value['1'] = value['1'] || '0';
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(currentOperator, "@").concat(value['2'], "@").concat(value['3'], "@").concat(value['1']) : '';
          conditionQuery ? valueLabel = "".concat(value['0'], " ").concat(value['1'], " ").concat(value['2'], " ").concat(value['3']) : '';
          break;

        case 'glide_duration':
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(operator, "javascript:gs.getDurationDate('").concat(value['0'], " ").concat(value['1'], ":").concat(value['2'], ":").concat(value['3'], "')") : '';
          conditionQuery ? valueLabel = "".concat(value['0'], " ").concat(value['1'], ":").concat(value['2'], ":").concat(value['3']) : '';
          break;

        case 'glide_date_choice':
          conditionQuery = value ? "".concat(field).concat(operator).concat(value, "@javascript:gs.dateGenerate('").concat(value, "','start')@javascript:gs.dateGenerate('").concat(value, "','end')") : '';
          conditionQuery ? valueLabel = value : '';
          break;

        case 'trend_field':
          conditionQuery = value['0'] && value['1'] && value['2'].label && value['2'].id ? "".concat(field).concat(operator).concat(value['2'].label, "@javascript:gs.datePart('").concat(value['1'], "','").concat(value['2'].id, "','").concat(value['0'], "')") : '';
          conditionQuery ? valueLabel = "@javascript:gs.datePart('".concat(value['1'], "','").concat(value['2'].id, "','").concat(value['0'], "')") : '';
          break;

        case 'glide_date_equivalent':
          conditionQuery = value['0'] && value['1'] ? "".concat(field).concat(operator).concat(value['1'], "@").concat(value['0']) : '';
          conditionQuery ? valueLabel = "".concat(value['1'], " ").concat(value['0']) : '';
          break;

        case 'glide_date_comparative':
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(operator).concat(value['3'], "@").concat(value['1'], "@").concat(value['2'], "@").concat(value['0']) : '';
          conditionQuery ? valueLabel = "".concat(value['0'], " ").concat(value['1'], " ").concat(value['2'], " ").concat(value['3']) : '';
          break;

        case 'none':
          conditionQuery = "".concat(field).concat(operator);
          valueLabel = '';
          break;

        default:
          var str = value.trim().split(' ').filter(Boolean).join(' ');
          conditionQuery = str ? "".concat(field).concat(operator).concat(str) : '';
          conditionQuery ? valueLabel = str : '';
      }

      if (conditionQuery) {
        var conditionOperatorLabel = editor === 'none' || !operator.match(/\W/) ? operatorsArray.find(function (op) {
          return op.id === operator;
        }).label : operator;

        if (fieldItems.items[fieldItems.items.length - 1].reference === 'true' && valueAdditionalData.length) {
          valueLabel = valueAdditionalData.find(function (val) {
            return val.id === valueLabel;
          }).label;
        }

        breadcrumbItem.label = "".concat(breadcrumbItem.label).concat(conditionData.operator === '^OR' ? ' .or. ' : '', " ").concat(fieldItems.label, " ").concat(conditionOperatorLabel, " ").concat(valueLabel);
      }
    } else if (field && operation === 'save') {
      switch (editor) {
        case 'between_field':
          conditionQuery = value['0'] && value['1'] ? "".concat(field).concat(operator, "javascript:gs.dateGenerate('").concat(value['0'], "','00:00:00')@javascript:gs.dateGenerate('").concat(value['1'], "','23:59:59')") : '';
          break;

        case 'relative_field':
          var _currentOperator = value['0'] === 'before' ? 'RELATIVELT' : 'RELATIVEGT';

          value['1'] = value['1'] || '0';
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(_currentOperator, "@").concat(value['2'], "@").concat(value['3'], "@").concat(value['1']) : '';
          break;

        case 'glide_duration':
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(operator, "javascript:gs.getDurationDate('").concat(value['0'], " ").concat(value['1'], ":").concat(value['2'], ":").concat(value['3'], "')") : '';
          break;

        case 'glide_date_choice':
          conditionQuery = value ? "".concat(field).concat(operator).concat(value, "@javascript:gs.dateGenerate('").concat(value, "','start')@javascript:gs.dateGenerate('").concat(value, "','end')") : '';
          break;

        case 'trend_field':
          conditionQuery = value['0'] && value['1'] && value['2'].label && value['2'].id ? "".concat(field).concat(operator).concat(value['2'].label, "@javascript:gs.datePart('").concat(value['1'], "','").concat(value['2'].id, "','").concat(value['0'], "')") : '';
          break;

        case 'glide_date_equivalent':
          conditionQuery = value['0'] && value['1'] ? "".concat(field).concat(operator).concat(value['1'], "@").concat(value['0']) : '';
          break;

        case 'glide_date_comparative':
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(operator).concat(value['3'], "@").concat(value['1'], "@").concat(value['2'], "@").concat(value['0']) : '';
          break;

        case 'none':
          conditionQuery = "".concat(field).concat(operator);
          break;

        default:
          conditionQuery = "".concat(field).concat(operator).concat(value);
      }

      conditionQuery = conditionQuery || "".concat(field).concat(operator);
    }

    return {
      conditionQuery: conditionQuery || false,
      breadcrumbItem: breadcrumbItem
    };
  },
  generateQuery: function generateQuery(_ref4) {
    var payload = _ref4.payload;
    var conditionsArray = payload.conditionsArray,
        isSave = payload.isSave,
        onSendQuery = payload.onSendQuery,
        operation = payload.operation;
    var valueToReturn;
    var resultQuery = '';
    var error = false;
    var breadcrumbsItems = [{
      label: 'All',
      conditionId: 'all'
    }];
    var isNQ = false;
    conditionsArray.forEach(function (globalCond) {
      globalCond.relatedConditions.forEach(function (parentCond, index) {
        var breadcrumbItem = {
          label: "".concat(globalCond.operator && index === 0 ? 'or' : ''),
          conditionId: parentCond.id,
          globalConditionId: globalCond.id
        };
        var generatedCondition = QUERY_UTILS.generateCurrentConditionQuery({
          payload: {
            conditionData: parentCond,
            operation: operation,
            breadcrumbItem: breadcrumbItem
          }
        });
        isNQ = generatedCondition.conditionQuery;

        if (isNQ && index < 1) {
          resultQuery += globalCond.operator;
          isNQ = false;
        }

        var curCondition = generatedCondition.conditionQuery;

        if (curCondition) {
          breadcrumbItem = generatedCondition.breadcrumbItem;
          resultQuery += "".concat(parentCond.operator).concat(curCondition);
        } else if (operation === 'run' && !curCondition && !parentCond.conditionOptions.field && conditionsArray.length === 1 && globalCond.relatedConditions.length === 1 && !parentCond.relatedConditions.length) {
          resultQuery = '';
        } else {
          error = true;
        }

        parentCond.relatedConditions.forEach(function (childCond) {
          var generatedCondition = QUERY_UTILS.generateCurrentConditionQuery({
            payload: {
              conditionData: childCond,
              operation: operation,
              breadcrumbItem: breadcrumbItem
            }
          });
          var curCondition = generatedCondition.conditionQuery;

          if (curCondition) {
            breadcrumbItem = generatedCondition.breadcrumbItem;
            resultQuery += "".concat(childCond.operator).concat(curCondition);
          } else {
            error = true;
          }
        });

        if (generatedCondition.conditionQuery) {
          breadcrumbItem.label = breadcrumbItem.label.trim();
          breadcrumbsItems.push(breadcrumbItem);
        }
      }); // if (error) return null;

      onSendQuery(resultQuery);

      switch (operation) {
        case 'run':
          var isBreadcrumbFalse = !!breadcrumbsItems.find(function (item) {
            return !item.label;
          });
          if (!isBreadcrumbFalse) valueToReturn = {
            breadcrumbsItems: breadcrumbsItems
          };
          break;

        case 'save':
          valueToReturn = {
            queryToSave: resultQuery,
            isSave: !isSave
          };
          break;
      }
    });
    return valueToReturn;
  }
};
exports.QUERY_UTILS = QUERY_UTILS;
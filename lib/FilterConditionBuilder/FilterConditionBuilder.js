"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _FilterConditionItem = _interopRequireDefault(require("./Components/FilterConditionItem/FilterConditionItem"));

var _FilterBreadcrumbs = _interopRequireDefault(require("./Components/FilterBreadcrumbs/FilterBreadcrumbs"));

var _FilterTemplates = _interopRequireDefault(require("./Components/FilterTemplates/FilterTemplates"));

var _FilterSaver = _interopRequireDefault(require("./Components/FilterSaver/FilterSaver"));

var _effects = require("./effects");

var _Badge = _interopRequireDefault(require("../Badge/Badge"));

var _index = require("../index");

var _utils2 = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FilterCondition = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterCondition, _React$Component);

  var _super = _createSuper(FilterCondition);

  function FilterCondition(props) {
    var _this;

    _classCallCheck(this, FilterCondition);

    _this = _super.call(this, props);

    _this.fetchTableDataSuccessed = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref) {
        var result, properties, fieldsDataID, blockFields, allowFileds, query, fieldsDropdownData, conditionsArray, position, copyQuery, operatorPosition, operators;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = _ref.result, properties = _ref.properties;
                fieldsDataID = _utils.GENERAL_UTILS.generateID();
                blockFields = properties.blockFields, allowFileds = properties.allowFileds;
                query = _this.state.query;
                fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
                  tableFields: result.columns,
                  index: fieldsDataID,
                  blockFields: blockFields,
                  allowFileds: allowFileds
                });
                conditionsArray = [{
                  id: _utils.GENERAL_UTILS.generateID(),
                  condition: "",
                  operator: "",
                  relatedConditions: [{
                    id: _utils.GENERAL_UTILS.generateID() + 1,
                    condition: "",
                    operator: "",
                    conditionOptions: {
                      operator: {
                        operator: "",
                        editior: ""
                      },
                      field: "",
                      value: "",
                      fieldsData: _defineProperty({}, fieldsDataID, result.columns),
                      fieldsDropdownData: [{
                        items: fieldsDropdownData
                      }]
                    },
                    relatedConditions: []
                  }]
                }];

                if (!query) {
                  _context4.next = 25;
                  break;
                }

                position = 0;
                copyQuery = query;

                if (copyQuery.indexOf('^EQ') > -1) {
                  copyQuery = copyQuery.slice(0, copyQuery.indexOf('^EQ'));
                }

              case 10:
                if (!true) {
                  _context4.next = 20;
                  break;
                }

                operatorPosition = copyQuery.indexOf('^NQ', position);

                if (!(operatorPosition === -1)) {
                  _context4.next = 15;
                  break;
                }

                conditionsArray[conditionsArray.length - 1].condition = copyQuery.slice(position);
                return _context4.abrupt("break", 20);

              case 15:
                conditionsArray[conditionsArray.length - 1].condition = copyQuery.slice(position, operatorPosition);
                conditionsArray.push({
                  id: _utils.GENERAL_UTILS.generateID() + operatorPosition,
                  condition: '',
                  operator: '^NQ',
                  relatedConditions: [{
                    id: _utils.GENERAL_UTILS.generateID() + operatorPosition + 1,
                    condition: '',
                    operator: '',
                    conditionOptions: {
                      operator: {
                        operator: '',
                        editior: ''
                      },
                      field: '',
                      value: '',
                      fieldsData: _defineProperty({}, fieldsDataID, result.columns),
                      fieldsDropdownData: [{
                        items: fieldsDropdownData
                      }]
                    },
                    relatedConditions: []
                  }]
                });
                position = operatorPosition + 3;
                _context4.next = 10;
                break;

              case 20:
                conditionsArray.map(function (globalCondition) {
                  var position = 0;
                  var lastOperator;

                  while (true) {
                    var _operatorPosition = globalCondition.condition.indexOf('^', position);

                    if (_operatorPosition === -1) {
                      switch (lastOperator) {
                        case '^OR':
                          globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions[globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.length - 1].condition = globalCondition.condition.slice(position);
                          break;

                        default:
                          globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].condition = globalCondition.condition.slice(position);
                      }

                      break;
                    }

                    switch (lastOperator) {
                      case '^OR':
                        globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions[globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.length - 1].condition = globalCondition.condition.slice(position, _operatorPosition);
                        break;

                      default:
                        globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].condition = globalCondition.condition.slice(position, _operatorPosition);
                    }

                    if (_operatorPosition === copyQuery.indexOf('^OR', position)) {
                      globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.push({
                        id: _utils.GENERAL_UTILS.generateID() + _operatorPosition,
                        condition: '',
                        operator: '^OR'
                      });
                      position = _operatorPosition + 3;
                      lastOperator = '^OR';
                    } else {
                      globalCondition.relatedConditions.push({
                        id: _utils.GENERAL_UTILS.generateID() + _operatorPosition,
                        condition: '',
                        operator: '^',
                        relatedConditions: []
                      });
                      position = _operatorPosition + 1;
                      lastOperator = '^';
                    }
                  }
                });
                operators = _utils.DATA_UTILS.getOperators({
                  tableFields: result.columns
                });
                _context4.next = 24;
                return Promise.all(conditionsArray.map( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(globalCond) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return Promise.all(globalCond.relatedConditions.map( /*#__PURE__*/function () {
                              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parentCond) {
                                var condition, params, conditionOptions;
                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                  while (1) {
                                    switch (_context2.prev = _context2.next) {
                                      case 0:
                                        condition = parentCond.condition.replace("OR", "");
                                        params = {
                                          condition: condition,
                                          operators: operators,
                                          tableFields: result.columns,
                                          globalID: globalCond.id,
                                          currentID: parentCond.id
                                        };

                                        if (!(condition.slice(0, condition.indexOf(_utils.GENERAL_UTILS.findOperator(condition, operators))).split(".").length > 1)) {
                                          _context2.next = 8;
                                          break;
                                        }

                                        _context2.next = 5;
                                        return _utils.QUERY_UTILS.parseConditionValueWithRef(params);

                                      case 5:
                                        _context2.t0 = _context2.sent;
                                        _context2.next = 9;
                                        break;

                                      case 8:
                                        _context2.t0 = _utils.QUERY_UTILS.parseConditionValue(params);

                                      case 9:
                                        conditionOptions = _context2.t0;
                                        parentCond = _objectSpread(_objectSpread({}, parentCond), {}, {
                                          conditionOptions: conditionOptions
                                        });
                                        _context2.next = 13;
                                        return Promise.all(parentCond.relatedConditions.map( /*#__PURE__*/function () {
                                          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(childCond) {
                                            var params, conditionOptions;
                                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                              while (1) {
                                                switch (_context.prev = _context.next) {
                                                  case 0:
                                                    params = {
                                                      condition: childCond.condition,
                                                      operators: operators,
                                                      tableFields: result.columns,
                                                      globalID: globalCond.id,
                                                      currentID: childCond.id
                                                    };

                                                    if (!(childCond.condition.slice(0, childCond.condition.indexOf(_utils.GENERAL_UTILS.findOperator(childCond.condition, operators))).split(".").length > 1)) {
                                                      _context.next = 7;
                                                      break;
                                                    }

                                                    _context.next = 4;
                                                    return _utils.QUERY_UTILS.parseConditionValueWithRef(params);

                                                  case 4:
                                                    _context.t0 = _context.sent;
                                                    _context.next = 8;
                                                    break;

                                                  case 7:
                                                    _context.t0 = _utils.QUERY_UTILS.parseConditionValue(params);

                                                  case 8:
                                                    conditionOptions = _context.t0;
                                                    return _context.abrupt("return", _objectSpread(_objectSpread({}, childCond), {}, {
                                                      conditionOptions: conditionOptions
                                                    }));

                                                  case 10:
                                                  case "end":
                                                    return _context.stop();
                                                }
                                              }
                                            }, _callee);
                                          }));

                                          return function (_x4) {
                                            return _ref5.apply(this, arguments);
                                          };
                                        }()));

                                      case 13:
                                        parentCond.relatedConditions = _context2.sent;
                                        return _context2.abrupt("return", parentCond);

                                      case 15:
                                      case "end":
                                        return _context2.stop();
                                    }
                                  }
                                }, _callee2);
                              }));

                              return function (_x3) {
                                return _ref4.apply(this, arguments);
                              };
                            }()));

                          case 2:
                            globalCond.relatedConditions = _context3.sent;
                            return _context3.abrupt("return", globalCond);

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 24:
                conditionsArray = _context4.sent;

              case 25:
                _this.setState({
                  tableFields: result,
                  conditionsArray: conditionsArray
                });

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.isFilterSaved = function (_ref6) {
      var isSaved = _ref6.isSaved;

      _this.setState({
        isFilterSaved: isSaved,
        isSave: false
      });
    };

    _this.getConditionsIDs = function (_ref7) {
      var currentConditionID = _ref7.currentConditionID,
          globalConditionID = _ref7.globalConditionID;

      _this.setState({
        currentConditionID: currentConditionID,
        globalConditionID: globalConditionID
      });
    };

    _this.setQuery = function (_ref8) {
      var query = _ref8.query;
      var count = query ? query === null || query === void 0 ? void 0 : query.split(/\^|\^OR/).length : 0;

      _this.setState({
        query: query,
        active: Boolean(query),
        count: count
      });
    };

    _this.setAdvanced = function (value) {
      _this.setState({
        advanced: value
      });
    };

    _this.state = {
      referenceFieldData: {},
      conditionsArray: [],
      isSave: false,
      referenceTableFieldsData: {},
      isFilterOpened: _this.props.opened,
      breadcrumbsItems: [{
        label: 'All',
        conditionId: 'all'
      }],
      isFilterSaved: false,
      queryToSave: '',
      labelArr: [],
      selectedItem: {
        items: [],
        label: ""
      },
      alertData: {
        active: false,
        positive: true
      },
      tableFields: {
        columns: {}
      },
      defaultGroup: {
        displayValue: "",
        sys_id: ""
      },
      query: _this.props.query,
      operatorArr: [],
      clickedListIndex: null,
      filterList: [],
      active: false,
      count: 0,
      advanced: false
    }; // this.parseConditionValue = QUERY_UTILS.parseConditionValue.bind(this);
    // this.parseConditionValueWithRef = QUERY_UTILS.parseConditionValueWithRef.bind(this);

    _this.clickBtn = _effects.BUTTONS_EFFECTS.clickBtn.bind(_assertThisInitialized(_this));
    _this.setConditionOptions = _utils.CONDITION_OPTIONS_UTILS.setConditionOptions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FilterCondition, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this2 = this;

        var _this$props, table, user, onSendQuery, filtersListQuery, _this$state, query, conditionsArray, isSave, queryParams, groupId;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this$props = this.props, table = _this$props.table, user = _this$props.user, onSendQuery = _this$props.onSendQuery, filtersListQuery = _this$props.filtersListQuery;
                _this$state = this.state, query = _this$state.query, conditionsArray = _this$state.conditionsArray, isSave = _this$state.isSave;
                queryParams = {
                  sysparm_operators: true,
                  sysparm_get_extended_tables: true,
                  sysparm_keywords: true
                };
                groupId = filtersListQuery.replace(/.*=/, "");
                _context5.next = 6;
                return _utils.REQUEST_UTILS.fetchGroup({
                  sys_id: groupId
                }).then(function (res) {
                  _this2.setState({
                    defaultGroup: {
                      displayValue: res[0].name,
                      sys_id: groupId
                    }
                  });
                });

              case 6:
                _utils.REQUEST_UTILS.fetchTableData({
                  table: table,
                  queryParams: queryParams
                }).then(function (result) {
                  _this2.fetchTableDataSuccessed({
                    result: result,
                    properties: _this2.props
                  });
                });

                if (!!query) _utils.QUERY_UTILS.generateQuery({
                  payload: {
                    conditionsArray: conditionsArray,
                    onSendQuery: onSendQuery,
                    isSave: isSave,
                    operation: "run"
                  }
                });

                _utils.REQUEST_UTILS.fetchFilterTemplates({
                  table: table,
                  user: user,
                  filter: filtersListQuery
                }).then(function (res) {
                  return _this2.setState({
                    filterList: res
                  });
                });

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(prevProps, prevState) {
        var _this3 = this;

        var _this$props2, query, table, filtersListQuery, groupId, _table, queryParams, _this$props3, _table2, user;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(prevProps.table !== this.props.table)) {
                  _context6.next = 8;
                  break;
                }

                _this$props2 = this.props, query = _this$props2.query, table = _this$props2.table, filtersListQuery = _this$props2.filtersListQuery;
                groupId = filtersListQuery.replace(/.*=/, "");
                this.setQuery({
                  query: query
                });
                this.setState({
                  active: Boolean(query),
                  breadcrumbsItems: [{
                    label: 'All',
                    conditionId: 'all'
                  }]
                });

                _utils.REQUEST_UTILS.fetchFilterTemplates({
                  table: table,
                  filter: filtersListQuery
                }).then(function (res) {
                  return _this3.setState({
                    filterList: res
                  });
                });

                _context6.next = 8;
                return _utils.REQUEST_UTILS.fetchGroup({
                  sys_id: groupId
                }).then(function (res) {
                  _this3.setState({
                    defaultGroup: {
                      displayValue: res[0].name,
                      sys_id: groupId
                    }
                  });
                });

              case 8:
                if (this.props.query !== prevProps.query) {
                  this.setQuery({
                    query: this.props.query
                  });
                }

                if (!(prevState.query !== this.state.query || prevProps.table !== this.props.table)) {
                  _context6.next = 14;
                  break;
                }

                _table = this.props.table;
                queryParams = {
                  sysparm_operators: true,
                  sysparm_get_extended_tables: true,
                  sysparm_keywords: true
                };
                _context6.next = 14;
                return _utils.REQUEST_UTILS.fetchTableData({
                  table: _table,
                  queryParams: queryParams
                }).then(function (result) {
                  _this3.fetchTableDataSuccessed({
                    result: result,
                    properties: _this3.props
                  });
                });

              case 14:
                if (prevState.advanced !== this.state.advanced) {
                  this.setState({
                    isFilterOpened: this.state.advanced
                  });
                }

                if (this.state.isFilterSaved) {
                  _this$props3 = this.props, _table2 = _this$props3.table, user = _this$props3.user;

                  _utils.REQUEST_UTILS.fetchFilterTemplates({
                    table: _table2,
                    user: user
                  }).then(function (res) {
                    return _this3.setState({
                      filterList: res
                    });
                  });

                  this.setState({
                    isFilterSaved: false
                  });
                }

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function componentDidUpdate(_x5, _x6) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          active = _this$state2.active,
          advanced = _this$state2.advanced,
          count = _this$state2.count,
          isFilterOpened = _this$state2.isFilterOpened,
          conditionsArray = _this$state2.conditionsArray,
          breadcrumbsItems = _this$state2.breadcrumbsItems,
          isSave = _this$state2.isSave,
          queryToSave = _this$state2.queryToSave,
          filterList = _this$state2.filterList,
          defaultGroup = _this$state2.defaultGroup;
      var _this$props4 = this.props,
          table = _this$props4.table,
          user = _this$props4.user; // console.log("%c%s", "color: green", "REACT Filter Conditions Array", this.state.conditionsArray)

      var isActive = [advanced, active].some(Boolean);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "collapsed-filter-header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "templates",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterTemplates["default"], {
              setQuery: this.setQuery,
              setAdvanced: this.setAdvanced,
              filterList: filterList,
              table: table
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
            label: "Apply",
            variant: "primary",
            size: "md",
            disabled: !isActive,
            onClick: function onClick() {
              return _this4.clickBtn({
                action: "applyQuery",
                payload: {
                  type: "run"
                }
              });
            },
            customStyle: {
              "border-color": "rgb(15,67,55)",
              "hover-border-color": "rgb(15,67,55)",
              "active-border-color": "none"
            }
          }), isActive && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge["default"], {
            text: "".concat(count),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
              icon: isFilterOpened ? "funnel-fill" : "funnel",
              size: "md",
              tooltipContent: "Filter",
              variant: "tertiary",
              onClick: function onClick() {
                return _this4.clickBtn({
                  action: "filterToogle"
                });
              }
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "swf-filter-container": true,
            "--is-collapsed": isFilterOpened
          }),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "breadcrumbs",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterBreadcrumbs["default"], {
              items: breadcrumbsItems,
              clickBtn: this.clickBtn
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "filter-header",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "actions",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "buttons",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "btn",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
                    label: "Save",
                    variant: "secondary",
                    size: "md",
                    customStyle: {
                      "border-color": "rgb(172,180,181)",
                      "hover-border-color": "rgb(172,180,181)",
                      "active-border-color": "rgb(172,180,181)"
                    },
                    onClick: function onClick() {
                      return _this4.clickBtn({
                        action: "toogleSave"
                      });
                    }
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "btn",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
                    label: "Clear all",
                    variant: "secondary",
                    size: "md",
                    customStyle: {
                      "border-color": "rgb(172,180,181)",
                      "hover-border-color": "rgb(172,180,181)",
                      "active-border-color": "rgb(172,180,181)"
                    },
                    onClick: function onClick() {
                      return _this4.clickBtn({
                        action: "clearAll"
                      });
                    }
                  })
                })]
              })
            }), isSave && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterSaver["default"], {
              isFilterSaved: this.isFilterSaved,
              table: table,
              query: queryToSave,
              user: user,
              defaultGroup: defaultGroup
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "filter-body",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "conditions-container",
              children: conditionsArray.map(function (globalCondition, index) {
                var relatedConditions = [];
                globalCondition.relatedConditions.forEach(function (cond) {
                  relatedConditions.push(cond);
                  cond.relatedConditions.forEach(function (cond) {
                    relatedConditions.push(cond);
                  });
                });
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: (0, _classnames["default"])({
                    "global-condition": true,
                    "global-conditions_first": index === 0
                  }),
                  children: [index !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "title",
                    children: "OR"
                  }), relatedConditions.map(function (condition) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: (0, _classnames["default"])({
                        "condition-container": true,
                        "failed": condition.failed
                      }),
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterConditionItem["default"], {
                        conditionObj: condition,
                        conditionID: condition.id,
                        globalConditionID: globalCondition.id,
                        globalCondition: globalCondition,
                        operatorType: condition.operator,
                        clickBtn: _this4.clickBtn,
                        getConditionsIDs: _this4.getConditionsIDs,
                        setConditionOptions: _this4.setConditionOptions,
                        selectedItem: condition.conditionOptions.fieldItems,
                        generalTable: table,
                        conditionsArray: conditionsArray
                      })
                    }, condition.id);
                  })]
                });
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "new-criteria",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "title",
                children: "or"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
                  label: "New Criteria",
                  variant: "secondary",
                  size: "md",
                  onClick: function onClick() {
                    return _this4.clickBtn({
                      action: "addNewOperator",
                      payload: {
                        value: "^NQ",
                        currentConditionID: _this4.state.currentConditionID,
                        globalConditionID: _this4.state.globalConditionID
                      }
                    });
                  }
                })
              })]
            })]
          })]
        })]
      });
    }
  }]);

  return FilterCondition;
}(React.Component);

exports["default"] = FilterCondition;
FilterCondition.defaultProps = {
  table: "",
  query: "",
  allowFields: [],
  blockFields: [],
  user: "",
  opened: false,
  onSendQuery: _utils2.noop,
  filtersListQuery: ""
};
FilterCondition.propTypes = {
  table: _propTypes["default"].string.isRequired,
  query: _propTypes["default"].string,
  user: _propTypes["default"].string,
  blockFields: _propTypes["default"].array,
  allowFields: _propTypes["default"].array,
  opened: _propTypes["default"].bool,
  onSendQuery: _propTypes["default"].func,
  filtersListQuery: _propTypes["default"].string
};
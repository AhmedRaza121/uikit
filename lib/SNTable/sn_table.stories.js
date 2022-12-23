"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookAddonMock = _interopRequireDefault(require("storybook-addon-mock"));

var _SNTable = _interopRequireDefault(require("./SNTable"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/DataVisualisation/SNTable',
  component: _SNTable["default"],
  decorators: [_storybookAddonMock["default"]]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SNTable["default"], _objectSpread({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.parameters = {
  mockData: [{
    url: 'api/now/graphql',
    method: 'POST',
    status: 200,
    response: JSON.stringify([{
      data: {
        GlideListLayout_Query: {
          getListLayout: {
            metadata: {
              isDBView: false,
              isScriptableTable: false,
              isGrouped: false,
              groupedColumn: '',
              groupByDisplayValue: ''
            },
            preferences: [{
              name: 'workspace.list.x_aaro2_swf_store.orderBy',
              value: null
            }, {
              name: 'workspace.list.columnWidths.c5ca1319db2074105884eb184b96193f',
              value: null
            }, {
              name: 'workspace.list.x_aaro2_swf_store.groupBy.  .defaultAsOpen',
              value: null
            }, {
              name: 'workspace.list.x_aaro2_swf_store.groupBy.  .exceptions',
              value: null
            }],
            tiny: 'c5ca1319db2074105884eb184b96193f',
            query: '',
            listTitle: null,
            listId: '',
            listAttributes: [],
            allColumns: [{
              columnName: 'name',
              columnData: {
                label: 'Name',
                internalType: 'string',
                isFilterable: true,
                isSortable: true,
                isGroupable: true,
                isChoice: false,
                elementSysId: 'sys_id',
                tableName: 'x_aaro2_swf_store',
                isFirstNonRef: true
              },
              internalType: 'string'
            }, {
              columnName: 'deployment_group',
              columnData: {
                label: 'Deployment Group',
                internalType: 'reference',
                isFilterable: true,
                isSortable: true,
                isGroupable: true,
                isChoice: false,
                elementSysId: 'sys_id',
                tableName: 'x_aaro2_swf_deployment_group',
                isFirstNonRef: false
              },
              internalType: 'reference'
            }, {
              columnName: 'department',
              columnData: {
                label: 'Department',
                internalType: 'reference',
                isFilterable: true,
                isSortable: true,
                isGroupable: true,
                isChoice: false,
                elementSysId: 'sys_id',
                tableName: 'u_aarons_department',
                isFirstNonRef: false
              },
              internalType: 'reference'
            }, {
              columnName: 'state',
              columnData: {
                label: 'State',
                internalType: 'choice',
                isFilterable: true,
                isSortable: true,
                isGroupable: true,
                isChoice: true,
                elementSysId: 'sys_id',
                tableName: 'x_aaro2_swf_store',
                isFirstNonRef: false
              },
              internalType: 'choice'
            }, {
              columnName: 'daytime_speed',
              columnData: {
                label: 'Daytime speed',
                internalType: 'choice',
                isFilterable: true,
                isSortable: true,
                isGroupable: true,
                isChoice: true,
                elementSysId: 'sys_id',
                tableName: 'x_aaro2_swf_store',
                isFirstNonRef: false
              },
              internalType: 'choice'
            }, {
              columnName: 'nighttime_speed',
              columnData: {
                label: 'Nighttime speed',
                internalType: 'choice',
                isFilterable: true,
                isSortable: true,
                isGroupable: true,
                isChoice: true,
                elementSysId: 'sys_id',
                tableName: 'x_aaro2_swf_store',
                isFirstNonRef: false
              },
              internalType: 'choice'
            }, {
              columnName: 'interfaces_config',
              columnData: {
                label: 'Interfaces config',
                internalType: 'choice',
                isFilterable: true,
                isSortable: true,
                isGroupable: true,
                isChoice: true,
                elementSysId: 'sys_id',
                tableName: 'x_aaro2_swf_store',
                isFirstNonRef: false
              },
              internalType: 'choice'
            }],
            queryCategory: 'list',
            layoutQuery: {
              encodedQuery: 'eyJvcmRlcl9ieSI6W10sImdyb3VwX2J5IjpbXSwicHJlZGljYXRlcyI6W3siY29tcG91bmRfdHlwZSI6Im9yIiwic3VicHJlZGljYXRlcyI6W3siY29tcG91bmRfdHlwZSI6ImFuZCIsInN1YnByZWRpY2F0ZXMiOlt7ImNvbXBvdW5kX3R5cGUiOiJhbmQiLCJzdWJwcmVkaWNhdGVzIjpbXSwidHlwZSI6ImNvbXBvdW5kIn1dLCJ0eXBlIjoiY29tcG91bmQifV0sInR5cGUiOiJjb21wb3VuZCJ9XSwiaGFzX3JscV9jb25kaXRpb25zIjpmYWxzZX0=',
              table: 'x_aaro2_swf_store',
              orderByColumn: 'name',
              orderByIsDescending: false,
              allSysIds: ['ab0d618c1b428c949bf099fabc4bcbc3', '4f0d21041b8688588974a8ecbc4bcb17', '840dadc01b8688588974a8ecbc4bcb57', '470d21041b8688588974a8ecbc4bcb15', 'c80d21041b8688588974a8ecbc4bcb2b', 'db0de5041b8688588974a8ecbc4bcb6a', '6b0d2d4c1b428c949bf099fabc4bcbcc', '091d258c1b428c949bf099fabc4bcb64', 'c80d21041b8688588974a8ecbc4bcb32', '8c0dadc01b8688588974a8ecbc4bcb96', '7a0d618c1b428c949bf099fabc4bcb10', '470d21041b8688588974a8ecbc4bcb1a', '5f0de5041b8688588974a8ecbc4bcb49', '4c0dadc01b8688588974a8ecbc4bcb91', '260d618c1b428c949bf099fabc4bcb09', '481d69041b8688588974a8ecbc4bcbff', 'ee0d618c1b428c949bf099fabc4bcb04', '951d258c1b428c949bf099fabc4bcb6c', '8c0dadc01b8688588974a8ecbc4bcb59', 'ea0d618c1b428c949bf099fabc4bcb0b', '341de18c1b428c949bf099fabc4bcb6c', '5d1d618c1b428c949bf099fabc4bcb33', 'c00d21041b8688588974a8ecbc4bcb30', '840d21041b8688588974a8ecbc4bcb27', '591d618c1b428c949bf099fabc4bcb2f', '030de5041b8688588974a8ecbc4bcb43', '0b0de5041b8688588974a8ecbc4bcb45', '840dadc01b8688588974a8ecbc4bcb94', 'b20d618c1b428c949bf099fabc4bcb0e', 'f81de18c1b428c949bf099fabc4bcb6e', '870da5041b8688588974a8ecbc4bcbae', '8f0da5041b8688588974a8ecbc4bcbb0', 'ed1dad041b8688588974a8ecbc4bcbcb', 'ed1ded041b8688588974a8ecbc4bcb03', 'c21d21441b8688588974a8ecbc4bcb17', '711ded041b8688588974a8ecbc4bcb89', '2d1dad041b8688588974a8ecbc4bcbd2', 'e51dad041b8688588974a8ecbc4bcbfc', 'c21d21441b8688588974a8ecbc4bcb1c', 'b91ded041b8688588974a8ecbc4bcb25', '251dad041b8688588974a8ecbc4bcbd0', '251dad041b8688588974a8ecbc4bcb80', 'a51ded041b8688588974a8ecbc4bcb1f', 'e51ded041b8688588974a8ecbc4bcb01', '351ded041b8688588974a8ecbc4bcb57', 'ca1d21441b8688588974a8ecbc4bcb19', 'e51dad041b8688588974a8ecbc4bcbc9', 'ed1dad041b8688588974a8ecbc4bcbfe', '711ded041b8688588974a8ecbc4bcbb4', 'b11ded041b8688588974a8ecbc4bcb28', 'e51dad041b8688588974a8ecbc4bcba8', '651dad041b8688588974a8ecbc4bcb9f', '791ded041b8688588974a8ecbc4bcbb6', '0e1da58c1b428c949bf099fabc4bcbe4', 'bd1ded041b8688588974a8ecbc4bcb21', '821ded041b8688588974a8ecbc4bcbb9', '3d1ded041b8688588974a8ecbc4bcb54', '6d1dad041b8688588974a8ecbc4bcb82', 'e11dad041b8688588974a8ecbc4bcba3', '8a1ded041b8688588974a8ecbc4bcbbb', 'b11da58c1b428c949bf099fabc4bcb82', '651dad041b8688588974a8ecbc4bcb85', 'e91dad041b8688588974a8ecbc4bcba5', '791ded041b8688588974a8ecbc4bcb72', '6d1dad041b8688588974a8ecbc4bcb9c', '691dad041b8688588974a8ecbc4bcb97', '651dad041b8688588974a8ecbc4bcb5e', '7d1ded041b8688588974a8ecbc4bcb59', 'bd1ded041b8688588974a8ecbc4bcb6e', '6d1dad041b8688588974a8ecbc4bcb5b', '6d1dad041b8688588974a8ecbc4bcb87', '311ded041b8688588974a8ecbc4bcb84', '791ded041b8688588974a8ecbc4bcb6a', '6d1dad041b8688588974a8ecbc4bcb60', 'a11dad041b8688588974a8ecbc4bcb9a', '391ded041b8688588974a8ecbc4bcb86', '391ded041b8688588974a8ecbc4bcb81', '651dad041b8688588974a8ecbc4bcb63', '2d1dad041b8688588974a8ecbc4bcb7d', '531da98c1b428c949bf099fabc4bcba0', '521d29041b8688588974a8ecbc4bcb50', '5b1da98c1b428c949bf099fabc4bcb85', '171da98c1b428c949bf099fabc4bcb55', 'd31da98c1b428c949bf099fabc4bcb7c', '071da98c1b428c949bf099fabc4bcb2d', '621da9041b8688588974a8ecbc4bcb55', '5b1da98c1b428c949bf099fabc4bcb9d', 'ae1d61441b8688588974a8ecbc4bcb2e', '4f1d698c1b428c949bf099fabc4bcbf7', '621da9041b8688588974a8ecbc4bcb5a', '671de98c1b428c949bf099fabc4bcb14', '9b1da98c1b428c949bf099fabc4bcb34', 'db1da98c1b428c949bf099fabc4bcb79', '631da1441b8688588974a8ecbc4bcbf7', '2f1de98c1b428c949bf099fabc4bcb16', 'd71da98c1b428c949bf099fabc4bcbc0', 'a61d61441b8688588974a8ecbc4bcb2c', '5e1d21441b8688588974a8ecbc4bcbad', '0b1d698c1b428c949bf099fabc4bcbf3', '5b1da98c1b428c949bf099fabc4bcb59'],
              count: 15960000,
              groupCount: -1,
              isChoiceAggregate: false,
              isOmitCount: false,
              liveLists: false,
              omitCountData: null,
              queryRows: [{
                className: 'x_aaro2_swf_store',
                uniqueId: 'ab0d618c1b428c949bf099fabc4bcbc3',
                displayValue: 'C0032',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0032',
                    value: 'C0032',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0032',
                    value: '676c359d1b8c3b04e467fcccdd4bcbd0',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '4f0d21041b8688588974a8ecbc4bcb17',
                displayValue: 'C0033',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0033',
                    value: 'C0033',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0033',
                    value: '236c359d1b8c3b04e467fcccdd4bcbd1',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '840dadc01b8688588974a8ecbc4bcb57',
                displayValue: 'C0034',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0034',
                    value: 'C0034',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0034',
                    value: 'eb6c359d1b8c3b04e467fcccdd4bcbd1',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '470d21041b8688588974a8ecbc4bcb15',
                displayValue: 'C0035',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0035',
                    value: 'C0035',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0035',
                    value: 'a76c359d1b8c3b04e467fcccdd4bcbd2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'c80d21041b8688588974a8ecbc4bcb2b',
                displayValue: 'C0036',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0036',
                    value: 'C0036',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0036',
                    value: '636c359d1b8c3b04e467fcccdd4bcbd3',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'db0de5041b8688588974a8ecbc4bcb6a',
                displayValue: 'C0037',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0037',
                    value: 'C0037',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0037',
                    value: '2f6c359d1b8c3b04e467fcccdd4bcbd3',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '6b0d2d4c1b428c949bf099fabc4bcbcc',
                displayValue: 'C0040',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0040',
                    value: 'C0040',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0040',
                    value: 'e76c359d1b8c3b04e467fcccdd4bcbd4',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '091d258c1b428c949bf099fabc4bcb64',
                displayValue: 'C0043',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0043',
                    value: 'C0043',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0043',
                    value: 'a36c359d1b8c3b04e467fcccdd4bcbd5',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'c80d21041b8688588974a8ecbc4bcb32',
                displayValue: 'C0044',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0044',
                    value: 'C0044',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0044',
                    value: '6f6c359d1b8c3b04e467fcccdd4bcbd5',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '8c0dadc01b8688588974a8ecbc4bcb96',
                displayValue: 'C0046',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0046',
                    value: 'C0046',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0046',
                    value: '2b6c359d1b8c3b04e467fcccdd4bcbd6',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '7a0d618c1b428c949bf099fabc4bcb10',
                displayValue: 'C0047',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0047',
                    value: 'C0047',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0047',
                    value: 'e36c359d1b8c3b04e467fcccdd4bcbd7',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '470d21041b8688588974a8ecbc4bcb1a',
                displayValue: 'C0050',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0050',
                    value: 'C0050',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0050',
                    value: 'af6c359d1b8c3b04e467fcccdd4bcbd7',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '5f0de5041b8688588974a8ecbc4bcb49',
                displayValue: 'C0051',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0051',
                    value: 'C0051',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0051',
                    value: '6b6c359d1b8c3b04e467fcccdd4bcbd8',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '4c0dadc01b8688588974a8ecbc4bcb91',
                displayValue: 'C0053',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0053',
                    value: 'C0053',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0053',
                    value: 'eb6c359d1b8c3b04e467fcccdd4bcbe5',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '260d618c1b428c949bf099fabc4bcb09',
                displayValue: 'C0054',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0054',
                    value: 'C0054',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0054',
                    value: 'a76c359d1b8c3b04e467fcccdd4bcbe6',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '481d69041b8688588974a8ecbc4bcbff',
                displayValue: 'C0055',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0055',
                    value: 'C0055',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0055',
                    value: '636c359d1b8c3b04e467fcccdd4bcbe7',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Permanently inactive',
                    value: 'permanently_inactive',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'ee0d618c1b428c949bf099fabc4bcb04',
                displayValue: 'C0056',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0056',
                    value: 'C0056',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0056',
                    value: '2f6c359d1b8c3b04e467fcccdd4bcbe7',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '951d258c1b428c949bf099fabc4bcb6c',
                displayValue: 'C0057',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0057',
                    value: 'C0057',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0057',
                    value: 'e76c359d1b8c3b04e467fcccdd4bcbe8',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '8c0dadc01b8688588974a8ecbc4bcb59',
                displayValue: 'C0063',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0063',
                    value: 'C0063',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0063',
                    value: 'a36c359d1b8c3b04e467fcccdd4bcbe9',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'ea0d618c1b428c949bf099fabc4bcb0b',
                displayValue: 'C0065',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0065',
                    value: 'C0065',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0065',
                    value: '6f6c359d1b8c3b04e467fcccdd4bcbe9',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '341de18c1b428c949bf099fabc4bcb6c',
                displayValue: 'C0067',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0067',
                    value: 'C0067',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0067',
                    value: '2b6c359d1b8c3b04e467fcccdd4bcbea',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '5d1d618c1b428c949bf099fabc4bcb33',
                displayValue: 'C0068',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0068',
                    value: 'C0068',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0068',
                    value: 'e36c359d1b8c3b04e467fcccdd4bcbeb',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'c00d21041b8688588974a8ecbc4bcb30',
                displayValue: 'C0070',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0070',
                    value: 'C0070',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0070',
                    value: 'af6c359d1b8c3b04e467fcccdd4bcbeb',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '840d21041b8688588974a8ecbc4bcb27',
                displayValue: 'C0071',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0071',
                    value: 'C0071',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0071',
                    value: '6b6c359d1b8c3b04e467fcccdd4bcbec',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '591d618c1b428c949bf099fabc4bcb2f',
                displayValue: 'C0072',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0072',
                    value: 'C0072',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0072',
                    value: '276c359d1b8c3b04e467fcccdd4bcbed',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '030de5041b8688588974a8ecbc4bcb43',
                displayValue: 'C0074',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0074',
                    value: 'C0074',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0074',
                    value: 'ab6c359d1b8c3b04e467fcccdd4bcbee',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '0b0de5041b8688588974a8ecbc4bcb45',
                displayValue: 'C0075',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0075',
                    value: 'C0075',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0075',
                    value: '676c359d1b8c3b04e467fcccdd4bcbef',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '840dadc01b8688588974a8ecbc4bcb94',
                displayValue: 'C0076',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0076',
                    value: 'C0076',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0076',
                    value: '236c359d1b8c3b04e467fcccdd4bcbf0',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'b20d618c1b428c949bf099fabc4bcb0e',
                displayValue: 'C0077',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0077',
                    value: 'C0077',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0077',
                    value: 'eb6c359d1b8c3b04e467fcccdd4bcbf0',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'f81de18c1b428c949bf099fabc4bcb6e',
                displayValue: 'C0078',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0078',
                    value: 'C0078',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0078',
                    value: 'a76c359d1b8c3b04e467fcccdd4bcbf1',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '870da5041b8688588974a8ecbc4bcbae',
                displayValue: 'C0079',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0079',
                    value: 'C0079',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0079',
                    value: 'ef6c759d1b8c3b04e467fcccdd4bcb0a',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '8f0da5041b8688588974a8ecbc4bcbb0',
                displayValue: 'C0080',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0080',
                    value: 'C0080',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0080',
                    value: 'ab6c759d1b8c3b04e467fcccdd4bcb0b',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'ed1dad041b8688588974a8ecbc4bcbcb',
                displayValue: 'C0081',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0081',
                    value: 'C0081',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0081',
                    value: '676c759d1b8c3b04e467fcccdd4bcb0c',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'ed1ded041b8688588974a8ecbc4bcb03',
                displayValue: 'C0082',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0082',
                    value: 'C0082',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0082',
                    value: '236c759d1b8c3b04e467fcccdd4bcb0d',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'c21d21441b8688588974a8ecbc4bcb17',
                displayValue: 'C0085',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0085',
                    value: 'C0085',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0085',
                    value: 'eb6c759d1b8c3b04e467fcccdd4bcb0d',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '711ded041b8688588974a8ecbc4bcb89',
                displayValue: 'C0086',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0086',
                    value: 'C0086',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0086',
                    value: 'a76c759d1b8c3b04e467fcccdd4bcb0e',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '2d1dad041b8688588974a8ecbc4bcbd2',
                displayValue: 'C0087',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0087',
                    value: 'C0087',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0087',
                    value: '636c759d1b8c3b04e467fcccdd4bcb0f',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'e51dad041b8688588974a8ecbc4bcbfc',
                displayValue: 'C0088',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0088',
                    value: 'C0088',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0088',
                    value: '2f6c759d1b8c3b04e467fcccdd4bcb0f',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'c21d21441b8688588974a8ecbc4bcb1c',
                displayValue: 'C0091',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0091',
                    value: 'C0091',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0091',
                    value: 'e76c759d1b8c3b04e467fcccdd4bcb10',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'b91ded041b8688588974a8ecbc4bcb25',
                displayValue: 'C0092',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0092',
                    value: 'C0092',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0092',
                    value: 'a36c759d1b8c3b04e467fcccdd4bcb11',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '251dad041b8688588974a8ecbc4bcbd0',
                displayValue: 'C0093',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0093',
                    value: 'C0093',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0093',
                    value: '6f6c759d1b8c3b04e467fcccdd4bcb11',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '251dad041b8688588974a8ecbc4bcb80',
                displayValue: 'C0095',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0095',
                    value: 'C0095',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0095',
                    value: '2b6c759d1b8c3b04e467fcccdd4bcb12',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'a51ded041b8688588974a8ecbc4bcb1f',
                displayValue: 'C0096',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0096',
                    value: 'C0096',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0096',
                    value: 'e36c759d1b8c3b04e467fcccdd4bcb13',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'e51ded041b8688588974a8ecbc4bcb01',
                displayValue: 'C0097',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0097',
                    value: 'C0097',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0097',
                    value: 'af6c759d1b8c3b04e467fcccdd4bcb13',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '351ded041b8688588974a8ecbc4bcb57',
                displayValue: 'C0098',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0098',
                    value: 'C0098',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0098',
                    value: '6b6c759d1b8c3b04e467fcccdd4bcb14',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'ca1d21441b8688588974a8ecbc4bcb19',
                displayValue: 'C0099',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0099',
                    value: 'C0099',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0099',
                    value: '276c759d1b8c3b04e467fcccdd4bcb15',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'e51dad041b8688588974a8ecbc4bcbc9',
                displayValue: 'C0101',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0101',
                    value: 'C0101',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0101',
                    value: 'ab6c759d1b8c3b04e467fcccdd4bcb16',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'ed1dad041b8688588974a8ecbc4bcbfe',
                displayValue: 'C0102',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0102',
                    value: 'C0102',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0102',
                    value: '2f6c759d1b8c3b04e467fcccdd4bcb23',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '711ded041b8688588974a8ecbc4bcbb4',
                displayValue: 'C0106',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0106',
                    value: 'C0106',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0106',
                    value: 'e76c759d1b8c3b04e467fcccdd4bcb24',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'b11ded041b8688588974a8ecbc4bcb28',
                displayValue: 'C0110',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0110',
                    value: 'C0110',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0110',
                    value: 'a36c759d1b8c3b04e467fcccdd4bcb25',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'e51dad041b8688588974a8ecbc4bcba8',
                displayValue: 'C0113',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0113',
                    value: 'C0113',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0113',
                    value: '2b6c759d1b8c3b04e467fcccdd4bcb26',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '651dad041b8688588974a8ecbc4bcb9f',
                displayValue: 'C0115',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0115',
                    value: 'C0115',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0115',
                    value: 'e36c759d1b8c3b04e467fcccdd4bcb27',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '791ded041b8688588974a8ecbc4bcbb6',
                displayValue: 'C0116',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0116',
                    value: 'C0116',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0116',
                    value: 'af6c759d1b8c3b04e467fcccdd4bcb27',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '0e1da58c1b428c949bf099fabc4bcbe4',
                displayValue: 'C0117',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0117',
                    value: 'C0117',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0117',
                    value: '6b6c759d1b8c3b04e467fcccdd4bcb28',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'bd1ded041b8688588974a8ecbc4bcb21',
                displayValue: 'C0118',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0118',
                    value: 'C0118',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0118',
                    value: '276c759d1b8c3b04e467fcccdd4bcb29',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '821ded041b8688588974a8ecbc4bcbb9',
                displayValue: 'C0119',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0119',
                    value: 'C0119',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0119',
                    value: 'ef6c759d1b8c3b04e467fcccdd4bcb29',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '3d1ded041b8688588974a8ecbc4bcb54',
                displayValue: 'C0120',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0120',
                    value: 'C0120',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0120',
                    value: 'ab6c759d1b8c3b04e467fcccdd4bcb2a',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '6d1dad041b8688588974a8ecbc4bcb82',
                displayValue: 'C0121',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0121',
                    value: 'C0121',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0121',
                    value: '676c759d1b8c3b04e467fcccdd4bcb2b',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'e11dad041b8688588974a8ecbc4bcba3',
                displayValue: 'C0122',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0122',
                    value: 'C0122',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0122',
                    value: '236c759d1b8c3b04e467fcccdd4bcb2c',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '8a1ded041b8688588974a8ecbc4bcbbb',
                displayValue: 'C0123',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0123',
                    value: 'C0123',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0123',
                    value: 'eb6c759d1b8c3b04e467fcccdd4bcb2c',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'b11da58c1b428c949bf099fabc4bcb82',
                displayValue: 'C0124',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0124',
                    value: 'C0124',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0124',
                    value: 'a76c759d1b8c3b04e467fcccdd4bcb2d',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '651dad041b8688588974a8ecbc4bcb85',
                displayValue: 'C0125',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0125',
                    value: 'C0125',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0125',
                    value: '636c759d1b8c3b04e467fcccdd4bcb2e',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'e91dad041b8688588974a8ecbc4bcba5',
                displayValue: 'C0126',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0126',
                    value: 'C0126',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0126',
                    value: '2f6c759d1b8c3b04e467fcccdd4bcb2e',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '791ded041b8688588974a8ecbc4bcb72',
                displayValue: 'C0128',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0128',
                    value: 'C0128',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0128',
                    value: 'e76c759d1b8c3b04e467fcccdd4bcb2f',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '6d1dad041b8688588974a8ecbc4bcb9c',
                displayValue: 'C0129',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0129',
                    value: 'C0129',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0129',
                    value: '6b6c759d1b8c3b04e467fcccdd4bcb3c',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '691dad041b8688588974a8ecbc4bcb97',
                displayValue: 'C0130',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0130',
                    value: 'C0130',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0130',
                    value: '276c759d1b8c3b04e467fcccdd4bcb3d',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '651dad041b8688588974a8ecbc4bcb5e',
                displayValue: 'C0131',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0131',
                    value: 'C0131',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary',
                    value: 'canary',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0131',
                    value: 'ef6c759d1b8c3b04e467fcccdd4bcb3d',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '7d1ded041b8688588974a8ecbc4bcb59',
                displayValue: 'C0132',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0132',
                    value: 'C0132',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0132',
                    value: 'ab6c759d1b8c3b04e467fcccdd4bcb3e',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'bd1ded041b8688588974a8ecbc4bcb6e',
                displayValue: 'C0133',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0133',
                    value: 'C0133',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0133',
                    value: '676c759d1b8c3b04e467fcccdd4bcb3f',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Permanently inactive',
                    value: 'permanently_inactive',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '6d1dad041b8688588974a8ecbc4bcb5b',
                displayValue: 'C0135',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0135',
                    value: 'C0135',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0135',
                    value: '236c759d1b8c3b04e467fcccdd4bcb40',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '6d1dad041b8688588974a8ecbc4bcb87',
                displayValue: 'C0136',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0136',
                    value: 'C0136',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0136',
                    value: 'eb6c759d1b8c3b04e467fcccdd4bcb40',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '311ded041b8688588974a8ecbc4bcb84',
                displayValue: 'C0137',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0137',
                    value: 'C0137',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0137',
                    value: 'a76c759d1b8c3b04e467fcccdd4bcb41',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '791ded041b8688588974a8ecbc4bcb6a',
                displayValue: 'C0138',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0138',
                    value: 'C0138',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0138',
                    value: '636c759d1b8c3b04e467fcccdd4bcb42',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '6d1dad041b8688588974a8ecbc4bcb60',
                displayValue: 'C0139',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0139',
                    value: 'C0139',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0139',
                    value: '2f6c759d1b8c3b04e467fcccdd4bcb42',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'a11dad041b8688588974a8ecbc4bcb9a',
                displayValue: 'C0140',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0140',
                    value: 'C0140',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0140',
                    value: 'f76c759d1b8c3b04e467fcccdd4bcb43',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '391ded041b8688588974a8ecbc4bcb86',
                displayValue: 'C0145',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0145',
                    value: 'C0145',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0145',
                    value: 'b36c759d1b8c3b04e467fcccdd4bcb44',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Permanently inactive',
                    value: 'permanently_inactive',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '391ded041b8688588974a8ecbc4bcb81',
                displayValue: 'C0147',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0147',
                    value: 'C0147',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0147',
                    value: '7f6c759d1b8c3b04e467fcccdd4bcb44',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '651dad041b8688588974a8ecbc4bcb63',
                displayValue: 'C0148',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0148',
                    value: 'C0148',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0148',
                    value: '3b6c759d1b8c3b04e467fcccdd4bcb45',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '2d1dad041b8688588974a8ecbc4bcb7d',
                displayValue: 'C0150',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0150',
                    value: 'C0150',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0150',
                    value: 'f36c759d1b8c3b04e467fcccdd4bcb46',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '531da98c1b428c949bf099fabc4bcba0',
                displayValue: 'C0153',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0153',
                    value: 'C0153',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0153',
                    value: 'bf6c759d1b8c3b04e467fcccdd4bcb46',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '521d29041b8688588974a8ecbc4bcb50',
                displayValue: 'C0155',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0155',
                    value: 'C0155',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0155',
                    value: '7b6c759d1b8c3b04e467fcccdd4bcb47',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '5b1da98c1b428c949bf099fabc4bcb85',
                displayValue: 'C0156',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0156',
                    value: 'C0156',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0156',
                    value: '376c759d1b8c3b04e467fcccdd4bcb48',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '171da98c1b428c949bf099fabc4bcb55',
                displayValue: 'C0157',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0157',
                    value: 'C0157',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0157',
                    value: 'b76c759d1b8c3b04e467fcccdd4bcb55',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'd31da98c1b428c949bf099fabc4bcb7c',
                displayValue: 'C0164',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0164',
                    value: 'C0164',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0164',
                    value: '736c759d1b8c3b04e467fcccdd4bcb56',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '071da98c1b428c949bf099fabc4bcb2d',
                displayValue: 'C0165',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0165',
                    value: 'C0165',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0165',
                    value: '3f6c759d1b8c3b04e467fcccdd4bcb56',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '621da9041b8688588974a8ecbc4bcb55',
                displayValue: 'C0166',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0166',
                    value: 'C0166',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0166',
                    value: 'f76c759d1b8c3b04e467fcccdd4bcb57',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '5b1da98c1b428c949bf099fabc4bcb9d',
                displayValue: 'C0167',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0167',
                    value: 'C0167',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0167',
                    value: 'b36c759d1b8c3b04e467fcccdd4bcb58',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'ae1d61441b8688588974a8ecbc4bcb2e',
                displayValue: 'C0174',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0174',
                    value: 'C0174',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0174',
                    value: '7f6c759d1b8c3b04e467fcccdd4bcb58',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '4f1d698c1b428c949bf099fabc4bcbf7',
                displayValue: 'C0175',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0175',
                    value: 'C0175',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0175',
                    value: '3b6c759d1b8c3b04e467fcccdd4bcb59',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '621da9041b8688588974a8ecbc4bcb5a',
                displayValue: 'C0179',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0179',
                    value: 'C0179',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0179',
                    value: 'f36c759d1b8c3b04e467fcccdd4bcb5a',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '671de98c1b428c949bf099fabc4bcb14',
                displayValue: 'C0181',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0181',
                    value: 'C0181',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0181',
                    value: 'bf6c759d1b8c3b04e467fcccdd4bcb5a',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Permanently inactive',
                    value: 'permanently_inactive',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '9b1da98c1b428c949bf099fabc4bcb34',
                displayValue: 'C0188',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0188',
                    value: 'C0188',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0188',
                    value: '7b6c759d1b8c3b04e467fcccdd4bcb5b',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'db1da98c1b428c949bf099fabc4bcb79',
                displayValue: 'C0190',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0190',
                    value: 'C0190',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0190',
                    value: '376c759d1b8c3b04e467fcccdd4bcb5c',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '631da1441b8688588974a8ecbc4bcbf7',
                displayValue: 'C0192',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0192',
                    value: 'C0192',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0192',
                    value: 'ff6c759d1b8c3b04e467fcccdd4bcb5c',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '2f1de98c1b428c949bf099fabc4bcb16',
                displayValue: 'C0193',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0193',
                    value: 'C0193',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0193',
                    value: 'bb6c759d1b8c3b04e467fcccdd4bcb5d',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'd71da98c1b428c949bf099fabc4bcbc0',
                displayValue: 'C0194',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0194',
                    value: 'C0194',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0194',
                    value: '776c759d1b8c3b04e467fcccdd4bcb5e',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: 'a61d61441b8688588974a8ecbc4bcb2c',
                displayValue: 'C0195',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0195',
                    value: 'C0195',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'canary2',
                    value: 'canary2',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0195',
                    value: '336c759d1b8c3b04e467fcccdd4bcb5f',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '5e1d21441b8688588974a8ecbc4bcbad',
                displayValue: 'C0199',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0199',
                    value: 'C0199',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0199',
                    value: 'fb6c759d1b8c3b04e467fcccdd4bcb5f',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '0b1d698c1b428c949bf099fabc4bcbf3',
                displayValue: 'C0200',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0200',
                    value: 'C0200',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0200',
                    value: 'b76c759d1b8c3b04e467fcccdd4bcb60',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }, {
                className: 'x_aaro2_swf_store',
                uniqueId: '5b1da98c1b428c949bf099fabc4bcb59',
                displayValue: 'C0201',
                rowData: [{
                  columnName: 'name',
                  columnData: {
                    displayValue: 'C0201',
                    value: 'C0201',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'deployment_group',
                  columnData: {
                    displayValue: 'production',
                    value: 'production',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'department',
                  columnData: {
                    displayValue: 'C0201',
                    value: '736c759d1b8c3b04e467fcccdd4bcb61',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'state',
                  columnData: {
                    displayValue: 'Active',
                    value: 'active',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'daytime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'nighttime_speed',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }, {
                  columnName: 'interfaces_config',
                  columnData: {
                    displayValue: 'default',
                    value: 'default',
                    documentIdReference: null
                  }
                }],
                highlightedData: [],
                dbViewData: []
              }]
            }
          }
        }
      }
    }])
  }]
};
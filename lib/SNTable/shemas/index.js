"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tinyListModel = exports.referenceListModel = exports.listQueryModel = exports.choiceColumnQuery = void 0;
var choiceColumnQuery = "query($table: String!, $column: String!) {\n    GlideChoiceColumn_Query {\n          choices: getChoiceFields(table: $table, column: $column) {\n        rawValue,\n        displayValue,\n        isDisabled\n      }\n    }\n  }";
exports.choiceColumnQuery = choiceColumnQuery;

var fragments = function fragments(_ref) {
  var includeHighlightedData = _ref.includeHighlightedData;
  return "\n    fragment rowQuery on GlideListLayout_QueryRowType {\n      className\n      uniqueId\n      displayValue\n      rowData {\n        columnName\n        columnData {\n          displayValue\n          value\n          documentIdReference\n        }\n      }\n      ".concat(includeHighlightedData ? "highlightedData @include(if: $runHighlightedValuesQuery){\n          field\n          value\n          status\n          showIcon\n        }" : '', "\n      dbViewData {\n        tableKey\n        uniqueId\n      }\n    }\n    ");
};

var groupedRow = "\n    ... on GlideListLayout_GroupedQueryRowType {\n      displayValue\n      value\n      field\n      aggregateQuery\n      groupChoiceTable\n      count\n      query {\n        ...rowQuery\n      }\n    }\n  ";
var singleRow = "\n    ... on GlideListLayout_QueryRowType {\n      ...rowQuery\n    }";
var daData = "\n      toolTip\n      buttonType\n      recordSelectionRequired\n      confirmationRequired\n      confirmationMessage\n      assignmentId\n      table\n      view\n      name\n      icon\n      label\n      dependency\n      requiresValue\n      order\n      modelFieldRequired\n      groupBy\n      group\n      actionType\n      actionComponent: actionComponentTag\n      actionAttributes\n      actionDispatch\n      actionPayload\n      modelConditions {\n        field\n        operator\n        value\n        newQuery\n        or\n      }\n      payloadMap {\n        name\n        value\n      }\n  ";
var singleButton = "\n    ... on GlideListLayout_DeclarativeActionModelType {\n      ".concat(daData, "\n  }");
var groupedButton = "\n    ... on GlideListLayout_DeclarativeActionGroupType {\n      group\n      groupId\n      order\n      groupedActions {\n        ".concat(daData, "\n      }\n  }");
var listLayoutQueryFragment = "\n  fragment listLayoutQuery on GlideListLayout_ListLayoutQueryType {\n    encodedQuery\n    table\n    orderByColumn\n    orderByIsDescending\n    allSysIds\n    count\n    groupCount\n    isChoiceAggregate\n    isOmitCount\n    liveLists @include(if: $disableLiveList)\n  \n    omitCountData {\n      hasNextPage\n      omitCountRowCount\n    }\n    queryRows {\n      ".concat(groupedRow, "\n      ").concat(singleRow, "\n    }\n  }\n  ");
var referenceListLayoutQueryFragment = "\n  fragment referenceListLayoutQuery on GlideListLayout_ReferenceListLayoutQueryType {\n    encodedQuery\n    table\n    orderByColumn\n    orderByIsDescending\n    allSysIds\n    count\n    queryRows {\n      ".concat(groupedRow, "\n      ").concat(singleRow, "\n    }\n  }\n  ");

var commonQuery = function commonQuery() {
  var layoutQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'listLayoutQuery';
  return "\n  metadata @include(if: $runQuery) {\n    isDBView\n    isScriptableTable\n    isGrouped\n    groupedColumn\n    groupByDisplayValue\n  }\n  preferences @include(if: $runQuery) {\n    name\n    value\n  }\n  tiny\n  query\n  listTitle\n  listId\n  listAttributes @include(if: $runQuery)\n  allColumns @include(if: $runQuery) {\n    columnName\n    columnData {\n      label\n      internalType\n      isFilterable\n      isSortable\n      isGroupable\n      isChoice\n      elementSysId\n      tableName\n      isFirstNonRef\n    }\n    internalType\n  }\n  declarativeActions @include(if: $isDeclarativeActionsRequired){\n        ".concat(singleButton, "\n        ").concat(groupedButton, "\n  }\n  queryCategory\n  layoutQuery {\n    ...").concat(layoutQuery, "\n  }\n    ");
};

var tinyListModel = "\n    query($tiny: String!, $runQuery: Boolean!, $isDeclarativeActionsRequired:Boolean!, $runHighlightedValuesQuery:Boolean!, $limit: Int, $offset: Int, $disableLiveList: Boolean!) {\n      GlideListLayout_Query {\n        getTinyListLayout(tiny: $tiny, runQuery: $runQuery, isDeclarativeActionsRequired: $isDeclarativeActionsRequired, runHighlightedValuesQuery:$runHighlightedValuesQuery, limit:$limit, offset:$offset) {\n          ".concat(commonQuery('listLayoutQuery'), "\n        }\n      }\n    }\n    ").concat(fragments({
  includeHighlightedData: true
}), "\n    ").concat(listLayoutQueryFragment, "\n  ");
exports.tinyListModel = tinyListModel;
var listQueryModel = "\n  query ($columns: String, $listId: String, $maxColumns: Int, $limit: Int, $offset: Int, $groupedOffset: Int, $parentRecordSysId: String, $parentTable: String, $query: String, $workspaceConfigId: String, $relatedListName: String, $source: String, $runQuery: Boolean!,$table: String!, $view: String, $runHighlightedValuesQuery: Boolean!, $isDeclarativeActionsRequired: Boolean!, $tiny: String, $queryCategory: String, $listTitle: String, $disableLiveList: Boolean!) {\n    GlideListLayout_Query {\n      getListLayout(columns: $columns  listId: $listId, maxColumns: $maxColumns, limit: $limit, offset: $offset, groupedOffset: $groupedOffset, parentRecordSysId: $parentRecordSysId, parentTable: $parentTable,workspaceConfigId: $workspaceConfigId, query: $query, relatedListName: $relatedListName, source: $source, runQuery: $runQuery,table: $table, view: $view, runHighlightedValuesQuery: $runHighlightedValuesQuery, isDeclarativeActionsRequired: $isDeclarativeActionsRequired, tiny: $tiny, queryCategory: $queryCategory, listTitle: $listTitle) {\n          ".concat(commonQuery('listLayoutQuery'), "\n        }\n      }\n    }\n    ").concat(fragments({
  includeHighlightedData: true
}), "\n    ").concat(listLayoutQueryFragment, "\n    ");
exports.listQueryModel = listQueryModel;
var referenceListModel = "\n  query ($table: String!, $field: String! , $sysId: String, $encodedRecord: String, $serializedChanges: String, $chars:String!, $limit: Int!, $offset:Int!, $sortBy: String, $sortDescending: Boolean, $searchOperator: String, $query: String$skipRecent: Boolean,$sysparm_ref_override:String,$sysparm_additional_qual: String,$sysparm_exact_match: Boolean, $runQuery: Boolean!, $isDeclarativeActionsRequired: Boolean!, $tiny: String, $queryCategory: String, $ignoreRefQual: Boolean) {\n    GlideListLayout_Query {\n      getReferenceListLayout(table: $table,field: $field,sysId: $sysId,encodedRecord: $encodedRecord,serializedChanges: $serializedChanges,chars:$chars,limit: $limit,offset:$offset,sortBy: $sortBy,sortDescending: $sortDescending,searchOperator: $searchOperator,query: $query,skipRecent: $skipRecent,sysparm_ref_override:$sysparm_ref_override,sysparm_additional_qual: $sysparm_additional_qual,sysparm_exact_match: $sysparm_exact_match, runQuery: $runQuery, tiny: $tiny, queryCategory: $queryCategory, ignoreRefQual: $ignoreRefQual) {\n        ".concat(commonQuery('referenceListLayoutQuery'), "\n      }\n    }\n  }\n  ").concat(fragments({
  includeHighlightedData: false
}), "\n  ").concat(referenceListLayoutQueryFragment, "\n  ");
exports.referenceListModel = referenceListModel;
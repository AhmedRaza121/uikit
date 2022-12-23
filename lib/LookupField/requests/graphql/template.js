"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = void 0;
var query = "\nquery ($table: String!, $field: String!, $sys_id: String, $encodedRecord: String, $serializedChanges: String, $chars: String!, $ignoreRefQual: Glide_Boolean, $paginationLimit: Int, $paginationOffset: Int, $sortBy: String ) {\n  GlideLayout_Query {\n    referenceDataRetriever(\n      tableName: $table,\n      fieldName: $field,\n      encodedRecord: $encodedRecord,\n      serializedChanges: $serializedChanges,\n      pagination: {limit: $paginationLimit, offset: $paginationOffset},\n      ignoreTotalCount: true,\n      sysId: $sys_id, chars: $chars,\n      sysparm_ignore_ref_qual: $ignoreRefQual,\n      sortBy: $sortBy ) {\n      totalCount\n      recentCount\n      matchesCount\n      referenceRecentDataList {\n        sysId\n        referenceData {\n          key\n          value\n        }\n      }\n      referenceDataList {\n        sysId\n        referenceData {\n          key\n          value\n        }\n      }\n    }\n  }\n}\n";
exports.query = query;
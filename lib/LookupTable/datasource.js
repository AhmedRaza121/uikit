"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = void 0;
var query = "\nquery($table: String!, $searchFields: [String!]!, $value: String) {\n  xAaro2Swf {\n      referenceList {\n          getListItems(table: $table, searchFields: $searchFields, value: $value) {\n              sys_id,\n              value\n          }\n      }\n  }\n}\n";
exports.query = query;
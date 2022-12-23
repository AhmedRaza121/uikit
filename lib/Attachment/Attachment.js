"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

var _InfoMessage = _interopRequireDefault(require("../InfoMessage/InfoMessage"));

var _utils = require("./utils");

var _File = _interopRequireDefault(require("./InnerComponents/File/File"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _requests = require("./_requests");

var _Preloader = _interopRequireDefault(require("../Preloader/Preloader"));

var _Loader = _interopRequireDefault(require("./InnerComponents/Loader/Loader"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Attachment = /*#__PURE__*/React.forwardRef(function (props, _ref5) {
  var invalid = props.invalid,
      tableName = props.tableName,
      tableSysId = props.tableSysId,
      attachmentSysId = props.attachmentSysId,
      value = props.value,
      contentType = props.contentType,
      errorMessagesDelay = props.errorMessagesDelay,
      readonly = props.readonly,
      disabled = props.disabled,
      onValueChange = props.onValueChange,
      name = props.name,
      manageInvalid = props.manageInvalid,
      onInvalid = props.onInvalid,
      labelClassName = props.labelClassName,
      label = props.label,
      required = props.required,
      visible = props.visible,
      className = props.className,
      displayValue = props.displayValue,
      message = props.message,
      placeholder = props.placeholder;

  var _useState = (0, React.useState)(invalid),
      _useState2 = _slicedToArray(_useState, 2),
      isInvalid = _useState2[0],
      setIsInvalid = _useState2[1];

  var _useState3 = (0, React.useState)(value),
      _useState4 = _slicedToArray(_useState3, 2),
      file = _useState4[0],
      setFile = _useState4[1];

  var _useState5 = (0, React.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      focus = _useState6[0],
      setFocusSate = _useState6[1];

  var _useState7 = (0, React.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      systemMessages = _useState8[0],
      setSystemMessages = _useState8[1];

  var _useState9 = (0, React.useState)(tableName),
      _useState10 = _slicedToArray(_useState9, 2),
      tableNameState = _useState10[0],
      setTableNameState = _useState10[1];

  var _useState11 = (0, React.useState)(tableSysId),
      _useState12 = _slicedToArray(_useState11, 2),
      tableSysIdSate = _useState12[0],
      setTableSysIdState = _useState12[1];

  var _useState13 = (0, React.useState)(attachmentSysId),
      _useState14 = _slicedToArray(_useState13, 2),
      attachmentSysIdSate = _useState14[0],
      setAttachSysIdState = _useState14[1];

  var _useState15 = (0, React.useState)(true),
      _useState16 = _slicedToArray(_useState15, 2),
      activePreloader = _useState16[0],
      setActivePreloader = _useState16[1];

  var _useState17 = (0, React.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      activeDeleting = _useState18[0],
      setActiveDeleting = _useState18[1];

  var input = (0, React.useRef)(null);
  var invalidValue = manageInvalid ? invalid : isInvalid;

  var uploadNewFile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fileToUpload) {
      var errorMessages;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!file && !readonly && !disabled)) {
                _context.next = 9;
                break;
              }

              setBlur();
              errorMessages = (0, _utils.checkFileToUpload)(fileToUpload, props);

              if (!(errorMessages.length === 0)) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
              return uploadFile(fileToUpload);

            case 6:
              _context.next = 9;
              break;

            case 8:
              if (input !== null && input !== void 0 && input.current) {
                input.current.value = '';
                setSystemMessages(errorMessages);
                setActivePreloader(false);
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function uploadNewFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var uploadFile = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _requests.uploadRequest)(file, tableSysIdSate, tableNameState, errorMessagesDelay);

            case 2:
              result = _context2.sent;
              if (result.systemMessages) setSystemMessages(result.systemMessages);else {
                setSystemMessages([]);
                setFile(file);
                setAttachSysIdState(result.sys_id);
              }
              setActivePreloader(false);
              onValueChange(name, result.sys_id, result.file_name);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function uploadFile(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteFile = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              stopEvent(e);
              setActiveDeleting(true);
              _context3.next = 4;
              return (0, _requests.deleteRequest)(attachmentSysIdSate, errorMessagesDelay);

            case 4:
              result = _context3.sent;
              if (result !== null && result !== void 0 && result.systemMessages) setSystemMessages(result.systemMessages);else {
                setSystemMessages([]);
                setFile(undefined);
                setAttachSysIdState(undefined);
                if (input !== null && input !== void 0 && input.current) input.current.value = '';
              }
              setActiveDeleting(false);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteFile(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var downloadFile = function downloadFile(e) {
    stopEvent(e);
    if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, file.name);else {
      var a = document.createElement('a');
      var url = file.link ? file.link : URL.createObjectURL(file);
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  };

  var stopEvent = function stopEvent(e) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    e === null || e === void 0 ? void 0 : e.stopPropagation();
  };

  var setFocus = function setFocus(e) {
    stopEvent(e);
    if (!activePreloader && !activeDeleting && !disabled && !readonly) setFocusSate(true);
  };

  var setBlur = function setBlur(e) {
    stopEvent(e);
    setFocusSate(false);
  };

  var onInvalidEvent = function onInvalidEvent(event) {
    stopEvent(event);
    !manageInvalid && setIsInvalid(true);
    onInvalid({
      event: event
    });
  };

  var onChangeEvent = function onChangeEvent(e) {
    var _input$current;

    stopEvent(e);
    setActivePreloader(true);
    uploadNewFile(input === null || input === void 0 ? void 0 : (_input$current = input.current) === null || _input$current === void 0 ? void 0 : _input$current.files[0]);
  };

  var onDropEvent = function onDropEvent(e) {
    stopEvent(e);

    if (!activePreloader && !activeDeleting && !disabled && !readonly) {
      setActivePreloader(true);
      uploadNewFile(e.dataTransfer.files[0]);
    }
  };

  var containerClickedEvent = function containerClickedEvent(e) {
    if (!file && !activePreloader && !activeDeleting && !disabled && !readonly) {
      var _input$current2;

      setFocus(e);
      if (input !== null && input !== void 0 && input.current) input === null || input === void 0 ? void 0 : (_input$current2 = input.current) === null || _input$current2 === void 0 ? void 0 : _input$current2.click();
    }
  };

  (0, React.useEffect)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var result, file_name, size_bytes, content_type, download_link, _tableName, _tableSysId, sys_id;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!attachmentSysIdSate) {
              _context4.next = 5;
              break;
            }

            _context4.next = 3;
            return (0, _requests.downloadRequest)(attachmentSysIdSate, errorMessagesDelay);

          case 3:
            result = _context4.sent;
            if (result.systemMessages) setSystemMessages(result.systemMessages);else {
              file_name = result.file_name, size_bytes = result.size_bytes, content_type = result.content_type, download_link = result.download_link, _tableName = result.tableName, _tableSysId = result.tableSysId, sys_id = result.sys_id;
              setFile({
                name: file_name,
                size: size_bytes,
                type: content_type,
                link: download_link
              });
              setTableNameState(_tableName);
              setTableSysIdState(_tableSysId);
              setAttachSysIdState(sys_id);
            }

          case 5:
            setActivePreloader(false);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })), []);

  var renderLabel = function renderLabel() {
    var labelClasses = (0, _classnames["default"])(labelClassName, 'inp-label', {
      '--readonly': readonly
    });
    return label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
      className: labelClasses,
      required: required,
      invalid: invalidValue,
      label: label,
      htmlFor: name
    });
  };

  var renderPreloader = function renderPreloader() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preloader["default"], {
      count: 1,
      items: [{
        width: '100%',
        height: '50%',
        repeat: 3,
        styles: [{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%'
        }, {
          width: '7rem',
          height: '1rem'
        }, {
          width: '5rem',
          height: '0.5rem',
          marginTop: '1.7rem',
          marginLeft: '-7.1rem'
        }]
      }],
      height: "2.5rem",
      width: "100%",
      flexDirectionGeneral: "row",
      blur: "3rem",
      background: false,
      mainStyles: {
        margin: 0,
        padding: 0
      }
    });
  };

  var renderFileButton = function renderFileButton(icon, action) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
      icon: icon,
      variant: "inherit",
      size: "sm",
      className: (0, _classnames["default"])('file-button', className),
      customStyle: style,
      onClick: action,
      disabled: disabled
    });
  };

  var attachClasses = (0, _classnames["default"])('attach-container', {
    '--focus': focus,
    '--invalid': invalidValue,
    '--readonly': readonly,
    '--disabled': disabled
  });

  var _isFile = !activePreloader && file;

  var _isPlaceholder = !activePreloader && !file && placeholder;

  var _allMessages = message.concat(systemMessages);

  var _hasMassages = _allMessages.length > 0;

  return visible && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ref: function ref(el) {
        input.current = el;
        _ref5 = el;
      },
      type: "file",
      name: name,
      id: name,
      required: required,
      disabled: disabled,
      accept: contentType === null || contentType === void 0 ? void 0 : contentType.join(','),
      hidden: true,
      onInvalid: onInvalidEvent,
      onChange: onChangeEvent
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])('swf-attach-input', className),
      ref: _ref5,
      children: [renderLabel(), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: attachClasses,
        onDrop: onDropEvent,
        onDragEnter: setFocus,
        onDragOver: setFocus,
        onDragExit: setBlur,
        onDragLeave: setBlur,
        onClick: containerClickedEvent,
        children: [activeDeleting && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loader["default"], {
          actionName: "Deleting"
        }), activePreloader && renderPreloader(), _isFile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_File["default"], {
          displayValue: displayValue,
          file: file,
          children: !readonly && /*#__PURE__*/(0, _jsxRuntime.jsx)(_File["default"].End, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [renderFileButton('x', deleteFile, 'negative', {
                'font-size': '16px'
              }), renderFileButton('download', downloadFile, 'positive')]
            })
          })
        }), _isPlaceholder && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "attach-placeholder",
          children: placeholder
        })]
      }), _hasMassages && _allMessages.map(function (el, id) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], _objectSpread({}, el), id);
      })]
    })]
  });
});
Attachment.defaultProps = {
  disabled: false,
  invalid: false,
  manageInvalid: false,
  readonly: false,
  required: false,
  visible: true,
  className: {},
  onInvalid: function onInvalid() {
    return void 0;
  },
  onValueChange: function onValueChange() {
    return void 0;
  },
  labelClassName: {},
  message: [],
  errorMessagesDelay: 4000
};
Attachment.propTypes = {
  // status
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  visible: _propTypes["default"].bool,
  // events
  onInvalid: _propTypes["default"].func,
  onValueChange: _propTypes["default"].func,
  manageInvalid: _propTypes["default"].bool,
  // description
  contentType: _propTypes["default"].arrayOf(_propTypes["default"].string),
  extensions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  displayValue: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  label: _propTypes["default"].string,
  name: _propTypes["default"].string,
  maxAttachmentSize: _propTypes["default"].number,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    className: _propTypes["default"].object,
    iconSize: _propTypes["default"].number,
    delay: _propTypes["default"].number
  })),
  errorMessagesDelay: _propTypes["default"].number,
  // input data
  value: _propTypes["default"].object,
  tableSysId: _propTypes["default"].string,
  tableName: _propTypes["default"].string,
  attachmentSysId: _propTypes["default"].string,
  // classes
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  labelClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};
var _default = Attachment;
exports["default"] = _default;
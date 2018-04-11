/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.fetchInfoTeam = exports.FETCH_INFO_TEAM = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_INFO_TEAM = exports.FETCH_INFO_TEAM = 'FETCH_INFO_TEAM';\nvar fetchInfoTeam = exports.fetchInfoTeam = function fetchInfoTeam() {\n\treturn function () {\n\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n\t\t\tvar _ref2, data;\n\n\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t_context.next = 2;\n\t\t\t\t\t\t\treturn _axios2.default.get('http://api.football-data.org/v1/competitions/354/fixtures/?matchday=22');\n\n\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t_ref2 = _context.sent;\n\t\t\t\t\t\t\tdata = _ref2.data;\n\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: FETCH_INFO_TEAM,\n\t\t\t\t\t\t\t\tpayload: data\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\tcase 5:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee, undefined);\n\t\t}));\n\n\t\treturn function (_x) {\n\t\t\treturn _ref.apply(this, arguments);\n\t\t};\n\t}();\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Header = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = exports.Header = function Header() {\n\treturn _react2.default.createElement(\n\t\t'nav',\n\t\tnull,\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'nav-wrapper' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'ul',\n\t\t\t\t{ id: 'nav-mobile', className: 'left hide-on-med-and-down' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t\t{ to: '/' },\n\t\t\t\t\t\t'\\u0413\\u043B\\u0430\\u0432\\u043D\\u0430\\u044F'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t\t{ to: '/info' },\n\t\t\t\t\t\t'\\u0418\\u043D\\u0444\\u043E'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t{ to: '/', className: 'brand-logo right' },\n\t\t\t\t'React SSR'\n\t\t\t)\n\t\t)\n\t);\n};\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/containers/App.js":
/*!**************************************!*\
  !*** ./src/client/containers/App.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Header = __webpack_require__(/*! ../components/Header */ \"./src/client/components/Header.js\");\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n\tvar route = _ref.route;\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'container' },\n\t\t_react2.default.createElement(_Header.Header, null),\n\t\t(0, _reactRouterConfig.renderRoutes)(route.routes)\n\t);\n};\n\nexports.default = {\n\tcomponent: App,\n\tloadData: function loadData(_ref2) {\n\t\tvar dispatch = _ref2.dispatch;\n\t\treturn dispatch((0, _actions.fetchInfoTeam)());\n\t}\n};\n\n//# sourceURL=webpack:///./src/client/containers/App.js?");

/***/ }),

/***/ "./src/client/page/Test.js":
/*!*********************************!*\
  !*** ./src/client/page/Test.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Test = function Test() {\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t'TEST !!!'\n\t);\n};\n\nexports.default = {\n\tcomponent: Test\n};\n\n//# sourceURL=webpack:///./src/client/page/Test.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _teamInfoReducer = __webpack_require__(/*! ./teamInfoReducer */ \"./src/client/reducers/teamInfoReducer.js\");\n\nvar _teamInfoReducer2 = _interopRequireDefault(_teamInfoReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n\tteamInfo: _teamInfoReducer2.default\n});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/teamInfoReducer.js":
/*!************************************************!*\
  !*** ./src/client/reducers/teamInfoReducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\tvar _ref = arguments[1];\n\tvar type = _ref.type,\n\t    payload = _ref.payload;\n\n\tswitch (type) {\n\t\tcase _actions.FETCH_INFO_TEAM:\n\t\t\treturn payload;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/client/reducers/teamInfoReducer.js?");

/***/ }),

/***/ "./src/client/routes/index.js":
/*!************************************!*\
  !*** ./src/client/routes/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.routes = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(/*! ../containers/App */ \"./src/client/containers/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Test = __webpack_require__(/*! ../page/Test */ \"./src/client/page/Test.js\");\n\nvar _Test2 = _interopRequireDefault(_Test);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = exports.routes = [_extends({}, _App2.default, {\n\troutes: [_extends({}, _Test2.default, {\n\t\tpath: '/test'\n\t})]\n})];\n\n//# sourceURL=webpack:///./src/client/routes/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _renderTemplate = __webpack_require__(/*! ./renderTemplate */ \"./src/renderTemplate/index.js\");\n\nvar _renderTemplate2 = _interopRequireDefault(_renderTemplate);\n\nvar _store = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _routes = __webpack_require__(/*! ./client/routes */ \"./src/client/routes/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n\n\tvar promises = (0, _reactRouterConfig.matchRoutes)(_routes.routes, req.path).map(function (_ref) {\n\t\tvar route = _ref.route;\n\n\t\treturn route.loadData ? route.loadData(_store.store) : null;\n\t});\n\tPromise.all(promises).then(function () {\n\t\tvar context = {};\n\t\tvar content = (0, _renderTemplate2.default)(req, _store.store, context);\n\t\tres.send(content);\n\t});\n});\n\napp.listen(3000, function () {\n\tconsole.log('Listening port 3000');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/renderTemplate/index.js":
/*!*************************************!*\
  !*** ./src/renderTemplate/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _routes = __webpack_require__(/*! ../client/routes */ \"./src/client/routes/index.js\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store, context) {\n\tvar content = (0, _server.renderToString)(_react2.default.createElement(\n\t\t_reactRedux.Provider,\n\t\t{ store: store },\n\t\t_react2.default.createElement(\n\t\t\t_reactRouterDom.StaticRouter,\n\t\t\t{ location: req.path, context: context },\n\t\t\t(0, _reactRouterConfig.renderRoutes)(_routes.routes)\n\t\t)\n\t));\n\treturn '\\n\\t\\t<html>\\n\\t\\t\\t<head>\\n\\t\\t\\t\\t<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css\">\\n\\t\\t\\t</head>\\n\\t\\t\\t<body>\\n\\t\\t\\t\\t<div id=\"root\">' + content + '</div>\\n\\t\\t\\t\\t<script>window.INITIAL_STATE=' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\\n\\t\\t\\t\\t<script src=\"bundle.js\"></script>\\n\\t\\t\\t</body>\\n\\t\\t</html>\\n\\t';\n};\n\n//# sourceURL=webpack:///./src/renderTemplate/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.store = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducers = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = exports.store = (0, _redux.createStore)(_reducers2.default, {}, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });
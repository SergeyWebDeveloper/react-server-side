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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.fetchInfoClub = exports.FETCH_INFO_CLUB = exports.fetchInfoTeam = exports.FETCH_INFO_TEAM = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n_axios2.default.defaults.headers.common['X-Auth-Token'] = '1396067cb9b04bb8ae72da3196bae9af';\n\nvar URL = 'http://api.football-data.org/v1';\n\nvar FETCH_INFO_TEAM = exports.FETCH_INFO_TEAM = 'FETCH_INFO_TEAM';\nvar fetchInfoTeam = exports.fetchInfoTeam = function fetchInfoTeam() {\n\treturn function () {\n\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n\t\t\tvar _ref2, data;\n\n\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t_context.next = 2;\n\t\t\t\t\t\t\treturn _axios2.default.get(URL + '/competitions/354/teams');\n\n\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t_ref2 = _context.sent;\n\t\t\t\t\t\t\tdata = _ref2.data;\n\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: FETCH_INFO_TEAM,\n\t\t\t\t\t\t\t\tpayload: data\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\tcase 5:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee, undefined);\n\t\t}));\n\n\t\treturn function (_x) {\n\t\t\treturn _ref.apply(this, arguments);\n\t\t};\n\t}();\n};\n\nvar FETCH_INFO_CLUB = exports.FETCH_INFO_CLUB = 'FETCH_INFO_CLUB';\nvar fetchInfoClub = exports.fetchInfoClub = function fetchInfoClub(id) {\n\treturn function () {\n\t\tvar _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {\n\t\t\tvar _ref4, data;\n\n\t\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t_context2.next = 2;\n\t\t\t\t\t\t\treturn _axios2.default.get(URL + '/teams/' + id + '/fixtures');\n\n\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t_ref4 = _context2.sent;\n\t\t\t\t\t\t\tdata = _ref4.data;\n\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: FETCH_INFO_CLUB,\n\t\t\t\t\t\t\t\tpayload: data\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\tcase 5:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee2, undefined);\n\t\t}));\n\n\t\treturn function (_x2) {\n\t\t\treturn _ref3.apply(this, arguments);\n\t\t};\n\t}();\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

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

/***/ "./src/client/components/Team.js":
/*!***************************************!*\
  !*** ./src/client/components/Team.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Team = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Team = exports.Team = function Team(_ref) {\n\tvar team = _ref.team;\n\n\tvar splitHrefLink = team._links.self.href.split('/');\n\tvar numberTeam = splitHrefLink[splitHrefLink.length - 1];\n\treturn _react2.default.createElement(\n\t\t'li',\n\t\t{ className: 'collection-item avatar' },\n\t\t_react2.default.createElement('img', { src: team.crestUrl, alt: team.name, className: 'circle', width: 100 }),\n\t\t_react2.default.createElement(\n\t\t\t'span',\n\t\t\t{ className: 'title' },\n\t\t\t'\\u041A\\u043E\\u043C\\u0430\\u043D\\u0434\\u0430: ',\n\t\t\tteam.name\n\t\t),\n\t\t' ',\n\t\t_react2.default.createElement('br', null),\n\t\t_react2.default.createElement(\n\t\t\t'span',\n\t\t\tnull,\n\t\t\t'\\u0421\\u043E\\u043A\\u0440\\u0430\\u0449\\u0435\\u043D\\u043D\\u043E\\u0435 \\u0438\\u043C\\u044F: ',\n\t\t\tteam.shortName\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t_reactRouterDom.Link,\n\t\t\t{\n\t\t\t\tto: '/' + numberTeam,\n\t\t\t\tclassName: 'waves-effect right waves-light btn'\n\t\t\t},\n\t\t\t'\\u0420\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u044B \\u043A\\u043E\\u043C\\u0430\\u043D\\u0434\\u044B'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t_reactRouterDom.Link,\n\t\t\t{\n\t\t\t\tto: '/' + team.code + '-' + numberTeam,\n\t\t\t\tclassName: 'waves-effect right red btn'\n\t\t\t},\n\t\t\t'\\u0418\\u0433\\u0440\\u043E\\u043A\\u0438'\n\t\t)\n\t);\n};\n\nTeam.propTypes = {\n\tteam: _propTypes2.default.object.isRequired\n};\n\n//# sourceURL=webpack:///./src/client/components/Team.js?");

/***/ }),

/***/ "./src/client/components/TeamResult.js":
/*!*********************************************!*\
  !*** ./src/client/components/TeamResult.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.TeamResult = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TeamResult = exports.TeamResult = function TeamResult(_ref) {\n\tvar item = _ref.item;\n\n\treturn _react2.default.createElement(\n\t\t'li',\n\t\t{ className: 'collection-item' },\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'\\u0414\\u0430\\u0442\\u0430 \\u0438\\u0433\\u0440\\u044B: ',\n\t\t\titem.date\n\t\t),\n\t\titem.homeTeamName,\n\t\t' ',\n\t\titem.result.goalsHomeTeam,\n\t\t' : ',\n\t\titem.result.goalsAwayTeam,\n\t\t' ',\n\t\titem.awayTeamName\n\t);\n};\n\nTeamResult.propTypes = {\n\titem: _propTypes2.default.object.isRequired\n};\n\n//# sourceURL=webpack:///./src/client/components/TeamResult.js?");

/***/ }),

/***/ "./src/client/containers/App.js":
/*!**************************************!*\
  !*** ./src/client/containers/App.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Header = __webpack_require__(/*! ../components/Header */ \"./src/client/components/Header.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n\tvar route = _ref.route;\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'container' },\n\t\t_react2.default.createElement(_Header.Header, null),\n\t\t(0, _reactRouterConfig.renderRoutes)(route.routes)\n\t);\n};\n\nexports.default = {\n\tcomponent: App\n};\n\n//# sourceURL=webpack:///./src/client/containers/App.js?");

/***/ }),

/***/ "./src/client/page/CurrentResultTeam.js":
/*!**********************************************!*\
  !*** ./src/client/page/CurrentResultTeam.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _TeamResult = __webpack_require__(/*! ../components/TeamResult */ \"./src/client/components/TeamResult.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CurrentResultTeam = function (_Component) {\n\t_inherits(CurrentResultTeam, _Component);\n\n\tfunction CurrentResultTeam() {\n\t\t_classCallCheck(this, CurrentResultTeam);\n\n\t\treturn _possibleConstructorReturn(this, (CurrentResultTeam.__proto__ || Object.getPrototypeOf(CurrentResultTeam)).apply(this, arguments));\n\t}\n\n\t_createClass(CurrentResultTeam, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tthis.props.fetchInfoClub(this.props.match.params.id);\n\t\t}\n\t}, {\n\t\tkey: 'renderResult',\n\t\tvalue: function renderResult() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'ul',\n\t\t\t\t{ className: 'collection' },\n\t\t\t\t_lodash2.default.map(this.props.clubInfo.fixtures, function (item) {\n\t\t\t\t\treturn _react2.default.createElement(_TeamResult.TeamResult, { key: item.date, item: item });\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tObject.keys(this.props.clubInfo).length && this.renderResult()\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn CurrentResultTeam;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n\tvar clubInfo = _ref.clubInfo;\n\n\treturn { clubInfo: clubInfo };\n};\n\nexports.default = {\n\tcomponent: (0, _reactRedux.connect)(mapStateToProps, { fetchInfoClub: _actions.fetchInfoClub })(CurrentResultTeam),\n\tloadData: function loadData(_ref2, req) {\n\t\tvar dispatch = _ref2.dispatch;\n\t\treturn dispatch((0, _actions.fetchInfoClub)(req.url.slice(1)));\n\t}\n};\n\n//# sourceURL=webpack:///./src/client/page/CurrentResultTeam.js?");

/***/ }),

/***/ "./src/client/page/HomePage.js":
/*!*************************************!*\
  !*** ./src/client/page/HomePage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HomePage = function HomePage() {\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'center', style: { margin: '20px 0' } },\n\t\t_react2.default.createElement(\n\t\t\t'h1',\n\t\t\tnull,\n\t\t\t'React SSR - \\u0422\\u0435\\u0441\\u0442\\u043E\\u0432\\u043E\\u0435 \\u043F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u0435'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'h4',\n\t\t\tnull,\n\t\t\t'\\u041F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u0435 \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043A\\u0440\\u044B\\u0442\\u043E\\u0435 api.'\n\t\t)\n\t);\n};\n\nexports.default = {\n\tcomponent: HomePage\n};\n\n//# sourceURL=webpack:///./src/client/page/HomePage.js?");

/***/ }),

/***/ "./src/client/page/InfoPage.js":
/*!*************************************!*\
  !*** ./src/client/page/InfoPage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nvar _Team = __webpack_require__(/*! ../components/Team */ \"./src/client/components/Team.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar InfoPage = function (_Component) {\n\t_inherits(InfoPage, _Component);\n\n\tfunction InfoPage() {\n\t\t_classCallCheck(this, InfoPage);\n\n\t\treturn _possibleConstructorReturn(this, (InfoPage.__proto__ || Object.getPrototypeOf(InfoPage)).apply(this, arguments));\n\t}\n\n\t_createClass(InfoPage, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tthis.props.fetchInfoTeam();\n\t\t}\n\t}, {\n\t\tkey: 'renderInfo',\n\t\tvalue: function renderInfo() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'ul',\n\t\t\t\t{ className: 'collection' },\n\t\t\t\t_lodash2.default.map(this.props.teamInfo.teams, function (team) {\n\t\t\t\t\treturn _react2.default.createElement(_Team.Team, { key: team.code, team: team });\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ style: { margin: '25px 0' } },\n\t\t\t\tthis.renderInfo()\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn InfoPage;\n}(_react.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n\tvar teamInfo = _ref.teamInfo;\n\n\treturn { teamInfo: teamInfo };\n};\n\nexports.default = {\n\tcomponent: (0, _reactRedux.connect)(mapStateToProps, { fetchInfoTeam: _actions.fetchInfoTeam })(InfoPage),\n\tloadData: function loadData(_ref2) {\n\t\tvar dispatch = _ref2.dispatch;\n\t\treturn dispatch((0, _actions.fetchInfoTeam)());\n\t}\n};\n\n//# sourceURL=webpack:///./src/client/page/InfoPage.js?");

/***/ }),

/***/ "./src/client/page/NotFound.js":
/*!*************************************!*\
  !*** ./src/client/page/NotFound.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFound = function NotFound() {\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(\n\t\t\t'h1',\n\t\t\tnull,\n\t\t\t'\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C\\u0441\\u044F \\u043D\\u0430 ',\n\t\t\t_react2.default.createElement(\n\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t{ to: '/' },\n\t\t\t\t'\\u0433\\u043B\\u0430\\u0432\\u043D\\u0443\\u044E'\n\t\t\t)\n\t\t)\n\t);\n};\n\nexports.default = {\n\tcomponent: NotFound\n};\n\n//# sourceURL=webpack:///./src/client/page/NotFound.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _teamInfoReducer = __webpack_require__(/*! ./teamInfoReducer */ \"./src/client/reducers/teamInfoReducer.js\");\n\nvar _teamInfoReducer2 = _interopRequireDefault(_teamInfoReducer);\n\nvar _infoClubReducer = __webpack_require__(/*! ./infoClubReducer */ \"./src/client/reducers/infoClubReducer.js\");\n\nvar _infoClubReducer2 = _interopRequireDefault(_infoClubReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n\tteamInfo: _teamInfoReducer2.default,\n\tclubInfo: _infoClubReducer2.default\n});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/infoClubReducer.js":
/*!************************************************!*\
  !*** ./src/client/reducers/infoClubReducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\tvar _ref = arguments[1];\n\tvar type = _ref.type,\n\t    payload = _ref.payload;\n\n\tswitch (type) {\n\t\tcase _actions.FETCH_INFO_CLUB:\n\t\t\treturn payload;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/client/reducers/infoClubReducer.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.routes = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(/*! ../containers/App */ \"./src/client/containers/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _HomePage = __webpack_require__(/*! ../page/HomePage */ \"./src/client/page/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _InfoPage = __webpack_require__(/*! ../page/InfoPage */ \"./src/client/page/InfoPage.js\");\n\nvar _InfoPage2 = _interopRequireDefault(_InfoPage);\n\nvar _NotFound = __webpack_require__(/*! ../page/NotFound */ \"./src/client/page/NotFound.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nvar _CurrentResultTeam = __webpack_require__(/*! ../page/CurrentResultTeam */ \"./src/client/page/CurrentResultTeam.js\");\n\nvar _CurrentResultTeam2 = _interopRequireDefault(_CurrentResultTeam);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = exports.routes = [_extends({}, _App2.default, {\n\troutes: [_extends({}, _HomePage2.default, {\n\t\tpath: '/',\n\t\texact: true\n\t}), _extends({}, _InfoPage2.default, {\n\t\tpath: '/info'\n\t}), _extends({}, _CurrentResultTeam2.default, {\n\t\tpath: '/:id'\n\t}), _extends({}, _NotFound2.default, {\n\t\tpath: '*'\n\t})]\n})];\n\n//# sourceURL=webpack:///./src/client/routes/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _renderTemplate = __webpack_require__(/*! ./renderTemplate */ \"./src/renderTemplate/index.js\");\n\nvar _renderTemplate2 = _interopRequireDefault(_renderTemplate);\n\nvar _store = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _routes = __webpack_require__(/*! ./client/routes */ \"./src/client/routes/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n\n\tvar promises = (0, _reactRouterConfig.matchRoutes)(_routes.routes, req.path).map(function (_ref) {\n\t\tvar route = _ref.route;\n\n\t\treturn route.loadData ? route.loadData(_store.store, req) : null;\n\t});\n\tPromise.all(promises).then(function () {\n\t\tvar context = {};\n\t\tvar content = (0, _renderTemplate2.default)(req, _store.store, context);\n\t\tres.send(content);\n\t});\n});\n\napp.listen(3000, function () {\n\tconsole.log('Listening port 3000');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

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
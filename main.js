/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/home.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/pizza-bkgrnd.jpg */ \"./src/assets/images/pizza-bkgrnd.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Tangerine:wght@400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body {\\n  height: 100%; /* root, body, content height set at 100% for flex-grow */\\n}\\n\\nbody {\\n  min-height: 615px;\\n  font-family: 'Lato', sans-serif;\\n\\n  min-width: 300px;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\n#content {\\n  height: 100%; /* needed for flex-grow */\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: black;\\n  color: #ecc756;\\n  height: 10vh;\\n  min-height: 72px;\\n  padding: 10px;\\n}\\n#logo-img {\\n  height: auto;\\n  width: 118px;\\n  margin-top: 31px;\\n}\\n#logo-link:hover {\\n  transform: scale(1.02);\\n}\\n.nav-links {\\n  display: flex;\\n  gap: 20px;\\n  letter-spacing: 1.2px;\\n}\\n.nav-item:last-of-type {\\n  margin-right: 20px;\\n}\\n.nav-item:hover,\\n#github-link:hover {\\n  color: white;\\n}\\n\\nmain {\\n  flex: 1; /* main content will grow to fit space */\\n  display: flex;\\n  align-items: center;\\n  background-color: #1f1f1f; /* fallback color */\\n  background-image: \\n  linear-gradient(\\n    90deg,\\n      rgba(255, 255, 255, 0),\\n      rgba(50, 50, 50, 0.8)\\n    ),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover; \\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n#main-content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-family: 'Tangerine', cursive;\\n  width: 90vw;\\n  margin-top: -40px;\\n  gap: 30px;\\n}\\nh1 {\\n  font-family: 'Tangerine', cursive;\\n  font-size: 60px;\\n  font-weight: 700;\\n  color: #ecc756;\\n}\\n#title-span {\\n  font-size: 65px;\\n}\\nblockquote {\\n  display: flex;  \\n  flex-direction: column;\\n  gap: 6px;\\n  font-family: 'Lato', sans-serif;\\n  font-style: italic;\\n  font-size: 20px;\\n  color: white;\\n  max-width: 450px;\\n  line-height: 1.5;\\n}\\n.quote {\\n  text-align: justify;\\n}\\ncite {\\n  width: 100%;\\n  text-align: end;\\n  font-size: 18px;\\n}\\n\\nfooter {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 30px;\\n  background-color: #000000;\\n  height: 10vh;\\n  min-height: 72px;;\\n}\\n.media-link {\\n  margin: 3px;\\n}\\n.media-img:hover {\\n  transform: scale(1.1);\\n}\\n#credits {\\n  color: #ecc756;\\n  letter-spacing: 1.1px;\\n}\\n#github-logo {\\n  height: 24px;\\n  width: 24px;\\n  border-radius: 5px;\\n  margin-bottom: -4px;\\n}\\n#github-link {\\n  fill: #ecc756;\\n}\\n#github-link:hover {\\n  fill: white;\\n}\\n\\n\\n\\n\\n\\n\\n\\n@media (max-width: 570px) {\\n  #header {\\n    flex-direction: column;\\n    height: auto; /* contain contenys w/o cropping */\\n    min-height: auto;\\n    padding: 11px;\\n    gap: 11px;\\n  }\\n  #logo-link {\\n    height: 84px;\\n    width: 94px;\\n    overflow: hidden; /* hide image overflow */\\n  }\\n  #logo-img {\\n    object-fit: cover; /* crop image but preserve aspect ratio */\\n    height: 84px;\\n    width: 118px;\\n    object-position: -19px 2px;\\n    margin: 0;\\n  }\\n  .nav-links {\\n    font-size: 90%;\\n    width: 100%;\\n    justify-content: space-evenly;\\n  }\\n  .nav-item:last-of-type {\\n    margin: 0;\\n  }\\n\\n  main {\\n    display: block;\\n  }\\n  #main-content {\\n    width: 100%;\\n    padding: 18px;\\n    margin: 7vh 0 0;\\n    gap: 3vh;\\n  }\\n  h1 {\\n    font-size: 40px;\\n  }\\n  #title-span {\\n    font-size: 45px;\\n  } \\n  blockquote {\\n    font-size: 14px;\\n  }\\n  cite {\\n    font-size: 13px;\\n  }\\n\\n  footer {\\n    flex-direction: column;\\n    height: auto;\\n    min-height: auto;\\n    padding: 22px 0 15px;\\n    gap: 11px;\\n    font-size: 90%;\\n\\n  }\\n\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/home.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/story.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/story.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#story-container {\\n  font-family: 'Lato', sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* justify-content: center; */\\n  gap: 18px;\\n  width: 90vw;\\n  margin: auto;\\n  padding: 18px;\\n  background-color: #000;\\n}\\n\\n#story-heading {\\n  font-size: 65px;\\n}\\n\\n.story {\\n  /* background-color: white; */\\n  color: #fff;\\n  line-height: 1.2;\\n  font-size: 18px;\\n  text-align: justify;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/story.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/home.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/home.css?");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/reset.css?");

/***/ }),

/***/ "./src/styles/story.css":
/*!******************************!*\
  !*** ./src/styles/story.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_story_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./story.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/story.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_story_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_story_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_story_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_story_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/story.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_reviews_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/reviews.js */ \"./src/modules/reviews.js\");\n/* harmony import */ var _modules_story_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/story.js */ \"./src/modules/story.js\");\n// import createHome from './modules/home.js';\n\n\n\n\n\n(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n// displayReviews();\n// displayStory();\n\nconst pageLinks = document.querySelectorAll('a');\npageLinks.forEach((link) => {\n  link.addEventListener('click', (e) => {\n    console.log(e.target.id);\n\n    if (e.target.id = 'story') {\n      (0,_modules_story_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n  });\n});\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/restaurant-logo.png */ \"./src/assets/images/restaurant-logo.png\");\n/* harmony import */ var _assets_images_facebook_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/facebook-logo.svg */ \"./src/assets/images/facebook-logo.svg\");\n/* harmony import */ var _assets_images_instagram_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/instagram-logo.svg */ \"./src/assets/images/instagram-logo.svg\");\n/* harmony import */ var _assets_images_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/twitter-logo.svg */ \"./src/assets/images/twitter-logo.svg\");\n/* harmony import */ var _assets_images_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/linkedin-logo.svg */ \"./src/assets/images/linkedin-logo.svg\");\n/* harmony import */ var _assets_images_github_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/github-logo.svg */ \"./src/assets/images/github-logo.svg\");\n/* harmony import */ var _assets_images_github_logo_white_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/github-logo-white.svg */ \"./src/assets/images/github-logo-white.svg\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/home.css */ \"./src/styles/home.css\");\n \n\n\n\n\n\n\n\n\n\n\n\n// export default function createHome() {\n//   const content = document.querySelector('#content');\n\n//   //**** header content\n//   const header = document.createElement('header');\n//   header.id = 'header';\n//   header.setAttribute('class', 'test');\n\n//   const logoLink = document.createElement('a');\n//   logoLink.id = 'logo-link';\n//   logoLink.href = '#content';\n\n//   const logoImg = document.createElement('img');\n//   logoImg.id = 'logo-img';\n//   logoImg.src = restaurantLogo;\n//   logoImg.alt = 'restaurant logo';\n\n//   logoLink.appendChild(logoImg);\n\n//   const navLinks = document.createElement('ul');\n//   navLinks.classList.add('nav-links');\n\n//   header.append(logoLink, navLinks);\n\n//   // attributes for nav anchor elements\n//   let navAnchorAttrs = [\n//     {\n//       'id': 'story',\n//       'href': '#story',\n//       'textContent': 'Our Story'\n//     },\n//     {\n//       'id': 'menu',\n//       'href': '#menu',\n//       'textContent': 'Menu'\n//     },\n//     {\n//       'id': 'locations',\n//       'href': '#locations',\n//       'textContent': 'Locations & Hours'\n//     },\n//     {\n//       'id': 'contact',\n//       'href': '#contact',\n//       'textContent': 'Contact'\n//     }\n//   ];\n//   for (let i = 0; i < navAnchorAttrs.length; i++) {\n//     const navItem = document.createElement('li');\n//     navItem.classList.add('nav-item');\n\n//     const navAnchor = document.createElement('a');\n//     setAttrs(navAnchor, navAnchorAttrs[i]);\n    \n//     navItem.append(navAnchor);\n//     navLinks.append(navItem);\n//   }\n\n//   //**** page main content\n//   const main = document.createElement('main');\n//   const mainContent = document.createElement('div');\n//   mainContent.id = 'main-content';\n//   main.appendChild(mainContent);\n  \n//   const title = document.createElement('h1');\n//   title.textContent = 'Pizzeria ';\n//   mainContent.append(title);\n\n//   const titleSpan = document.createElement('span');\n//   titleSpan.id = 'title-span';\n//   titleSpan.textContent = 'Michelangiolesca';\n//   title.appendChild(titleSpan);\n\n//   // restaurant review contents\n//   let reviews = [\n//     {\n//       'class': 'quote',\n//       'textContent': '\"Roses are red, violets are blue, this pizza is delicious, I hope there\\'s leftovers too!\"',\n//       'author': 'Chef Boyardee'\n//     },\n//     {\n//       'class': 'quote',\n//       'textContent': '\"When your tummy is very hungry, go to Michelangiolesca for some pizza that\\'s extra yummy!\"',\n//       'author': 'Chef Girlardee'\n//     }\n//   ]\n//   for (let i = 0; i < reviews.length; i++) {\n//     const quoteContainer = document.createElement('blockquote');\n\n//     let para = document.createElement('p');\n//     setReview(para, reviews[i], quoteContainer);\n\n//     mainContent.append(quoteContainer);\n//   }\n\n//   //**** footer contents\n//   const footer = document.createElement('footer');\n\n//   const mediaContainer = document.createElement('div');\n//   mediaContainer.id = 'media-container';\n\n//   const anchorAttrs = [\n//     {\n//       'href': 'https://www.facebook.com/'\n//     },\n//     {\n//       'href': 'https://www.instagram.com/'\n//     },\n//     {\n//       'href': 'https://www.twitter.com/'\n//     },\n//     {\n//       'href': 'https://www.linkedin.com/'\n//     }\n//   ]\n//   const imageAttrs = [\n//     {\n//       'alt': 'facebook logo',\n//       'src': facebookLogo\n//     },\n//     {\n//       'alt': 'instagram logo',\n//       'src': instagramLogo\n//     },\n//       {\n//       'alt': 'twitter logo',\n//       'src': twitterLogo\n//     },\n//       {\n//       'alt': 'linkedin logo',\n//       'src': linkedinLogo\n//     },\n//   ]\n\n//   // add media container and media links\n//   for (let i = 0; i < imageAttrs.length; i++) {\n//     const mediaLink = document.createElement('a');\n//     mediaLink.classList.add('media-link');\n//     mediaLink.target = '_blank';\n//     setAttrs(mediaLink, anchorAttrs[i]);\n\n//     const mediaImg = document.createElement('img');\n//     mediaImg.classList.add('media-img');\n//     setAttrs(mediaImg, imageAttrs[i]);\n//     mediaLink.appendChild(mediaImg);\n\n\n//     mediaContainer.append(mediaLink);\n\n//   }\n\n//   // add credit container and link to github\n//   const creditContainer = document.createElement('div');\n//   creditContainer.id = 'credits';\n\n//   const githubLink = document.createElement('a');\n//   githubLink.id = 'github-link';\n//   githubLink.href = 'https://github.com/dukdukg00se/restaurant-page';\n//   githubLink.textContent = 'Created by dukdukg00se 2021';\n\n//   const githubImage = document.createElement('img');\n//   githubImage.src = githubLogo;\n//   githubImage.alt = '';\n//   githubImage.id = 'github-logo';\n\n//   // when using img tag can't manipulate svg tag e.g. change fill attribute\n//   // instead change img src for same effect    \n//   githubLink.addEventListener('mouseenter', function() {\n//     githubImage.src = githubLogoWhite;\n//   });\n//   githubLink.addEventListener('mouseleave', function() {\n//     githubImage.src = githubLogo;\n//   });\n\n//   githubLink.append(githubImage);\n//   creditContainer.append(githubLink);\n//   footer.append(mediaContainer, creditContainer);\n//   content.append(header, main, footer);\n// }\n\n\n// function setAttrs(elmnt, attrs) {\n//   for (let key in attrs) {\n//     key === 'textContent' ? elmnt.textContent = attrs.textContent : elmnt.setAttribute(key, attrs[key]);\n//   }\n// }\n\n// function setReview(elmnt, attrs, elmntContainer) {\n//   let cite;\n//   for (let key in attrs) {\n//     if (key === 'textContent') {\n//       elmnt.textContent = attrs.textContent;\n//     } else if (key === 'author') {\n//       cite = document.createElement('cite');\n//       cite.textContent = '-- ' + attrs.author;\n//     } else {\n//       elmnt.setAttribute(key, attrs[key]);\n//     }\n//   }\n//   elmntContainer.append(elmnt, cite);\n// }\n\n\n\n/************************************************** \nRefactor above createHome function and break into more small, more manageable functions \n***************************************************/\n\nconst createHeader = () => {\n  const content = document.querySelector('#content');\n  const header = document.createElement('header');\n  header.id = 'header';\n\n  const logoLink = document.createElement('a');\n  logoLink.id = 'logo-link';\n  logoLink.href = '#content';\n\n  const logoImg = document.createElement('img');\n  logoImg.id = 'logo-img';\n  logoImg.src = _assets_images_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n  logoImg.alt = 'restaurant logo';\n\n  const navLinks = document.createElement('ul');\n  navLinks.classList.add('nav-links');\n\n  // array of attributes for nav anchor elements\n  let navAnchorAttrs = [\n    {\n      'id': 'story',\n      'href': '#story',\n      'textContent': 'Our Story'\n    },\n    {\n      'id': 'menu',\n      'href': '#menu',\n      'textContent': 'Menu'\n    },\n    {\n      'id': 'locations',\n      'href': '#locations',\n      'textContent': 'Locations & Hours'\n    },\n    {\n      'id': 'contact',\n      'href': '#contact',\n      'textContent': 'Contact'\n    }\n  ];\n  for (let i = 0; i < navAnchorAttrs.length; i++) {\n    const navItem = document.createElement('li');\n    navItem.classList.add('nav-item');\n\n    const navAnchor = document.createElement('a');\n    setAttrs(navAnchor, navAnchorAttrs[i]);\n    \n    navItem.append(navAnchor);\n    navLinks.append(navItem);\n  }\n\n  logoLink.appendChild(logoImg);\n  header.append(logoLink, navLinks);\n  content.appendChild(header);\n};\n\n\nconst createMain = () => {\n  const main = document.createElement('main');  \n\n  content.appendChild(main);\n};\n\n\nconst createFooter = () => {\n  const content = document.querySelector('#content');\n  const footer = document.createElement('footer');\n\n    // add media container and media links\n  const mediaContainer = document.createElement('div');\n  mediaContainer.id = 'media-container';\n\n  const mediaAnchorAttrs = [\n    {\n      'href': 'https://www.facebook.com/'\n    },\n    {\n      'href': 'https://www.instagram.com/'\n    },\n    {\n      'href': 'https://www.twitter.com/'\n    },\n    {\n      'href': 'https://www.linkedin.com/'\n    }\n  ]\n  const mediaImageAttrs = [\n    {\n      'alt': 'facebook logo',\n      'src': _assets_images_facebook_logo_svg__WEBPACK_IMPORTED_MODULE_1__\n    },\n    {\n      'alt': 'instagram logo',\n      'src': _assets_images_instagram_logo_svg__WEBPACK_IMPORTED_MODULE_2__\n    },\n      {\n      'alt': 'twitter logo',\n      'src': _assets_images_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_3__\n    },\n      {\n      'alt': 'linkedin logo',\n      'src': _assets_images_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_4__\n    },\n  ]\n\n  for (let i = 0; i < mediaImageAttrs.length; i++) {\n    const mediaLink = document.createElement('a');\n    mediaLink.classList.add('media-link');\n    mediaLink.target = '_blank';\n    setAttrs(mediaLink, mediaAnchorAttrs[i]);\n\n    const mediaImg = document.createElement('img');\n    mediaImg.classList.add('media-img');\n    setAttrs(mediaImg, mediaImageAttrs[i]);\n\n    mediaLink.appendChild(mediaImg);\n    mediaContainer.appendChild(mediaLink);\n  }\n\n  // add credit container and link to github\n  const creditContainer = document.createElement('div');\n  creditContainer.id = 'credits';\n\n  const githubLink = document.createElement('a');\n  githubLink.id = 'github-link';\n  githubLink.href = 'https://github.com/dukdukg00se/restaurant-page';\n  githubLink.textContent = 'Created by dukdukg00se 2021';\n\n  const githubImage = document.createElement('img');\n  githubImage.src = _assets_images_github_logo_svg__WEBPACK_IMPORTED_MODULE_5__;\n  githubImage.alt = '';\n  githubImage.id = 'github-logo';\n\n  // wan't to change img bkgrnd color on hover\n  // but can't change svg fill attr when using img tag to insert svg\n  // change img src for similar effect\n  githubLink.addEventListener('mouseenter', function() {\n    githubImage.src = _assets_images_github_logo_white_svg__WEBPACK_IMPORTED_MODULE_6__;\n  });\n  githubLink.addEventListener('mouseleave', function() {\n    githubImage.src = _assets_images_github_logo_svg__WEBPACK_IMPORTED_MODULE_5__;\n  });\n\n  githubLink.appendChild(githubImage);\n  creditContainer.appendChild(githubLink);\n  footer.append(mediaContainer, creditContainer);\n  content.appendChild(footer);\n};\n\n\nfunction setAttrs(elmnt, attrs) {\n  for (let key in attrs) {\n    key === 'textContent' ? elmnt.textContent = attrs.textContent : elmnt.setAttribute(key, attrs[key]);\n  }\n}\n\n\nconst createHome = () => {\n  createHeader();\n  createMain();\n  createFooter();\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/reviews.js":
/*!********************************!*\
  !*** ./src/modules/reviews.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayReviews = () => {\n  const main = document.querySelector('main');\n  \n  const mainContent = document.createElement('div');\n  mainContent.id = 'main-content';\n  \n  const title = document.createElement('h1');\n  title.textContent = 'Pizzeria ';\n  mainContent.append(title);\n\n  const titleSpan = document.createElement('span');\n  titleSpan.id = 'title-span';\n  titleSpan.textContent = 'Michelangiolesca';\n  title.appendChild(titleSpan);\n\n  // restaurant review contents\n  let reviews = [\n    {\n      'textContent': '\"Roses are red, violets are blue, this pizza is delicious, I hope there\\'s leftovers too!\"',\n      'author': 'Chef Boyardee'\n    },\n    {\n      'textContent': '\"When your tummy is very hungry, go to Michelangiolesca for some pizza that\\'s extra yummy!\"',\n      'author': 'Chef Girlardee'\n    }\n  ]\n  for (let i = 0; i < reviews.length; i++) {\n    const quoteContainer = document.createElement('blockquote');\n\n    let para = document.createElement('p');\n    para.classList.add('quote');\n    setReview(para, reviews[i], quoteContainer);\n\n    mainContent.appendChild(quoteContainer);\n  }\n  main.appendChild(mainContent);\n}\n\nfunction setReview(elmnt, attrs, elmntContainer) {\n  let cite;\n  for (let key in attrs) {\n    if (key === 'textContent') {\n      elmnt.textContent = attrs.textContent;\n    } else if (key === 'author') {\n      cite = document.createElement('cite');\n      cite.textContent = '-- ' + attrs.author;\n    } else {\n      elmnt.setAttribute(key, attrs[key]);\n    }\n  }\n  elmntContainer.append(elmnt, cite);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayReviews);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/reviews.js?");

/***/ }),

/***/ "./src/modules/story.js":
/*!******************************!*\
  !*** ./src/modules/story.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_story_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/story.css */ \"./src/styles/story.css\");\n\n\nconst displayStory = () => {\n  const main = document.querySelector('main');\n\n  const storyContainer = document.createElement('div');\n  storyContainer.id = 'story-container';\n\n  const title = document.createElement('h1');\n  title.id = 'story-heading';\n  title.textContent = 'Our Story';\n\n  const paraOne = document.createElement('p');\n  paraOne.classList.add('story');\n  paraOne.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Lorem ipsum dolor sit amet consectetur. Morbi tristique senectus et netus et malesuada fames ac. Sed faucibus turpis in eu mi bibendum neque egestas. Nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt eget nullam non nisi est sit amet facilisis magna. Pretium aenean pharetra magna ac placerat vestibulum. Ultricies leo integer malesuada nunc vel risus. Nec nam aliquam sem et tortor consequat id porta. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. In fermentum posuere urna nec tincidunt praesent semper feugiat. Massa id neque aliquam vestibulum morbi blandit cursus risus. In est ante in nibh. Scelerisque varius morbi enim nunc faucibus a.';\n  \n  const paraTwo = document.createElement('p');\n  paraTwo.classList.add('story');\n  paraTwo.textContent = 'Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Amet nisl purus in mollis nunc. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Dignissim diam quis enim lobortis scelerisque fermentum dui. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. In nulla posuere sollicitudin aliquam ultrices sagittis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Sit amet cursus sit amet dictum. Nisl tincidunt eget nullam non nisi est. Donec enim diam vulputate ut pharetra sit amet aliquam. Felis imperdiet proin fermentum leo vel orci porta. At auctor urna nunc id cursus metus. Consectetur lorem donec massa sapien faucibus. Lobortis mattis aliquam faucibus purus. Duis at tellus at urna condimentum.';\n\n  storyContainer.append(title, paraOne, paraTwo);\n  main.append(storyContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayStory);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/story.js?");

/***/ }),

/***/ "./src/assets/images/facebook-logo.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/facebook-logo.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"232619ef722b6c33f212.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/facebook-logo.svg?");

/***/ }),

/***/ "./src/assets/images/github-logo-white.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/github-logo-white.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"471a24cf7bc8cece141d.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/github-logo-white.svg?");

/***/ }),

/***/ "./src/assets/images/github-logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/github-logo.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"447ee25cefb88d1ab05a.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/github-logo.svg?");

/***/ }),

/***/ "./src/assets/images/instagram-logo.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/instagram-logo.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"260a781222941670cb13.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/instagram-logo.svg?");

/***/ }),

/***/ "./src/assets/images/linkedin-logo.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/linkedin-logo.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4c088e1f7180cae48bc.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/linkedin-logo.svg?");

/***/ }),

/***/ "./src/assets/images/pizza-bkgrnd.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/pizza-bkgrnd.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6bf9a20f6b6232c351c1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/pizza-bkgrnd.jpg?");

/***/ }),

/***/ "./src/assets/images/restaurant-logo.png":
/*!***********************************************!*\
  !*** ./src/assets/images/restaurant-logo.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"95d1008f6f62a89a0d1d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/restaurant-logo.png?");

/***/ }),

/***/ "./src/assets/images/twitter-logo.svg":
/*!********************************************!*\
  !*** ./src/assets/images/twitter-logo.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a6a8c499f1a9394f170.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/twitter-logo.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n\n\n\nconsole.log('Testing');\n(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// function component() {\n//   const element = document.createElement('div');\n//   element.textContent = 'Hello World';\n//   return element;\n// }\n\n// const test = document.getElementById('content');\n// console.log(test);\n\n// test.appendChild(component());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/restaurant-logo.png */ \"./src/assets/images/restaurant-logo.png\");\n \n\nfunction createHome() {\n  const content = document.querySelector('#content');\n\n  const header = document.createElement('header');\n  header.id = 'header';\n\n  const logoLink = document.createElement('a');\n  logoLink.id = 'logo-link';\n  logoLink.href = '#content';\n\n  const logoImg = document.createElement('img');\n  logoImg.id = 'logo-img';\n  logoImg.src = _assets_images_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n  logoImg.alt = 'restaurant logo';\n\n  const navLinks = document.createElement('ul');\n  navLinks.classList.add('nav-links');\n\n\n  // let data = [\n  //   {\n  //     'id': 'story',\n  //     'href': '#story',\n  //   },\n  //   {\n  //     'id': 'menu',\n  //     'href': '#menu',\n  //   },\n  //   {\n  //     'id': 'locations',\n  //     'href': '#locations',\n  //   },\n  //   {\n  //     'id': 'contact',\n  //     'href': '#contact',\n  //   }\n  // ];\n  // let navAnchorText = [\n  //   'Our Story',\n  //   'Menu',\n  //   'Location & Hours',\n  //   'Contact'\n  // ]\n\n  // for (let i = 0; i < data.length; i++) {\n  //   const navItem = document.createElement('li');\n  //   navItem.classList.add('nav-item');\n\n  //   const navAnchor = document.createElement('a');\n  //   setAttributes(navAnchor, data[i]);\n  //   navAnchor.textContent = navAnchorText[i];\n    \n  //   navItem.append(navAnchor);\n\n  //   navLinks.append(navItem);\n  // }\n\n  let navAnchorAttrs = [\n    {\n      'id': 'story',\n      'href': '#story',\n      'textContent': 'Our Story'\n    },\n    {\n      'id': 'menu',\n      'href': '#menu',\n      'textContent': 'Menu'\n    },\n    {\n      'id': 'locations',\n      'href': '#locations',\n      'textContent': 'Locations & Hours'\n    },\n    {\n      'id': 'contact',\n      'href': '#contact',\n      'textContent': 'Contact'\n    }\n  ];\n\n  for (let i = 0; i < navAnchorAttrs.length; i++) {\n    const navItem = document.createElement('li');\n    navItem.classList.add('nav-item');\n\n    const navAnchor = document.createElement('a');\n    setAttributes(navAnchor, navAnchorAttrs[i]);\n    \n    navItem.append(navAnchor);\n    navLinks.append(navItem);\n  }\n\n  logoLink.appendChild(logoImg);\n  header.append(logoLink, navLinks);\n  content.appendChild(header);\n}\n\n\n\nfunction setAttributes(el, attrs) {\n  for (let key in attrs) {\n    key === 'textContent' ? el.textContent = attrs.textContent : el.setAttribute(key, attrs[key]);\n  }\n}\n\n// function setAttributes(el, attrs) {\n//   for (let key in attrs) {\n//     if (key === 'textContent') {\n//       el.textContent = attrs.textContent;\n//     } else {\n//       el.setAttribute(key, attrs[key]);\n//     }\n//   }\n// }\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/assets/images/restaurant-logo.png":
/*!***********************************************!*\
  !*** ./src/assets/images/restaurant-logo.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"95d1008f6f62a89a0d1d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/restaurant-logo.png?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
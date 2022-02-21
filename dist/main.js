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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/restaurant-logo.png */ \"./src/assets/images/restaurant-logo.png\");\n/* harmony import */ var _assets_images_facebook_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/facebook-logo.svg */ \"./src/assets/images/facebook-logo.svg\");\n/* harmony import */ var _assets_images_instagram_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/instagram-logo.svg */ \"./src/assets/images/instagram-logo.svg\");\n/* harmony import */ var _assets_images_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/twitter-logo.svg */ \"./src/assets/images/twitter-logo.svg\");\n/* harmony import */ var _assets_images_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/linkedin-logo.svg */ \"./src/assets/images/linkedin-logo.svg\");\n \n\n\n\n\n\n\nfunction createHome() {\n  const content = document.querySelector('#content');\n\n  //**** header content\n  const header = document.createElement('header');\n  header.id = 'header';\n\n  const logoLink = document.createElement('a');\n  logoLink.id = 'logo-link';\n  logoLink.href = '#content';\n\n  const logoImg = document.createElement('img');\n  logoImg.id = 'logo-img';\n  logoImg.src = _assets_images_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n\n\n\n  logoImg.alt = 'restaurant logo';\n  logoLink.appendChild(logoImg);\n\n  const navLinks = document.createElement('ul');\n  navLinks.classList.add('nav-links');\n\n  header.append(logoLink, navLinks);\n\n  // attributes for nav anchor elements\n  let navAnchorAttrs = [\n    {\n      'id': 'story',\n      'href': '#story',\n      'textContent': 'Our Story'\n    },\n    {\n      'id': 'menu',\n      'href': '#menu',\n      'textContent': 'Menu'\n    },\n    {\n      'id': 'locations',\n      'href': '#locations',\n      'textContent': 'Locations & Hours'\n    },\n    {\n      'id': 'contact',\n      'href': '#contact',\n      'textContent': 'Contact'\n    }\n  ];\n  for (let i = 0; i < navAnchorAttrs.length; i++) {\n    const navItem = document.createElement('li');\n    navItem.classList.add('nav-item');\n\n    const navAnchor = document.createElement('a');\n    setAttributes(navAnchor, navAnchorAttrs[i]);\n    \n    navItem.append(navAnchor);\n    navLinks.append(navItem);\n  }\n\n  //**** page main content\n  const main = document.createElement('main');\n  const mainContent = document.createElement('div');\n  mainContent.id = 'main-content';\n  main.appendChild(mainContent);\n  \n  const title = document.createElement('h1');\n  title.textContent = 'Pizzeria ';\n  mainContent.append(title);\n\n  const titleSpan = document.createElement('span');\n  titleSpan.id = 'title-span';\n  titleSpan.textContent = 'Michelangiolesca';\n  title.appendChild(titleSpan);\n\n  // restaurant review contents\n  let reviews = [\n    {\n      'class': 'quote',\n      'textContent': '\"Roses are red, violets are blue, this pizza is delicious, I hope there\\'s leftovers too!\"',\n      'author': 'Chef Boyardee'\n    },\n    {\n      'class': 'quote',\n      'textContent': '\"When your tummy is very hungry, go to Michelangiolesca for some pizza that\\'s extra yummy!\"',\n      'author': 'Chef Girlardee'\n    }\n  ]\n  for (let i = 0; i < reviews.length; i++) {\n    const quoteContainer = document.createElement('blockquote');\n\n    let para = document.createElement('p');\n    setReview(para, reviews[i], quoteContainer);\n\n    mainContent.append(quoteContainer);\n  }\n\n  //**** footer contents\n  const footer = document.createElement('footer');\n\n  const mediaContainer = document.createElement('div');\n\n  const anchorAttrs = [\n    {\n      'href': 'https://www.facebook.com/'\n    },\n    {\n      'href': 'https://www.instagram.com/'\n    },\n    {\n      'href': 'https://www.twitter.com/'\n    },\n    {\n      'href': 'https://www.linkedin.com/'\n    }\n  ]\n  const imageAttrs = [\n    {\n      'alt': 'facebook logo',\n      'src': _assets_images_facebook_logo_svg__WEBPACK_IMPORTED_MODULE_1__\n    },\n    {\n      'alt': 'instagram logo',\n      'src': _assets_images_instagram_logo_svg__WEBPACK_IMPORTED_MODULE_2__\n    },\n      {\n      'alt': 'twitter logo',\n      'src': _assets_images_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_3__\n    },\n      {\n      'alt': 'linkedin logo',\n      'src': _assets_images_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_4__\n    },\n  ]\n\n  // add media container and media links\n  for (let i = 0; i < imageAttrs.length; i++) {\n    const mediaLink = document.createElement('a');\n    mediaLink.classList.add('media-link');\n    mediaLink.target = '_blank';\n    setAttributes(mediaLink, anchorAttrs[i]);\n\n    const mediaImg = document.createElement('img');\n    setAttributes(mediaImg, imageAttrs[i]);\n    mediaLink.appendChild(mediaImg);\n\n\n    mediaContainer.append(mediaLink);\n\n  }\n\n  // add credit container and link to github\n\n\n\n  footer.appendChild(mediaContainer);\n\n  content.append(header, main, footer);\n}\n\n\nfunction setAttributes(elmnt, attrs) {\n  for (let key in attrs) {\n    key === 'textContent' ? elmnt.textContent = attrs.textContent : elmnt.setAttribute(key, attrs[key]);\n  }\n}\n\nfunction setReview(elmnt, attrs, elmntContainer) {\n  let cite;\n  for (let key in attrs) {\n    if (key === 'textContent') {\n      elmnt.textContent = attrs.textContent;\n    } else if (key === 'author') {\n      cite = document.createElement('cite');\n      cite.textContent = '-- ' + attrs.author;\n    } else {\n      elmnt.setAttribute(key, attrs[key]);\n    }\n  }\n  elmntContainer.append(elmnt, cite);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/assets/images/facebook-logo.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/facebook-logo.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"232619ef722b6c33f212.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/facebook-logo.svg?");

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
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin: 0;\\n    border: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\nhtml, body {\\n    width: 100%;\\n    height: 100%;\\n}\\n\\nbody{\\n    display: grid;\\n    grid-template-rows: 2fr 10fr 1fr;\\n}\\n\\n.content{\\n    display: grid;\\n    grid-template-columns: 1fr 8fr;\\n}\\n\\n.heading, .footer{\\n    background-color: #d6cbd3;\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.body-content{\\n    background-color:  #96897f\\n}\\n\\n.nav-bar-content{\\n    background-color: #625750\\n}\\n\\n.title-header{\\n    font-size: 3.5vw;\\n    margin-left: 1vw;\\n}\\n\\n.todo-form-container{\\n    position:fixed;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%) scale(0);\\n    transition: 200ms ease-in-out;\\n    border: 1px solid black;\\n    border-radius: 10px;\\n    z-index: 10;\\n    background-color: white;\\n    width: 500px;\\n    max-width: 80%;\\n}\\n\\n.todo-form-container.active{\\n    transform: translate(-50%, -50%) scale(1);\\n}\\n\\n.form-header{\\n    padding: 10px 15px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    border-bottom: 1px solid black;\\n}\\n.form-header .title{\\n    font-size: 1.25rem;\\n    font-weight: bold;\\n}\\n.form-header .close-button{\\n    cursor: pointer;\\n    border: none;\\n    outline: none;\\n    background: none;\\n    font-size: 1.25rem;\\n    font-weight: bold;\\n}\\n\\n.form-body {\\n    padding: 10px;\\n}\\n\\n#overlay{\\n    position: fixed;\\n    opacity: 0; \\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    background-color: rgb(0, 0 , 0, .5);\\n    pointer-events: none;\\n    transition: 200ms ease-in-out;\\n}\\n\\n#overlay.active {\\n    pointer-events: all;\\n    opacity: 1;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOMHandler.js":
/*!***************************!*\
  !*** ./src/DOMHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoDiv\": () => (/* binding */ createTodoDiv),\n/* harmony export */   \"findSelectedProjectInStorage\": () => (/* binding */ findSelectedProjectInStorage),\n/* harmony export */   \"saveAndRenderList\": () => (/* binding */ saveAndRenderList),\n/* harmony export */   \"selectedProjectId\": () => (/* binding */ selectedProjectId)\n/* harmony export */ });\n/* harmony import */ var _todoLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLogic */ \"./src/todoLogic.js\");\n/* harmony import */ var _htmlTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlTemplate */ \"./src/htmlTemplate.js\");\n\n\n\nconst bodyContent = document.querySelector('.body-content')\n\nfunction createTodoDiv(todoObject){\n    \n    const todoWrapper = document.createElement('div')\n    todoWrapper.dataset.todoId = `${todoObject.originID}`\n    todoWrapper.classList.add('todo-wrapper')\n    bodyContent.insertBefore(todoWrapper, bodyContent.firstChild)\n\n    const todoTitle = document.createElement('div')\n    todoTitle.dataset.todoId = `${todoObject.originID}`;\n    todoTitle.classList.add('todo-title')\n    todoTitle.textContent = `${todoObject.title}`\n    todoWrapper.appendChild(todoTitle)\n\n    const todoDescription = document.createElement('div')\n    todoDescription.dataset.todoId = `${todoObject.originID}`;\n    todoDescription.classList.add('todo-descritpion')\n    todoDescription.textContent = `${todoObject.description}`\n    todoWrapper.appendChild(todoDescription)\n\n    const todoDate = document.createElement('div')\n    todoDate.dataset.todoId = `${todoObject.originID}`;\n    todoDate.classList.add('todo-date')\n    todoDate.textContent = `${todoObject.date}`\n    todoWrapper.appendChild(todoDate)\n\n    const removeTodoButton = document.createElement('button')\n    removeTodoButton.dataset.todoId = `${todoObject.originID}`\n    removeTodoButton.classList.add('todo-remove-button')\n    removeTodoButton.textContent = 'Remove me'\n    todoWrapper.appendChild(removeTodoButton)\n    // removeTodoButton.addEventListener('click', todoObject.removeTodo(todoArray))\n}\n\nfunction getFirstChild(){\n    let firstChild = document.querySelector('div.body-content').firstChild\n    return firstChild;\n}\n\n \nconst listContainer = document.querySelector('[data-project-list]')\nconst newProjectInput = document.querySelector('[data-new-project-input]')\nconst projectForm = document.querySelector('[data-project-form]')\nlet selectedProjectId = localStorage.getItem(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_SELECTED_PROJECT_KEY)\nconst defaultTodoProject = document.querySelector('.default-todo')\n\n\nprojectForm.addEventListener('submit', e=>{\n    e.preventDefault()\n    if(newProjectInput.value == null || newProjectInput.value =='') return\n    \n    let projectName = newProjectInput.value;\n    const newProject = new _todoLogic__WEBPACK_IMPORTED_MODULE_0__.project(projectName)\n    _todoLogic__WEBPACK_IMPORTED_MODULE_0__.projectList.push(newProject)\n    saveAndRenderList()\n    newProjectInput.value =''\n})\n\nfunction saveAndRenderList(){\n    saveList()\n    renderList()\n}\nfunction saveList (){\n    localStorage.setItem(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.projectList))\n    if(localStorage.getItem(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_SELECTED_PROJECT_KEY) === null ||\n    localStorage.getItem(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_SELECTED_PROJECT_KEY) == 0){\n        localStorage.setItem(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_SELECTED_PROJECT_KEY,\n             defaultTodoProject.dataset.projectId)\n    }else {\n        localStorage.setItem(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_SELECTED_PROJECT_KEY, selectedProjectId)\n    }\n}\nfunction renderList(){\n    clearElement(listContainer)\n    if(selectedProjectId == 0) defaultTodoProject.classList.add('selected')\n    _todoLogic__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach(project =>{\n        const projectElement = document.createElement('li')\n        projectElement.classList.add('project-title')\n        projectElement.dataset.projectId = project.id\n        projectElement.innerText = project.name\n        if(project.id == selectedProjectId){\n            defaultTodoProject.classList.remove('selected')\n            projectElement.classList.add('selected')\n        }\n        listContainer.appendChild(projectElement)\n    })\n}\n\nfunction clearElement(element){\n    while(element.firstChild){\n        element.firstChild.remove()\n    }\n}\n\ndefaultTodoProject.addEventListener('click', e=>{\n    if(e.target.classList.contains('selected')) return\n    selectedProjectId = e.target.dataset.projectId\n    let previouslySelectedElement = document.querySelector('.selected')\n    previouslySelectedElement.classList.remove('selected')\n    e.target.classList.add('selected')\n    saveAndRenderList()\n}) \n\nlistContainer.addEventListener('click', e=>{\n    selectedProjectId = e.target.dataset.projectId\n    console.log({selectedProjectId}, _todoLogic__WEBPACK_IMPORTED_MODULE_0__.projectList)\n    // generateProjectDOM(findSelectedProjectInStorage())\n    saveAndRenderList()\n})\n\nfunction findSelectedProjectInStorage(){\n    let indexOfProjectInArray = _todoLogic__WEBPACK_IMPORTED_MODULE_0__.projectList.findIndex(project => \n        project.id == selectedProjectId\n    )\n    console.log(indexOfProjectInArray)\n    let currentProjectInStorage = _todoLogic__WEBPACK_IMPORTED_MODULE_0__.projectList[indexOfProjectInArray]\n    return currentProjectInStorage\n}\n\n\n\n/* function addTodoToSelectedProject(target){\n    let selectedProjectID = target.dataset.projectId;\n    console.log(selectedProjectID)\n    for (let i in localStorage) {\n        let projectObject = JSON.parse(localStorage.getItem(i))\n\n    }\n} */\n   \n\n//# sourceURL=webpack://to-do-list/./src/DOMHandler.js?");

/***/ }),

/***/ "./src/formHandler.js":
/*!****************************!*\
  !*** ./src/formHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateInput\": () => (/* binding */ dateInput),\n/* harmony export */   \"descriptionInput\": () => (/* binding */ descriptionInput),\n/* harmony export */   \"submitButton\": () => (/* binding */ submitButton),\n/* harmony export */   \"titleInput\": () => (/* binding */ titleInput)\n/* harmony export */ });\n/* harmony import */ var _todoLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLogic */ \"./src/todoLogic.js\");\n/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHandler */ \"./src/DOMHandler.js\");\n\n\n\nconst titleInput = document.querySelector('#todo-title')\nconst descriptionInput = document.querySelector('#todo-description')\nconst dateInput = document.querySelector('input#todo-date')\nconst submitButton = document.querySelector('.submit-button')\n\nconst openFormButtons = document.querySelectorAll('[data-form-target]')\nconst closeFormButtons = document.querySelectorAll('[data-close-button]')\nconst overlay = document.getElementById('overlay')\n\nsubmitButton.addEventListener('click', (e)=>{\n    if(!titleInput.value || !descriptionInput.value ||\n         !dateInput.value) return;\n         const newTodo = new _todoLogic__WEBPACK_IMPORTED_MODULE_0__.todo(_DOMHandler__WEBPACK_IMPORTED_MODULE_1__.selectedProjectId,titleInput.value, descriptionInput.value,\n             dateInput.value) \n             console.log(newTodo) \n         addNewTodo(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.todoArray, newTodo)\n         ;(0,_DOMHandler__WEBPACK_IMPORTED_MODULE_1__.createTodoDiv)(newTodo)  \n         clearForm(submitButton)\n         closeForm(e.target.closest('.todo-form-container'))\n    \n})\n\n\nopenFormButtons.forEach(button => {\n    button.addEventListener('click', ()=>{\n        const form = document.querySelector(button.dataset.formTarget)\n        openForm(form)\n    })\n})\n\ncloseFormButtons.forEach(button => {\n    button.addEventListener('click', ()=>{\n        const form = button.closest('.todo-form-container')\n        closeForm(form)\n    })\n})\n\nfunction openForm(form){\n    if (form == null) return\n    form.classList.add('active')\n    overlay.classList.add('active')\n}\n\nfunction closeForm(form){\n    if (form == null) return\n    form.classList.remove('active')\n    overlay.classList.remove('active')\n}\n\nfunction addNewTodo(defaultArray, newTodo){\n        if(_DOMHandler__WEBPACK_IMPORTED_MODULE_1__.selectedProjectId == 0) defaultArray.push(newTodo)\n        else {\n            (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_1__.findSelectedProjectInStorage)().todos.push(newTodo)\n            console.log(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.projectList)\n        }\n}\n\n\nfunction clearForm(button){\n    const inputContainers = Array.from(button.closest('div').querySelector('fieldset').children)\n    inputContainers.forEach((div) => {\n        Array.from(div.querySelectorAll('input')).forEach((input) =>{ //Collects all input within all divs\n            input.value = ''\n        })\n    })\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/formHandler.js?");

/***/ }),

/***/ "./src/htmlTemplate.js":
/*!*****************************!*\
  !*** ./src/htmlTemplate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHTMLTemplate\": () => (/* binding */ createHTMLTemplate),\n/* harmony export */   \"generateProjectDOM\": () => (/* binding */ generateProjectDOM)\n/* harmony export */ });\n/* harmony import */ var _todoLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLogic */ \"./src/todoLogic.js\");\n// import { submitButton } from \"./formHandler\";\n\n\n\nconst createHTMLTemplate = (() => {\n    const body = document.querySelector('body')\n\n    const createHeader = (() => {\n        const heading = document.createElement('div')\n        heading.classList.add('heading')\n        body.appendChild(heading)\n    })();\n    \n    const populateHeader = (() => {\n        const title = document.createElement('div')\n        title.classList.add('title-header')\n        title.textContent = \"Todo list\"\n    \n        document.querySelector('.heading').appendChild(title)\n    })()\n\n    const createContent = (() => {\n        const content = document.createElement('div')\n        content.classList.add('content')\n        body.appendChild(content)\n        \n        const populateContent = (() => {\n            const navBar = document.createElement('div')\n            navBar.classList.add('nav-bar-content')\n            content.appendChild(navBar)\n\n            const bodyContent = document.createElement('div')\n            bodyContent.classList.add('body-content')\n            content.appendChild(bodyContent)\n\n            const addTodoButton = document.createElement('button')\n            addTodoButton.classList.add('add-todo-button')\n            addTodoButton.dataset.formTarget= '.todo-form-container'\n            addTodoButton.textContent = 'new todo'\n            bodyContent.appendChild(addTodoButton)\n        })();\n    })();\n\n    const populateNavBar = (() => {\n\n        const projectForm = document.createElement('form')\n        projectForm.dataset.projectForm ='';\n        document.querySelector('.nav-bar-content').appendChild(projectForm)\n        \n        const newProjectInput = document.createElement('input')\n        newProjectInput.dataset.newProjectInput =''\n        newProjectInput.type = 'text'\n        newProjectInput.placeholder = 'new Project'\n        projectForm.appendChild(newProjectInput)\n    \n        const defaultProject = document.createElement('div')\n        defaultProject.classList.add('default-todo')\n        defaultProject.classList.add('project-title')\n        defaultProject.dataset.projectId = `${0}`\n        defaultProject.textContent = \"Today's Todos\"\n        document.querySelector('.nav-bar-content').appendChild(defaultProject)\n\n        const projectList = document.createElement('ul')\n        projectList.classList.add('project-list')\n        projectList.dataset.projectList =''\n        document.querySelector('.nav-bar-content').appendChild(projectList)\n    })();\n\n    const createFooter = (() =>{\n        const footer = document.createElement('div')\n        footer.classList.add('footer')\n        body.appendChild(footer)\n\n        const populateFooter= (() =>{\n            const footerTitle = document.createElement('div')\n            footerTitle.classList.add('footer-title')\n            footerTitle.textContent ='Made by Deepspacediver'\n        \n            document.querySelector('.footer').appendChild(footerTitle)\n        })()\n    })();\n})();\n\nfunction generateProjectDOM(selectedProject){\n    clearProjectDOM(document.querySelector('.project-container'))\n    /* const projectTodoContainer = document.createElement('div')\n    projectTodoContainer.dataset.projectId = `${selectedProject.id}`\n    projectTodoContainer.classList.add('project-container')\n\n    \n    document.querySelector('.body-content').appendChild(projectTodoContainer)\n\n    selectedProject.todos.forEach(todo => {\n        const todoContainer = document.createElement('ul')\n        todoContainer.classList.add('todo-container')\n        todoContainer.dataset.projectId = `${selectedProject.id}`\n        todoContainer.dataset.originID = `${todo.originID}`\n        todoContainer.innerText ='yoooo'\n        projectTodoContainer.appendChild(todoContainer)\n    }) */\n}\nfunction clearProjectDOM(container){\n    if(!container || !container.firstChild) return\n    while(container.firstChild) {\n        container.firstChild.remove()\n        console.log('removed')\n    }\n    container.remove()\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/htmlTemplate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _htmlTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlTemplate */ \"./src/htmlTemplate.js\");\n/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHandler */ \"./src/DOMHandler.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formHandler */ \"./src/formHandler.js\");\n\n\n\n\n\nwindow.addEventListener('load', (0,_DOMHandler__WEBPACK_IMPORTED_MODULE_1__.saveAndRenderList)())\n// createInputForTodo()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/todoLogic.js":
/*!**************************!*\
  !*** ./src/todoLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOCAL_STORAGE_PROJECT_KEY\": () => (/* binding */ LOCAL_STORAGE_PROJECT_KEY),\n/* harmony export */   \"LOCAL_STORAGE_SELECTED_PROJECT_KEY\": () => (/* binding */ LOCAL_STORAGE_SELECTED_PROJECT_KEY),\n/* harmony export */   \"project\": () => (/* binding */ project),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"todo\": () => (/* binding */ todo),\n/* harmony export */   \"todoArray\": () => (/* binding */ todoArray)\n/* harmony export */ });\n\nlet todoArray = []\nlet LOCAL_STORAGE_PROJECT_KEY  = 'todo.projects'\nlet LOCAL_STORAGE_SELECTED_PROJECT_KEY  = 'todo.selectedProjectId'\nlet projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];\nclass todo{\n    constructor(projectId,title, description, date, ){\n        this.originID = Date.now()\n        this.projectId = projectId;\n        this.title = title\n        this.description = description;\n        this.date = date;\n    }\n    get id(){\n        return this.originID\n    }\n\n    removeTodo(){\n        console.log(this)\n         let id = this.dataset.todoId //button.data-id\n        let indexOfTodoInArray = todoArray.findIndex(object => object.originID == id)\n        todoArray.splice(indexOfTodoInArray, 1)\n        \n        let pageElements = Array.from(document.querySelectorAll(`[data-id=\"${this.dataset.id}\"]`))\n        pageElements.forEach((element) =>{\n            element.remove()\n        })  \n    }\n}\n\nclass project{\n    constructor(name){\n        this.name = name\n        this.id = Date.now()\n        this.todos = []\n    }\n}\n\n\n\n\n    \n/* export function createTodo(titleInput, descriptionInput, dateInput){\n     const newTodo = new todo(titleInput, descriptionInput, dateInput)\n     return newTodo;\n \n}*/\n\n//# sourceURL=webpack://to-do-list/./src/todoLogic.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
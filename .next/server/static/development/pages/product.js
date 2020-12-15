module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Product/AddProductToCart.js":
/*!************************************************!*\
  !*** ./components/Product/AddProductToCart.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Education\\Web-development\\MERN\\MERN Stack - The Complete Guide\\components\\Product\\AddProductToCart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AddProductToCart() {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "number",
    min: "1",
    placeholder: "Quantity",
    value: 1,
    action: {
      color: "orange",
      content: "Add to Cart",
      icon: "plus cart"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (AddProductToCart);

/***/ }),

/***/ "./components/Product/ProductAttributes.js":
/*!*************************************************!*\
  !*** ./components/Product/ProductAttributes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Education\\Web-development\\MERN\\MERN Stack - The Complete Guide\\components\\Product\\ProductAttributes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function ProductAttributes({
  description,
  _id
}) {
  const [modal, setModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  async function handleDelete() {
    const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__["default"]}/api/product`;
    const payload = {
      params: {
        _id
      }
    };
    await axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(url, payload);
    router.push("/");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "About this product"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, description), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    icon: "trash alternate outline",
    color: "red",
    content: "Delete Product",
    onClick: () => setModal(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    open: modal,
    dimmer: "blurring",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Confirm Delete"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Are you sure you want to delete this product?")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setModal(false),
    content: "Cancel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    negative: true,
    icon: "trash",
    labelPosition: "right",
    content: "Delete",
    onClick: handleDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductAttributes);

/***/ }),

/***/ "./components/Product/ProductSummary.js":
/*!**********************************************!*\
  !*** ./components/Product/ProductSummary.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddProductToCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProductToCart */ "./components/Product/AddProductToCart.js");
var _jsxFileName = "D:\\Education\\Web-development\\MERN\\MERN Stack - The Complete Guide\\components\\Product\\ProductSummary.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProductSummary({
  name,
  mediaUrl,
  _id,
  price,
  sku
}) {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Image, {
    size: "medium",
    src: mediaUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "$", price), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "SKU: ", sku)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Extra, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_AddProductToCart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    productId: _id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductSummary);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Product_ProductSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Product/ProductSummary */ "./components/Product/ProductSummary.js");
/* harmony import */ var _components_Product_ProductAttributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Product/ProductAttributes */ "./components/Product/ProductAttributes.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");

var _jsxFileName = "D:\\Education\\Web-development\\MERN\\MERN Stack - The Complete Guide\\pages\\product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Product({
  product
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Product_ProductSummary__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, product, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx(_components_Product_ProductAttributes__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, product, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
}

Product.getInitialProps = async ({
  query: {
    _id
  }
}) => {
  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__["default"]}/api/product`;
  const payload = {
    params: {
      _id
    }
  };
  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, payload);
  return {
    product: response.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl =  false ? undefined : "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/product.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Education\Web-development\MERN\MERN Stack - The Complete Guide\pages\product.js */"./pages/product.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=product.js.map
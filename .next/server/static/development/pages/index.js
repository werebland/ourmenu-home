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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/Chris/Projects/ourmenu-home/components/Footer.jsx";




var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.footer.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "sc-1janywv-0"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"]);
var FooterText = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({
  displayName: "Footer__FooterText",
  componentId: "sc-1janywv-1"
})({
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  '& svg': {
    verticalAlign: 'middle'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_4__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], styled_system__WEBPACK_IMPORTED_MODULE_4__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"]);
var FooterLinks = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Footer__FooterLinks",
  componentId: "sc-1janywv-2"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], styled_system__WEBPACK_IMPORTED_MODULE_4__["flexbox"]);
var FooterLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "Footer__FooterLink",
  componentId: "sc-1janywv-3"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_4__["border"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"]);

var Footer = function Footer(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterWrapper, {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    bg: "blue",
    color: "black",
    p: "16px 24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterText, {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "black",
    display: "block",
    mb: "8px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\xA9 2019 Bland Marketing Agency. Made with ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), " in Halifax."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLinks, {
    display: "flex",
    flexDirection: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/privacy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLink, {
    fontSize: "1rem",
    fontWeight: "regular",
    color: "black",
    borderBottom: "1px solid",
    mr: "8px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Privacy")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/terms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLink, {
    fontSize: "1rem",
    fontWeight: "regular",
    color: "black",
    borderBottom: "1px solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Terms"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_animated_burgers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-animated-burgers */ "react-animated-burgers");
/* harmony import */ var react_animated_burgers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_animated_burgers__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/Chris/Projects/ourmenu-home/components/Nav.jsx";








var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__NavWrapper",
  componentId: "sc-1t1rhnt-0"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"]);
var Alert = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__Alert",
  componentId: "sc-1t1rhnt-1"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_9__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["position"]);
var AlertText = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.span.withConfig({
  displayName: "Nav__AlertText",
  componentId: "sc-1t1rhnt-2"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_9__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"]);
var AlertAction = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.a.withConfig({
  displayName: "Nav__AlertAction",
  componentId: "sc-1t1rhnt-3"
})({
  cursor: 'pointer'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__NavBar",
  componentId: "sc-1t1rhnt-4"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_9__["typography"]);
var NavBrand = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__NavBrand",
  componentId: "sc-1t1rhnt-5"
})({
  cursor: 'pointer'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__NavLinks",
  componentId: "sc-1t1rhnt-6"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"]);
var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.a.withConfig({
  displayName: "Nav__NavLink",
  componentId: "sc-1t1rhnt-7"
})({
  textDecoration: 'none',
  cursor: 'pointer'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"]);
var NavSled = react_pose__WEBPACK_IMPORTED_MODULE_10___default.a.div({
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -128,
    opacity: 0
  }
});
var NavOverlay = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__NavOverlay",
  componentId: "sc-1t1rhnt-8"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var NavCTAContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.form.withConfig({
  displayName: "Nav__NavCTAContainer",
  componentId: "sc-1t1rhnt-9"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"]);
var NavCTAInput = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.input.withConfig({
  displayName: "Nav__NavCTAInput",
  componentId: "sc-1t1rhnt-10"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["border"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var NavCTAButton = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.input.withConfig({
  displayName: "Nav__NavCTAButton",
  componentId: "sc-1t1rhnt-11"
})({
  boxSizing: 'border-box',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ':hover': {
    backgroundColor: '#fff',
    color: '#1a1a1a'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["border"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var NavToggle = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__NavToggle",
  componentId: "sc-1t1rhnt-12"
})(styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["border"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var StyledHamburger = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(react_animated_burgers__WEBPACK_IMPORTED_MODULE_12__["HamburgerSpin"]).withConfig({
  displayName: "Nav__StyledHamburger",
  componentId: "sc-1t1rhnt-13"
})(["& div span{border-radius:1px !important;background-color:", ";}& div span::before{border-radius:1px !important;background-color:", ";}& div span::after{border-radius:1px !important;background-color:", ";}"], function (props) {
  return props.color;
}, function (props) {
  return props.color;
}, function (props) {
  return props.color;
});

var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Nav, _Component);

  function Nav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).call(this, props));
    _this.state = {
      isOpen: false,
      email: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
        pathname: '/request-demo',
        query: {
          email: this.state.email
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavWrapper, {
        position: "fixed",
        width: "100vw",
        zIndex: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Alert, {
        width: "100%",
        height: "48px",
        bg: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pl: ['16px', '24px', '56px'],
        pr: ['16px', '24px', '56px'],
        position: "relative",
        zIndex: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(AlertText, {
        fontSize: "1rem",
        fontWeight: "bold",
        mr: "16px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "We're in Halifax. Let us buy you a beer."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(AlertAction, {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "Contact us"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavBar, {
        position: "relative",
        zIndex: "88",
        width: "100%",
        height: "128px",
        bg: this.props.inverted ? 'black' : this.props.transparent ? 'blue' : 'white',
        display: "flex",
        pt: "24px",
        pb: "24px",
        pl: ['16px', '24px', '56px'],
        pr: ['16px', '24px', '56px'],
        alignItems: "center",
        justifyContent: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavBrand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        width: "72px",
        height: "72px",
        viewBox: "0 0 72 72",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Page-1",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Landing-Page",
        transform: "translate(-64.000000, -26.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Group-49",
        transform: "translate(64.000000, 26.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        id: "Fill-1",
        fill: this.props.inverted ? "#fff" : "#1a1a1a",
        points: "0 72 72 72 72 0 0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Group-48",
        transform: "translate(5.400000, 42.450000)",
        fill: this.props.inverted ? "#1a1a1a" : "#fff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M6.1004925,8.527665 C7.4671425,8.527665 8.4575925,7.53564 8.4575925,6.146715 C8.4575925,4.73799 7.4077425,3.745965 6.1004925,3.745965 C4.7736675,3.745965 3.7238175,4.73799 3.7238175,6.146715 C3.7238175,7.53564 4.6744425,8.527665 6.1004925,8.527665 M6.1202925,0.75009 C9.4874175,0.75009 12.1811175,2.972415 12.1811175,6.146715 C12.1811175,9.28164 9.6260175,11.52354 6.1202925,11.52354 C2.4561675,11.52354 6.74999992e-05,9.28164 6.74999992e-05,6.146715 C6.74999992e-05,2.972415 2.6937675,0.75009 6.1202925,0.75009",
        id: "Fill-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M16.4992725,5.888955 C16.4992725,7.892805 17.0340975,8.66658 18.4999725,8.66658 C19.9653975,8.66658 20.5002225,7.892805 20.5002225,5.888955 L20.5002225,1.04763 L24.0059475,1.04763 L24.0059475,6.74193 C24.0059475,10.154505 22.3026975,11.52363 18.4999725,11.52363 C14.6967975,11.52363 12.9935475,10.154505 12.9935475,6.74193 L12.9935475,1.04763 L16.4992725,1.04763 L16.4992725,5.888955 Z",
        id: "Fill-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M25.5513375,1.04772 L29.0570625,1.04772 L29.0570625,2.515845 L29.0966625,2.515845 C29.0966625,2.515845 30.2059125,0.750045 32.2061625,0.750045 C33.5136375,0.750045 34.4248875,1.384995 34.4248875,1.384995 L32.9587875,4.36107 C32.9587875,4.36107 32.3053875,3.805545 31.1365125,3.805545 C29.3144625,3.805545 29.0570625,5.610945 29.0570625,5.86902 L29.0570625,11.22582 L25.5513375,11.22582 L25.5513375,1.04772 Z",
        id: "Fill-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M0.73278,13.67409 L4.23873,13.67409 L4.23873,14.74554 L4.27833,14.74554 C5.070555,13.951515 6.080805,13.376415 7.18983,13.376415 C8.53668,13.376415 10.02213,13.872315 10.73538,15.24144 C11.804805,13.951515 12.993255,13.376415 14.102505,13.376415 C15.964155,13.376415 18.06363,14.308815 18.06363,17.14629 L18.06363,23.85219 L14.557905,23.85219 L14.557905,18.09849 C14.557905,17.086665 14.02308,16.193865 12.77523,16.193865 C11.666205,16.193865 11.19078,17.007015 11.15118,17.78124 L11.15118,23.85219 L7.645455,23.85219 L7.645455,18.09849 C7.645455,17.086665 7.11063,16.193865 5.86278,16.193865 C4.69413,16.193865 4.23873,17.086665 4.23873,17.90004 L4.23873,23.85219 L0.73278,23.85219 L0.73278,13.67409 Z",
        id: "Fill-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M26.482095,17.3048475 C26.32347,16.2333975 25.590645,15.6580725 24.560595,15.6580725 C23.352345,15.6580725 22.679145,16.3722225 22.61952,17.3048475 L26.482095,17.3048475 Z M22.520745,19.2495225 C22.520745,20.8164225 23.82777,21.3521475 24.71922,21.3521475 C25.848045,21.3521475 26.34327,21.1341225 27.194895,20.2215225 L29.730195,21.4911975 C28.581345,23.4158475 26.719695,24.1500225 24.461595,24.1500225 C21.39147,24.1500225 18.87597,21.7292475 18.87597,18.7729725 C18.87597,15.7971225 21.39147,13.3763475 24.461595,13.3763475 C27.551295,13.3763475 29.908395,15.2015475 29.908395,18.7729725 C29.908395,18.9120225 29.908395,19.1300475 29.888595,19.2495225 L22.520745,19.2495225 Z",
        id: "Fill-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M30.87927,13.67409 L34.384995,13.67409 L34.384995,14.74554 L34.424595,14.74554 C35.21682,13.951515 36.22707,13.376415 37.336095,13.376415 C39.19797,13.376415 41.79267,14.308815 41.79267,17.14629 L41.79267,23.85219 L38.28672,23.85219 L38.28672,18.09849 C38.28672,17.086665 37.59372,16.11444 36.464445,16.11444 C35.415045,16.11444 34.384995,17.086665 34.384995,18.09849 L34.384995,23.85219 L30.87927,23.85219 L30.87927,13.67409 Z",
        id: "Fill-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M46.6455375,18.515325 C46.6455375,20.519175 47.1803625,21.29295 48.6462375,21.29295 C50.1116625,21.29295 50.6464875,20.519175 50.6464875,18.515325 L50.6464875,13.674 L54.1522125,13.674 L54.1522125,19.3683 C54.1522125,22.780875 52.4489625,24.15 48.6462375,24.15 C44.8430625,24.15 43.1398125,22.780875 43.1398125,19.3683 L43.1398125,13.674 L46.6455375,13.674 L46.6455375,18.515325 Z",
        id: "Fill-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M60.075,21.8881425 C60.075,23.1380175 59.06475,24.1500675 57.7971,24.1500675 C56.54925,24.1500675 55.539225,23.1380175 55.539225,21.8881425 C55.539225,20.6180175 56.54925,19.6064175 57.7971,19.6064175 C59.06475,19.6064175 60.075,20.6180175 60.075,21.8881425",
        id: "Fill-16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      })))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLinks, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_11___default.a, {
        minWidth: '64em',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/features",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        display: "inline-flex",
        color: this.props.inverted ? 'white' : 'black',
        fontWeight: "bold",
        fontSize: "1rem",
        ml: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "Features")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        display: "inline-flex",
        color: this.props.inverted ? 'white' : 'black',
        fontWeight: "bold",
        fontSize: "1rem",
        ml: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/onboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        display: "inline-flex",
        color: this.props.inverted ? 'white' : 'black',
        fontWeight: "bold",
        fontSize: "1rem",
        ml: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "Upload your menu")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        display: "inline-flex",
        color: this.props.inverted ? 'white' : 'black',
        fontWeight: "bold",
        fontSize: "1rem",
        ml: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavCTAContainer, {
        display: "inline-flex",
        ml: "24px",
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavCTAInput, {
        type: "email",
        placeholder: "Your email",
        border: "2px solid black",
        borderRadius: "4px 0 0 4px",
        m: "0",
        p: "8px 16px",
        fontSize: "1rem",
        fontWeight: "regular",
        color: "black",
        borderRight: "0",
        required: true,
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavCTAButton, {
        border: "2px solid black",
        borderRadius: "0 4px 4px 0",
        p: "8px 16px",
        m: "0",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "black",
        bg: "blue",
        value: "Request a demo",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_11___default.a, {
        maxWidth: '64em',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavToggle, {
        display: "flex",
        zIndex: "88",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StyledHamburger, {
        className: "nav-hamburger",
        color: this.props.inverted ? 'white' : 'black',
        isActive: this.state.isOpen,
        buttonWidth: 32,
        toggleButton: function toggleButton() {
          return _this2.setState({
            isOpen: !_this2.state.isOpen
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_10__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, this.state.isOpen && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavSled, {
        key: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavOverlay, {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: "16",
        bg: this.props.inverted ? 'black' : this.props.transparent ? 'blue' : 'white',
        display: "flex",
        flexDirection: "column nowrap",
        opacity: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLinks, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/features",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        display: "inline-flex",
        color: this.props.inverted ? 'white' : 'black',
        fontWeight: "bold",
        fontSize: "2rem",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, "Features")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        display: "inline-flex",
        color: this.props.inverted ? 'white' : 'black',
        fontWeight: "bold",
        fontSize: "2rem",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/onboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        display: "inline-flex",
        color: this.props.inverted ? 'white' : 'black',
        fontWeight: "bold",
        fontSize: "2rem",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, "Upload your menu")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        display: "inline-flex",
        color: this.props.inverted ? 'white' : 'black',
        fontWeight: "bold",
        fontSize: "2rem",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavCTAContainer, {
        display: "inline-flex",
        flexDirection: "column",
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavCTAInput, {
        type: "email",
        placeholder: "Your email",
        border: "2px solid black",
        borderRadius: "4px",
        p: "8px 16px",
        mb: "8px",
        fontSize: "1rem",
        fontWeight: "regular",
        color: "black",
        required: true,
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavCTAButton, {
        border: "2px solid black",
        borderRadius: "4px",
        p: "8px 16px",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "black",
        bg: "blue",
        value: "Request a demo",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      })))))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");






var _jsxFileName = "/Users/Chris/Projects/ourmenu-home/pages/index.js";








var HeroSection = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.section.withConfig({
  displayName: "pages__HeroSection",
  componentId: "sc-1wbo52z-0"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_11__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"], styled_system__WEBPACK_IMPORTED_MODULE_11__["display"], styled_system__WEBPACK_IMPORTED_MODULE_11__["flexbox"]);
var HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "pages__HeroContent",
  componentId: "sc-1wbo52z-1"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_11__["display"], styled_system__WEBPACK_IMPORTED_MODULE_11__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_11__["layout"]);
var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "sc-1wbo52z-2"
})({
  textAlign: 'center',
  '& strong': {
    position: 'relative'
  },
  '& strong::after': {
    content: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(""),
    position: 'absolute',
    right: -8,
    bottom: 8,
    width: '95%',
    height: '24px',
    background: '#1BE7FF',
    display: 'block',
    zIndex: '-1'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_11__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"], styled_system__WEBPACK_IMPORTED_MODULE_11__["display"]);
var HeroSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.span.withConfig({
  displayName: "pages__HeroSubtitle",
  componentId: "sc-1wbo52z-3"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_11__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"], styled_system__WEBPACK_IMPORTED_MODULE_11__["display"]);
var HeroCTAContainer = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.form.withConfig({
  displayName: "pages__HeroCTAContainer",
  componentId: "sc-1wbo52z-4"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_11__["display"], styled_system__WEBPACK_IMPORTED_MODULE_11__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_11__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"]);
var HeroCTAInput = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.input.withConfig({
  displayName: "pages__HeroCTAInput",
  componentId: "sc-1wbo52z-5"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_11__["border"], styled_system__WEBPACK_IMPORTED_MODULE_11__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"], styled_system__WEBPACK_IMPORTED_MODULE_11__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["display"]);
var HeroCTAButton = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.input.withConfig({
  displayName: "pages__HeroCTAButton",
  componentId: "sc-1wbo52z-6"
})({
  boxSizing: 'border-box',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ':hover': {
    backgroundColor: '#fff',
    color: '#1a1a1a'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_11__["border"], styled_system__WEBPACK_IMPORTED_MODULE_11__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"], styled_system__WEBPACK_IMPORTED_MODULE_11__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"]);
var HeroCTACaption = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.span.withConfig({
  displayName: "pages__HeroCTACaption",
  componentId: "sc-1wbo52z-7"
})({
  textAlign: 'center'
}, styled_system__WEBPACK_IMPORTED_MODULE_11__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["display"], styled_system__WEBPACK_IMPORTED_MODULE_11__["layout"]);

var Hero = function Hero(_ref) {
  var email = _ref.email,
      handleSubmit = _ref.handleSubmit,
      handleChange = _ref.handleChange;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroSection, {
    height: "100%",
    minHeight: "100vh",
    width: "100vw",
    pt: "196px",
    p: ['128px 16px 16px', '128px 24px 24px', '128px 56px 56px'],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroTitle, {
    fontSize: ['3rem', '4rem'],
    fontWeight: "bold",
    color: "black",
    m: "0 0 54px 0",
    display: "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Your menu deserves ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "better.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroContent, {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "540px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroSubtitle, {
    fontSize: ['1.25rem', '1.5rem', '1.5rem'],
    fontWeight: "regular",
    color: "black",
    m: "0 0 54px 0",
    display: "inline-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Take control of your diners' conversion path with OurMenu. Rich interactions, powerful customizability, and valueable insights all come together in one powerful tool, right where diners are."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroCTAContainer, {
    display: "inline-flex",
    flexDirection: ['column', 'row', 'row'],
    width: "100%",
    mb: "16px",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroCTAInput, {
    type: "email",
    placeholder: "Your email",
    border: "2px solid",
    borderRadius: ['8px', '8px 0 0 8px', '8px 0 0 8px'],
    borderColor: "black",
    p: "16px 24px",
    fontSize: "1.5rem",
    fontWeight: "regular",
    color: "black",
    borderRight: ['2px solid', '0', '0'],
    m: "0",
    mb: ['16px', 0, 0],
    display: "flex",
    flex: "1",
    required: true,
    value: email,
    onChange: function onChange(e) {
      return handleChange(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroCTAButton, {
    border: "2px solid black",
    borderRadius: ['8px', '0 8px 8px 0', '0 8px 8px 0'],
    p: "16px 24px",
    m: "0",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
    bg: "blue",
    value: "Request a demo",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroCTACaption, {
    fontSize: "1rem",
    fontWeight: "regular",
    color: "grey",
    width: "100%",
    display: "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "14-day free trial \xB7 Custom setup \xB7 Cancel anytime")));
};

var Callout = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.section.withConfig({
  displayName: "pages__Callout",
  componentId: "sc-1wbo52z-8"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_11__["display"], styled_system__WEBPACK_IMPORTED_MODULE_11__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"]);
var CalloutTitle = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.h2.withConfig({
  displayName: "pages__CalloutTitle",
  componentId: "sc-1wbo52z-9"
})({
  textAlign: 'center',
  '& strong': {
    position: 'relative'
  },
  '& strong::after': {
    content: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(""),
    position: 'absolute',
    right: -8,
    bottom: 8,
    width: '95%',
    height: '24px',
    background: '#1BE7FF',
    display: 'block',
    zIndex: '-1'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_11__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"], styled_system__WEBPACK_IMPORTED_MODULE_11__["display"]);
var CalloutSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.span.withConfig({
  displayName: "pages__CalloutSubtitle",
  componentId: "sc-1wbo52z-10"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_11__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"], styled_system__WEBPACK_IMPORTED_MODULE_11__["display"], styled_system__WEBPACK_IMPORTED_MODULE_11__["layout"]);
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.section.withConfig({
  displayName: "pages__Grid",
  componentId: "sc-1wbo52z-11"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_11__["display"]);
var GridItem = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.article.withConfig({
  displayName: "pages__GridItem",
  componentId: "sc-1wbo52z-12"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_11__["display"], styled_system__WEBPACK_IMPORTED_MODULE_11__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"], styled_system__WEBPACK_IMPORTED_MODULE_11__["grid"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["flexbox"]);
var GridShowcase = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "pages__GridShowcase",
  componentId: "sc-1wbo52z-13"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"], styled_system__WEBPACK_IMPORTED_MODULE_11__["display"], styled_system__WEBPACK_IMPORTED_MODULE_11__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_11__["background"]);
var GridContent = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "pages__GridContent",
  componentId: "sc-1wbo52z-14"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_11__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_11__["display"], styled_system__WEBPACK_IMPORTED_MODULE_11__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"]);
var GridItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.h3.withConfig({
  displayName: "pages__GridItemTitle",
  componentId: "sc-1wbo52z-15"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_11__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"]);
var GridItemText = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.p.withConfig({
  displayName: "pages__GridItemText",
  componentId: "sc-1wbo52z-16"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_11__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"]);
var GridItemButton = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.a.withConfig({
  displayName: "pages__GridItemButton",
  componentId: "sc-1wbo52z-17"
})({
  float: "left",
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ':hover': {
    background: 'white',
    color: '#1a1a1a'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_11__["border"], styled_system__WEBPACK_IMPORTED_MODULE_11__["color"], styled_system__WEBPACK_IMPORTED_MODULE_11__["display"], styled_system__WEBPACK_IMPORTED_MODULE_11__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_11__["space"], styled_system__WEBPACK_IMPORTED_MODULE_11__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_11__["layout"]);

var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      email: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push({
        pathname: '/request-demo',
        query: {
          email: this.state.email
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, "Menu management that fuels growth | OurMenu"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/site.webmanifest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "mask-icon",
        href: "/static/safari-pinned-tab.svg",
        color: "#000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#000000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "msapplication-config",
        content: "/static/browserconfig.xml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "theme-color",
        content: "#000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Hero, {
        handleSubmit: function handleSubmit(e) {
          return _this2.handleSubmit(e);
        },
        handleChange: function handleChange(email) {
          return _this2.setState({
            email: email
          });
        },
        email: this.state.email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Callout, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        p: ['16px', '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CalloutTitle, {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "black",
        m: "0 0 54px 0",
        display: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "OurMenu is the menu management platform of tomorrow", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }), "for the restaurants of today."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CalloutSubtitle, {
        fontSize: "1.5rem",
        fontWeight: "regular",
        color: "black",
        m: "0 0 54px 0",
        display: "block",
        maxWidth: "540px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "93% of diners"), " look at a menu online. Now, they are interacting with outdated PDFs or being taken off of your site to a third party. That\u2019s sacrificing valuable opportunities for engagement and insight.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItem, {
        display: "grid",
        gridTemplateColumns: ["1fr", "1fr", "1fr", "352px 1fr"],
        gridGap: ["16px", "56px"],
        p: ['16px', '56px'],
        height: "100%",
        minHeight: "188px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridShowcase, {
        bg: "black",
        width: "352px",
        height: "100%",
        p: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        width: "320px",
        height: "156px",
        viewBox: "0 0 320 156",
        version: "1.1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "App",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Widget---Collapsed",
        transform: "translate(-16.000000, -16.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Group-2",
        transform: "translate(16.000000, 16.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        id: "Rectangle",
        fill: "#FFFFFF",
        x: "256",
        y: "92",
        width: "64",
        height: "64",
        rx: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "round-restaurant_menu-24px",
        transform: "translate(270.000000, 106.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        id: "Shape",
        points: "0 0 36 0 36 36 0 36",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M10.5591933,20.251507 L15.3425191,15.4681811 L4.88005023,5.02261444 C4.06874408,4.21130829 2.66586053,4.43103704 2.15879419,5.47897415 C0.958737171,7.99740367 1.39819467,11.0905084 3.47716668,13.1863826 L10.5591933,20.251507 Z M22.0188927,17.1922067 C24.604931,18.3922637 28.2389065,17.5471532 30.9263581,14.8597015 C34.1546805,11.6313791 34.7800623,7.00017319 32.2954373,4.5155481 C29.8277144,2.04782522 25.1965084,2.65630484 21.9512838,5.88462723 C19.2638322,8.57207886 18.4187216,12.2060543 19.6187786,14.7920927 L4.30537504,30.1054963 C3.6461888,30.7646825 3.6461888,31.8295219 4.30537504,32.4887081 C4.96456129,33.1478944 6.02940062,33.1478944 6.68858686,32.4887081 L17.1510558,22.0600436 L27.5966225,32.5056103 C28.2558087,33.1647966 29.320648,33.1647966 29.9798343,32.5056103 C30.6390205,31.8464241 30.6390205,30.7815847 29.9798343,30.1223985 L19.5342676,19.6768318 L22.0188927,17.1922067 Z",
        id: "Shape",
        fill: "#000000",
        fillRule: "nonzero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        id: "Rectangle",
        fill: "#FFFFFF",
        x: "0",
        y: "0",
        width: "320",
        height: "76",
        rx: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        id: "Thank-you-for-visiti",
        fontFamily: "SourceSansPro-Regular, Source Sans Pro",
        fontSize: "18",
        fontWeight: "normal",
        fill: "#000E1A",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tspan", {
        x: "16",
        y: "34",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, "Thank you for visiting Darcia. Please "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tspan", {
        x: "16",
        y: "56",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, "take a look at our menu below"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tspan", {
        x: "242.188",
        y: "55.838",
        fontFamily: "SourceSansPro-Bold, Source Sans Pro",
        fontWeight: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, " "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tspan", {
        x: "253.6465",
        y: "53",
        fontFamily: "AppleColorEmoji, Apple Color Emoji",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, "\uD83D\uDC47"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tspan", {
        x: "267.842",
        y: "56",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, "!")))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridContent, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        mr: ["16px", '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemTitle, {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "black",
        lineHeight: "3rem",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, "The OurMenu Widget"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemText, {
        fontSize: "1.5rem",
        fontWeight: "regular",
        color: "black",
        lineHeight: "1.5rem",
        p: "0",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, "Have diners visiting your website interacting with your menu immediately. No more digging through pages to find a plain PDF. The OurMenu widget embeds a powerful and feature-rich menu right on your homepage.", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }), "While diners search, interact, and convert, you gain valuable insights into their activity and how your menu performs.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/request-demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemButton, {
        border: "2px solid black",
        borderColor: "black",
        borderRadius: "8px",
        p: "16px 48px",
        display: "flex",
        flexGrow: "0",
        alignItems: "center",
        justifyContent: "center",
        bg: "blue",
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, "Get a custom demo")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItem, {
        display: "grid",
        gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 1fr"],
        gridGap: ["16px", "56px"],
        p: ['16px', '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridContent, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        mr: ["16px", '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemTitle, {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "black",
        lineHeight: "3rem",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, "Features for Growth"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemText, {
        fontSize: "1.5rem",
        fontWeight: "regular",
        color: "black",
        lineHeight: "1.5rem",
        p: "0",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, "Every day, hungry diners are looking at your menu, waiting to be converted. OurMenu gives you the perfect tools and expertise to make this happen.", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }), "Target and engage diners right on your website with the OurMenu widget. Retain and grow your customer base with intelligent insights and social media integrations. All of this provided with our signature silver service approach makes OurMenu the perfect partner to drive your restaurant\u2019s growth.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/features",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemButton, {
        border: "2px solid black",
        borderColor: "black",
        borderRadius: "8px",
        p: "16px 48px",
        display: "flex",
        flexGrow: "0",
        alignItems: "center",
        justifyContent: "center",
        bg: "blue",
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, "See what sets us apart"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridShowcase, {
        bg: "black",
        minHeight: "360px",
        height: "100%",
        display: "block",
        backgroundImage: "url(/static/ourmenu-growth.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItem, {
        display: "flex",
        justifyContent: "center",
        p: ['16px', '56px'],
        bg: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridContent, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "50%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemTitle, {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "white",
        lineHeight: "3rem",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, "The Silver Service Approach"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemText, {
        fontSize: "1.5rem",
        fontWeight: "regular",
        color: "white",
        lineHeight: "1.5rem",
        p: "0",
        m: "0",
        mb: "48px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, "We are invested in your long-term growth. To accomplish this, we get to know every restaurant personally and understand their unique goals. Communication is key, so whether it\u2019s a feature request, support ticket, or adding a special to your menu, we\u2019re available over email, phone, text, Messenger, WhatsApp, and our hologram is coming soon.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemButton, {
        border: "2px solid white",
        borderColor: "white",
        borderRadius: "8px",
        p: "16px 48px",
        display: "flex",
        flexGrow: "0",
        alignItems: "center",
        justifyContent: "center",
        bg: "black",
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
        href: "mailto:hello@ourmenu.co",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }, "See how fast we are")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Chris/Projects/ourmenu-home/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-animated-burgers":
/*!*****************************************!*\
  !*** external "react-animated-burgers" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animated-burgers");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
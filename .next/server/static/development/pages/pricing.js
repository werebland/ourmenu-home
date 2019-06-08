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





var _jsxFileName = "/Users/Chris/ourmenu-landing/components/Nav.jsx";








var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__NavWrapper",
  componentId: "sc-1t1rhnt-0"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"]);
var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__NavBar",
  componentId: "sc-1t1rhnt-1"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_9__["typography"]);
var NavBrand = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__NavBrand",
  componentId: "sc-1t1rhnt-2"
})({
  cursor: 'pointer'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Nav__NavLinks",
  componentId: "sc-1t1rhnt-3"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"]);
var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.a.withConfig({
  displayName: "Nav__NavLink",
  componentId: "sc-1t1rhnt-4"
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
  componentId: "sc-1t1rhnt-5"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var NavCTAContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.form.withConfig({
  displayName: "Nav__NavCTAContainer",
  componentId: "sc-1t1rhnt-6"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"]);
var NavCTAInput = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.input.withConfig({
  displayName: "Nav__NavCTAInput",
  componentId: "sc-1t1rhnt-7"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["border"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var NavCTAButton = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.input.withConfig({
  displayName: "Nav__NavCTAButton",
  componentId: "sc-1t1rhnt-8"
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
  componentId: "sc-1t1rhnt-9"
})({
  '& .nav-hamburger div span': {
    borderRadius: '1px !important',
    backgroundColor: '#000e1a'
  },
  '& .nav-hamburger div span:before': {
    borderRadius: '1px !important',
    backgroundColor: '#000e1a'
  },
  '& .nav-hamburger div span:after': {
    borderRadius: '1px !important',
    backgroundColor: '#000e1a'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_9__["border"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);

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
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavBar, {
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
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavBrand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        width: "72px",
        height: "72px",
        viewBox: "0 0 72 72",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
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
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Landing-Page",
        transform: "translate(-64.000000, -26.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Group-49",
        transform: "translate(64.000000, 26.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        id: "Fill-1",
        fill: this.props.inverted ? "#fff" : "#1a1a1a",
        points: "0 72 72 72 72 0 0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Group-48",
        transform: "translate(5.400000, 42.450000)",
        fill: this.props.inverted ? "#1a1a1a" : "#fff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M6.1004925,8.527665 C7.4671425,8.527665 8.4575925,7.53564 8.4575925,6.146715 C8.4575925,4.73799 7.4077425,3.745965 6.1004925,3.745965 C4.7736675,3.745965 3.7238175,4.73799 3.7238175,6.146715 C3.7238175,7.53564 4.6744425,8.527665 6.1004925,8.527665 M6.1202925,0.75009 C9.4874175,0.75009 12.1811175,2.972415 12.1811175,6.146715 C12.1811175,9.28164 9.6260175,11.52354 6.1202925,11.52354 C2.4561675,11.52354 6.74999992e-05,9.28164 6.74999992e-05,6.146715 C6.74999992e-05,2.972415 2.6937675,0.75009 6.1202925,0.75009",
        id: "Fill-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M16.4992725,5.888955 C16.4992725,7.892805 17.0340975,8.66658 18.4999725,8.66658 C19.9653975,8.66658 20.5002225,7.892805 20.5002225,5.888955 L20.5002225,1.04763 L24.0059475,1.04763 L24.0059475,6.74193 C24.0059475,10.154505 22.3026975,11.52363 18.4999725,11.52363 C14.6967975,11.52363 12.9935475,10.154505 12.9935475,6.74193 L12.9935475,1.04763 L16.4992725,1.04763 L16.4992725,5.888955 Z",
        id: "Fill-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M25.5513375,1.04772 L29.0570625,1.04772 L29.0570625,2.515845 L29.0966625,2.515845 C29.0966625,2.515845 30.2059125,0.750045 32.2061625,0.750045 C33.5136375,0.750045 34.4248875,1.384995 34.4248875,1.384995 L32.9587875,4.36107 C32.9587875,4.36107 32.3053875,3.805545 31.1365125,3.805545 C29.3144625,3.805545 29.0570625,5.610945 29.0570625,5.86902 L29.0570625,11.22582 L25.5513375,11.22582 L25.5513375,1.04772 Z",
        id: "Fill-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M0.73278,13.67409 L4.23873,13.67409 L4.23873,14.74554 L4.27833,14.74554 C5.070555,13.951515 6.080805,13.376415 7.18983,13.376415 C8.53668,13.376415 10.02213,13.872315 10.73538,15.24144 C11.804805,13.951515 12.993255,13.376415 14.102505,13.376415 C15.964155,13.376415 18.06363,14.308815 18.06363,17.14629 L18.06363,23.85219 L14.557905,23.85219 L14.557905,18.09849 C14.557905,17.086665 14.02308,16.193865 12.77523,16.193865 C11.666205,16.193865 11.19078,17.007015 11.15118,17.78124 L11.15118,23.85219 L7.645455,23.85219 L7.645455,18.09849 C7.645455,17.086665 7.11063,16.193865 5.86278,16.193865 C4.69413,16.193865 4.23873,17.086665 4.23873,17.90004 L4.23873,23.85219 L0.73278,23.85219 L0.73278,13.67409 Z",
        id: "Fill-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M26.482095,17.3048475 C26.32347,16.2333975 25.590645,15.6580725 24.560595,15.6580725 C23.352345,15.6580725 22.679145,16.3722225 22.61952,17.3048475 L26.482095,17.3048475 Z M22.520745,19.2495225 C22.520745,20.8164225 23.82777,21.3521475 24.71922,21.3521475 C25.848045,21.3521475 26.34327,21.1341225 27.194895,20.2215225 L29.730195,21.4911975 C28.581345,23.4158475 26.719695,24.1500225 24.461595,24.1500225 C21.39147,24.1500225 18.87597,21.7292475 18.87597,18.7729725 C18.87597,15.7971225 21.39147,13.3763475 24.461595,13.3763475 C27.551295,13.3763475 29.908395,15.2015475 29.908395,18.7729725 C29.908395,18.9120225 29.908395,19.1300475 29.888595,19.2495225 L22.520745,19.2495225 Z",
        id: "Fill-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M30.87927,13.67409 L34.384995,13.67409 L34.384995,14.74554 L34.424595,14.74554 C35.21682,13.951515 36.22707,13.376415 37.336095,13.376415 C39.19797,13.376415 41.79267,14.308815 41.79267,17.14629 L41.79267,23.85219 L38.28672,23.85219 L38.28672,18.09849 C38.28672,17.086665 37.59372,16.11444 36.464445,16.11444 C35.415045,16.11444 34.384995,17.086665 34.384995,18.09849 L34.384995,23.85219 L30.87927,23.85219 L30.87927,13.67409 Z",
        id: "Fill-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M46.6455375,18.515325 C46.6455375,20.519175 47.1803625,21.29295 48.6462375,21.29295 C50.1116625,21.29295 50.6464875,20.519175 50.6464875,18.515325 L50.6464875,13.674 L54.1522125,13.674 L54.1522125,19.3683 C54.1522125,22.780875 52.4489625,24.15 48.6462375,24.15 C44.8430625,24.15 43.1398125,22.780875 43.1398125,19.3683 L43.1398125,13.674 L46.6455375,13.674 L46.6455375,18.515325 Z",
        id: "Fill-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M60.075,21.8881425 C60.075,23.1380175 59.06475,24.1500675 57.7971,24.1500675 C56.54925,24.1500675 55.539225,23.1380175 55.539225,21.8881425 C55.539225,20.6180175 56.54925,19.6064175 57.7971,19.6064175 C59.06475,19.6064175 60.075,20.6180175 60.075,21.8881425",
        id: "Fill-16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      })))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLinks, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_11___default.a, {
        minWidth: '64em',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/features",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
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
          lineNumber: 216
        },
        __self: this
      }, "Features")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
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
          lineNumber: 229
        },
        __self: this
      }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/onboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
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
          lineNumber: 242
        },
        __self: this
      }, "Upload your menu")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
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
          lineNumber: 255
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
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavCTAInput, {
        type: "email",
        placeholder: "Your email",
        border: "2px solid black",
        borderRadius: "4px 0 0 4px",
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
          lineNumber: 269
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavCTAButton, {
        border: "2px solid black",
        borderRadius: "0 4px 4px 0",
        p: "8px 16px",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "black",
        bg: "blue",
        value: "Request a demo",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_11___default.a, {
        maxWidth: '64em',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavToggle, {
        display: "flex",
        zIndex: "88",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animated_burgers__WEBPACK_IMPORTED_MODULE_12__["HamburgerSpin"], {
        className: "nav-hamburger",
        isActive: this.state.isOpen,
        buttonWidth: 32,
        toggleButton: function toggleButton() {
          return _this2.setState({
            isOpen: !_this2.state.isOpen
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_10__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, this.state.isOpen && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavSled, {
        key: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavOverlay, {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: "16",
        bg: "#fff",
        display: "flex",
        flexDirection: "column nowrap",
        opacity: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "Overlay"))));
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

/***/ "./pages/pricing.js":
/*!**************************!*\
  !*** ./pages/pricing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");

var _jsxFileName = "/Users/Chris/ourmenu-landing/pages/pricing.js";






var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pricing__PageWrapper",
  componentId: "sc-1nd49fl-0"
})([""]);
var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pricing__PageHeader",
  componentId: "sc-1nd49fl-1"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h1.withConfig({
  displayName: "pricing__PageTitle",
  componentId: "sc-1nd49fl-2"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"]);
var PageContent = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pricing__PageContent",
  componentId: "sc-1nd49fl-3"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["space"]);
var PageSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h3.withConfig({
  displayName: "pricing__PageSubtitle",
  componentId: "sc-1nd49fl-4"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"]);
var PricingGrid = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.section.withConfig({
  displayName: "pricing__PricingGrid",
  componentId: "sc-1nd49fl-5"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["grid"]);
var PricingCard = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.article.withConfig({
  displayName: "pricing__PricingCard",
  componentId: "sc-1nd49fl-6"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"]);
var PricingCardHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pricing__PricingCardHeader",
  componentId: "sc-1nd49fl-7"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["position"]);
var PricingCardLabel = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span.withConfig({
  displayName: "pricing__PricingCardLabel",
  componentId: "sc-1nd49fl-8"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["position"], styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"]);
var PricingCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h5.withConfig({
  displayName: "pricing__PricingCardTitle",
  componentId: "sc-1nd49fl-9"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"]);
var PricingCardIcon = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pricing__PricingCardIcon",
  componentId: "sc-1nd49fl-10"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_5__["layout"]);
var PricingCardPrice = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span.withConfig({
  displayName: "pricing__PricingCardPrice",
  componentId: "sc-1nd49fl-11"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"]);
var PricingCardCaption = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span.withConfig({
  displayName: "pricing__PricingCardCaption",
  componentId: "sc-1nd49fl-12"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"]);
var PricingCardContent = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pricing__PricingCardContent",
  componentId: "sc-1nd49fl-13"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"]);
var PricingCardList = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.ul.withConfig({
  displayName: "pricing__PricingCardList",
  componentId: "sc-1nd49fl-14"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"]);
var PricingCardListItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.li.withConfig({
  displayName: "pricing__PricingCardListItem",
  componentId: "sc-1nd49fl-15"
})({
  listStyle: 'none',
  '& svg': {
    marginRight: '8px',
    minWidth: '24px'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"]);
var PricingCardButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.withConfig({
  displayName: "pricing__PricingCardButton",
  componentId: "sc-1nd49fl-16"
})({
  textDecoration: 'none',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ':hover': {
    backgroundColor: '#fff',
    color: '#1a1a1a'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"]);
var PricingBlack = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pricing__PricingBlack",
  componentId: "sc-1nd49fl-17"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_5__["grid"], styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"]);
var PricingBlackCallout = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pricing__PricingBlackCallout",
  componentId: "sc-1nd49fl-18"
})({});
var PricingBlackContent = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pricing__PricingBlackContent",
  componentId: "sc-1nd49fl-19"
})({});

var Pricing = function Pricing(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Fair and simple pricing for all | OurMenu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageHeader, {
    width: "100vw",
    minHeight: "50vh",
    bg: "black",
    color: "white",
    pt: "128px",
    pl: ['16px', '24px', '56px'],
    pr: ['16px', '24px', '56px'],
    pb: ['16px', '24px', '56px'],
    display: "flex",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageTitle, {
    fontSize: "4.5rem",
    fontWeight: "bold",
    lineHeight: "5rem",
    color: "white",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Try all of OurMenu for free now.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), "Pick a plan later.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageContent, {
    p: ['16px', '24px', '56px'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageSubtitle, {
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: "2rem",
    color: "black",
    m: "0",
    mb: ['16px', '24px', '56px'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Fair and simple pricing for all."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingGrid, {
    width: "100%",
    maxWidth: "880px",
    display: "grid",
    m: "auto",
    mb: "24px",
    gridTemplateColumns: ["1fr", "1fr", "1fr 1fr", "1fr 1fr"],
    gridGap: "24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCard, {
    bg: "white",
    border: "2px solid",
    borderColor: "black",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardHeader, {
    display: "flex",
    bg: "white",
    p: "56px 24px 24px",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "6px 6px 0 0",
    borderBottom: "2px solid",
    borderColor: "black",
    position: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "3rem",
    color: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "Free"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardIcon, {
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    version: "1.1",
    fill: "#000e1a",
    x: "0px",
    y: "0px",
    width: "120px",
    height: "197.2px",
    viewBox: "0 0 160 197.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M155.8,19.9C137.8,6.7,112.3,0,79.9,0C47.9,0,22.5,6.7,4.3,19.9c-4,2.9-5.4,8-3.4,12.4l0,0l70.9,159.4 c1.5,3.4,4.7,5.5,8.5,5.5c0,0,0,0,0,0c3.7,0,7-2.1,8.5-5.5l70.4-159.2C161.1,28,159.7,22.9,155.8,19.9z M31,87.8 c2.5-0.8,5.2-0.8,7.7,0.2c3,1.1,5.3,3.3,6.6,6.2c2.5,5.5,0.3,11.9-4.8,15L31,87.8z M84.2,189.6c-0.7,1.6-2.2,2.6-4,2.6c0,0,0,0,0,0 c-1.8,0-3.2-1-4-2.6l-33.7-75.9c7.6-4.2,10.8-13.5,7.2-21.6c-1.8-4.1-5.2-7.2-9.3-8.8c-3.7-1.4-7.7-1.5-11.5-0.2L15,51.9 c3.1-2.2,8.9-6.2,18.7-9.8c-2.2,3-3.5,6.8-3.5,10.8c0,10.2,8.3,18.5,18.5,18.5s18.5-8.3,18.5-18.5c0-7.1-4-13.3-9.9-16.4 c6.5-0.9,14-1.4,22.4-1.4c3.1,0,6.1,0.1,9,0.2c-6.9,4-11.5,11.4-11.5,19.9c0,12.7,10.4,23.1,23.1,23.1s23.1-10.4,23.1-23.1 c0-6.2-2.5-11.8-6.4-15.9c10.9,2.8,20.2,7,27.9,12.6l-17.9,40.4c-2.4-5.9-8.2-10-14.9-10c-8.9,0-16.1,7.2-16.1,16.1 s7.2,16.1,16.1,16.1c1.9,0,3.8-0.4,5.5-1L98,158.3c-3.2-1.1-6.6-1.1-9.7,0.2c-3.5,1.4-6.2,4-7.7,7.4c-1.5,3.4-1.5,7.2-0.2,10.7 c1.2,3.1,3.5,5.5,6.4,7.1L84.2,189.6z M48.8,39.3c7.5,0,13.6,6.1,13.6,13.6s-6.1,13.6-13.6,13.6s-13.6-6.1-13.6-13.6 S41.2,39.3,48.8,39.3z M118.6,55.3c0,10-8.2,18.2-18.2,18.2s-18.2-8.2-18.2-18.2s8.2-18.2,18.2-18.2S118.6,45.3,118.6,55.3z M112.3,109.5c-6.1,0-11.1-5-11.1-11.1s5-11.1,11.1-11.1c6.1,0,11.1,5,11.1,11.1C123.5,104.5,118.5,109.5,112.3,109.5z M88.8,179.2 c-1.7-1-3-2.5-3.8-4.4c-0.9-2.2-0.9-4.7,0.1-6.9c1-2.2,2.7-3.9,5-4.8c1.9-0.8,4-0.8,5.9-0.2L88.8,179.2z M154.6,30.3l-7.5,17 C130.9,36,108.3,30.2,79.8,30.2c-28.4,0-50.3,5.6-66.8,17.1L5.4,30.3l0,0c-1-2.3-0.3-4.8,1.8-6.4c17.3-12.6,41.8-19,72.7-19 c30.9,0,56.1,6.6,73,19C154.9,25.4,155.6,28,154.6,30.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M95.2,134.2c0-9.1-7.4-16.4-16.4-16.4c-9.1,0-16.4,7.4-16.4,16.4s7.4,16.4,16.4,16.4C87.9,150.7,95.2,143.3,95.2,134.2z M78.8,145.7c-6.3,0-11.5-5.2-11.5-11.5c0-6.3,5.2-11.5,11.5-11.5c6.3,0,11.5,5.2,11.5,11.5C90.3,140.6,85.1,145.7,78.8,145.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M87.8,92.6c0-8.3-6.8-15.1-15.1-15.1c-8.3,0-15.1,6.8-15.1,15.1s6.8,15.1,15.1,15.1C81,107.7,87.8,101,87.8,92.6z M62.5,92.6c0-5.6,4.6-10.2,10.2-10.2c5.6,0,10.2,4.6,10.2,10.2c0,5.6-4.6,10.2-10.2,10.2C67.1,102.8,62.5,98.3,62.5,92.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M144,189c0.6,0,1.3-0.2,1.7-0.7c1-1,1-2.5,0-3.5l-22.9-22.9c-1-1-2.5-1-3.5,0s-1,2.5,0,3.5l22.9,22.9 C142.7,188.8,143.4,189,144,189z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M113.1,175.9c-1.3,0.4-2.1,1.7-1.7,3.1l4.7,16.3c0.3,1.1,1.3,1.8,2.4,1.8c0.2,0,0.5,0,0.7-0.1c1.3-0.4,2.1-1.7,1.7-3.1 l-4.7-16.3C115.8,176.3,114.4,175.6,113.1,175.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M41.4,162.1c-1-1-2.5-1-3.5,0l-22.6,22.6c-1,1-1,2.5,0,3.5c0.5,0.5,1.1,0.7,1.7,0.7c0.6,0,1.3-0.2,1.7-0.7l22.6-22.6 C42.3,164.6,42.3,163,41.4,162.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M41.5,197.1c0.2,0.1,0.5,0.1,0.7,0.1c1.1,0,2.1-0.7,2.4-1.8l4.7-16.3c0.4-1.3-0.4-2.7-1.7-3.1c-1.3-0.4-2.7,0.4-3.1,1.7 L39.8,194C39.5,195.3,40.2,196.7,41.5,197.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }))), "\0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, "$0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardCaption, {
    fontSize: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "/month"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContent, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1",
    p: "8px 24px 24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardList, {
    p: "0",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  })), "Embedable OurMenu widget"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  })), "Unlimited items and menus"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  })), "Menu updated when crawled"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  })), "Basic social integration")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/request-demo',
      query: {
        plan: 'free'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardButton, {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid",
    borderColor: "black",
    borderRadius: "8px",
    bg: "black",
    p: "16px 14px",
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, "Request your demo")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCard, {
    bg: "white",
    border: "2px solid",
    borderColor: "black",
    borderRadius: "8px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardHeader, {
    display: "flex",
    bg: "blue",
    p: "56px 24px 24px",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "6px 6px 0 0",
    borderBottom: "2px solid",
    borderColor: "black",
    position: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "3rem",
    color: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, "Deluxe"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardIcon, {
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    version: "1.1",
    fill: "#000e1a",
    x: "0px",
    y: "0px",
    width: "160px",
    height: "160px",
    viewBox: "0 0 200.3 200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    class: "st0",
    d: "M179.3,130.8c5.8-7.4,8.7-17.8,8.7-30.9c0-13-2.9-23.3-8.7-30.8c-0.4-0.5-0.9-1-1.5-1.3 c0.1-0.6,0.2-1.2,0.1-1.9c-1.1-9.3-6.4-18.8-15.7-28.1c-9.2-9.2-18.6-14.4-28-15.6c-0.7-0.1-1.4,0-2,0.1c-0.3-0.5-0.8-1-1.3-1.4 c-7.4-5.8-17.8-8.7-30.9-8.7c-13,0-23.3,2.9-30.8,8.7c-0.6,0.4-1,0.9-1.4,1.5c-0.6-0.1-1.2-0.2-1.9-0.1c-9.3,1.1-18.8,6.4-28.1,15.7 c-9.2,9.2-14.4,18.6-15.6,28c-0.1,0.7,0,1.4,0.1,2c-0.5,0.3-1,0.8-1.4,1.3c-5.8,7.4-8.7,17.8-8.7,30.9c0,13,2.9,23.3,8.7,30.8 c0.4,0.5,0.9,1,1.5,1.3c-0.1,0.6-0.2,1.3-0.1,1.9c1.1,9.3,6.4,18.8,15.7,28.1c9.2,9.2,18.6,14.4,28,15.6c0.2,0,0.5,0,0.7,0 c0.4,0,0.8-0.1,1.3-0.2c0.3,0.5,0.8,1,1.3,1.4c7.4,5.8,17.8,8.7,30.9,8.7c13,0,23.3-2.9,30.8-8.7c0.6-0.4,1-1,1.4-1.6 c0.4,0.1,0.8,0.2,1.2,0.2c0.2,0,0.5,0,0.7,0c9.3-1.1,18.8-6.4,28.1-15.7c9.2-9.2,14.4-18.6,15.6-28c0.1-0.7,0-1.4-0.1-2 C178.4,131.7,178.9,131.3,179.3,130.8z M183,99.8c0,11.8-2.7,21.5-7.7,27.9c-0.2,0.3-0.6,0.3-0.9,0.2c0,0,0,0,0,0l-5.5-2.3 c4.2-6.5,6.4-15.2,6.4-25.8c0-10.7-2.1-19.1-6.4-25.7l5.3-2.2c0.1,0,0.1-0.1,0.2-0.1c0.3-0.1,0.7,0,0.9,0.3 C180.5,78.7,183,88,183,99.8z M134.7,152.7c-1.5-1.5-2.4-3.6-2.4-5.7c0-2.2,0.8-4.2,2.4-5.7c1.5-1.5,3.6-2.4,5.7-2.4 c2.2,0,4.2,0.8,5.7,2.4c1.5,1.5,2.4,3.6,2.4,5.7c0,2.2-0.8,4.2-2.4,5.7C143.1,155.8,137.7,155.8,134.7,152.7z M153.4,145.7 c-0.3-3-1.6-5.8-3.7-7.9c-2.5-2.5-5.8-3.8-9.3-3.8s-6.8,1.4-9.3,3.8c-2.5,2.5-3.8,5.8-3.8,9.3c0,3.5,1.4,6.8,3.8,9.3 c1.5,1.5,3.3,2.5,5.3,3.2c-2.6,1.3-5.2,2.1-7.8,2.6l-23.9-57.4l18,7.4c-0.6,0.4-1.1,0.8-1.7,1.3c-3.9,3.9-3.9,10.2,0,14 c1.9,1.9,4.5,2.9,7,2.9c2.5,0,5.1-1,7-2.9c2.5-2.5,3.3-6,2.6-9.2l24.6,10.2C161.8,131.5,160.2,137.7,153.4,145.7z M95.4,169.8 c-4.5,0-8.1-3.6-8.1-8.1s3.6-8.1,8.1-8.1s8.1,3.6,8.1,8.1S99.8,169.8,95.4,169.8z M95.4,148.6c-7.2,0-13.1,5.9-13.1,13.1 c0,2.2,0.6,4.2,1.5,6c-2.8-1-5.2-2.2-7.3-3.7l23.7-57.5l7.5,18c-0.7-0.1-1.4-0.2-2.1-0.2c-5.5,0-9.9,4.5-9.9,9.9 c0,5.5,4.5,9.9,9.9,9.9c3.5,0,6.6-1.8,8.3-4.6l10.2,24.6c-2.6,1.9-8.1,5.1-18.6,5.9c1.8-2.3,3-5.1,3-8.2 C108.5,154.5,102.6,148.6,95.4,148.6z M47.4,134.5c1.5-1.5,3.6-2.4,5.7-2.4s4.2,0.8,5.7,2.4c1.5,1.5,2.4,3.6,2.4,5.7 c0,2.2-0.8,4.2-2.4,5.7c-3.1,3.1-8.4,3.1-11.5,0c-1.5-1.5-2.4-3.6-2.4-5.7C45,138.1,45.9,136,47.4,134.5z M62.4,149.5 c2.5-2.5,3.8-5.8,3.8-9.3c0-3.5-1.4-6.8-3.8-9.3c-2.5-2.5-5.8-3.8-9.3-3.8s-6.8,1.4-9.3,3.8c-1.5,1.5-2.5,3.3-3.2,5.3 c-1.3-2.6-2.1-5.2-2.6-7.8l57.4-23.9l-7.4,18c-0.4-0.6-0.8-1.1-1.3-1.7c-3.9-3.9-10.2-3.9-14,0c-3.9,3.9-3.9,10.2,0,14 c1.9,1.9,4.5,2.9,7,2.9c0.7,0,1.4-0.1,2.1-0.3l-10.2,24.6c-3.1-0.5-9.3-2.1-17.3-9C57.4,152.9,60.2,151.7,62.4,149.5z M38.4,108.3 c7.2,0,13.1-5.9,13.1-13.1c0-7.2-5.9-13.1-13.1-13.1c-2.2,0-4.2,0.6-6,1.5c1-2.8,2.2-5.2,3.7-7.3L93.6,100l-18,7.5 c0.1-0.7,0.2-1.4,0.2-2.1c0-5.5-4.5-9.9-9.9-9.9s-9.9,4.5-9.9,9.9c0,3.5,1.8,6.6,4.6,8.3l-24.6,10.2c-1.9-2.6-5.1-8.1-5.9-18.6 C32.5,107.2,35.3,108.3,38.4,108.3z M30.3,95.2c0-4.5,3.6-8.1,8.1-8.1s8.1,3.6,8.1,8.1c0,4.5-3.6,8.1-8.1,8.1S30.3,99.7,30.3,95.2z M59.9,44.9c2.2,0,4.2,0.8,5.7,2.4c3.2,3.2,3.2,8.3,0,11.5c-3.2,3.2-8.3,3.2-11.5,0s-3.2-8.3,0-11.5C55.7,45.7,57.7,44.9,59.9,44.9z M46.9,54.3c0.3,2.9,1.5,5.7,3.7,7.9c2.6,2.6,5.9,3.8,9.3,3.8s6.7-1.3,9.3-3.8c5.1-5.1,5.1-13.4,0-18.5c-1.5-1.5-3.3-2.5-5.3-3.2 c2.6-1.3,5.2-2.1,7.8-2.6l23.9,57.4l-18-7.4c0.6-0.4,1.1-0.8,1.7-1.3c3.9-3.9,3.9-10.2,0-14c-3.9-3.9-10.2-3.9-14,0 c-2.5,2.5-3.4,6-2.6,9.2L37.9,71.6C38.5,68.4,40.1,62.3,46.9,54.3z M104.9,30.2c4.5,0,8.1,3.6,8.1,8.1s-3.6,8.1-8.1,8.1 s-8.1-3.6-8.1-8.1S100.5,30.2,104.9,30.2z M104.9,51.4c7.2,0,13.1-5.9,13.1-13.1c0-2.2-0.6-4.2-1.5-6c2.8,1,5.2,2.2,7.3,3.7 l-23.7,57.5l-7.5-18c0.7,0.1,1.4,0.2,2.1,0.2c5.5,0,9.9-4.5,9.9-9.9s-4.5-9.9-9.9-9.9c-3.5,0-6.6,1.8-8.3,4.6L76.2,35.9 c2.6-1.9,8.1-5.1,18.6-5.9c-1.8,2.3-3,5.1-3,8.2C91.8,45.5,97.7,51.4,104.9,51.4z M155.3,59.7c0,2.2-0.8,4.2-2.4,5.7 c-3.1,3.1-8.4,3.1-11.5,0c-1.5-1.5-2.4-3.6-2.4-5.7c0-2.2,0.8-4.2,2.4-5.7c1.5-1.5,3.6-2.4,5.7-2.4c2.2,0,4.2,0.8,5.7,2.4 C154.4,55.5,155.3,57.6,155.3,59.7z M137.9,50.5c-2.5,2.5-3.8,5.8-3.8,9.3c0,3.5,1.4,6.8,3.8,9.3c2.5,2.5,5.8,3.8,9.3,3.8 c3.5,0,6.8-1.4,9.3-3.8c1.5-1.5,2.5-3.3,3.2-5.3c1.3,2.6,2.1,5.2,2.6,7.8l-57.4,23.9l7.4-18c0.4,0.6,0.8,1.1,1.3,1.7 c1.9,1.9,4.5,2.9,7,2.9s5.1-1,7-2.9c3.9-3.9,3.9-10.2,0-14c-2.5-2.5-6-3.4-9.2-2.6l10.2-24.6c3.1,0.5,9.3,2.1,17.3,9 C142.8,47.1,140.1,48.3,137.9,50.5z M161.9,91.7c-7.2,0-13.1,5.9-13.1,13.1s5.9,13.1,13.1,13.1c2.2,0,4.2-0.6,6-1.5 c-1,2.8-2.2,5.2-3.7,7.3L106.7,100l18-7.5c-0.1,0.7-0.2,1.4-0.2,2.1c0,5.5,4.5,9.9,9.9,9.9s9.9-4.5,9.9-9.9c0-3.5-1.8-6.6-4.6-8.3 l24.6-10.2c1.9,2.6,5.1,8.1,5.9,18.6C167.8,92.8,165,91.7,161.9,91.7z M170,104.8c0,4.5-3.6,8.1-8.1,8.1s-8.1-3.6-8.1-8.1 s3.6-8.1,8.1-8.1S170,100.3,170,104.8z M139.3,94.6c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9s2.2-4.9,4.9-4.9 C137,89.7,139.3,91.9,139.3,94.6z M117,68.5c1-1,2.2-1.4,3.5-1.4c1.3,0,2.5,0.5,3.5,1.4c1.9,1.9,1.9,5,0,7c-1.9,1.9-5,1.9-7,0 C115.1,73.6,115.1,70.5,117,68.5z M89.9,65.8c0-2.7,2.2-4.9,4.9-4.9s4.9,2.2,4.9,4.9c0,2.7-2.2,4.9-4.9,4.9 C92.1,70.7,89.9,68.5,89.9,65.8z M68.7,76.1c1-1,2.2-1.4,3.5-1.4c1.3,0,2.5,0.5,3.5,1.4c1.9,1.9,1.9,5,0,7c-1.9,1.9-5,1.9-7,0 C66.8,81.2,66.8,78,68.7,76.1z M61,105.3c0-2.7,2.2-4.9,4.9-4.9s4.9,2.2,4.9,4.9c0,2.7-2.2,4.9-4.9,4.9S61,108.1,61,105.3z M83.2,131.4c-1.9,1.9-5,1.9-7,0c-1.9-1.9-1.9-5,0-7c1.9-1.9,5-1.9,7,0C85.2,126.4,85.2,129.5,83.2,131.4z M110.4,134.2 c0,2.7-2.2,4.9-4.9,4.9s-4.9-2.2-4.9-4.9c0-2.7,2.2-4.9,4.9-4.9S110.4,131.5,110.4,134.2z M131.6,123.9c-1.9,1.9-5,1.9-7,0 c-1.9-1.9-1.9-5,0-7c1.9-1.9,5-1.9,7,0C133.5,118.8,133.5,121.9,131.6,123.9z M133.5,27.1c0,0,0.1,0,0.1,0c8.2,1,16.7,5.8,25,14.2 c8.4,8.4,13.3,17.1,14.3,25.1c0,0.3-0.2,0.6-0.5,0.8c0,0,0,0,0,0v0l-5.5,2.3c-1.6-7.6-6.2-15.3-13.7-22.8c-7.5-7.5-15-12-22.7-13.6 l2.2-5.3c0-0.1,0-0.1,0.1-0.2C132.9,27.3,133.2,27.1,133.5,27.1z M72.3,24.8c6.6-5.1,15.9-7.7,27.7-7.7c11.8,0,21.5,2.7,27.8,7.7 c0.3,0.2,0.4,0.6,0.2,0.9c0,0,0,0,0,0v0l-2.3,5.5c-6.5-4.2-15.2-6.4-25.8-6.4c-10.7,0-19.1,2.1-25.7,6.4l-2.2-5.3 c0-0.1-0.1-0.1-0.1-0.2C71.9,25.4,72,25,72.3,24.8z M41.4,41.5c8.4-8.4,17.1-13.3,25.1-14.3c0.3,0,0.6,0.2,0.8,0.5c0,0,0,0,0,0 l2.3,5.5c-7.6,1.6-15.3,6.2-22.8,13.7c-7.5,7.5-12,15-13.6,22.7l-5.3-2.2c-0.1,0-0.1,0-0.2-0.1c-0.3-0.2-0.5-0.5-0.5-0.9 C28.3,58.3,33,49.8,41.4,41.5z M17.2,100.1c0-11.8,2.7-21.5,7.7-27.9c0.2-0.2,0.4-0.3,0.7-0.3c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0 l5.5,2.3c-4.2,6.5-6.4,15.2-6.4,25.8c0,10.7,2.1,19.1,6.4,25.7l-5.3,2.2c-0.1,0-0.1,0.1-0.2,0.1c-0.3,0.1-0.7,0-0.9-0.3 C19.8,121.3,17.2,112,17.2,100.1z M66.7,172.9c-8.3-1-16.7-5.8-25-14.2c-8.4-8.4-13.3-17.1-14.3-25.1c0-0.3,0.2-0.7,0.5-0.8 c0,0,0,0,0,0h0l5.5-2.3c1.6,7.6,6.2,15.3,13.7,22.8s15,12,22.7,13.6l-2.2,5.3c0,0.1,0,0.1-0.1,0.2C67.4,172.7,67,172.9,66.7,172.9z M128,175.2c-6.6,5.1-15.9,7.7-27.7,7.7c-11.8,0-21.5-2.7-27.9-7.7c-0.3-0.2-0.4-0.6-0.2-0.9c0,0,0,0,0,0l2.3-5.5 c6.5,4.2,15.2,6.4,25.8,6.4s19.1-2.1,25.7-6.4l2.2,5.3c0,0.1,0.1,0.1,0.1,0.2C128.4,174.6,128.3,175,128,175.2z M158.9,158.5 c-8.4,8.4-17.1,13.3-25.1,14.3c-0.3,0.1-0.6-0.2-0.8-0.5c0,0,0,0,0,0l-2.3-5.5c7.6-1.6,15.2-6.2,22.8-13.7c7.5-7.5,12-15,13.6-22.7 l5.3,2.2c0.1,0,0.1,0,0.2,0.1c0.3,0.2,0.5,0.5,0.5,0.9C172,141.7,167.2,150.1,158.9,158.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    class: "st0",
    d: "M4.3,0.7c-1-1-2.6-1-3.5,0s-1,2.6,0,3.5l24,24c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7c1-1,1-2.6,0-3.5 L4.3,0.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    class: "st0",
    d: "M33.9,19.7c0.3,1.1,1.3,1.8,2.4,1.8c0.2,0,0.5,0,0.7-0.1c1.3-0.4,2.1-1.8,1.7-3.1L33.9,1.8 c-0.4-1.3-1.8-2.1-3.1-1.7c-1.3,0.4-2.1,1.8-1.7,3.1L33.9,19.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    class: "st0",
    d: "M175.6,171.6c-1-1-2.6-1-3.5,0c-1,1-1,2.6,0,3.5l24,24c0.5,0.5,1.1,0.7,1.8,0.7c0.6,0,1.3-0.2,1.8-0.7 c1-1,1-2.6,0-3.5L175.6,171.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    class: "st0",
    d: "M166.5,180.2c-0.4-1.3-1.8-2.1-3.1-1.7c-1.3,0.4-2.1,1.8-1.7,3.1l4.8,16.5c0.3,1.1,1.3,1.8,2.4,1.8 c0.2,0,0.5,0,0.7-0.1c1.3-0.4,2.1-1.8,1.7-3.1L166.5,180.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    class: "st0",
    d: "M199.5,0.9c-1-1-2.6-1-3.5,0l-24,24c-1,1-1,2.6,0,3.5c0.5,0.5,1.1,0.7,1.8,0.7c0.6,0,1.3-0.2,1.8-0.7l24-24 C200.5,3.4,200.5,1.8,199.5,0.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    class: "st0",
    d: "M163.3,21.5c0.2,0.1,0.5,0.1,0.7,0.1c1.1,0,2.1-0.7,2.4-1.8l4.8-16.5c0.4-1.3-0.4-2.7-1.7-3.1 c-1.3-0.4-2.7,0.4-3.1,1.7l-4.8,16.5C161.2,19.8,162,21.2,163.3,21.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    class: "st0",
    d: "M0.7,199.3c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7l24-24c1-1,1-2.6,0-3.5c-1-1-2.6-1-3.5,0l-24,24 C-0.2,196.7-0.2,198.3,0.7,199.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    class: "st0",
    d: "M30.7,199.9c0.2,0.1,0.5,0.1,0.7,0.1c1.1,0,2.1-0.7,2.4-1.8l4.8-16.5c0.4-1.3-0.4-2.7-1.7-3.1 c-1.3-0.4-2.7,0.4-3.1,1.7L29,196.8C28.7,198.1,29.4,199.5,30.7,199.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  })), "\0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, "$72", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardCaption, {
    fontSize: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  }, "/month"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContent, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1",
    p: "8px 24px 24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardList, {
    p: "0",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  })), "Embedable OurMenu widget"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  })), "Unlimited items and menus"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  })), "Update your menu on-demand with a call, text, or click"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  })), "Customized social integration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: this
  })), "Rich menus, with item images and options"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  })), "Order and reserve buttons"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652
    },
    __self: this
  })), "In-depth analytics and insights"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  })), "Window stickers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  })), "Silver Service Approach")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/request-demo',
      query: {
        plan: 'deluxe'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardButton, {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid",
    borderColor: "black",
    borderRadius: "8px",
    bg: "blue",
    p: "16px 14px",
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }, "Request your demo"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingBlack, {
    width: "100%",
    maxWidth: "880px",
    p: "24px",
    m: "auto",
    borderRadius: "8px",
    bg: "black",
    color: "white",
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "1fr 1fr", "1fr 1fr"],
    gridGap: "24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContent, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1",
    p: "8px 24px 24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "3rem",
    color: "white",
    m: "0",
    mb: "8px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725
    },
    __self: this
  }, "OurMenu Black"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardCaption, {
    fontSize: "1.5rem",
    fontWeight: "regular",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }, "Custom solutions for discerning clients.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardButton, {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid",
    borderColor: "white",
    borderRadius: "8px",
    bg: "black",
    p: "16px 14px",
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "white",
    href: "mailto:black@ourmenu.co",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742
    },
    __self: this
  }, "Learn more")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContent, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1",
    p: "8px 24px 24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardList, {
    p: "0",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  })), "Social media management"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792
    },
    __self: this
  })), "Presence management"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805
    },
    __self: this
  })), "Content strategy"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818
    },
    __self: this
  })), "Custom OurMenu integrations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831
    },
    __self: this
  })), "Reputation management"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 835
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844
    },
    __self: this
  })), "Client success manager"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/pricing.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Chris/ourmenu-landing/pages/pricing.js */"./pages/pricing.js");


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
//# sourceMappingURL=pricing.js.map
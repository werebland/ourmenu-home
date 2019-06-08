webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NavDropdown */ "./components/NavDropdown.jsx");





var _jsxFileName = "/Users/Chris/ourmenu-landing/components/Nav.jsx";








var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Nav__NavWrapper",
  componentId: "sc-1t1rhnt-0"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["top"], styled_system__WEBPACK_IMPORTED_MODULE_9__["left"], styled_system__WEBPACK_IMPORTED_MODULE_9__["right"], styled_system__WEBPACK_IMPORTED_MODULE_9__["width"], styled_system__WEBPACK_IMPORTED_MODULE_9__["height"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["zIndex"]);
var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Nav__NavBar",
  componentId: "sc-1t1rhnt-1"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["top"], styled_system__WEBPACK_IMPORTED_MODULE_9__["left"], styled_system__WEBPACK_IMPORTED_MODULE_9__["right"], styled_system__WEBPACK_IMPORTED_MODULE_9__["width"], styled_system__WEBPACK_IMPORTED_MODULE_9__["height"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["zIndex"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_9__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_9__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_9__["fontWeight"]);
var NavBrand = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Nav__NavBrand",
  componentId: "sc-1t1rhnt-2"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Nav__NavLinks",
  componentId: "sc-1t1rhnt-3"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_9__["justifyContent"]);
var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a.withConfig({
  displayName: "Nav__NavLink",
  componentId: "sc-1t1rhnt-4"
})({
  textDecoration: 'none'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_9__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"]);
var NavOverlay = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Nav__NavOverlay",
  componentId: "sc-1t1rhnt-5"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_9__["position"], styled_system__WEBPACK_IMPORTED_MODULE_9__["top"], styled_system__WEBPACK_IMPORTED_MODULE_9__["right"], styled_system__WEBPACK_IMPORTED_MODULE_9__["left"], styled_system__WEBPACK_IMPORTED_MODULE_9__["bottom"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"], styled_system__WEBPACK_IMPORTED_MODULE_9__["zIndex"]);
var NavCTAContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "Nav__NavCTAContainer",
  componentId: "sc-1t1rhnt-6"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["display"], styled_system__WEBPACK_IMPORTED_MODULE_9__["height"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"]);
var NavCTAInput = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
  displayName: "Nav__NavCTAInput",
  componentId: "sc-1t1rhnt-7"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["border"], styled_system__WEBPACK_IMPORTED_MODULE_9__["borderRight"], styled_system__WEBPACK_IMPORTED_MODULE_9__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_9__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);
var NavCTAButton = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
  displayName: "Nav__NavCTAButton",
  componentId: "sc-1t1rhnt-8"
})({
  boxSizing: 'border-box',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ':hover': {
    backgroundColor: '#fff',
    color: '#1a1a1a'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["border"], styled_system__WEBPACK_IMPORTED_MODULE_9__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_9__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_9__["space"], styled_system__WEBPACK_IMPORTED_MODULE_9__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_9__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_9__["color"]);

var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Nav, _Component);

  function Nav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).call(this, props));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavWrapper, {
        position: "fixed",
        width: "100vw",
        zIndex: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavBar, {
        position: "relative",
        width: "100%",
        height: "128px",
        bg: this.props.inverted ? 'black' : this.props.transparent ? 'transparent' : 'white',
        display: "flex",
        pt: "24px",
        pb: "24px",
        pl: ['16px', '24px', '56px'],
        pr: ['16px', '24px', '56px'],
        alignItems: "center",
        justifyContent: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavBrand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        width: "72px",
        height: "72px",
        viewBox: "0 0 72 72",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Page-1",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Landing-Page",
        transform: "translate(-64.000000, -26.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Group-49",
        transform: "translate(64.000000, 26.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        id: "Fill-1",
        fill: this.props.inverted ? "#fff" : "#1a1a1a",
        points: "0 72 72 72 72 0 0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "Group-48",
        transform: "translate(5.400000, 42.450000)",
        fill: this.props.inverted ? "#1a1a1a" : "#fff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M6.1004925,8.527665 C7.4671425,8.527665 8.4575925,7.53564 8.4575925,6.146715 C8.4575925,4.73799 7.4077425,3.745965 6.1004925,3.745965 C4.7736675,3.745965 3.7238175,4.73799 3.7238175,6.146715 C3.7238175,7.53564 4.6744425,8.527665 6.1004925,8.527665 M6.1202925,0.75009 C9.4874175,0.75009 12.1811175,2.972415 12.1811175,6.146715 C12.1811175,9.28164 9.6260175,11.52354 6.1202925,11.52354 C2.4561675,11.52354 6.74999992e-05,9.28164 6.74999992e-05,6.146715 C6.74999992e-05,2.972415 2.6937675,0.75009 6.1202925,0.75009",
        id: "Fill-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M16.4992725,5.888955 C16.4992725,7.892805 17.0340975,8.66658 18.4999725,8.66658 C19.9653975,8.66658 20.5002225,7.892805 20.5002225,5.888955 L20.5002225,1.04763 L24.0059475,1.04763 L24.0059475,6.74193 C24.0059475,10.154505 22.3026975,11.52363 18.4999725,11.52363 C14.6967975,11.52363 12.9935475,10.154505 12.9935475,6.74193 L12.9935475,1.04763 L16.4992725,1.04763 L16.4992725,5.888955 Z",
        id: "Fill-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M25.5513375,1.04772 L29.0570625,1.04772 L29.0570625,2.515845 L29.0966625,2.515845 C29.0966625,2.515845 30.2059125,0.750045 32.2061625,0.750045 C33.5136375,0.750045 34.4248875,1.384995 34.4248875,1.384995 L32.9587875,4.36107 C32.9587875,4.36107 32.3053875,3.805545 31.1365125,3.805545 C29.3144625,3.805545 29.0570625,5.610945 29.0570625,5.86902 L29.0570625,11.22582 L25.5513375,11.22582 L25.5513375,1.04772 Z",
        id: "Fill-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M0.73278,13.67409 L4.23873,13.67409 L4.23873,14.74554 L4.27833,14.74554 C5.070555,13.951515 6.080805,13.376415 7.18983,13.376415 C8.53668,13.376415 10.02213,13.872315 10.73538,15.24144 C11.804805,13.951515 12.993255,13.376415 14.102505,13.376415 C15.964155,13.376415 18.06363,14.308815 18.06363,17.14629 L18.06363,23.85219 L14.557905,23.85219 L14.557905,18.09849 C14.557905,17.086665 14.02308,16.193865 12.77523,16.193865 C11.666205,16.193865 11.19078,17.007015 11.15118,17.78124 L11.15118,23.85219 L7.645455,23.85219 L7.645455,18.09849 C7.645455,17.086665 7.11063,16.193865 5.86278,16.193865 C4.69413,16.193865 4.23873,17.086665 4.23873,17.90004 L4.23873,23.85219 L0.73278,23.85219 L0.73278,13.67409 Z",
        id: "Fill-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M26.482095,17.3048475 C26.32347,16.2333975 25.590645,15.6580725 24.560595,15.6580725 C23.352345,15.6580725 22.679145,16.3722225 22.61952,17.3048475 L26.482095,17.3048475 Z M22.520745,19.2495225 C22.520745,20.8164225 23.82777,21.3521475 24.71922,21.3521475 C25.848045,21.3521475 26.34327,21.1341225 27.194895,20.2215225 L29.730195,21.4911975 C28.581345,23.4158475 26.719695,24.1500225 24.461595,24.1500225 C21.39147,24.1500225 18.87597,21.7292475 18.87597,18.7729725 C18.87597,15.7971225 21.39147,13.3763475 24.461595,13.3763475 C27.551295,13.3763475 29.908395,15.2015475 29.908395,18.7729725 C29.908395,18.9120225 29.908395,19.1300475 29.888595,19.2495225 L22.520745,19.2495225 Z",
        id: "Fill-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M30.87927,13.67409 L34.384995,13.67409 L34.384995,14.74554 L34.424595,14.74554 C35.21682,13.951515 36.22707,13.376415 37.336095,13.376415 C39.19797,13.376415 41.79267,14.308815 41.79267,17.14629 L41.79267,23.85219 L38.28672,23.85219 L38.28672,18.09849 C38.28672,17.086665 37.59372,16.11444 36.464445,16.11444 C35.415045,16.11444 34.384995,17.086665 34.384995,18.09849 L34.384995,23.85219 L30.87927,23.85219 L30.87927,13.67409 Z",
        id: "Fill-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M46.6455375,18.515325 C46.6455375,20.519175 47.1803625,21.29295 48.6462375,21.29295 C50.1116625,21.29295 50.6464875,20.519175 50.6464875,18.515325 L50.6464875,13.674 L54.1522125,13.674 L54.1522125,19.3683 C54.1522125,22.780875 52.4489625,24.15 48.6462375,24.15 C44.8430625,24.15 43.1398125,22.780875 43.1398125,19.3683 L43.1398125,13.674 L46.6455375,13.674 L46.6455375,18.515325 Z",
        id: "Fill-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M60.075,21.8881425 C60.075,23.1380175 59.06475,24.1500675 57.7971,24.1500675 C56.54925,24.1500675 55.539225,23.1380175 55.539225,21.8881425 C55.539225,20.6180175 56.54925,19.6064175 57.7971,19.6064175 C59.06475,19.6064175 60.075,20.6180175 60.075,21.8881425",
        id: "Fill-16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      })))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLinks, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_11___default.a, {
        minWidth: '50em',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NavDropdown__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Solutions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        display: "inline-flex",
        color: this.props.inverted ? 'white' : 'black',
        fontWeight: "bold",
        fontSize: "1rem",
        ml: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Features"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
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
          lineNumber: 208
        },
        __self: this
      }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/onboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
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
          lineNumber: 221
        },
        __self: this
      }, "Upload your menu")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavCTAContainer, {
        display: "inline-flex",
        ml: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
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
        color: this.props.inverted ? 'white' : 'black',
        borderRight: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
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
          lineNumber: 243
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_11___default.a, {
        maxWidth: '50em',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "x"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_10__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, this.state.isOpen && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavOverlay, {
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: "16",
        bg: "#fff",
        display: "flex",
        flexFlow: "column nowrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      })));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.b509550f9fab14d6ed51.hot-update.js.map
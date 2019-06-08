webpackHotUpdate("static/development/pages/request-demo.js",{

/***/ "./pages/request-demo.js":
/*!*******************************!*\
  !*** ./pages/request-demo.js ***!
  \*******************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");





var _jsxFileName = "/Users/Chris/ourmenu-landing/pages/request-demo.js";





var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "request-demo__PageWrapper",
  componentId: "sc-1fjagif-0"
})([""]);
var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "request-demo__PageHeader",
  componentId: "sc-1fjagif-1"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_7__["color"], styled_system__WEBPACK_IMPORTED_MODULE_7__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_7__["space"], styled_system__WEBPACK_IMPORTED_MODULE_7__["display"], styled_system__WEBPACK_IMPORTED_MODULE_7__["flexbox"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h1.withConfig({
  displayName: "request-demo__PageTitle",
  componentId: "sc-1fjagif-2"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_7__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_7__["color"], styled_system__WEBPACK_IMPORTED_MODULE_7__["space"]);
var PageContent = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "request-demo__PageContent",
  componentId: "sc-1fjagif-3"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_7__["space"]);
var PageSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h3.withConfig({
  displayName: "request-demo__PageSubtitle",
  componentId: "sc-1fjagif-4"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_7__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_7__["color"], styled_system__WEBPACK_IMPORTED_MODULE_7__["space"]);

var RequestDemo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestDemo, _Component);

  function RequestDemo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RequestDemo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RequestDemo).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RequestDemo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(router);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(PageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
        transparent: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(PageHeader, {
        width: "100vw",
        minHeight: "50vh",
        bg: "blue",
        color: "black",
        pt: "128px",
        pl: ['16px', '24px', '56px'],
        pr: ['16px', '24px', '56px'],
        pb: ['16px', '24px', '56px'],
        display: "flex",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(PageTitle, {
        fontSize: "4.5rem",
        fontWeight: "bold",
        lineHeight: "5rem",
        color: "black",
        m: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "See what you're missing.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), "Get a custom demo.")));
    }
  }]);

  return RequestDemo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(RequestDemo));

/***/ })

})
//# sourceMappingURL=request-demo.js.73e63a7070d3be14373d.hot-update.js.map
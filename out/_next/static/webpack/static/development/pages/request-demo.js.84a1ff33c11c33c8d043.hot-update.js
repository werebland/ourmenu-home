webpackHotUpdate("static/development/pages/request-demo.js",{

/***/ "./pages/request-demo.js":
/*!*******************************!*\
  !*** ./pages/request-demo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");






var _jsxFileName = "/Users/Chris/ourmenu-landing/pages/request-demo.js";





var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "request-demo__PageWrapper",
  componentId: "sc-1fjagif-0"
})([""]);
var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "request-demo__PageHeader",
  componentId: "sc-1fjagif-1"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_8__["color"], styled_system__WEBPACK_IMPORTED_MODULE_8__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_8__["space"], styled_system__WEBPACK_IMPORTED_MODULE_8__["display"], styled_system__WEBPACK_IMPORTED_MODULE_8__["flexbox"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].h1.withConfig({
  displayName: "request-demo__PageTitle",
  componentId: "sc-1fjagif-2"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_8__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_8__["color"], styled_system__WEBPACK_IMPORTED_MODULE_8__["space"]);
var PageSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].h3.withConfig({
  displayName: "request-demo__PageSubtitle",
  componentId: "sc-1fjagif-3"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_8__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_8__["color"], styled_system__WEBPACK_IMPORTED_MODULE_8__["space"]);
var PageContent = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "request-demo__PageContent",
  componentId: "sc-1fjagif-4"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_8__["space"], styled_system__WEBPACK_IMPORTED_MODULE_8__["display"], styled_system__WEBPACK_IMPORTED_MODULE_8__["flexbox"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].form.withConfig({
  displayName: "request-demo__Form",
  componentId: "sc-1fjagif-5"
})({
  boxSizing: 'boder-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_8__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_8__["border"], styled_system__WEBPACK_IMPORTED_MODULE_8__["space"], styled_system__WEBPACK_IMPORTED_MODULE_8__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_8__["display"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].label.withConfig({
  displayName: "request-demo__Label",
  componentId: "sc-1fjagif-6"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_8__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_8__["color"], styled_system__WEBPACK_IMPORTED_MODULE_8__["space"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].input.withConfig({
  displayName: "request-demo__Input",
  componentId: "sc-1fjagif-7"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_8__["display"], styled_system__WEBPACK_IMPORTED_MODULE_8__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_8__["space"], styled_system__WEBPACK_IMPORTED_MODULE_8__["border"], styled_system__WEBPACK_IMPORTED_MODULE_8__["typography"]);
var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].textarea.withConfig({
  displayName: "request-demo__Textarea",
  componentId: "sc-1fjagif-8"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_8__["display"], styled_system__WEBPACK_IMPORTED_MODULE_8__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_8__["space"], styled_system__WEBPACK_IMPORTED_MODULE_8__["border"], styled_system__WEBPACK_IMPORTED_MODULE_8__["typography"]);
var Submit = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].input.withConfig({
  displayName: "request-demo__Submit",
  componentId: "sc-1fjagif-9"
})({
  boxSizing: 'border-box',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ':hover': {
    backgroundColor: '#fff',
    color: '#1a1a1a'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_8__["border"], styled_system__WEBPACK_IMPORTED_MODULE_8__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_8__["space"], styled_system__WEBPACK_IMPORTED_MODULE_8__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_8__["color"]);

var RequestDemo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RequestDemo, _Component);

  function RequestDemo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RequestDemo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestDemo).call(this, props));
    _this.state = {
      email: _this.props.router.query.email || "",
      name: "",
      restaurant: "",
      website: "",
      message: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RequestDemo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.router.query);
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {
        transparent: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageHeader, {
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
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageTitle, {
        fontSize: "4.5rem",
        fontWeight: "bold",
        lineHeight: "5rem",
        color: "black",
        m: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "See what you're missing.", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), "Get a custom demo.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageContent, {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        p: ['16px', '24px', '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Form, {
        width: "100%",
        maxWidth: "560px",
        border: "2px solid",
        borderColor: "black",
        borderRadius: "8px",
        p: "24px",
        display: "flex",
        flexDirection: "column",
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Label, {
        fontSize: ".875rem",
        fontWeight: "bold",
        color: "grey",
        mb: "4px",
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Email*"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Input, {
        border: "2px solid",
        borderColor: "black",
        borderRadius: "8px",
        display: "flex",
        flex: "1",
        p: "8px 16px",
        mb: "16px",
        fontSize: "1.25rem",
        fontWeight: "regular",
        color: "black",
        placeholder: "Your email",
        type: "email",
        autoComplete: "on",
        value: this.state.email,
        name: "email",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Label, {
        fontSize: ".875rem",
        fontWeight: "bold",
        color: "grey",
        mb: "4px",
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Input, {
        border: "2px solid",
        borderColor: "black",
        borderRadius: "8px",
        display: "flex",
        p: "8px 16px",
        mb: "16px",
        fontSize: "1.25rem",
        fontWeight: "regular",
        color: "black",
        placeholder: "Your name",
        type: "text",
        autoComplete: "on",
        value: this.state.name,
        name: "name",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Label, {
        fontSize: ".875rem",
        fontWeight: "bold",
        color: "grey",
        mb: "4px",
        htmlFor: "restaurant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Restaurant"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Input, {
        border: "2px solid",
        borderColor: "black",
        borderRadius: "8px",
        display: "flex",
        p: "8px 16px",
        mb: "16px",
        fontSize: "1.25rem",
        fontWeight: "regular",
        color: "black",
        placeholder: "Your restaurant",
        type: "text",
        autoComplete: "on",
        value: this.state.restaurant,
        name: "restaurant",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Label, {
        fontSize: ".875rem",
        fontWeight: "bold",
        color: "grey",
        mb: "4px",
        htmlFor: "website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "Website"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Input, {
        border: "2px solid",
        borderColor: "black",
        borderRadius: "8px",
        display: "flex",
        p: "8px 16px",
        mb: "16px",
        fontSize: "1.25rem",
        fontWeight: "regular",
        color: "black",
        placeholder: "Website",
        type: "text",
        autoComplete: "on",
        value: this.state.website,
        name: "website",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Label, {
        fontSize: ".875rem",
        fontWeight: "bold",
        color: "grey",
        mb: "4px",
        htmlFor: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Message"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Textarea, {
        border: "2px solid",
        borderColor: "black",
        borderRadius: "8px",
        display: "flex",
        p: "8px 16px",
        mb: "16px",
        fontSize: "1.25rem",
        fontWeight: "regular",
        color: "black",
        placeholder: "Any questions, comments, or if you just want to hear a bad joke",
        rows: "8",
        type: "text",
        autoComplete: "on",
        value: this.state.website,
        name: "website",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Submit, {
        border: "2px solid",
        borderRadius: "8px",
        borderColor: "black",
        p: "16px 24px",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "black",
        bg: "blue",
        type: "submit",
        value: "Request your demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }))));
    }
  }]);

  return RequestDemo;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(RequestDemo));

/***/ })

})
//# sourceMappingURL=request-demo.js.84a1ff33c11c33c8d043.hot-update.js.map
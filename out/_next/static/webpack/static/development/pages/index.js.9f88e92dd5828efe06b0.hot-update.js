webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");






var _jsxFileName = "/Users/Chris/ourmenu-landing/pages/index.js";






var HeroSection = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "pages__HeroSection",
  componentId: "sc-1wbo52z-0"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["height"], styled_system__WEBPACK_IMPORTED_MODULE_10__["width"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_10__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexDirection"]);
var HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "pages__HeroContent",
  componentId: "sc-1wbo52z-1"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_10__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_10__["maxWidth"]);
var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "sc-1wbo52z-2"
})({
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
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"]);
var HeroSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].span.withConfig({
  displayName: "pages__HeroSubtitle",
  componentId: "sc-1wbo52z-3"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"]);
var HeroCTAContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "pages__HeroCTAContainer",
  componentId: "sc-1wbo52z-4"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["height"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var HeroCTAInput = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].input.withConfig({
  displayName: "pages__HeroCTAInput",
  componentId: "sc-1wbo52z-5"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["border"], styled_system__WEBPACK_IMPORTED_MODULE_10__["borderRight"], styled_system__WEBPACK_IMPORTED_MODULE_10__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flex"]);
var HeroCTAButton = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].button.withConfig({
  displayName: "pages__HeroCTAButton",
  componentId: "sc-1wbo52z-6"
})({
  boxSizing: 'border-box',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ':hover': {
    backgroundColor: '#fff',
    color: '#1a1a1a'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["border"], styled_system__WEBPACK_IMPORTED_MODULE_10__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"]);
var HeroCTACaption = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].span.withConfig({
  displayName: "pages__HeroCTACaption",
  componentId: "sc-1wbo52z-7"
})({
  textAlign: 'center'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["width"]);

var Hero = function Hero(_ref) {
  var email = _ref.email,
      handleSubmit = _ref.handleSubmit,
      handleChange = _ref.handleChange;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroSection, {
    height: "100vh",
    width: "100vw",
    pt: "128px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
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
      lineNumber: 142
    },
    __self: this
  }, "Your menu deserves ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "better.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroContent, {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "540px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
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
      lineNumber: 157
    },
    __self: this
  }, "Take control of how your diners' conversion path with OurMenu. Rich interactions, powerful customizability, and valueable insights all come together in one powerful tool, right where diners are."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroCTAContainer, {
    display: "inline-flex",
    width: "100%",
    mb: "16px",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroCTAInput, {
    type: "email",
    placeholder: "Your email",
    border: "2px solid black",
    borderRadius: "8px 0 0 8px",
    p: "16px 24px",
    fontSize: "1.5rem",
    fontWeight: "regular",
    color: "black",
    borderRight: "0",
    display: "flex",
    flex: "1",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroCTAButton, {
    border: "2px solid black",
    borderRadius: "0 8px 8px 0",
    p: "16px 24px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
    bg: "blue",
    value: "Request a demo",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
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
      lineNumber: 193
    },
    __self: this
  }, "14-day free trial \xB7 Custom setup \xB7 Cancel anytime")));
};

var Callout = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "pages__Callout",
  componentId: "sc-1wbo52z-8"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var CalloutTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h2.withConfig({
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
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"]);
var CalloutSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].span.withConfig({
  displayName: "pages__CalloutSubtitle",
  componentId: "sc-1wbo52z-10"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["layout"]);
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "pages__Grid",
  componentId: "sc-1wbo52z-11"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"]);
var GridItem = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].article.withConfig({
  displayName: "pages__GridItem",
  componentId: "sc-1wbo52z-12"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["height"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["grid"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"]);
var GridShowcase = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "pages__GridShowcase",
  componentId: "sc-1wbo52z-13"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var GridContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "pages__GridContent",
  componentId: "sc-1wbo52z-14"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var GridItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h3.withConfig({
  displayName: "pages__GridItemTitle",
  componentId: "sc-1wbo52z-15"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var GridItemText = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "pages__GridItemText",
  componentId: "sc-1wbo52z-16"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var GridItemButton = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].a.withConfig({
  displayName: "pages__GridItemButton",
  componentId: "sc-1wbo52z-17"
})({
  float: "left",
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ':hover': {
    background: 'white',
    color: '#1a1a1a'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["border"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["height"]);

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
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
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
          lineNumber: 326
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "Menu management that fuels growth | OurMenu"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Callout, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
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
          lineNumber: 342
        },
        __self: this
      }, "OurMenu is the menu management platform of tomorrow", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
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
          lineNumber: 353
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, "93% of diners"), " look at a menu online. Now, they are interacting with outdated PDFs or being taken off of your site to a third party. That\u2019s sacrificing valuable opportunities for engagement and insight.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItem, {
        display: "grid",
        gridTemplateColumns: ["100%", "50% 50%"],
        gridGap: ["16px", "56px"],
        p: ['16px', '56px'],
        height: "calc(100vh - 128px)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridShowcase, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "Showcase"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridContent, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mr: ["16px", '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
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
          lineNumber: 382
        },
        __self: this
      }, "Presence Management"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemText, {
        fontSize: "1.5rem",
        fontWeight: "regular",
        color: "black",
        lineHeight: "1.5rem",
        p: "0",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, "87% of diners"), " look at online reviews before deciding where to eat. Are they getting the right impression. OurMenu tailors your online presence to find the right fit for your diners. We monitor reviews and integrate your digital presences all in one place, converting more diners and growing your business.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemButton, {
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
          lineNumber: 405
        },
        __self: this
      }, "Get a free presence audit"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItem, {
        display: "grid",
        gridTemplateColumns: ["100%", "50% 50%"],
        gridGap: ["16px", "56px"],
        p: ['16px', '56px'],
        height: "100vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridContent, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
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
          lineNumber: 437
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
          lineNumber: 447
        },
        __self: this
      }, "Have diners visiting your website interacting with your menu immediately. No more digging through pages to find a plain PDF. The OurMenu widget embeds a powerful and feature-rich menu right on your homepage.", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }), "While diners search, interact, and convert, you gain valuable insights into their activity and how your menu performs.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemButton, {
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
          lineNumber: 463
        },
        __self: this
      }, "Get a custom demo")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridShowcase, {
        bg: "black",
        mr: ["16px", '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, "Showcase")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItem, {
        display: "grid",
        gridTemplateColumns: ["100%", "50% 50%"],
        gridGap: ["16px", "56px"],
        p: ['16px', '56px'],
        bg: "black",
        height: "100vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridShowcase, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, "Showcase"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridContent, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mr: ["16px", '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
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
          lineNumber: 506
        },
        __self: this
      }, "The Silver Service Approach"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItemText, {
        fontSize: "1.5rem",
        fontWeight: "regular",
        color: "white",
        lineHeight: "1.5rem",
        p: "0",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, "See how fast we are")))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9f88e92dd5828efe06b0.hot-update.js.map
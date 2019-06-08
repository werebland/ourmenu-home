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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
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
    content: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(""),
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
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroSection, {
    height: "100vh",
    width: "100vw",
    pt: "128px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroTitle, {
    fontSize: ['2rem', '3rem', '4rem'],
    fontWeight: "bold",
    color: "black",
    m: "0 0 54px 0",
    display: "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Your menu deserves ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "better.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroContent, {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "540px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroSubtitle, {
    fontSize: ['1.25rem', '1.5rem', '1.5rem'],
    fontWeight: "regular",
    color: "black",
    m: "0 0 54px 0",
    display: "inline-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Take control of how your diners' conversion path with OurMenu. Rich interactions, powerful customizability, and valueable insights all come together in one powerful tool, right where diners are."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroCTAContainer, {
    display: "inline-flex",
    width: "100%",
    mb: "16px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroCTAInput, {
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroCTAButton, {
    border: "2px solid black",
    borderRadius: "0 8px 8px 0",
    p: "16px 24px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
    bg: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Request a demo")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroCTACaption, {
    fontSize: "1rem",
    fontWeight: "regular",
    color: "grey",
    width: "100%",
    display: "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "14-day free trial \xB7 Custom setup \xB7 Cancel anytime")));
};

var Grid = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "pages__Grid",
  componentId: "sc-1wbo52z-8"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"]);
var GridItem = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].article.withConfig({
  displayName: "pages__GridItem",
  componentId: "sc-1wbo52z-9"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["height"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["grid"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"]);
var GridShowcase = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "pages__GridShowcase",
  componentId: "sc-1wbo52z-10"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var GridContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "pages__GridContent",
  componentId: "sc-1wbo52z-11"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var GridItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h3.withConfig({
  displayName: "pages__GridItemTitle",
  componentId: "sc-1wbo52z-12"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var GridItemText = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "pages__GridItemText",
  componentId: "sc-1wbo52z-13"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var GridItemButton = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].a.withConfig({
  displayName: "pages__GridItemButton",
  componentId: "sc-1wbo52z-14"
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

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "Menu management that fuels growth | OurMenu"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Hero, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItem, {
        display: "grid",
        gridTemplateColumns: ["100%", "50% 50%"],
        gridGap: ["16px", "56px"],
        p: ['16px', '56px'],
        height: "calc(100vh - 128px)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridShowcase, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "Showcase"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridContent, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mr: ["16px", '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItemTitle, {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "black",
        lineHeight: "3rem",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, "Presence Management"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItemText, {
        fontSize: "1.5rem",
        fontWeight: "regular",
        color: "black",
        lineHeight: "1.5rem",
        p: "0",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "87% of diners"), " look at online reviews before deciding where to eat. Are they getting the right impression. OurMenu tailors your online presence to find the right fit for your diners. We monitor reviews and integrate your digital presences all in one place, converting more diners and growing your business.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItemButton, {
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
          lineNumber: 320
        },
        __self: this
      }, "Get a free presence audit"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItem, {
        display: "grid",
        gridTemplateColumns: ["100%", "50% 50%"],
        gridGap: ["16px", "56px"],
        p: ['16px', '56px'],
        height: "100vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridContent, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItemTitle, {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "black",
        lineHeight: "3rem",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "The OurMenu Widget"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItemText, {
        fontSize: "1.5rem",
        fontWeight: "regular",
        color: "black",
        lineHeight: "1.5rem",
        p: "0",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, "Have diners visiting your website interacting with your menu immediately. No more digging through pages to find a plain PDF. The OurMenu widget embeds a powerful and feature-rich menu right on your homepage.", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }), "While diners search, interact, and convert, you gain valuable insights into their activity and how your menu performs.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItemButton, {
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
          lineNumber: 378
        },
        __self: this
      }, "Get a custom demo")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridShowcase, {
        bg: "black",
        mr: ["16px", '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "Showcase")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItem, {
        display: "grid",
        gridTemplateColumns: ["100%", "50% 50%"],
        gridGap: ["16px", "56px"],
        p: ['16px', '56px'],
        bg: "black",
        height: "100vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridShowcase, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, "Showcase"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridContent, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mr: ["16px", '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItemTitle, {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "white",
        lineHeight: "3rem",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, "The Silver Service Approach"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItemText, {
        fontSize: "1.5rem",
        fontWeight: "regular",
        color: "white",
        lineHeight: "1.5rem",
        p: "0",
        m: "0",
        mb: "24px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, "We are invested in your long-term growth. To accomplish this, we get to know every restaurant personally and understand their unique goals. Communication is key, so whether it\u2019s a feature request, support ticket, or adding a special to your menu, we\u2019re available over email, phone, text, Messenger, WhatsApp, and our hologram is coming soon.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GridItemButton, {
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
          lineNumber: 444
        },
        __self: this
      }, "See how fast we are")))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9df97beabe7f3fbcc0b0.hot-update.js.map
webpackHotUpdate("static/development/pages/pricing.js",{

/***/ "./pages/pricing.js":
/*!**************************!*\
  !*** ./pages/pricing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");


var _jsxFileName = "/Users/Chris/ourmenu-landing/pages/pricing.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject());
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pricing__PageWrapper",
  componentId: "sc-1nd49fl-0"
})([""]);
var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pricing__PageHeader",
  componentId: "sc-1nd49fl-1"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "pricing__PageTitle",
  componentId: "sc-1nd49fl-2"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"]);
var PageContent = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pricing__PageContent",
  componentId: "sc-1nd49fl-3"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["space"]);
var PageSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h3.withConfig({
  displayName: "pricing__PageSubtitle",
  componentId: "sc-1nd49fl-4"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"]);
var PricingGrid = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "pricing__PricingGrid",
  componentId: "sc-1nd49fl-5"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["grid"]);
var PricingCard = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].article.withConfig({
  displayName: "pricing__PricingCard",
  componentId: "sc-1nd49fl-6"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["border"]);
var PricingCardHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pricing__PricingCardHeader",
  componentId: "sc-1nd49fl-7"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["position"]);
var PricingCardLabel = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "pricing__PricingCardLabel",
  componentId: "sc-1nd49fl-8"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["position"], styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"]);
var PricingCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h5.withConfig({
  displayName: "pricing__PricingCardTitle",
  componentId: "sc-1nd49fl-9"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"]);
var PricingCardIcon = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pricing__PricingCardIcon",
  componentId: "sc-1nd49fl-10"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["layout"]);
var PricingCardPrice = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "pricing__PricingCardPrice",
  componentId: "sc-1nd49fl-11"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"]);
var PricingCardCaption = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "pricing__PricingCardCaption",
  componentId: "sc-1nd49fl-12"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"]);
var PricingCardList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul.withConfig({
  displayName: "pricing__PricingCardList",
  componentId: "sc-1nd49fl-13"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexbox"]);
var PricingCardListItem = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "pricing__PricingCardListItem",
  componentId: "sc-1nd49fl-14"
})({
  listStyle: 'none'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_5__["color"]);

var Pricing = function Pricing(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Fair and simple pricing for all | OurMenu")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageHeader, {
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
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageTitle, {
    fontSize: "4.5rem",
    fontWeight: "bold",
    lineHeight: "5rem",
    color: "white",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Try all of OurMenu for free now.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), "Pick a plan later.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageContent, {
    p: ['16px', '24px', '56px'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageSubtitle, {
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: "2rem",
    color: "black",
    m: "0",
    mb: ['16px', '24px', '56px'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Fair and simple pricing for all."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingGrid, {
    width: "100%",
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr 1fr 1fr"],
    gridGap: "56px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCard, {
    bg: "white",
    border: "2px solid",
    borderColor: "black",
    borderRadius: "8px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardHeader, {
    display: "flex",
    bg: "white",
    p: "56px 24px",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "6px",
    position: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardTitle, {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "3rem",
    color: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Free"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCard, {
    bg: "white",
    border: "2px solid",
    borderColor: "black",
    borderRadius: "8px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardHeader, {
    display: "flex",
    bg: "blue",
    p: "56px 24px 24px",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "6px 6px 0 0",
    position: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardLabel, {
    position: "absolute",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "white",
    bg: "black",
    borderRadius: "64px",
    top: "-26px",
    p: "16px 48px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "Most popular"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardTitle, {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "3rem",
    color: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, "Champagne"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardIcon, {
    width: "200px",
    height: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardPrice, {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "$72", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardCaption, {
    fontSize: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, "/month"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardList, {
    p: "8px 24px 24px",
    borderTop: "2px solid",
    borderColor: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    borderBottom: "1px solid",
    borderColor: "black",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, "Unlimited menus"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCard, {
    bg: "white",
    border: "2px solid",
    borderColor: "black",
    borderRadius: "8px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardHeader, {
    display: "flex",
    bg: "white",
    p: "56px 24px 24px",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "6px 6px 0 0",
    position: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardTitle, {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "3rem",
    color: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, "Caviar"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardIcon, {
    width: "200px",
    height: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardPrice, {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, "$216", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardCaption, {
    fontSize: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, "/month"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardList, {
    p: "8px 24px 24px",
    borderTop: "2px solid",
    borderColor: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    borderBottom: "1px solid",
    borderColor: "black",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, "Unlimited menus")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ })

})
//# sourceMappingURL=pricing.js.7a9b5b0ff451f2821629.hot-update.js.map
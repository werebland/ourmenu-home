webpackHotUpdate("static/development/pages/pricing.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/freeze.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
false,

/***/ "./pages/pricing.js":
/*!**************************!*\
  !*** ./pages/pricing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");

var _jsxFileName = "/Users/Chris/ourmenu-landing/pages/pricing.js";





var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pricing__PageWrapper",
  componentId: "sc-1nd49fl-0"
})([""]);
var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pricing__PageHeader",
  componentId: "sc-1nd49fl-1"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], styled_system__WEBPACK_IMPORTED_MODULE_4__["flexbox"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "pricing__PageTitle",
  componentId: "sc-1nd49fl-2"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"]);
var PageContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pricing__PageContent",
  componentId: "sc-1nd49fl-3"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_4__["space"]);
var PageSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h3.withConfig({
  displayName: "pricing__PageSubtitle",
  componentId: "sc-1nd49fl-4"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"]);
var PricingGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "pricing__PricingGrid",
  componentId: "sc-1nd49fl-5"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["grid"]);
var PricingCard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].article.withConfig({
  displayName: "pricing__PricingCard",
  componentId: "sc-1nd49fl-6"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["border"]);
var PricingCardHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pricing__PricingCardHeader",
  componentId: "sc-1nd49fl-7"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_4__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], styled_system__WEBPACK_IMPORTED_MODULE_4__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_4__["border"], styled_system__WEBPACK_IMPORTED_MODULE_4__["position"]);
var PricingCardLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "pricing__PricingCardLabel",
  componentId: "sc-1nd49fl-8"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["position"], styled_system__WEBPACK_IMPORTED_MODULE_4__["border"], styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"]);
var PricingCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h5.withConfig({
  displayName: "pricing__PricingCardTitle",
  componentId: "sc-1nd49fl-9"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"]);
var PricingCardIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pricing__PricingCardIcon",
  componentId: "sc-1nd49fl-10"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], styled_system__WEBPACK_IMPORTED_MODULE_4__["layout"]);
var PricingCardPrice = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "pricing__PricingCardPrice",
  componentId: "sc-1nd49fl-11"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"]);
var PricingCardCaption = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "pricing__PricingCardCaption",
  componentId: "sc-1nd49fl-12"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_4__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"]);
var PricingCardList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul.withConfig({
  displayName: "pricing__PricingCardList",
  componentId: "sc-1nd49fl-13"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], styled_system__WEBPACK_IMPORTED_MODULE_4__["border"], styled_system__WEBPACK_IMPORTED_MODULE_4__["flexbox"]);
var PricingCardListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "pricing__PricingCardListItem",
  componentId: "sc-1nd49fl-14"
})({
  listStyle: 'none'
}, styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["border"], styled_system__WEBPACK_IMPORTED_MODULE_4__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"]);

var Pricing = function Pricing(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Fair and simple pricing for all | OurMenu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
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
      lineNumber: 145
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
      lineNumber: 157
    },
    __self: this
  }, "Try all of OurMenu for free now.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), "Pick a plan later.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageContent, {
    p: ['16px', '24px', '56px'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
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
      lineNumber: 172
    },
    __self: this
  }, "Fair and simple pricing for all."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingGrid, {
    width: "100%",
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 1fr 1fr"],
    gridGap: "56px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCard, {
    bg: "white",
    border: "2px solid",
    borderColor: "black",
    borderRadius: "8px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
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
    position: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
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
      lineNumber: 206
    },
    __self: this
  }, "Free"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardIcon, {
    width: "200px",
    height: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "$0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardCaption, {
    fontSize: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "/month"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardList, {
    p: "8px 24px 24px",
    borderTop: "2px solid",
    borderColor: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    borderBottom: "1px solid",
    borderColor: "black",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "Unlimited items"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCard, {
    bg: "white",
    border: "2px solid",
    borderColor: "black",
    borderRadius: "8px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
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
    position: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardLabel, {
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
      lineNumber: 268
    },
    __self: this
  }, "Most popular"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "3rem",
    color: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "Champagne"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardIcon, {
    width: "200px",
    height: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "$72", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardCaption, {
    fontSize: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "/month"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardList, {
    p: "8px 24px 24px",
    borderTop: "2px solid",
    borderColor: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    borderBottom: "1px solid",
    borderColor: "black",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "Unlimited items"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCard, {
    bg: "white",
    border: "2px solid",
    borderColor: "black",
    borderRadius: "8px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
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
    position: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
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
      lineNumber: 342
    },
    __self: this
  }, "Caviar"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardIcon, {
    width: "200px",
    height: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, "$216", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardCaption, {
    fontSize: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, "/month"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardList, {
    p: "8px 24px 24px",
    borderTop: "2px solid",
    borderColor: "black",
    m: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardListItem, {
    p: "16px 0",
    borderBottom: "1px solid",
    borderColor: "black",
    display: "flex",
    fontSize: "1.25rem",
    fontWeight: "regular",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, "Unlimited items"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ "./theme.js":
false

})
//# sourceMappingURL=pricing.js.e1fa2b7c4871c2e2eafa.hot-update.js.map
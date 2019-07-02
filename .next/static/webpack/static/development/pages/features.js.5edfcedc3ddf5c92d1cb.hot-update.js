webpackHotUpdate("static/development/pages/features.js",{

/***/ "./pages/features/index.js":
/*!*********************************!*\
  !*** ./pages/features/index.js ***!
  \*********************************/
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
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.jsx");






var _jsxFileName = "/Users/Chris/Projects/ourmenu-home/pages/features/index.js";







var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "features__PageWrapper",
  componentId: "fzt7sc-0"
})([""]);
var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "features__PageHeader",
  componentId: "fzt7sc-1"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "features__PageTitle",
  componentId: "fzt7sc-2"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var PageContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "features__PageContent",
  componentId: "fzt7sc-3"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var PageSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h3.withConfig({
  displayName: "features__PageSubtitle",
  componentId: "fzt7sc-4"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var PageGrid = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "features__PageGrid",
  componentId: "fzt7sc-5"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["grid"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var WidgetOverview = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "features__WidgetOverview",
  componentId: "fzt7sc-6"
})({
  boxShadow: '0 2px 4px rgba(0, 0, 0, .125)'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_10__["background"], styled_system__WEBPACK_IMPORTED_MODULE_10__["border"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var FeatureList = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].ul.withConfig({
  displayName: "features__FeatureList",
  componentId: "fzt7sc-7"
})({
  listStyle: 'none'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"]);
var FeatureListItem = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].li.withConfig({
  displayName: "features__FeatureListItem",
  componentId: "fzt7sc-8"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"]);
var FeatureListItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h4.withConfig({
  displayName: "features__FeatureListItemTitle",
  componentId: "fzt7sc-9"
})({
  '&::after': {
    content: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(""),
    position: 'absolute',
    right: -4,
    bottom: 0,
    width: '95%',
    height: '16px',
    background: '#1BE7FF',
    display: 'block',
    zIndex: '-1'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["position"], styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var FeatureListItemContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "features__FeatureListItemContent",
  componentId: "fzt7sc-10"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"]);

var Features =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Features, _Component);

  function Features() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Features);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Features).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Features, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Powerful features for your restaurant's menu | OurMenu"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/site.webmanifest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "mask-icon",
        href: "/static/safari-pinned-tab.svg",
        color: "#000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#000000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "msapplication-config",
        content: "/static/browserconfig.xml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "theme-color",
        content: "#000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageHeader, {
        width: "100vw",
        minHeight: "50vh",
        bg: "black",
        color: "white",
        pt: "196px",
        pl: ['16px', '24px', '56px'],
        pr: ['16px', '24px', '56px'],
        pb: ['16px', '24px', '56px'],
        display: "flex",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageTitle, {
        fontSize: "4.5rem",
        fontWeight: "bold",
        lineHeight: "5rem",
        color: "white",
        m: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Your success.", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), "Featuring OurMenu.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageGrid, {
        display: "grid",
        gridTemplateColumns: ['1fr', '1fr', '360px 1fr'],
        gridGap: ['16px', '56px'],
        p: ['16px', '24px', '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetOverview, {
        display: "block",
        width: "360px",
        height: "600px",
        backgroundImage: "url(/static/ourmenu-widget-overview.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
        m: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageSubtitle, {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "black",
        m: "0",
        mb: "16px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "OurMenu is tailored to the unique needs of our restaurant clients. We understand what it takes to grow and be competitive and have tailored offerings to help you succeed.", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), "That's why we've made OurMenu:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureList, {
        p: "0",
        m: "0",
        display: "flex",
        flexDirection: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItem, {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: "16px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItemTitle, {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "black",
        m: "0",
        mb: "8px",
        position: "relative",
        display: "inline-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Purposeful"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItemContent, {
        fontSize: "1.125rem",
        fontWeight: "regular",
        color: "black",
        p: "0",
        m: "0",
        display: "inline-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "Every day, hungry diners are looking at your menu, waiting to be converted. OurMenu gives you the perfect tools and expertise to make this happen. Target and engage diners right on your website with the OurMenu widget. Retain and grow your customer base with intelligent insights and social media integrations. All of this provided with our signature silver service approach makes OurMenu the perfect partner to drive your restaurant\u2019s growth.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItem, {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: "16px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItemTitle, {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "black",
        m: "0",
        mb: "8px",
        position: "relative",
        display: "inline-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Customizable"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItemContent, {
        fontSize: "1.125rem",
        fontWeight: "regular",
        color: "black",
        p: "0",
        m: "0",
        display: "inline-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Your restaurant has its own personality and business needs. Embrace it with OurMenu. Add beautiful imagery to make your widget your own. Focus on the conversion actions that matter to you. Integrate your social channels to keep diners in the loop. OurMenu is its most powerful when it\u2019s customized to your needs.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItem, {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: "16px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItemTitle, {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "black",
        m: "0",
        mb: "8px",
        position: "relative",
        display: "inline-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Social"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItemContent, {
        fontSize: "1.125rem",
        fontWeight: "regular",
        color: "black",
        p: "0",
        m: "0",
        display: "inline-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "OurMenu is built from the ground up with social sharing in mind. Help your diners spread the word by allowing them to share rich snippets of your menu and dishes. Optimized for Facebook and Twitter, helping you put your best foot forward.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItem, {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: "16px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItemTitle, {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "black",
        m: "0",
        mb: "8px",
        position: "relative",
        display: "inline-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "Insightful"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureListItemContent, {
        fontSize: "1.125rem",
        fontWeight: "regular",
        color: "black",
        p: "0",
        m: "0",
        display: "inline-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, "By having your menu ready to be interacted with right on your homepage, OurMenu can provide valuable analytics like never before. Track directions, phone calls, and social shares. Learn what works best for your diners to build loyalty and grow your business."))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }));
    }
  }]);

  return Features;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ })

})
//# sourceMappingURL=features.js.5edfcedc3ddf5c92d1cb.hot-update.js.map
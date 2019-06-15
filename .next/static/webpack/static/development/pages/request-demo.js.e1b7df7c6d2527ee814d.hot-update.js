webpackHotUpdate("static/development/pages/request-demo.js",{

/***/ "./pages/request-demo.js":
/*!*******************************!*\
  !*** ./pages/request-demo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");







var _jsxFileName = "/Users/Chris/ourmenu-home/pages/request-demo.js";












var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_14___default.a.storage().ref();
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "request-demo__PageWrapper",
  componentId: "sc-1fjagif-0"
})([""]);
var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "request-demo__PageHeader",
  componentId: "sc-1fjagif-1"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "request-demo__PageTitle",
  componentId: "sc-1fjagif-2"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var PageSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h3.withConfig({
  displayName: "request-demo__PageSubtitle",
  componentId: "sc-1fjagif-3"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var PageContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "request-demo__PageContent",
  componentId: "sc-1fjagif-4"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].form.withConfig({
  displayName: "request-demo__Form",
  componentId: "sc-1fjagif-5"
})({
  boxSizing: 'boder-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_10__["border"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"]);
var Uploader = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "request-demo__Uploader",
  componentId: "sc-1fjagif-6"
})({
  boxSizing: 'border-box'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["border"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"]);
var File = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "request-demo__File",
  componentId: "sc-1fjagif-7"
})({
  boxSizing: 'border-box',
  '& span': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_10__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["border"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].label.withConfig({
  displayName: "request-demo__Label",
  componentId: "sc-1fjagif-8"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].input.withConfig({
  displayName: "request-demo__Input",
  componentId: "sc-1fjagif-9"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["border"], styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"]);
var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].textarea.withConfig({
  displayName: "request-demo__Textarea",
  componentId: "sc-1fjagif-10"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["border"], styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"]);
var Submit = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].input.withConfig({
  displayName: "request-demo__Submit",
  componentId: "sc-1fjagif-11"
})({
  boxSizing: 'border-box',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ':hover': {
    backgroundColor: '#fff',
    color: '#1a1a1a'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["border"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"], styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"]);
var Success = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "request-demo__Success",
  componentId: "sc-1fjagif-12"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"]);
var SuccessEmoji = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].span.withConfig({
  displayName: "request-demo__SuccessEmoji",
  componentId: "sc-1fjagif-13"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"]);
var SuccessTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h4.withConfig({
  displayName: "request-demo__SuccessTitle",
  componentId: "sc-1fjagif-14"
})({
  textAlign: 'center'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);
var SuccessSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].span.withConfig({
  displayName: "request-demo__SuccessSubtitle",
  componentId: "sc-1fjagif-15"
})({
  textAlign: 'center'
}, styled_system__WEBPACK_IMPORTED_MODULE_10__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_10__["display"], styled_system__WEBPACK_IMPORTED_MODULE_10__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_10__["color"], styled_system__WEBPACK_IMPORTED_MODULE_10__["space"]);

var RequestDemo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RequestDemo, _Component);

  function RequestDemo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RequestDemo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RequestDemo).call(this, props));
    _this.state = {
      email: _this.props.router.query.email || "",
      name: "",
      menus: [],
      isSuccess: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RequestDemo, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var _this$state = this.state,
          name = _this$state.name,
          email = _this$state.email,
          menus = _this$state.menus;
      var data = {
        name: name,
        email: email,
        menus: []
      };
      _config__WEBPACK_IMPORTED_MODULE_13__["default"].addToCollection('users', data).then(function (data) {
        console.log(data.id);

        if (menus.length > 0) {
          _this2.handleUpload(data.id);
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "handleUpload",
    value: function handleUpload(id) {
      var files = this.state.menus;
      var downloadLinks = [];
      var self = this;
      files.forEach(function (file) {
        var metadata = {
          contentType: 'image/jpeg'
        };
        var uploadTask = storageRef.child("users/".concat(id, "/menus/").concat(file.name)).put(file, metadata);
        uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_14___default.a.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case firebase_app__WEBPACK_IMPORTED_MODULE_14___default.a.storage.TaskState.PAUSED:
              // or 'paused'
              console.log('Upload is paused');
              break;

            case firebase_app__WEBPACK_IMPORTED_MODULE_14___default.a.storage.TaskState.RUNNING:
              // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function (error) {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              console.log('unauthorized');
              break;

            case 'storage/canceled':
              console.log('canceled');
              break;

            case 'storage/unknown':
              console.log('idk');
              break;
          }
        }, function () {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            downloadLinks.push(downloadURL);
            console.log(downloadLinks);

            if (downloadLinks.length === files.length) {
              console.log('files uploaded');
              var data = {
                menus: downloadLinks
              };
              _config__WEBPACK_IMPORTED_MODULE_13__["default"].updateDoc("users/".concat(id), data).then(function () {
                console.log('doc updated');
                self.setState({
                  isSuccess: true
                });
              }).catch(function (err) {
                console.log(err);
              });
            }
          });
        });
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(files) {
      console.log(files);
      var menus = this.state.menus;
      files.forEach(function (file) {
        return menus.push(file);
      });
      console.log(menus);
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "removeFile",
    value: function removeFile(i) {
      var menus = this.state.menus;
      menus.splice(i, 1);
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Get a free custom demo | OurMenu"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/site.webmanifest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "mask-icon",
        href: "/static/safari-pinned-tab.svg",
        color: "#000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#000000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "msapplication-config",
        content: "/static/browserconfig.xml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "theme-color",
        content: "#000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_17__["default"], {
        transparent: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PageHeader, {
        width: "100vw",
        minHeight: "50vh",
        bg: "blue",
        color: "black",
        pt: "196px",
        pl: ['16px', '24px', '56px'],
        pr: ['16px', '24px', '56px'],
        pb: ['16px', '24px', '56px'],
        display: "flex",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PageTitle, {
        fontSize: "4.5rem",
        fontWeight: "bold",
        lineHeight: "5rem",
        color: "black",
        m: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "See what you're missing.", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }), "Get a custom demo.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PageContent, {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        p: ['16px', '24px', '56px'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Form, {
        width: "100%",
        maxWidth: "560px",
        border: "2px solid",
        borderColor: "black",
        borderRadius: "8px",
        p: "24px",
        display: "flex",
        flexDirection: "column",
        onSubmit: function onSubmit(e) {
          return _this3.handleSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, this.state.isSuccess ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Success, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SuccessEmoji, {
        fontSize: "4rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, "\uD83C\uDF89"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SuccessTitle, {
        fontSize: "1.75rem",
        fontWeight: "bold",
        color: "black",
        m: "0",
        mb: "16px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, this.state.name.split(" ")[0], ", your custom demo is on the way."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SuccessSubtitle, {
        fontSize: "1.25rem",
        fontWeight: "regular",
        color: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, "We'll send the details to ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, this.state.email), " when it's ready.")) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_12__["default"], {
        multiple: true,
        onDrop: function onDrop(acceptedFiles) {
          return _this3.handleDrop(acceptedFiles);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps,
            isDragActive = _ref.isDragActive,
            isDragAccept = _ref.isDragAccept,
            isDragReject = _ref.isDragReject;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Uploader, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          border: "2px solid",
          borderColor: "lightGrey",
          borderRadius: "8px",
          borderStyle: "dashed",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          minHeight: "160px",
          p: "48px",
          mb: "16px",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "grey",
          bg: isDragActive ? 'lightGrey' : 'white'
        }, getRootProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          },
          __self: this
        })), "Drop your menus here or click to upload"));
      }), this.state.menus.map(function (file, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(File, {
          key: file.path,
          width: "100%",
          display: "inline-flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "16px 24px",
          borderRadius: "8px",
          bg: "black",
          color: "white",
          mb: "8px",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 437
          },
          __self: this
        }, file.path), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          onClick: function onClick() {
            return _this3.removeFile(i);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 438
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "#fff",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
          d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          },
          __self: this
        }))));
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Label, {
        fontSize: ".875rem",
        fontWeight: "bold",
        color: "grey",
        mb: "4px",
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, "Full name*"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Input, {
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
        required: true,
        value: this.state.name,
        name: "name",
        onChange: function onChange(e) {
          return _this3.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Label, {
        fontSize: ".875rem",
        fontWeight: "bold",
        color: "grey",
        mb: "4px",
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, "Email*"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Input, {
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
        required: true,
        value: this.state.email,
        name: "email",
        onChange: function onChange(e) {
          return _this3.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Submit, {
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
          lineNumber: 498
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }));
    }
  }]);

  return RequestDemo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(RequestDemo));

/***/ })

})
//# sourceMappingURL=request-demo.js.e1b7df7c6d2527ee814d.hot-update.js.map
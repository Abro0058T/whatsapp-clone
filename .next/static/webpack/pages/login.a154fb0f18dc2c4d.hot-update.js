"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.jsx":
/*!*****************************!*\
  !*** ./src/pages/login.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n\n\n\n\n\n\n\nfunction login() {\n    const handleLogin = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n        const { user: { displayName: name , email , photoURL: profileImage  }  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, provider);\n        try {\n            if (email) {\n                const { data  } = await axios.post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_1__.CHECK_USER_ROUTE, {\n                    email\n                });\n                console.log();\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/whatsapp.gif\",\n                        alt: \"whatsapp\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abro0058T\\\\Desktop\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl text-white\",\n                        children: \"Whatsapp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abro0058T\\\\Desktop\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abro0058T\\\\Desktop\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg \",\n                onClick: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_6__.FcGoogle, {\n                        className: \"text-4xl\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abro0058T\\\\Desktop\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white text-xl\",\n                        children: \"Login with google\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abro0058T\\\\Desktop\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abro0058T\\\\Desktop\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Abro0058T\\\\Desktop\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\pages\\\\login.jsx\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNDO0FBQ2M7QUFDckM7QUFDTDtBQUNnQjtBQUUxQyxTQUFTTyxRQUFRO0lBQ2YsTUFBTUMsY0FBWSxVQUFVO1FBQzFCLE1BQU1DLFdBQVMsSUFBSVAsNkRBQWtCQTtRQUNyQyxNQUFNLEVBQUNRLE1BQUssRUFBQ0MsYUFBWUMsS0FBSSxFQUFDQyxNQUFLLEVBQUNDLFVBQVNDLGFBQVksRUFBQyxHQUFDLEdBQUMsTUFBTVosOERBQWVBLENBQUNGLCtEQUFZQSxFQUFDUTtRQUMvRixJQUFHO1lBQ0QsSUFBR0ksT0FBTTtnQkFDUCxNQUFNLEVBQUNHLEtBQUksRUFBQyxHQUFDLE1BQU1DLE1BQU1DLElBQUksQ0FBQ2xCLDhEQUFnQkEsRUFBQztvQkFBQ2E7Z0JBQUs7Z0JBQ3JETSxRQUFRQyxHQUFHO1lBQ2IsQ0FBQztRQUNILEVBQUMsT0FBTUMsT0FBTTtZQUNYRixRQUFRQyxHQUFHLENBQUNDO1FBQ2Q7SUFDRjtJQUNBLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDcEIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ25CLG1EQUFLQTt3QkFDTm9CLEtBQUk7d0JBQWdCQyxLQUFJO3dCQUFXQyxRQUFRO3dCQUFLQyxPQUFPOzs7Ozs7a0NBQ3ZELDhEQUFDQzt3QkFBS0wsV0FBVTtrQ0FBc0I7Ozs7Ozs7Ozs7OzswQkFJeEMsOERBQUNNO2dCQUFPTixXQUFVO2dCQUE4Rk8sU0FBU3RCOztrQ0FDdkgsOERBQUNGLG9EQUFRQTt3QkFBQ2lCLFdBQVU7Ozs7OztrQ0FDcEIsOERBQUNLO3dCQUFLTCxXQUFVO2tDQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzNDO0FBRUEsK0RBQWVoQixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2dpbi5qc3g/YzkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDSEVDS19VU0VSX1JPVVRFIH0gZnJvbSBcIkAvdXRpbHMvQXBpUm91dGVzXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyLCBzaWduSW5XaXRoUG9wdXAgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGY0dvb2dsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mY1wiO1xuXG5mdW5jdGlvbiBsb2dpbigpIHtcbiAgY29uc3QgaGFuZGxlTG9naW49YXN5bmMgKCk9PntcbiAgICBjb25zdCBwcm92aWRlcj1uZXcgR29vZ2xlQXV0aFByb3ZpZGVyKClcbiAgICBjb25zdCB7dXNlcjp7ZGlzcGxheU5hbWU6bmFtZSxlbWFpbCxwaG90b1VSTDpwcm9maWxlSW1hZ2V9fT1hd2FpdCBzaWduSW5XaXRoUG9wdXAoZmlyZWJhc2VBdXRoLHByb3ZpZGVyKVxuICAgIHRyeXtcbiAgICAgIGlmKGVtYWlsKXtcbiAgICAgICAgY29uc3Qge2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoQ0hFQ0tfVVNFUl9ST1VURSx7ZW1haWx9KTtcbiAgICAgICAgY29uc29sZS5sb2coKVxuICAgICAgfVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctcGFuZWwtaGVhZGVyLWJhY2tncm91bmQgaC1zY3JlZW4gdy1zY3JlZW4gZmxleC1jb2wgZ2FwLTZcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICA8SW1hZ2VcbiAgICAgIHNyYz1cIi93aGF0c2FwcC5naWZcIiBhbHQ9XCJ3aGF0c2FwcFwiIGhlaWdodD17MzAwfSB3aWR0aD17MzAwfS8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTd4bCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIFdoYXRzYXBwXG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNyBiZy1zZWFyY2gtaW5wdXQtY29udGFpbmVyLWJhY2tncm91bmQgcC01IHJvdW5kZWQtbGcgXCIgb25DbGljaz17aGFuZGxlTG9naW59PlxuICAgICAgPEZjR29vZ2xlIGNsYXNzTmFtZT1cInRleHQtNHhsXCIvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsXCI+TG9naW4gd2l0aCBnb29nbGU8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwibmFtZXMiOlsiQ0hFQ0tfVVNFUl9ST1VURSIsImZpcmViYXNlQXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsIkltYWdlIiwiUmVhY3QiLCJGY0dvb2dsZSIsImxvZ2luIiwiaGFuZGxlTG9naW4iLCJwcm92aWRlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJlbWFpbCIsInBob3RvVVJMIiwicHJvZmlsZUltYWdlIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ })

});
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/game/GameSlice.js":
/*!******************************************!*\
  !*** ./src/components/game/GameSlice.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   gameSlice: () => (/* binding */ gameSlice),\n/* harmony export */   resetGameStatistics: () => (/* binding */ resetGameStatistics),\n/* harmony export */   setGameStates: () => (/* binding */ setGameStates),\n/* harmony export */   setGameStatistics: () => (/* binding */ setGameStatistics)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialGame = {\n    gameStates: {\n        battingTeam: \"\",\n        bowlingTeam: \"\",\n        overs: null\n    },\n    gameStatistics: {\n        battingTeam: null,\n        bowlingTeam: null,\n        previousBowler: null,\n        currentBowler: null,\n        thisOver: [],\n        thisOverBall: 0,\n        totalOver: 0,\n        totalScore: 0,\n        totalWicketFallen: 0,\n        isFirstInningsOver: false,\n        target: 0,\n        isGameOver: false,\n        winningText: null,\n        rand: null,\n        firstInningsStat: null,\n        secondInningsStat: null\n    }\n};\nconst gameSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"game\",\n    initialState: initialGame,\n    reducers: {\n        setGameStates: (state, action)=>{\n            state.gameStates.battingTeam = action.payload.battingTeam;\n            state.gameStates.bowlingTeam = action.payload.bowlingTeam;\n            state.gameStates.overs = action.payload.overs;\n        },\n        setGameStatistics: (state, action)=>{\n            state.gameStatistics.battingTeam = action.payload.battingTeam;\n            state.gameStatistics.bowlingTeam = action.payload.bowlingTeam;\n            state.gameStatistics.previousBowler = action.payload.previousBowler;\n            state.gameStatistics.currentBowler = action.payload.currentBowler;\n            state.gameStatistics.thisOver = action.payload.thisOver;\n            state.gameStatistics.thisOverBall = action.payload.thisOverBall;\n            state.gameStatistics.totalOver = action.payload.totalOver;\n            state.gameStatistics.totalScore = action.payload.totalScore;\n            state.gameStatistics.totalWicketFallen = action.payload.totalWicketFallen;\n            state.gameStatistics.isFirstInningsOver = action.payload.isFirstInningsOver;\n            state.gameStatistics.target = action.payload.target;\n            state.gameStatistics.isGameOver = action.payload.isGameOver;\n            state.gameStatistics.winningText = action.payload.winningText;\n            state.gameStatistics.rand = action.payload.rand;\n            state.gameStatistics.firstInningsStat = action.payload.firstInningsStat;\n            state.gameStatistics.secondInningsStat = action.payload.secondInningsStat;\n        }\n    }\n});\nconst resetGameStatistics = (state)=>{\n    state.gameStatistics = initialGame.gameStatistics;\n};\nconst { setGameStates, setGameStatistics } = gameSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXRFLGlFQUFlVixVQUFVVyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXJ0dWFsLWNyaWNrZXQtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2dhbWUvR2FtZVNsaWNlLmpzP2QwMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbEdhbWUgPSB7XHJcbiAgZ2FtZVN0YXRlczoge1xyXG4gICAgYmF0dGluZ1RlYW06IFwiXCIsXHJcbiAgICBib3dsaW5nVGVhbTogXCJcIixcclxuICAgIG92ZXJzOiBudWxsLFxyXG4gIH0sXHJcbiAgZ2FtZVN0YXRpc3RpY3M6IHtcclxuICAgIGJhdHRpbmdUZWFtOiBudWxsLFxyXG4gICAgYm93bGluZ1RlYW06IG51bGwsXHJcbiAgICBwcmV2aW91c0Jvd2xlcjogbnVsbCxcclxuICAgIGN1cnJlbnRCb3dsZXI6IG51bGwsXHJcbiAgICB0aGlzT3ZlcjogW10sXHJcbiAgICB0aGlzT3ZlckJhbGw6IDAsXHJcbiAgICB0b3RhbE92ZXI6IDAsXHJcbiAgICB0b3RhbFNjb3JlOiAwLFxyXG4gICAgdG90YWxXaWNrZXRGYWxsZW46IDAsXHJcbiAgICBpc0ZpcnN0SW5uaW5nc092ZXI6IGZhbHNlLFxyXG4gICAgdGFyZ2V0OiAwLFxyXG4gICAgaXNHYW1lT3ZlcjogZmFsc2UsXHJcbiAgICB3aW5uaW5nVGV4dDogbnVsbCxcclxuICAgIHJhbmQ6IG51bGwsXHJcbiAgICBmaXJzdElubmluZ3NTdGF0OiBudWxsLFxyXG4gICAgc2Vjb25kSW5uaW5nc1N0YXQ6IG51bGwsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJnYW1lXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiBpbml0aWFsR2FtZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0R2FtZVN0YXRlczogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXRlcy5iYXR0aW5nVGVhbSA9IGFjdGlvbi5wYXlsb2FkLmJhdHRpbmdUZWFtO1xyXG4gICAgICBzdGF0ZS5nYW1lU3RhdGVzLmJvd2xpbmdUZWFtID0gYWN0aW9uLnBheWxvYWQuYm93bGluZ1RlYW07XHJcbiAgICAgIHN0YXRlLmdhbWVTdGF0ZXMub3ZlcnMgPSBhY3Rpb24ucGF5bG9hZC5vdmVycztcclxuICAgIH0sXHJcbiAgICBzZXRHYW1lU3RhdGlzdGljczogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3MuYmF0dGluZ1RlYW0gPSBhY3Rpb24ucGF5bG9hZC5iYXR0aW5nVGVhbTtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3MuYm93bGluZ1RlYW0gPSBhY3Rpb24ucGF5bG9hZC5ib3dsaW5nVGVhbTtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3MucHJldmlvdXNCb3dsZXIgPSBhY3Rpb24ucGF5bG9hZC5wcmV2aW91c0Jvd2xlcjtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3MuY3VycmVudEJvd2xlciA9IGFjdGlvbi5wYXlsb2FkLmN1cnJlbnRCb3dsZXI7XHJcbiAgICAgIHN0YXRlLmdhbWVTdGF0aXN0aWNzLnRoaXNPdmVyID0gYWN0aW9uLnBheWxvYWQudGhpc092ZXI7XHJcbiAgICAgIHN0YXRlLmdhbWVTdGF0aXN0aWNzLnRoaXNPdmVyQmFsbCA9IGFjdGlvbi5wYXlsb2FkLnRoaXNPdmVyQmFsbDtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3MudG90YWxPdmVyID0gYWN0aW9uLnBheWxvYWQudG90YWxPdmVyO1xyXG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy50b3RhbFNjb3JlID0gYWN0aW9uLnBheWxvYWQudG90YWxTY29yZTtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3MudG90YWxXaWNrZXRGYWxsZW4gPSBhY3Rpb24ucGF5bG9hZC50b3RhbFdpY2tldEZhbGxlbjtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3MuaXNGaXJzdElubmluZ3NPdmVyID1cclxuICAgICAgICBhY3Rpb24ucGF5bG9hZC5pc0ZpcnN0SW5uaW5nc092ZXI7XHJcbiAgICAgIHN0YXRlLmdhbWVTdGF0aXN0aWNzLnRhcmdldCA9IGFjdGlvbi5wYXlsb2FkLnRhcmdldDtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3MuaXNHYW1lT3ZlciA9IGFjdGlvbi5wYXlsb2FkLmlzR2FtZU92ZXI7XHJcbiAgICAgIHN0YXRlLmdhbWVTdGF0aXN0aWNzLndpbm5pbmdUZXh0ID0gYWN0aW9uLnBheWxvYWQud2lubmluZ1RleHQ7XHJcbiAgICAgIHN0YXRlLmdhbWVTdGF0aXN0aWNzLnJhbmQgPSBhY3Rpb24ucGF5bG9hZC5yYW5kO1xyXG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy5maXJzdElubmluZ3NTdGF0ID0gYWN0aW9uLnBheWxvYWQuZmlyc3RJbm5pbmdzU3RhdDtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3Muc2Vjb25kSW5uaW5nc1N0YXQgPSBhY3Rpb24ucGF5bG9hZC5zZWNvbmRJbm5pbmdzU3RhdDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRHYW1lU3RhdGlzdGljcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHN0YXRlLmdhbWVTdGF0aXN0aWNzID0gaW5pdGlhbEdhbWUuZ2FtZVN0YXRpc3RpY3M7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRHYW1lU3RhdGVzLCBzZXRHYW1lU3RhdGlzdGljcyB9ID0gZ2FtZVNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbEdhbWUiLCJnYW1lU3RhdGVzIiwiYmF0dGluZ1RlYW0iLCJib3dsaW5nVGVhbSIsIm92ZXJzIiwiZ2FtZVN0YXRpc3RpY3MiLCJwcmV2aW91c0Jvd2xlciIsImN1cnJlbnRCb3dsZXIiLCJ0aGlzT3ZlciIsInRoaXNPdmVyQmFsbCIsInRvdGFsT3ZlciIsInRvdGFsU2NvcmUiLCJ0b3RhbFdpY2tldEZhbGxlbiIsImlzRmlyc3RJbm5pbmdzT3ZlciIsInRhcmdldCIsImlzR2FtZU92ZXIiLCJ3aW5uaW5nVGV4dCIsInJhbmQiLCJmaXJzdElubmluZ3NTdGF0Iiwic2Vjb25kSW5uaW5nc1N0YXQiLCJnYW1lU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJzZXRHYW1lU3RhdGVzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0R2FtZVN0YXRpc3RpY3MiLCJyZXNldEdhbWVTdGF0aXN0aWNzIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/game/GameSlice.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_3__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_1__.PersistGate, {\n            loading: null,\n            persistor: _store_store__WEBPACK_IMPORTED_MODULE_3__.persistor,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\ShellBeeHaken\\\\Next.js\\\\TASK\\\\virtual-cricket-game\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\ShellBeeHaken\\\\Next.js\\\\TASK\\\\virtual-cricket-game\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ShellBeeHaken\\\\Next.js\\\\TASK\\\\virtual-cricket-game\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ3ZCO0FBQ1U7QUFDbkI7QUFDeUM7QUFDSTtBQUUzRSxTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ25DLHFCQUNFLDhEQUFDTCxpREFBUUE7UUFBQ0MsT0FBT0EsK0NBQUtBO2tCQUNwQiw0RUFBQ0Ysd0VBQVdBO1lBQUNPLFNBQVM7WUFBTUosV0FBV0EsbURBQVNBO3NCQUM5Qyw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlydHVhbC1jcmlja2V0LWdhbWUvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSwgcGVyc2lzdG9yIH0gZnJvbSBcIkAvc3RvcmUvc3RvcmVcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJAL2NvbXBvbmVudHMvZ2FtZS9zZWxlY3QtdGVhbXMvc3R5bGVzL3NlbGVjdC10ZWFtcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgXCJAL2NvbXBvbmVudHMvZ2FtZS9zaW11bGF0ZS1tYXRjaC9zdHlsZXMvc2ltdWxhdGUtbWF0Y2gubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8UGVyc2lzdEdhdGUgbG9hZGluZz17bnVsbH0gcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1BlcnNpc3RHYXRlPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJQZXJzaXN0R2F0ZSIsIlByb3ZpZGVyIiwic3RvcmUiLCJwZXJzaXN0b3IiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   persistor: () => (/* binding */ persistor),\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage/session */ \"redux-persist/lib/storage/session\");\n/* harmony import */ var redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_game_GameSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/game/GameSlice */ \"./src/components/game/GameSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _components_game_GameSlice__WEBPACK_IMPORTED_MODULE_3__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _components_game_GameSlice__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n // Use session storage\n\nconst persistConfig = {\n    key: \"root\",\n    storage: (redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_2___default())\n};\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, _components_game_GameSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        game: persistedReducer\n    }\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistStore)(store);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVztBQUNFLENBQUUsc0JBQXNCO0FBQ2pDO0FBRXRELE1BQU1LLGdCQUFnQjtJQUNwQkMsS0FBSztJQUNMQyxTQUFTSiwwRUFBY0E7QUFDekI7QUFFQSxNQUFNSyxtQkFBbUJOLDZEQUFjQSxDQUFDRyxlQUFlRCxrRUFBV0E7QUFFbEUsTUFBTUssUUFBUVQsZ0VBQWNBLENBQUM7SUFDM0JVLFNBQVM7UUFDUEMsTUFBTUg7SUFDUjtBQUNGO0FBRUEsTUFBTUksWUFBWVgsMkRBQVlBLENBQUNRO0FBRUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXJ0dWFsLWNyaWNrZXQtZ2FtZS8uL3NyYy9zdG9yZS9zdG9yZS5qcz9lZWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgc3RvcmFnZVNlc3Npb24gZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9zZXNzaW9uJzsgIC8vIFVzZSBzZXNzaW9uIHN0b3JhZ2VcbmltcG9ydCBnYW1lUmVkdWNlciBmcm9tICdAL2NvbXBvbmVudHMvZ2FtZS9HYW1lU2xpY2UnO1xuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICBrZXk6ICdyb290JyxcbiAgc3RvcmFnZTogc3RvcmFnZVNlc3Npb24sXG59O1xuXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgZ2FtZVJlZHVjZXIpO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGdhbWU6IHBlcnNpc3RlZFJlZHVjZXIsXG4gIH0sXG59KTtcblxuY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcblxuZXhwb3J0IHsgc3RvcmUsIHBlcnNpc3RvciB9O1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJzdG9yYWdlU2Vzc2lvbiIsImdhbWVSZWR1Y2VyIiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiZ2FtZSIsInBlcnNpc3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage/session":
/*!****************************************************!*\
  !*** external "redux-persist/lib/storage/session" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage/session");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
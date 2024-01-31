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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   gameSlice: () => (/* binding */ gameSlice),\n/* harmony export */   resetGameStatistics: () => (/* binding */ resetGameStatistics),\n/* harmony export */   setGameId: () => (/* binding */ setGameId),\n/* harmony export */   setGameStates: () => (/* binding */ setGameStates),\n/* harmony export */   setGameStatistics: () => (/* binding */ setGameStatistics)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialGame = {\n    gameStates: {\n        battingTeam: \"\",\n        bowlingTeam: \"\",\n        overs: null\n    },\n    gameId: null,\n    gameStatistics: {\n        battingTeam: null,\n        bowlingTeam: null,\n        previousBowler: null,\n        currentBowler: null,\n        thisOver: [],\n        thisOverBall: 0,\n        totalOver: 0,\n        totalScore: 0,\n        totalWicketFallen: 0,\n        isFirstInningsOver: false,\n        target: 0,\n        isGameOver: false,\n        winningText: null,\n        rand: null,\n        firstInningsStat: null,\n        secondInningsStat: null\n    }\n};\nconst gameSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"game\",\n    initialState: initialGame,\n    reducers: {\n        setGameStates: (state, action)=>{\n            state.gameStates.battingTeam = action.payload.battingTeam;\n            state.gameStates.bowlingTeam = action.payload.bowlingTeam;\n            state.gameStates.overs = action.payload.overs;\n        },\n        setGameId: (state, action)=>{\n            state.gameId = action.payload;\n        },\n        setGameStatistics: (state, action)=>{\n            state.gameStatistics.battingTeam = action.payload.battingTeam;\n            state.gameStatistics.bowlingTeam = action.payload.bowlingTeam;\n            state.gameStatistics.previousBowler = action.payload.previousBowler;\n            state.gameStatistics.currentBowler = action.payload.currentBowler;\n            state.gameStatistics.thisOver = action.payload.thisOver;\n            state.gameStatistics.thisOverBall = action.payload.thisOverBall;\n            state.gameStatistics.totalOver = action.payload.totalOver;\n            state.gameStatistics.totalScore = action.payload.totalScore;\n            state.gameStatistics.totalWicketFallen = action.payload.totalWicketFallen;\n            state.gameStatistics.isFirstInningsOver = action.payload.isFirstInningsOver;\n            state.gameStatistics.target = action.payload.target;\n            state.gameStatistics.isGameOver = action.payload.isGameOver;\n            state.gameStatistics.winningText = action.payload.winningText;\n            state.gameStatistics.rand = action.payload.rand;\n            state.gameStatistics.firstInningsStat = action.payload.firstInningsStat;\n            state.gameStatistics.secondInningsStat = action.payload.secondInningsStat;\n        }\n    }\n});\nconst resetGameStatistics = (state)=>{\n    state.gameStatistics = initialGame.gameStatistics;\n};\nconst { setGameStates, setGameId, setGameStatistics } = gameSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWM7QUFDbkQsRUFBRTtBQUVLLE1BQU0sRUFBRW1CLGFBQWEsRUFBRUksU0FBUyxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHVCxVQUFVVyxPQUFPLENBQUM7QUFFakYsaUVBQWVYLFVBQVVZLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpcnR1YWwtY3JpY2tldC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9HYW1lU2xpY2UuanM/ZDAxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxHYW1lID0ge1xuICBnYW1lU3RhdGVzOiB7XG4gICAgYmF0dGluZ1RlYW06IFwiXCIsXG4gICAgYm93bGluZ1RlYW06IFwiXCIsXG4gICAgb3ZlcnM6IG51bGwsXG4gIH0sXG4gIGdhbWVJZDogbnVsbCxcbiAgZ2FtZVN0YXRpc3RpY3M6IHtcbiAgICBiYXR0aW5nVGVhbTogbnVsbCxcbiAgICBib3dsaW5nVGVhbTogbnVsbCxcbiAgICBwcmV2aW91c0Jvd2xlcjogbnVsbCxcbiAgICBjdXJyZW50Qm93bGVyOiBudWxsLFxuICAgIHRoaXNPdmVyOiBbXSxcbiAgICB0aGlzT3ZlckJhbGw6IDAsXG4gICAgdG90YWxPdmVyOiAwLFxuICAgIHRvdGFsU2NvcmU6IDAsXG4gICAgdG90YWxXaWNrZXRGYWxsZW46IDAsXG4gICAgaXNGaXJzdElubmluZ3NPdmVyOiBmYWxzZSxcbiAgICB0YXJnZXQ6IDAsXG4gICAgaXNHYW1lT3ZlcjogZmFsc2UsXG4gICAgd2lubmluZ1RleHQ6IG51bGwsXG4gICAgcmFuZDogbnVsbCxcbiAgICBmaXJzdElubmluZ3NTdGF0OiBudWxsLFxuICAgIHNlY29uZElubmluZ3NTdGF0OiBudWxsLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJnYW1lXCIsXG4gIGluaXRpYWxTdGF0ZTogaW5pdGlhbEdhbWUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0R2FtZVN0YXRlczogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmdhbWVTdGF0ZXMuYmF0dGluZ1RlYW0gPSBhY3Rpb24ucGF5bG9hZC5iYXR0aW5nVGVhbTtcbiAgICAgIHN0YXRlLmdhbWVTdGF0ZXMuYm93bGluZ1RlYW0gPSBhY3Rpb24ucGF5bG9hZC5ib3dsaW5nVGVhbTtcbiAgICAgIHN0YXRlLmdhbWVTdGF0ZXMub3ZlcnMgPSBhY3Rpb24ucGF5bG9hZC5vdmVycztcbiAgICB9LFxuICAgIHNldEdhbWVJZDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmdhbWVJZCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgc2V0R2FtZVN0YXRpc3RpY3M6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy5iYXR0aW5nVGVhbSA9IGFjdGlvbi5wYXlsb2FkLmJhdHRpbmdUZWFtO1xuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3MuYm93bGluZ1RlYW0gPSBhY3Rpb24ucGF5bG9hZC5ib3dsaW5nVGVhbTtcbiAgICAgIHN0YXRlLmdhbWVTdGF0aXN0aWNzLnByZXZpb3VzQm93bGVyID0gYWN0aW9uLnBheWxvYWQucHJldmlvdXNCb3dsZXI7XG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy5jdXJyZW50Qm93bGVyID0gYWN0aW9uLnBheWxvYWQuY3VycmVudEJvd2xlcjtcbiAgICAgIHN0YXRlLmdhbWVTdGF0aXN0aWNzLnRoaXNPdmVyID0gYWN0aW9uLnBheWxvYWQudGhpc092ZXI7XG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy50aGlzT3ZlckJhbGwgPSBhY3Rpb24ucGF5bG9hZC50aGlzT3ZlckJhbGw7XG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy50b3RhbE92ZXIgPSBhY3Rpb24ucGF5bG9hZC50b3RhbE92ZXI7XG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy50b3RhbFNjb3JlID0gYWN0aW9uLnBheWxvYWQudG90YWxTY29yZTtcbiAgICAgIHN0YXRlLmdhbWVTdGF0aXN0aWNzLnRvdGFsV2lja2V0RmFsbGVuID0gYWN0aW9uLnBheWxvYWQudG90YWxXaWNrZXRGYWxsZW47XG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy5pc0ZpcnN0SW5uaW5nc092ZXIgPVxuICAgICAgICBhY3Rpb24ucGF5bG9hZC5pc0ZpcnN0SW5uaW5nc092ZXI7XG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy50YXJnZXQgPSBhY3Rpb24ucGF5bG9hZC50YXJnZXQ7XG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy5pc0dhbWVPdmVyID0gYWN0aW9uLnBheWxvYWQuaXNHYW1lT3ZlcjtcbiAgICAgIHN0YXRlLmdhbWVTdGF0aXN0aWNzLndpbm5pbmdUZXh0ID0gYWN0aW9uLnBheWxvYWQud2lubmluZ1RleHQ7XG4gICAgICBzdGF0ZS5nYW1lU3RhdGlzdGljcy5yYW5kID0gYWN0aW9uLnBheWxvYWQucmFuZDtcbiAgICAgIHN0YXRlLmdhbWVTdGF0aXN0aWNzLmZpcnN0SW5uaW5nc1N0YXQgPSBhY3Rpb24ucGF5bG9hZC5maXJzdElubmluZ3NTdGF0O1xuICAgICAgc3RhdGUuZ2FtZVN0YXRpc3RpY3Muc2Vjb25kSW5uaW5nc1N0YXQgPSBhY3Rpb24ucGF5bG9hZC5zZWNvbmRJbm5pbmdzU3RhdDtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCByZXNldEdhbWVTdGF0aXN0aWNzID0gKHN0YXRlKSA9PiB7XG4gIHN0YXRlLmdhbWVTdGF0aXN0aWNzID0gaW5pdGlhbEdhbWUuZ2FtZVN0YXRpc3RpY3M7XG59O1xuXG5leHBvcnQgY29uc3QgeyBzZXRHYW1lU3RhdGVzLCBzZXRHYW1lSWQsIHNldEdhbWVTdGF0aXN0aWNzIH0gPSBnYW1lU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZVNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsR2FtZSIsImdhbWVTdGF0ZXMiLCJiYXR0aW5nVGVhbSIsImJvd2xpbmdUZWFtIiwib3ZlcnMiLCJnYW1lSWQiLCJnYW1lU3RhdGlzdGljcyIsInByZXZpb3VzQm93bGVyIiwiY3VycmVudEJvd2xlciIsInRoaXNPdmVyIiwidGhpc092ZXJCYWxsIiwidG90YWxPdmVyIiwidG90YWxTY29yZSIsInRvdGFsV2lja2V0RmFsbGVuIiwiaXNGaXJzdElubmluZ3NPdmVyIiwidGFyZ2V0IiwiaXNHYW1lT3ZlciIsIndpbm5pbmdUZXh0IiwicmFuZCIsImZpcnN0SW5uaW5nc1N0YXQiLCJzZWNvbmRJbm5pbmdzU3RhdCIsImdhbWVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsInNldEdhbWVTdGF0ZXMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRHYW1lSWQiLCJzZXRHYW1lU3RhdGlzdGljcyIsInJlc2V0R2FtZVN0YXRpc3RpY3MiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/game/GameSlice.js\n");

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
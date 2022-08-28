/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/scripts/app/app.js":
/*!***********************************!*\
  !*** ./static/scripts/app/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./static/scripts/constants/constants.js\");\n/* harmony import */ var _components_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card.component */ \"./static/scripts/components/card.component.js\");\n/* harmony import */ var _components_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navigation.component */ \"./static/scripts/components/navigation.component.js\");\n/* harmony import */ var _components_categoryCard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/categoryCard.component */ \"./static/scripts/components/categoryCard.component.js\");\n/* harmony import */ var _components_gameResult_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/gameResult.component */ \"./static/scripts/components/gameResult.component.js\");\n/* harmony import */ var _components_audio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/audio.component */ \"./static/scripts/components/audio.component.js\");\n/* harmony import */ var _components_star_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/star.component */ \"./static/scripts/components/star.component.js\");\n/* harmony import */ var _components_startButton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/startButton.component */ \"./static/scripts/components/startButton.component.js\");\n/* harmony import */ var _components_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/component.component */ \"./static/scripts/components/component.component.js\");\n/* harmony import */ var _components_statsData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/statsData */ \"./static/scripts/components/statsData.js\");\n/* harmony import */ var _components_sortableTable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sortableTable.component */ \"./static/scripts/components/sortableTable.component.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // import { cards, categories } from \"../../data/cards.data\";\n\n\n\n\n\n\n\n\n // import { StatisticsContainer } from \"../components/statsTable.component\";\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App(categories, cards) {\n    var _this = this;\n\n    _classCallCheck(this, App);\n\n    _defineProperty(this, \"handleclicks\", function (event) {\n      var element = event.target;\n      var card = element.closest(\".card\");\n\n      _this.renderStats();\n\n      if (element.closest(\".switch\")) {\n        _this.toggleMode();\n      } else if (element.closest(\".statistics\")) {\n        _components_star_component__WEBPACK_IMPORTED_MODULE_6__.StarComponent.hideStars();\n      } // else if (\n      //   element.closest(\".category_card\") ||\n      //   element.closest(\".toCardPage\")\n      // ) {\n      //   Component.cleanDOM();\n      //   StarComponent.hideStars();\n      //   this.renderCards(event);\n      //   this.errors = 0;\n      // }\n      else if (element.closest(\".audio-controls\")) {\n        _components_audio_component__WEBPACK_IMPORTED_MODULE_5__.AudioComponent.playAudio(event, element);\n        _this.currentID = card.id;\n        _this.currentWord = card.querySelector(\".card__capture\").textContent; // this.currentCategory = this.cards.findIndex((x) =>\n        //   x.some((e) => e.word === this.currentWord)\n        // );\n\n        _this.currentCategoryName = window.location.href.slice(window.location.href.lastIndexOf(\"/\") + 1).replaceAll(\"%20\", \" \").replace(\"#\", \"\");\n        console.log(_this.currentCategoryName);\n\n        _this.statsData.addTrainItem(_this.currentCategoryName, _this.currentWord); // this.statsData.mirrorToLocalStorage();\n\n\n        _this.statsData.sendToServer(_this.statsData.postNewItem(+_this.currentID.replace('card', ''), 'trained'));\n      } else if (element.closest(\".rotate-controls\")) {\n        _components_component_component__WEBPACK_IMPORTED_MODULE_8__.Component.rotateBack(event, card);\n      } // else if (element.closest(\".toMain\")) {\n      //   Component.cleanDOM();\n      //   this.renderCategories();\n      // }\n      else if (element.closest(\".icon_start\")) {\n        _this.generateAudio();\n\n        _this.currentID = _this.pronounceWords();\n        element.closest(\".icon_start\").classList.add(\"icon_start--hidden\");\n        _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelector(\".icon_repeat\").classList.remove(\"icon_repeat--hidden\");\n      } else if (_this.mode === \"play\" && card) {\n        var isRight = _this.defineAccuracy(event, _this.currentID);\n\n        if (isRight) {\n          _this.count++;\n          _components_star_component__WEBPACK_IMPORTED_MODULE_6__.StarComponent.renderStar(\"right\");\n          _components_audio_component__WEBPACK_IMPORTED_MODULE_5__.AudioComponent.playCorrectAudio();\n          _this.currentWord = card.querySelector(\".card__capture\").textContent; // this.currentCategory = this.cards.findIndex((x) =>\n          //   x.some((e) => e.word === this.currentWord)\n          // );\n\n          _this.currentCategoryName = window.location.href.slice(window.location.href.lastIndexOf(\"/\") + 1).replaceAll(\"%20\", \" \").replace(\"#\", \"\");\n\n          _this.statsData.addGameItem(_this.currentCategoryName, _this.currentWord, true); // this.statsData.mirrorToLocalStorage();\n\n\n          _this.statsData.sendToServer(_this.statsData.postNewItem(+_this.currentID.replace('card', ''), 'correct'));\n\n          if (!_this.isFinished()) {\n            _this.currentID = _this.pronounceWords();\n          } else {\n            var _document, _document2;\n\n            _components_component_component__WEBPACK_IMPORTED_MODULE_8__.Component.cleanDOM();\n            (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(\".icon_start\").classList.remove(\"icon_start--hidden\");\n            (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector(\".icon_repeat\").classList.add(\"icon_repeat--hidden\");\n            _components_startButton_component__WEBPACK_IMPORTED_MODULE_7__.StartButtonComponent.hideStartButton();\n            _components_star_component__WEBPACK_IMPORTED_MODULE_6__.StarComponent.hideStars();\n\n            _this.renderGameResult();\n\n            setTimeout(_components_component_component__WEBPACK_IMPORTED_MODULE_8__.Component.cleanDOM, 5000);\n            setTimeout(_components_component_component__WEBPACK_IMPORTED_MODULE_8__.Component.simulatetoMainPageClick, 5000);\n            setTimeout(_components_component_component__WEBPACK_IMPORTED_MODULE_8__.Component.simulateSwitchButtonClick, 5000);\n            _this.count = 0;\n            _this.audioPlayersCount = NaN;\n          }\n        } else {\n          _components_star_component__WEBPACK_IMPORTED_MODULE_6__.StarComponent.renderStar(\"wrong\");\n          _this.errors++;\n          _components_audio_component__WEBPACK_IMPORTED_MODULE_5__.AudioComponent.playErrorAudio();\n          _this.currentWord = card.querySelector(\".card__capture\").textContent; // this.currentCategory = this.cards.findIndex((x) =>\n          //   x.some((e) => e.word === this.currentWord)\n          // );\n\n          _this.currentCategoryName = window.location.href.slice(window.location.href.lastIndexOf(\"/\") + 1).replaceAll(\"%20\", \" \").replaceAll(\"#\", \"\");\n\n          _this.statsData.addGameItem(_this.currentCategoryName, _this.currentWord, false); // this.statsData.mirrorToLocalStorage();\n\n\n          _this.statsData.sendToServer(_this.statsData.postNewItem(+_this.currentID.replace('card', ''), 'errors'));\n\n          if (!_this.difficultWords.includes(_this.currentWord)) {\n            _this.difficultWords.push(_this.currentWord);\n          }\n        }\n      } else if (element.closest(\".icon_repeat\")) {\n        _components_audio_component__WEBPACK_IMPORTED_MODULE_5__.AudioComponent.repeatPronouncedWord(_this.currentID);\n      } else if (element.closest(\".stats__button-repeat_difficult\")) {\n        if (_this.difficultWords.length) {\n          _components_component_component__WEBPACK_IMPORTED_MODULE_8__.Component.cleanDOM();\n\n          var wordsToRender = _this.difficultWords.sort(function (a, b) {\n            return a - b;\n          });\n\n          var length = Math.min(_this.difficultWords.length, 8);\n\n          _this.renderCards(event, wordsToRender.slice(0, length));\n\n          _this.errors = 0;\n        } else {\n          console.log(\"No difficult words\");\n        }\n      } else if (element.closest(\".stats__button-reset\")) {\n        _this.statsData = new _components_statsData__WEBPACK_IMPORTED_MODULE_9__.StatsData(); // this.statsData.mirrorToLocalStorage();\n\n        _this.statsData.sendToServer();\n\n        _this.difficultWords = [];\n\n        _this.renderStats();\n      }\n    });\n\n    this.categories = categories;\n    this.categoriesNames = \"\";\n    this.categoriesImages = \"\";\n    this.categoriesIcons = \"\";\n    this.cards = cards;\n    this.mode = \"train\"; // this.currentCategory = \"None\";\n\n    this.errors = 0;\n    this.currentID = NaN;\n    this.audiogenerator = null;\n    this.count = 0;\n    this.audioPlayersCount = NaN;\n    this.statsData = new _components_statsData__WEBPACK_IMPORTED_MODULE_9__.StatsData();\n    this.difficultWords = [];\n  }\n\n  _createClass(App, [{\n    key: \"setMode\",\n    value: function setMode(mode) {\n      this.mode = mode;\n    }\n  }, {\n    key: \"toggleMode\",\n    value: function toggleMode() {\n      _components_star_component__WEBPACK_IMPORTED_MODULE_6__.StarComponent.hideStars();\n\n      if (this.mode === \"train\") {\n        this.setMode(\"play\");\n        _components_card_component__WEBPACK_IMPORTED_MODULE_1__.Card.changeCardDesignToGameMode();\n        _components_categoryCard_component__WEBPACK_IMPORTED_MODULE_3__.CategoryCard.changeCategoriesDesignToGameMode();\n        _components_startButton_component__WEBPACK_IMPORTED_MODULE_7__.StartButtonComponent.renderStartButton();\n        console.log(\"play mode\");\n      } else {\n        this.setMode(\"train\");\n        _components_card_component__WEBPACK_IMPORTED_MODULE_1__.Card.changeCardDesignToTrainMode();\n        _components_categoryCard_component__WEBPACK_IMPORTED_MODULE_3__.CategoryCard.changeCategoriesDesignToTrainMode();\n        _components_startButton_component__WEBPACK_IMPORTED_MODULE_7__.StartButtonComponent.hideStartButton();\n        console.log(\"train mode\");\n      }\n    } // renderCards(event, difficultWords) {\n    //   if (difficultWords) {\n    //     const wordsToRender = cards\n    //       .flat()\n    //       .filter((item) => difficultWords.includes(item.word));\n    //     const CardsContainerElement = new CardsContainer();\n    //     CardsContainerElement.renderDifficultCards(wordsToRender);\n    //   } else {\n    //     this.currentCategory =\n    //       event.target.closest(\".category_card\")?.id ||\n    //       event.target.closest(\".toCardPage\").id;\n    //     const CardsContainerElement = new CardsContainer();\n    //     CardsContainerElement.renderCards(\n    //       ...Component.chooseAssetsForRendering(this.cards, this.currentCategory)\n    //     );\n    //   }\n    //   if (this.mode === \"play\") {\n    //     Card.changeCardDesignToGameMode();\n    //     StartButtonComponent.renderStartButton();\n    //   } else {\n    //     Card.changeCardDesignToTrainMode();\n    //     StartButtonComponent.hideStartButton();\n    //   }\n    // }\n    // renderCategories() {\n    //   const Categories = new CategoryContainer();\n    //   Categories.renderCategoryCards(categoryNames, categoryImagesPaths);\n    //   if (this.mode === \"play\") {\n    //     CategoryCard.changeCategoriesDesignToGameMode();\n    //     StartButtonComponent.renderStartButton();\n    //   } else {\n    //     CategoryCard.changeCategoriesDesignToTrainMode();\n    //     StartButtonComponent.hideStartButton();\n    //   }\n    // }\n\n  }, {\n    key: \"generateAudio\",\n    value: function generateAudio() {\n      var shuffledAudio = _components_audio_component__WEBPACK_IMPORTED_MODULE_5__.AudioComponent.shuffleAudio();\n      this.audioPlayersCount = shuffledAudio.length;\n      this.audioGenerator = _components_audio_component__WEBPACK_IMPORTED_MODULE_5__.AudioComponent.gen(shuffledAudio);\n    }\n  }, {\n    key: \"pronounceWords\",\n    value: function pronounceWords() {\n      var newAudio = this.audioGenerator.next().value;\n      newAudio.play();\n      var card = newAudio.closest(\".card\");\n      card.classList.add(\"card--pronounced\");\n      this.currentID = card.id;\n      return this.currentID;\n    }\n  }, {\n    key: \"defineAccuracy\",\n    value: function defineAccuracy(event, id) {\n      var element = event.target;\n      event.preventDefault();\n      var card = element.closest(\".card\");\n\n      if (card.id === id) {\n        card.classList.add(\"card--guessed\");\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"isFinished\",\n    value: function isFinished() {\n      return this.count >= this.audioPlayersCount;\n    }\n  }, {\n    key: \"renderGameResult\",\n    value: function renderGameResult() {\n      var gameResultContainer = new _components_gameResult_component__WEBPACK_IMPORTED_MODULE_4__.GameResultContainer();\n\n      if (this.errors === 0) {\n        gameResultContainer.renderGameResult(\"success\", this.errors);\n        _components_audio_component__WEBPACK_IMPORTED_MODULE_5__.AudioComponent.playSuccessAudio();\n      } else {\n        gameResultContainer.renderGameResult(\"failure\", this.errors);\n        _components_audio_component__WEBPACK_IMPORTED_MODULE_5__.AudioComponent.playFailureAudio();\n      }\n    }\n  }, {\n    key: \"renderStats\",\n    value: function renderStats() {\n      // Component.cleanDOM();\n      // const statsContainer = new StatisticsContainer();\n      // statsContainer.renderStatistics(\n      //   this.cards,\n      //   this.categories,\n      //   this.statsData\n      // );\n      _components_sortableTable_component__WEBPACK_IMPORTED_MODULE_10__.SortableTable.addSortTableListener();\n    }\n  }, {\n    key: \"addListeners\",\n    value: function addListeners() {\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.addEventListener(\"click\", this.handleclicks); // this.statsData.restoreFromLocalStorage();\n    }\n  }, {\n    key: \"addNavigation\",\n    value: function addNavigation() {\n      console.log(\"nav\");\n      var navigation = new _components_navigation_component__WEBPACK_IMPORTED_MODULE_2__.Navigation(); // this.categoriesNames,\n      // this.categoriesIcons\n      // navigation.addMenuItems();\n\n      navigation.addListeners();\n    }\n  }]);\n\n  return App;\n}();\n\nvar application = new App(); // application.renderCategories();\n\napplication.addNavigation();\napplication.addListeners();\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/app/app.js?");

/***/ }),

/***/ "./static/scripts/components/audio.component.js":
/*!******************************************************!*\
  !*** ./static/scripts/components/audio.component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AudioComponent\": () => (/* binding */ AudioComponent)\n/* harmony export */ });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./static/scripts/constants/constants.js\");\n/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.component */ \"./static/scripts/components/component.component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar AudioComponent = /*#__PURE__*/function (_Component) {\n  _inherits(AudioComponent, _Component);\n\n  var _super = _createSuper(AudioComponent);\n\n  function AudioComponent(name, cardContainer, soundPath) {\n    var _this;\n\n    _classCallCheck(this, AudioComponent);\n\n    _this = _super.call(this, name, cardContainer);\n    _this.soundPath = soundPath;\n    return _this;\n  }\n\n  _createClass(AudioComponent, null, [{\n    key: \"playAudio\",\n    value: function playAudio(event, element) {\n      var audioPlayer = element.closest(\".card\").querySelector(\".audio-player\");\n      event.preventDefault();\n      audioPlayer.play();\n    }\n  }, {\n    key: \"playCorrectAudio\",\n    value: function playCorrectAudio() {\n      var correctAudio = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelector(\".audio-player--correct\");\n      correctAudio.play();\n    }\n  }, {\n    key: \"playErrorAudio\",\n    value: function playErrorAudio() {\n      var errorAudio = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelector(\".audio-player--error\");\n      errorAudio.play();\n    }\n  }, {\n    key: \"playFailureAudio\",\n    value: function playFailureAudio() {\n      var failureAudio = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelector(\".audio-player--failure\");\n      failureAudio.play();\n    }\n  }, {\n    key: \"playSuccessAudio\",\n    value: function playSuccessAudio() {\n      var successAudio = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelector(\".audio-player--success\");\n      successAudio.play();\n    }\n  }, {\n    key: \"repeatPronouncedWord\",\n    value: function repeatPronouncedWord(id) {\n      var card = document.getElementById(String(id));\n      var audio = card.querySelector(\".audio-player\");\n      audio.play();\n    }\n  }, {\n    key: \"shuffle\",\n    value: function shuffle(array) {\n      for (var i = array.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        var _ref = [array[j], array[i]];\n        array[i] = _ref[0];\n        array[j] = _ref[1];\n      }\n\n      return array;\n    }\n  }, {\n    key: \"shuffleAudio\",\n    value: function shuffleAudio() {\n      var audioPlayers = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".audio-player\");\n      var audioPlayersArray = Array.from(audioPlayers);\n      return AudioComponent.shuffle(audioPlayersArray);\n    }\n  }, {\n    key: \"gen\",\n    value: /*#__PURE__*/_regeneratorRuntime().mark(function gen(array) {\n      return _regeneratorRuntime().wrap(function gen$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              return _context.delegateYield(array, \"t0\", 1);\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, gen);\n    })\n  }]);\n\n  return AudioComponent;\n}(_component_component__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/components/audio.component.js?");

/***/ }),

/***/ "./static/scripts/components/card.component.js":
/*!*****************************************************!*\
  !*** ./static/scripts/components/card.component.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card),\n/* harmony export */   \"CardsContainer\": () => (/* binding */ CardsContainer)\n/* harmony export */ });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./static/scripts/constants/constants.js\");\n/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.component */ \"./static/scripts/components/component.component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n// import \"../../data/cards.data\";\n\n\n\nvar Card = /*#__PURE__*/function (_Component) {\n  _inherits(Card, _Component);\n\n  var _super = _createSuper(Card);\n\n  function Card(name, picturePath, cardContainer, id, soundPath, translation) {\n    var _this;\n\n    _classCallCheck(this, Card);\n\n    _this = _super.call(this, name, picturePath, cardContainer, id);\n    _this.soundPath = soundPath;\n    _this.sound = new Audio([soundPath]);\n    _this.translation = translation;\n    _this.pictureAlt = _this.name;\n    return _this;\n  }\n\n  _createClass(Card, [{\n    key: \"createCard\",\n    value: function createCard() {\n      var newElement = document.createElement(\"div\");\n      newElement.classList.add(\"card\");\n      newElement.id = this.id;\n      newElement.innerHTML = \"\\n<div class=\\\"card__card-inner\\\">\\n  <div class=\\\"card__card-front\\\">\\n    <a class=\\\"card__link\\\" href=\\\"#\\\">\\n      <figure class=\\\"card__figure\\\">\\n        <img\\n          class=\\\"card__img\\\"\\n          src=\\\"\".concat(this.picturePath, \"\\\"\\n          alt=\").concat(this.pictureAlt, \"\\n        />\\n        <h4 class=\\\"card__capture\\\">\").concat(this.name, \"</h4>\\n      </figure>\\n      <audio \\n        src=\\\"\").concat(this.soundPath, \"\\\"\\n        class=\\\"audio-player\\\" crossorigin=\\\"anonymous\\\">\\n            Your browser does not support the\\n            <code>audio</code> element.\\n      </audio>\\n      <div class=\\\"audio-controls\\\">\\n        <div class=\\\"audio-controls__play-toggle\\\">\\n          <span class=\\\"play-icon\\\"><i class=\\\"fa-solid fa-music\\\"></i></span>\\n          <span class=\\\"pause-icon--hidden\\\"><i class=\\\"fa-solid fa-pause\\\"></i></span>\\n        </div>\\n      </div>\\n      <div class=\\\"rotate-controls\\\">\\n        <div class=\\\"rotate-controls__play-toggle\\\">\\n          <span class=\\\"rotate-icon\\\"><i class=\\\"fa-solid fa-arrows-rotate\\\"></i></span>    \\n        </div>\\n      </div>\\n    </a>\\n  </div>  \\n  <div class=\\\"card__card-back\\\">\\n    <a class=\\\"card__link\\\" href=\\\"#\\\">\\n      <figure class=\\\"card__figure\\\">\\n        <img\\n          class=\\\"card__img\\\"\\n          src=\\\"\").concat(this.picturePath, \"\\\"\\n          alt=\").concat(this.pictureAlt, \"\\n        />\\n        <h4 class=\\\"card__capture\\\">\").concat(this.translation, \"</h4>\\n      </figure>\\n    </a>\\n  </div>    \\n</div>\\n  \");\n      return newElement;\n    }\n  }, {\n    key: \"renderCard\",\n    value: function renderCard() {\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment.append(this.createCard());\n      this.cardContainer.append(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment);\n      return this;\n    }\n  }], [{\n    key: \"changeCardDesignToGameMode\",\n    value: function changeCardDesignToGameMode() {\n      var rotateControls = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".rotate-controls\");\n      var audioControls = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".audio-controls\");\n      var captures = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".card__capture\");\n      var images = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".card__img\");\n\n      _toConsumableArray(rotateControls).forEach(function (item) {\n        item.classList.add(\"rotate-controls--hidden\");\n      });\n\n      _toConsumableArray(audioControls).forEach(function (item) {\n        item.classList.add(\"audio-controls--hidden\");\n      });\n\n      _toConsumableArray(captures).forEach(function (item) {\n        item.classList.add(\"card__capture--hidden\");\n      });\n\n      _toConsumableArray(images).forEach(function (item) {\n        item.classList.add(\"card__img--gameMode\");\n      });\n    }\n  }, {\n    key: \"changeCardDesignToTrainMode\",\n    value: function changeCardDesignToTrainMode() {\n      var rotateControls = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".rotate-controls\");\n      var audioControls = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".audio-controls\");\n      var captures = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".card__capture\");\n      var images = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".card__img\");\n\n      _toConsumableArray(rotateControls).forEach(function (item) {\n        item.classList.remove(\"rotate-controls--hidden\");\n      });\n\n      _toConsumableArray(audioControls).forEach(function (item) {\n        item.classList.remove(\"audio-controls--hidden\");\n      });\n\n      _toConsumableArray(captures).forEach(function (item) {\n        item.classList.remove(\"card__capture--hidden\");\n      });\n\n      _toConsumableArray(images).forEach(function (item) {\n        item.classList.remove(\"card__img--gameMode\");\n      });\n    }\n  }]);\n\n  return Card;\n}(_component_component__WEBPACK_IMPORTED_MODULE_1__.Component);\n\nvar CardsContainer = /*#__PURE__*/function () {\n  function CardsContainer() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Card Container\";\n    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants_constants__WEBPACK_IMPORTED_MODULE_0__.container;\n\n    _classCallCheck(this, CardsContainer);\n\n    // super(name);\n    this.name = name;\n    this.parent = parent;\n  }\n\n  _createClass(CardsContainer, [{\n    key: \"createCardContainer\",\n    value: function createCardContainer() {\n      var newElement = document.createElement(\"div\");\n      newElement.classList.add(\"card_container\");\n      return newElement;\n    }\n  }, {\n    key: \"renderCardContainer\",\n    value: function renderCardContainer(element) {\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment.append(element);\n      this.parent.append(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment);\n      return this;\n    }\n  }, {\n    key: \"renderCards\",\n    value: function renderCards(cardNames, cardImagesPaths, soundPaths, translations) {\n      var cardContainer = this.createCardContainer();\n      cardNames.map(function (item, index) {\n        var newCard = new Card(item, cardImagesPaths[index], cardContainer, \"card\".concat(index), soundPaths[index], translations[index]);\n        newCard.renderCard();\n      });\n      this.renderCardContainer(cardContainer);\n      return this;\n    }\n  }, {\n    key: \"renderDifficultCards\",\n    value: function renderDifficultCards(words) {\n      var cardContainer = this.createCardContainer();\n      words.forEach(function (item, index) {\n        var newCard = new Card(item.word, item.image, cardContainer, \"card\".concat(index), item.audioSrc, item.translation);\n        newCard.renderCard();\n      });\n      this.renderCardContainer(cardContainer);\n      return this;\n    }\n  }]);\n\n  return CardsContainer;\n}();\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/components/card.component.js?");

/***/ }),

/***/ "./static/scripts/components/categoryCard.component.js":
/*!*************************************************************!*\
  !*** ./static/scripts/components/categoryCard.component.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CategoryCard\": () => (/* binding */ CategoryCard),\n/* harmony export */   \"CategoryContainer\": () => (/* binding */ CategoryContainer)\n/* harmony export */ });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./static/scripts/constants/constants.js\");\n/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.component */ \"./static/scripts/components/component.component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n// import \"../../data/cards.data\";\n\n\n\nvar CategoryCard = /*#__PURE__*/function (_Component) {\n  _inherits(CategoryCard, _Component);\n\n  var _super = _createSuper(CategoryCard);\n\n  function CategoryCard(name, picturePath, cardContainer, id) {\n    _classCallCheck(this, CategoryCard);\n\n    return _super.call(this, name, picturePath, cardContainer, id);\n  }\n\n  _createClass(CategoryCard, [{\n    key: \"createCategoryCard\",\n    value: function createCategoryCard() {\n      var newElement = document.createElement(\"div\");\n      newElement.classList.add(\"category_card\");\n      newElement.id = this.id;\n      newElement.innerHTML = \"\\n          <a class=\\\"category_card__link\\\" href=\\\"#\\\">\\n            <figure class=\\\"category_card__figure\\\">\\n                <img\\n                class=\\\"category_card__img\\\"\\n                src=\\\"\".concat(this.picturePath, \"\\\"\\n                alt=\").concat(this.pictureAlt, \"\\n                />\\n                <h4 class=\\\"category_card__capture\\\">\").concat(this.name, \"</h4>\\n            </figure>\\n          </a>\");\n      return newElement;\n    }\n  }, {\n    key: \"renderCategoryCard\",\n    value: function renderCategoryCard() {\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment.append(this.createCategoryCard());\n      this.cardContainer.append(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment);\n      return this;\n    }\n  }], [{\n    key: \"changeCategoriesDesignToGameMode\",\n    value: function changeCategoriesDesignToGameMode() {\n      var categoryCards = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".category_card\");\n\n      _toConsumableArray(categoryCards).forEach(function (item) {\n        item.classList.add(\"category_card--gameMode\");\n      });\n    }\n  }, {\n    key: \"changeCategoriesDesignToTrainMode\",\n    value: function changeCategoriesDesignToTrainMode() {\n      var categoryCards = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelectorAll(\".category_card\");\n\n      _toConsumableArray(categoryCards).forEach(function (item) {\n        item.classList.remove(\"category_card--gameMode\");\n      });\n    }\n  }]);\n\n  return CategoryCard;\n}(_component_component__WEBPACK_IMPORTED_MODULE_1__.Component);\n\nvar CategoryContainer = /*#__PURE__*/function () {\n  function CategoryContainer() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Category Container\";\n    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants_constants__WEBPACK_IMPORTED_MODULE_0__.container;\n\n    _classCallCheck(this, CategoryContainer);\n\n    this.name = name;\n    this.parent = parent;\n  }\n\n  _createClass(CategoryContainer, [{\n    key: \"createCategoryContainer\",\n    value: function createCategoryContainer() {\n      var newElement = document.createElement(\"div\");\n      newElement.classList.add(\"category_container\");\n      return newElement;\n    }\n  }, {\n    key: \"renderCategoryContainer\",\n    value: function renderCategoryContainer(element) {\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment.append(element);\n      this.parent.append(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment);\n      return this;\n    }\n  }, {\n    key: \"renderCategoryCards\",\n    value: function renderCategoryCards(categoryNames, categoryImagesPaths) {\n      var categoryContainer = this.createCategoryContainer();\n      categoryNames.forEach(function (item, index) {\n        var newCategory = new CategoryCard(item, categoryImagesPaths[index], categoryContainer, index);\n        newCategory.renderCategoryCard();\n      });\n      this.renderCategoryContainer(categoryContainer);\n      return this;\n    }\n  }]);\n\n  return CategoryContainer;\n}();\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/components/categoryCard.component.js?");

/***/ }),

/***/ "./static/scripts/components/component.component.js":
/*!**********************************************************!*\
  !*** ./static/scripts/components/component.component.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Component = /*#__PURE__*/function () {\n  function Component(name, picturePath, cardContainer, id) {\n    _classCallCheck(this, Component);\n\n    this.name = name;\n    this.picture = new Image();\n    this.picturePath = picturePath;\n    this.pictureAlt = \"\".concat(this.name);\n    this.cardContainer = cardContainer;\n    this.id = id;\n  }\n\n  _createClass(Component, null, [{\n    key: \"cleanDOM\",\n    value: function cleanDOM() {\n      var categoryContainerElement = document.querySelector(\".category_container\");\n      var cardsContainerElement = document.querySelector(\".card_container\");\n      var gameResultContainerElement = document.querySelector(\".game_result_container\");\n      var statsContainerElement = document.querySelector(\".stats_container\");\n      categoryContainerElement === null || categoryContainerElement === void 0 ? void 0 : categoryContainerElement.remove();\n      cardsContainerElement === null || cardsContainerElement === void 0 ? void 0 : cardsContainerElement.remove();\n      gameResultContainerElement === null || gameResultContainerElement === void 0 ? void 0 : gameResultContainerElement.remove();\n      statsContainerElement === null || statsContainerElement === void 0 ? void 0 : statsContainerElement.remove();\n    }\n  }, {\n    key: \"chooseAssetsForRendering\",\n    value: function chooseAssetsForRendering(cards, id) {\n      var _this = this;\n\n      this.cardNames = [];\n      this.cardImagesPaths = [];\n      this.soundPaths = [];\n      this.translations = [];\n      cards[id].map(function (item) {\n        _this.cardNames.push(item[\"word\"]);\n\n        _this.cardImagesPaths.push(item[\"image\"]);\n\n        _this.soundPaths.push(item[\"audioSrc\"]);\n\n        _this.translations.push(item[\"translation\"]);\n      });\n      return [this.cardNames, this.cardImagesPaths, this.soundPaths, this.translations];\n    }\n  }, {\n    key: \"rotateBack\",\n    value: function rotateBack(event, card) {\n      event.preventDefault();\n      card.classList.add(\"card--pressed\");\n      card.addEventListener(\"mouseleave\", function () {\n        card.classList.remove(\"card--pressed\");\n      });\n    }\n  }, {\n    key: \"simulateSwitchButtonClick\",\n    value: function simulateSwitchButtonClick() {\n      var clickEvent = new MouseEvent(\"click\", {\n        bubbles: true,\n        cancelable: true,\n        view: window\n      });\n      var switchButton = document.querySelector(\".switch\");\n      switchButton.dispatchEvent(clickEvent);\n    }\n  }, {\n    key: \"simulatetoMainPageClick\",\n    value: function simulatetoMainPageClick() {\n      var clickEvent = new MouseEvent(\"click\", {\n        bubbles: true,\n        cancelable: true,\n        view: window\n      });\n      var h1 = document.querySelector(\".header__link\");\n      h1.dispatchEvent(clickEvent);\n    }\n  }]);\n\n  return Component;\n}();\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/components/component.component.js?");

/***/ }),

/***/ "./static/scripts/components/gameResult.component.js":
/*!***********************************************************!*\
  !*** ./static/scripts/components/gameResult.component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameResult\": () => (/* binding */ GameResult),\n/* harmony export */   \"GameResultContainer\": () => (/* binding */ GameResultContainer)\n/* harmony export */ });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./static/scripts/constants/constants.js\");\n/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.component */ \"./static/scripts/components/component.component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar GameResult = /*#__PURE__*/function (_Component) {\n  _inherits(GameResult, _Component);\n\n  var _super = _createSuper(GameResult);\n\n  function GameResult(name, picturePath, cardContainer, soundPath, errors) {\n    var _this;\n\n    _classCallCheck(this, GameResult);\n\n    _this = _super.call(this, name, cardContainer);\n    _this.errors = errors;\n    _this.pictureAlt = _this.name;\n    _this.picturePath = picturePath;\n    _this.picturePathSuccess = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.picturePathSuccess;\n    _this.picturePathFailure = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.picturePathFailure;\n    _this.soundPath = soundPath;\n    _this.soundPathSuccess = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.soundPathSuccess;\n    _this.soundPathFailure = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.soundPathFailure;\n    return _this;\n  }\n\n  _createClass(GameResult, [{\n    key: \"createCard\",\n    value: function createCard() {\n      var newElement = document.createElement(\"div\");\n      newElement.classList.add(\"game_result\");\n      newElement.innerHTML = \"\\n      <figure class=\\\"game_result__figure\\\">\\n        <img\\n          class=\\\"game_result__img\\\"\\n          src=\\\"\".concat(this.picturePath, \"\\\"\\n          alt=\").concat(this.pictureAlt, \"\\n        />\\n        <div class=\\\"capture\\\"><h4 class=\\\"game_result__capture\\\">\").concat(this.name, \"!</h4>\\n        <h4 class=\\\"game_result__capture game_result__capture_errors\\\" id='errors'>\").concat(this.errors, \" errors</h4></div>\\n      </figure>\\n      <audio \\n        src=\\\"\").concat(this.soundPath, \"\\\"\\n        class=\\\"audio-player--\").concat(this.name, \"\\\" crossorigin=\\\"anonymous\\\">\\n            Your browser does not support the\\n            <code>audio</code> element.\\n      </audio>\\n  \");\n      return newElement;\n    }\n  }, {\n    key: \"renderCard\",\n    value: function renderCard(gameResultContainer) {\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment.append(this.createCard());\n      gameResultContainer.append(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment);\n      return this;\n    }\n  }]);\n\n  return GameResult;\n}(_component_component__WEBPACK_IMPORTED_MODULE_1__.Component);\n\nvar GameResultContainer = /*#__PURE__*/function (_GameResult) {\n  _inherits(GameResultContainer, _GameResult);\n\n  var _super2 = _createSuper(GameResultContainer);\n\n  function GameResultContainer() {\n    var _this2;\n\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"GameResultContainer\";\n    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants_constants__WEBPACK_IMPORTED_MODULE_0__.container;\n\n    _classCallCheck(this, GameResultContainer);\n\n    _this2 = _super2.call(this, name);\n    _this2.parent = parent;\n    return _this2;\n  }\n\n  _createClass(GameResultContainer, [{\n    key: \"createGameResultContainer\",\n    value: function createGameResultContainer() {\n      var newElement = document.createElement(\"div\");\n      newElement.classList.add(\"game_result_container\");\n      return newElement;\n    }\n  }, {\n    key: \"renderGameResultContainer\",\n    value: function renderGameResultContainer(element) {\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment.append(element);\n      this.parent.append(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment);\n      return this;\n    }\n  }, {\n    key: \"renderGameResult\",\n    value: function renderGameResult(name, errors) {\n      var gameResultContainer = this.createGameResultContainer();\n\n      if (name === \"success\") {\n        var newGameResult = new GameResult(name, this.picturePathSuccess, gameResultContainer, this.soundPathSuccess, errors);\n        newGameResult.renderCard(gameResultContainer);\n      } else {\n        var _newGameResult = new GameResult(name, this.picturePathFailure, gameResultContainer, this.soundPathFailure, errors);\n\n        _newGameResult.renderCard(gameResultContainer);\n      }\n\n      this.renderGameResultContainer(gameResultContainer);\n      return this;\n    }\n  }]);\n\n  return GameResultContainer;\n}(GameResult);\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/components/gameResult.component.js?");

/***/ }),

/***/ "./static/scripts/components/navigation.component.js":
/*!***********************************************************!*\
  !*** ./static/scripts/components/navigation.component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigation\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./static/scripts/constants/constants.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n // import { fragment } from \"../constants/constants\";\n\nvar Navigation = /*#__PURE__*/function () {\n  function Navigation() {\n    _classCallCheck(this, Navigation);\n  }\n\n  _createClass(Navigation, [{\n    key: \"toggleMenu\",\n    value: // constructor(names, icons) {\n    //   this.names = names;\n    //   this.icons = icons;\n    // }\n    // addMenuItems() {\n    //   this.names.forEach((item, index) => {\n    //     const newItem = document.createElement(\"li\");\n    //     newItem.classList.add(\"menu__item\", \"menu__item--main\", \"toCardPage\");\n    //     newItem.id = index;\n    //     const link = `\n    //               <a class=\"menu__link menu__link--main\" href=\"#${item}\"\n    //                 ><i class=\"${this.icons[index]}\"></i> ${item}</a\n    //               >\n    //       `;\n    //     newItem.innerHTML = link;\n    //     fragment.append(newItem);\n    //   });\n    //   const statsElement = document.createElement(\"li\");\n    //   statsElement.classList.add(\"menu__item\", \"menu__item--main\", \"statistics\");\n    //   const statsLink = `\n    //     <a class=\"menu__link menu__link--main\" href=\"#statistics\">\n    //       <i class=\"fa-solid fa-calculator\"></i> Statistics</a>\n    //   `;\n    //   statsElement.innerHTML = statsLink;\n    //   fragment.append(statsElement);\n    //   navElements.nav.append(fragment);\n    // }\n    function toggleMenu() {\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.navElements.burgerLine.classList.toggle(\"burger__line--active\");\n      document.body.classList.toggle(\"overflow\");\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.navElements.overlay.classList.toggle(\"site-overlay--visible\");\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.navElements.nav.classList.toggle(\"nav--visible\");\n    }\n  }, {\n    key: \"addListeners\",\n    value: function addListeners() {\n      var _this = this;\n\n      var menuItems = document.querySelectorAll(\".menu__item\");\n      [_constants_constants__WEBPACK_IMPORTED_MODULE_0__.navElements.navIcon, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.navElements.overlay].concat(_toConsumableArray(menuItems)).forEach(function (el) {\n        el.addEventListener(\"click\", _this.toggleMenu);\n      });\n    }\n  }]);\n\n  return Navigation;\n}();\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/components/navigation.component.js?");

/***/ }),

/***/ "./static/scripts/components/sortableTable.component.js":
/*!**************************************************************!*\
  !*** ./static/scripts/components/sortableTable.component.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SortableTable\": () => (/* binding */ SortableTable)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar SortableTable = /*#__PURE__*/function () {\n  function SortableTable(tableNode) {\n    _classCallCheck(this, SortableTable);\n\n    this.tableNode = tableNode;\n    this.columnHeaders = tableNode.querySelectorAll(\"thead th\");\n    this.sortColumns = [];\n\n    for (var i = 0; i < this.columnHeaders.length; i++) {\n      var ch = this.columnHeaders[i];\n      var buttonNode = ch.querySelector(\"button\");\n\n      if (buttonNode) {\n        this.sortColumns.push(i);\n        buttonNode.setAttribute(\"data-column-index\", i);\n        buttonNode.addEventListener(\"click\", this.handleClick.bind(this));\n      }\n    }\n\n    this.optionCheckbox = document.querySelector('input[type=\"checkbox\"][value=\"show-unsorted-icon\"]');\n\n    if (this.optionCheckbox) {\n      this.optionCheckbox.addEventListener(\"change\", this.handleOptionChange.bind(this));\n\n      if (this.optionCheckbox.checked) {\n        this.tableNode.classList.add(\"show-unsorted-icon\");\n      }\n    }\n  }\n\n  _createClass(SortableTable, [{\n    key: \"setColumnHeaderSort\",\n    value: function setColumnHeaderSort(columnIndex) {\n      if (typeof columnIndex === \"string\") {\n        columnIndex = parseInt(columnIndex);\n      }\n\n      for (var i = 0; i < this.columnHeaders.length; i++) {\n        var ch = this.columnHeaders[i];\n        var buttonNode = ch.querySelector(\"button\");\n\n        if (i === columnIndex) {\n          var value = ch.getAttribute(\"aria-sort\");\n\n          if (value === \"descending\") {\n            ch.setAttribute(\"aria-sort\", \"ascending\");\n            this.sortColumn(columnIndex, \"ascending\", ch.classList.contains(\"num\"));\n          } else {\n            ch.setAttribute(\"aria-sort\", \"descending\");\n            this.sortColumn(columnIndex, \"descending\", ch.classList.contains(\"num\"));\n          }\n        } else {\n          if (ch.hasAttribute(\"aria-sort\") && buttonNode) {\n            ch.removeAttribute(\"aria-sort\");\n          }\n        }\n      }\n    }\n  }, {\n    key: \"sortColumn\",\n    value: function sortColumn(columnIndex, sortValue, isNumber) {\n      function compareValues(a, b) {\n        if (sortValue === \"ascending\") {\n          if (a.value === b.value) {\n            return 0;\n          } else {\n            if (isNumber) {\n              return a.value - b.value;\n            } else {\n              return a.value < b.value ? -1 : 1;\n            }\n          }\n        } else {\n          if (a.value === b.value) {\n            return 0;\n          } else {\n            if (isNumber) {\n              return b.value - a.value;\n            } else {\n              return a.value > b.value ? -1 : 1;\n            }\n          }\n        }\n      }\n\n      if (typeof isNumber !== \"boolean\") {\n        isNumber = false;\n      }\n\n      var tbodyNode = this.tableNode.querySelector(\"tbody\");\n      var rowNodes = [];\n      var dataCells = [];\n      var rowNode = tbodyNode.firstElementChild;\n      var index = 0;\n\n      while (rowNode) {\n        rowNodes.push(rowNode);\n        var rowCells = rowNode.querySelectorAll(\"th, td\");\n        var dataCell = rowCells[columnIndex];\n        var data = {};\n        data.index = index;\n        data.value = dataCell.textContent.toLowerCase().trim();\n\n        if (isNumber) {\n          data.value = parseFloat(data.value);\n        }\n\n        dataCells.push(data);\n        rowNode = rowNode.nextElementSibling;\n        index += 1;\n      }\n\n      dataCells.sort(compareValues);\n\n      while (tbodyNode.firstChild) {\n        tbodyNode.removeChild(tbodyNode.lastChild);\n      }\n\n      for (var i = 0; i < dataCells.length; i += 1) {\n        tbodyNode.appendChild(rowNodes[dataCells[i].index]);\n      }\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(event) {\n      var tgt = event.currentTarget;\n      this.setColumnHeaderSort(tgt.getAttribute(\"data-column-index\"));\n    }\n  }, {\n    key: \"handleOptionChange\",\n    value: function handleOptionChange(event) {\n      var tgt = event.currentTarget;\n\n      if (tgt.checked) {\n        this.tableNode.classList.add(\"show-unsorted-icon\");\n      } else {\n        this.tableNode.classList.remove(\"show-unsorted-icon\");\n      }\n    }\n  }], [{\n    key: \"addSortTableListener\",\n    value: function addSortTableListener() {\n      var sortableTable = document.querySelector(\".sortable\");\n      console.log(\"sortable\");\n\n      if (sortableTable) {\n        new SortableTable(sortableTable);\n      }\n    }\n  }]);\n\n  return SortableTable;\n}();\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/components/sortableTable.component.js?");

/***/ }),

/***/ "./static/scripts/components/star.component.js":
/*!*****************************************************!*\
  !*** ./static/scripts/components/star.component.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StarComponent\": () => (/* binding */ StarComponent)\n/* harmony export */ });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./static/scripts/constants/constants.js\");\n/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.component */ \"./static/scripts/components/component.component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar StarComponent = /*#__PURE__*/function (_Component) {\n  _inherits(StarComponent, _Component);\n\n  var _super = _createSuper(StarComponent);\n\n  function StarComponent(name) {\n    _classCallCheck(this, StarComponent);\n\n    return _super.call(this, name);\n  }\n\n  _createClass(StarComponent, null, [{\n    key: \"renderStar\",\n    value: function renderStar(type) {\n      var starsLine = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelector(\".stars_line\");\n      starsLine.classList.remove(\"stars_line--hidden\");\n      var starElement = document.createElement(\"span\");\n\n      if (type === \"right\") {\n        starElement.classList.add(\"stars_line__icon_star\", \"icon_star\", \"icon_star--right\");\n      } else if (type === \"wrong\") {\n        starElement.classList.add(\"stars_line__icon_star\", \"icon_star\", \"icon_star--wrong\");\n      }\n\n      starElement.innerHTML = \"<i class=\\\"fa-solid fa-star\\\"></i>\";\n      _constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment.append(starElement);\n      starsLine.append(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.fragment);\n    }\n  }, {\n    key: \"hideStars\",\n    value: function hideStars() {\n      var stars = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelector(\".stars_line\");\n      stars.classList.add(\"stars_line--hidden\");\n\n      while (stars.firstChild) {\n        stars.removeChild(stars.firstChild);\n      }\n    }\n  }]);\n\n  return StarComponent;\n}(_component_component__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/components/star.component.js?");

/***/ }),

/***/ "./static/scripts/components/startButton.component.js":
/*!************************************************************!*\
  !*** ./static/scripts/components/startButton.component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StartButtonComponent\": () => (/* binding */ StartButtonComponent)\n/* harmony export */ });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./static/scripts/constants/constants.js\");\n/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.component */ \"./static/scripts/components/component.component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar StartButtonComponent = /*#__PURE__*/function (_Component) {\n  _inherits(StartButtonComponent, _Component);\n\n  var _super = _createSuper(StartButtonComponent);\n\n  function StartButtonComponent(name) {\n    _classCallCheck(this, StartButtonComponent);\n\n    return _super.call(this, name);\n  }\n\n  _createClass(StartButtonComponent, null, [{\n    key: \"renderStartButton\",\n    value: function renderStartButton() {\n      var startButton = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelector(\".start_line\");\n      startButton.classList.remove(\"start_line--hidden\");\n    }\n  }, {\n    key: \"hideStartButton\",\n    value: function hideStartButton() {\n      var stars = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.body.querySelector(\".start_line\");\n      stars.classList.add(\"start_line--hidden\");\n    }\n  }]);\n\n  return StartButtonComponent;\n}(_component_component__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/components/startButton.component.js?");

/***/ }),

/***/ "./static/scripts/components/statsData.js":
/*!************************************************!*\
  !*** ./static/scripts/components/statsData.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StatsData\": () => (/* binding */ StatsData)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar StatsData = /*#__PURE__*/function () {\n  function StatsData() {\n    _classCallCheck(this, StatsData);\n\n    this.data = {};\n  }\n\n  _createClass(StatsData, [{\n    key: \"addGameItem\",\n    value: function addGameItem(category, word, correct) {\n      this.data[category] = this.data[category] || {};\n      this.data[category][word] = this.data[category][word] || {};\n\n      if (correct) {\n        var _this$data$category$w, _correct, _this$data$category$w2;\n\n        (_this$data$category$w2 = (_this$data$category$w = this.data[category][word])[_correct = \"correct\"]) !== null && _this$data$category$w2 !== void 0 ? _this$data$category$w2 : _this$data$category$w[_correct] = 0;\n        this.data[category][word][\"correct\"]++;\n      } else {\n        var _this$data$category$w3, _wrong, _this$data$category$w4;\n\n        (_this$data$category$w4 = (_this$data$category$w3 = this.data[category][word])[_wrong = \"wrong\"]) !== null && _this$data$category$w4 !== void 0 ? _this$data$category$w4 : _this$data$category$w3[_wrong] = 0;\n        this.data[category][word][\"wrong\"]++;\n      }\n    }\n  }, {\n    key: \"addTrainItem\",\n    value: function addTrainItem(category, word) {\n      var _this$data$category$w5, _trained, _this$data$category$w6;\n\n      this.data[category] = this.data[category] || {};\n      this.data[category][word] = this.data[category][word] || {};\n      (_this$data$category$w6 = (_this$data$category$w5 = this.data[category][word])[_trained = \"trained\"]) !== null && _this$data$category$w6 !== void 0 ? _this$data$category$w6 : _this$data$category$w5[_trained] = 0;\n      this.data[category][word][\"trained\"]++;\n    }\n  }, {\n    key: \"postNewItem\",\n    value: function postNewItem(id, action) {\n      return {\n        id: id,\n        action: action\n      };\n    }\n  }, {\n    key: \"getTrainedItem\",\n    value: function getTrainedItem(category, word) {\n      return this.data[category] && this.data[category][word] && this.data[category][word].trained || 0;\n    }\n  }, {\n    key: \"getCorrectItem\",\n    value: function getCorrectItem(category, word) {\n      return this.data[category] && this.data[category][word] && this.data[category][word].correct || 0;\n    }\n  }, {\n    key: \"getWrongItem\",\n    value: function getWrongItem(category, word) {\n      return this.data[category] && this.data[category][word] && this.data[category][word].wrong || 0;\n    }\n  }, {\n    key: \"mirrorToLocalStorage\",\n    value: function mirrorToLocalStorage() {\n      localStorage.setItem(\"stats\", JSON.stringify(this.data));\n    }\n  }, {\n    key: \"restoreFromLocalStorage\",\n    value: function restoreFromLocalStorage() {\n      this.data = _objectSpread({}, JSON.parse(localStorage.getItem(\"stats\")));\n    }\n  }, {\n    key: \"getCookie\",\n    value: function getCookie(name) {\n      var cookieValue = null;\n\n      if (document.cookie && document.cookie !== \"\") {\n        var cookies = document.cookie.split(\";\");\n\n        for (var i = 0; i < cookies.length; i++) {\n          var cookie = cookies[i].trim();\n\n          if (cookie.substring(0, name.length + 1) === name + \"=\") {\n            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n            break;\n          }\n        }\n      }\n\n      return cookieValue;\n    }\n  }, {\n    key: \"sendToServer\",\n    value: function () {\n      var _sendToServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stats) {\n        var url, data, csrftoken, response, json;\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                url = window.location.href;\n                data = {\n                  data: stats\n                };\n                console.log({\n                  data: data\n                });\n                csrftoken = this.getCookie(\"csrftoken\"); // try {\n                //   const response = await fetch(url, {\n                //     method: \"GET\",\n                //     credentials: \"same-origin\",\n                //   });\n                //   const json = await response.json();\n                //   console.log(\"Success:\", JSON.stringify(json));\n                // } catch (error) {\n                //   console.error(\"Error:\", error);\n                // }\n                // fetch(url)\n                //   .then((response) => {\n                //     return response.json();\n                //   })\n                //   .then((data) => {\n                //     console.log(data);\n                //   });\n\n                _context.prev = 4;\n                _context.next = 7;\n                return fetch(url, {\n                  method: \"POST\",\n                  credentials: \"same-origin\",\n                  body: JSON.stringify(data),\n                  headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"X-Requested-With\": \"XMLHttpRequest\",\n                    \"X-CSRFToken\": csrftoken\n                  }\n                });\n\n              case 7:\n                response = _context.sent;\n                _context.next = 10;\n                return response.json();\n\n              case 10:\n                json = _context.sent;\n                console.log(\"Success:\", JSON.stringify(json));\n                _context.next = 17;\n                break;\n\n              case 14:\n                _context.prev = 14;\n                _context.t0 = _context[\"catch\"](4);\n                console.error(\"Error:\", _context.t0);\n\n              case 17:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[4, 14]]);\n      }));\n\n      function sendToServer(_x) {\n        return _sendToServer.apply(this, arguments);\n      }\n\n      return sendToServer;\n    }()\n  }]);\n\n  return StatsData;\n}();\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/components/statsData.js?");

/***/ }),

/***/ "./static/scripts/constants/constants.js":
/*!***********************************************!*\
  !*** ./static/scripts/constants/constants.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsContainerElement\": () => (/* binding */ CardsContainerElement),\n/* harmony export */   \"CategoryContainerElement\": () => (/* binding */ CategoryContainerElement),\n/* harmony export */   \"body\": () => (/* binding */ body),\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"fragment\": () => (/* binding */ fragment),\n/* harmony export */   \"navElements\": () => (/* binding */ navElements),\n/* harmony export */   \"picturePathFailure\": () => (/* binding */ picturePathFailure),\n/* harmony export */   \"picturePathSuccess\": () => (/* binding */ picturePathSuccess),\n/* harmony export */   \"soundPathFailure\": () => (/* binding */ soundPathFailure),\n/* harmony export */   \"soundPathSuccess\": () => (/* binding */ soundPathSuccess)\n/* harmony export */ });\n// import { categories } from \"../../data/cards.data\";\nvar fragment = document.createDocumentFragment();\nvar body = document.body;\nvar container = document.querySelector(\".container\");\nvar navElements = {\n  navIcon: document.getElementById(\"js-nav-button\"),\n  nav: document.getElementById(\"js-nav\"),\n  overlay: document.getElementById(\"js-overlay\"),\n  burgerLine: document.querySelector(\".burger__line\")\n};\nvar CategoryContainerElement = document.querySelector(\".category_container\");\nvar CardsContainerElement = document.querySelector(\".card_container\"); // const [categoryNames, categoryImagesPaths, categoryIcons] = [\n//   categories[0],\n//   categories[1],\n//   categories[2],\n// ];\n\nvar picturePathSuccess = \"../static/assets/images/SUCCESS2.jpg\";\nvar picturePathFailure = \"../static/assets/images/FAILURE2.jpg\";\nvar soundPathSuccess = \"../static/assets/audio/success.mp3\";\nvar soundPathFailure = \"../static/assets/audio/failure.mp3\";\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/constants/constants.js?");

/***/ }),

/***/ "./static/scripts/index.js":
/*!*********************************!*\
  !*** ./static/scripts/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./static/sass/styles.scss\");\n/* harmony import */ var _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation.component */ \"./static/scripts/components/navigation.component.js\");\n/* harmony import */ var _components_audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/audio.component */ \"./static/scripts/components/audio.component.js\");\n/* harmony import */ var _components_categoryCard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/categoryCard.component */ \"./static/scripts/components/categoryCard.component.js\");\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app */ \"./static/scripts/app/app.js\");\n/* harmony import */ var _components_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/component.component */ \"./static/scripts/components/component.component.js\");\n/* harmony import */ var _components_sortableTable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sortableTable.component */ \"./static/scripts/components/sortableTable.component.js\");\n // import \"../data/cards.data\";\n\n\n\n\n\nvar images = __webpack_require__(\"./static/assets/images sync recursive ^\\\\.\\\\/.*$\");\n\nvar imagePath = function imagePath(name) {\n  return images(name, true);\n};\n\nvar audio = __webpack_require__(\"./static/assets/audio sync recursive ^\\\\.\\\\/.*$\");\n\nvar audioPath = function audioPath(name) {\n  return audio(name, true);\n};\n\nconsole.log(\"yohoho\"); // const fonts = require.context(\"../assets/fonts/\", true);\n// const fontsPath = (name) => fonts(name, true);\n// const icons = require.context(\"../assets/icons/\", true);\n// const iconsPath = (name) => icons(name, true);\n\n\n\n\n\n\n//# sourceURL=webpack://english_for_kids/./static/scripts/index.js?");

/***/ }),

/***/ "./static/sass/styles.scss":
/*!*********************************!*\
  !*** ./static/sass/styles.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://english_for_kids/./static/sass/styles.scss?");

/***/ }),

/***/ "./static/assets/audio sync recursive ^\\.\\/.*$":
/*!********************************************!*\
  !*** ./static/assets/audio/ sync ^\.\/.*$ ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./angry.mp3\": \"./static/assets/audio/angry.mp3\",\n\t\"./armchair.mp3\": \"./static/assets/audio/armchair.mp3\",\n\t\"./beach.mp3\": \"./static/assets/audio/beach.mp3\",\n\t\"./bedroom.mp3\": \"./static/assets/audio/bedroom.mp3\",\n\t\"./bird.mp3\": \"./static/assets/audio/bird.mp3\",\n\t\"./blouse.mp3\": \"./static/assets/audio/blouse.mp3\",\n\t\"./boot.mp3\": \"./static/assets/audio/boot.mp3\",\n\t\"./breakfast.mp3\": \"./static/assets/audio/breakfast.mp3\",\n\t\"./cake.mp3\": \"./static/assets/audio/cake.mp3\",\n\t\"./cat.mp3\": \"./static/assets/audio/cat.mp3\",\n\t\"./chick.mp3\": \"./static/assets/audio/chick.mp3\",\n\t\"./chicken.mp3\": \"./static/assets/audio/chicken.mp3\",\n\t\"./coat.mp3\": \"./static/assets/audio/coat.mp3\",\n\t\"./cocktail.mp3\": \"./static/assets/audio/cocktail.mp3\",\n\t\"./correct.mp3\": \"./static/assets/audio/correct.mp3\",\n\t\"./cry.mp3\": \"./static/assets/audio/cry.mp3\",\n\t\"./curtains.mp3\": \"./static/assets/audio/curtains.mp3\",\n\t\"./dance.mp3\": \"./static/assets/audio/dance.mp3\",\n\t\"./dive.mp3\": \"./static/assets/audio/dive.mp3\",\n\t\"./dog.mp3\": \"./static/assets/audio/dog.mp3\",\n\t\"./dolphin.mp3\": \"./static/assets/audio/dolphin.mp3\",\n\t\"./draw.mp3\": \"./static/assets/audio/draw.mp3\",\n\t\"./dress.mp3\": \"./static/assets/audio/dress.mp3\",\n\t\"./error.mp3\": \"./static/assets/audio/error.mp3\",\n\t\"./failure.mp3\": \"./static/assets/audio/failure.mp3\",\n\t\"./field.mp3\": \"./static/assets/audio/field.mp3\",\n\t\"./fireplace.mp3\": \"./static/assets/audio/fireplace.mp3\",\n\t\"./fish.mp3\": \"./static/assets/audio/fish.mp3\",\n\t\"./flowers.mp3\": \"./static/assets/audio/flowers.mp3\",\n\t\"./fly.mp3\": \"./static/assets/audio/fly.mp3\",\n\t\"./forest.mp3\": \"./static/assets/audio/forest.mp3\",\n\t\"./frog.mp3\": \"./static/assets/audio/frog.mp3\",\n\t\"./fruits.mp3\": \"./static/assets/audio/fruits.mp3\",\n\t\"./giraffe.mp3\": \"./static/assets/audio/giraffe.mp3\",\n\t\"./happy.mp3\": \"./static/assets/audio/happy.mp3\",\n\t\"./horse.mp3\": \"./static/assets/audio/horse.mp3\",\n\t\"./hug.mp3\": \"./static/assets/audio/hug.mp3\",\n\t\"./jump.mp3\": \"./static/assets/audio/jump.mp3\",\n\t\"./kitchen.mp3\": \"./static/assets/audio/kitchen.mp3\",\n\t\"./laugh.mp3\": \"./static/assets/audio/laugh.mp3\",\n\t\"./lion.mp3\": \"./static/assets/audio/lion.mp3\",\n\t\"./livingroom.mp3\": \"./static/assets/audio/livingroom.mp3\",\n\t\"./meat.mp3\": \"./static/assets/audio/meat.mp3\",\n\t\"./mountain.mp3\": \"./static/assets/audio/mountain.mp3\",\n\t\"./mouse.mp3\": \"./static/assets/audio/mouse.mp3\",\n\t\"./open.mp3\": \"./static/assets/audio/open.mp3\",\n\t\"./pants.mp3\": \"./static/assets/audio/pants.mp3\",\n\t\"./pig.mp3\": \"./static/assets/audio/pig.mp3\",\n\t\"./pizza.mp3\": \"./static/assets/audio/pizza.mp3\",\n\t\"./play.mp3\": \"./static/assets/audio/play.mp3\",\n\t\"./point.mp3\": \"./static/assets/audio/point.mp3\",\n\t\"./rabbit.mp3\": \"./static/assets/audio/rabbit.mp3\",\n\t\"./ride.mp3\": \"./static/assets/audio/ride.mp3\",\n\t\"./river.mp3\": \"./static/assets/audio/river.mp3\",\n\t\"./run.mp3\": \"./static/assets/audio/run.mp3\",\n\t\"./sad.mp3\": \"./static/assets/audio/sad.mp3\",\n\t\"./scared.mp3\": \"./static/assets/audio/scared.mp3\",\n\t\"./sea.mp3\": \"./static/assets/audio/sea.mp3\",\n\t\"./sheep.mp3\": \"./static/assets/audio/sheep.mp3\",\n\t\"./shirt.mp3\": \"./static/assets/audio/shirt.mp3\",\n\t\"./shoe.mp3\": \"./static/assets/audio/shoe.mp3\",\n\t\"./sing.mp3\": \"./static/assets/audio/sing.mp3\",\n\t\"./skip.mp3\": \"./static/assets/audio/skip.mp3\",\n\t\"./skirt.mp3\": \"./static/assets/audio/skirt.mp3\",\n\t\"./smile.mp3\": \"./static/assets/audio/smile.mp3\",\n\t\"./sofa.mp3\": \"./static/assets/audio/sofa.mp3\",\n\t\"./soup.mp3\": \"./static/assets/audio/soup.mp3\",\n\t\"./success.mp3\": \"./static/assets/audio/success.mp3\",\n\t\"./surprised.mp3\": \"./static/assets/audio/surprised.mp3\",\n\t\"./swim.mp3\": \"./static/assets/audio/swim.mp3\",\n\t\"./tired.mp3\": \"./static/assets/audio/tired.mp3\",\n\t\"./tree.mp3\": \"./static/assets/audio/tree.mp3\",\n\t\"./turtle.mp3\": \"./static/assets/audio/turtle.mp3\",\n\t\"./vegetables.mp3\": \"./static/assets/audio/vegetables.mp3\",\n\t\"./window.mp3\": \"./static/assets/audio/window.mp3\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./static/assets/audio sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./static/assets/images sync recursive ^\\.\\/.*$":
/*!*********************************************!*\
  !*** ./static/assets/images/ sync ^\.\/.*$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./1646890822_1-kartinkin-net-p-kartinki-tuchki-1.png\": \"./static/assets/images/1646890822_1-kartinkin-net-p-kartinki-tuchki-1.png\",\n\t\"./500aa9360f5573bf4c282bb6ed73cd92.png\": \"./static/assets/images/500aa9360f5573bf4c282bb6ed73cd92.png\",\n\t\"./ACTIONS1.jpg\": \"./static/assets/images/ACTIONS1.jpg\",\n\t\"./ACTIONS2.jpg\": \"./static/assets/images/ACTIONS2.jpg\",\n\t\"./ACTIONS3.jpg\": \"./static/assets/images/ACTIONS3.jpg\",\n\t\"./ACTIONS4.jpg\": \"./static/assets/images/ACTIONS4.jpg\",\n\t\"./ANIMALS1.jpg\": \"./static/assets/images/ANIMALS1.jpg\",\n\t\"./ANIMALS2.jpg\": \"./static/assets/images/ANIMALS2.jpg\",\n\t\"./ANIMALS3.jpg\": \"./static/assets/images/ANIMALS3.jpg\",\n\t\"./CLOTHES.jpg\": \"./static/assets/images/CLOTHES.jpg\",\n\t\"./CLOTHES2.jpg\": \"./static/assets/images/CLOTHES2.jpg\",\n\t\"./EMOTIONS.jpg\": \"./static/assets/images/EMOTIONS.jpg\",\n\t\"./FAILURE1.jpg\": \"./static/assets/images/FAILURE1.jpg\",\n\t\"./FAILURE2.jpg\": \"./static/assets/images/FAILURE2.jpg\",\n\t\"./FOOD.jpg\": \"./static/assets/images/FOOD.jpg\",\n\t\"./FOOD2.jpg\": \"./static/assets/images/FOOD2.jpg\",\n\t\"./HOME.jpg\": \"./static/assets/images/HOME.jpg\",\n\t\"./NATURE.jpg\": \"./static/assets/images/NATURE.jpg\",\n\t\"./SUCCESS1.jpg\": \"./static/assets/images/SUCCESS1.jpg\",\n\t\"./SUCCESS2.jpg\": \"./static/assets/images/SUCCESS2.jpg\",\n\t\"./angry.jpg\": \"./static/assets/images/angry.jpg\",\n\t\"./armchair.jpg\": \"./static/assets/images/armchair.jpg\",\n\t\"./audio.svg\": \"./static/assets/images/audio.svg\",\n\t\"./beach.jpg\": \"./static/assets/images/beach.jpg\",\n\t\"./bedroom.jpg\": \"./static/assets/images/bedroom.jpg\",\n\t\"./bird.jpg\": \"./static/assets/images/bird.jpg\",\n\t\"./blouse.jpg\": \"./static/assets/images/blouse.jpg\",\n\t\"./boot.jpg\": \"./static/assets/images/boot.jpg\",\n\t\"./breakfast.jpg\": \"./static/assets/images/breakfast.jpg\",\n\t\"./cake.jpg\": \"./static/assets/images/cake.jpg\",\n\t\"./cat.jpg\": \"./static/assets/images/cat.jpg\",\n\t\"./chick.jpg\": \"./static/assets/images/chick.jpg\",\n\t\"./chicken.jpg\": \"./static/assets/images/chicken.jpg\",\n\t\"./clouds-transparent-background-75-700x439.png\": \"./static/assets/images/clouds-transparent-background-75-700x439.png\",\n\t\"./clouds-transparent-background-9-700x573.png\": \"./static/assets/images/clouds-transparent-background-9-700x573.png\",\n\t\"./coat.jpg\": \"./static/assets/images/coat.jpg\",\n\t\"./cocktail.jpg\": \"./static/assets/images/cocktail.jpg\",\n\t\"./cry.jpg\": \"./static/assets/images/cry.jpg\",\n\t\"./curtains.jpg\": \"./static/assets/images/curtains.jpg\",\n\t\"./dance.jpg\": \"./static/assets/images/dance.jpg\",\n\t\"./dive.jpg\": \"./static/assets/images/dive.jpg\",\n\t\"./dog.jpg\": \"./static/assets/images/dog.jpg\",\n\t\"./dolphin.jpg\": \"./static/assets/images/dolphin.jpg\",\n\t\"./draw.jpg\": \"./static/assets/images/draw.jpg\",\n\t\"./dress.jpg\": \"./static/assets/images/dress.jpg\",\n\t\"./e54fa2d2646f7146db99fd133f2b9de0.jpg\": \"./static/assets/images/e54fa2d2646f7146db99fd133f2b9de0.jpg\",\n\t\"./failure.jpg\": \"./static/assets/images/failure.jpg\",\n\t\"./field.jpg\": \"./static/assets/images/field.jpg\",\n\t\"./fireplace.jpg\": \"./static/assets/images/fireplace.jpg\",\n\t\"./fish.jpg\": \"./static/assets/images/fish.jpg\",\n\t\"./fish1.jpg\": \"./static/assets/images/fish1.jpg\",\n\t\"./flowers.jpg\": \"./static/assets/images/flowers.jpg\",\n\t\"./fly.jpg\": \"./static/assets/images/fly.jpg\",\n\t\"./forest.jpg\": \"./static/assets/images/forest.jpg\",\n\t\"./frog.jpg\": \"./static/assets/images/frog.jpg\",\n\t\"./fruits.jpg\": \"./static/assets/images/fruits.jpg\",\n\t\"./giraffe.jpg\": \"./static/assets/images/giraffe.jpg\",\n\t\"./happy.jpg\": \"./static/assets/images/happy.jpg\",\n\t\"./horse.jpg\": \"./static/assets/images/horse.jpg\",\n\t\"./hug.jpg\": \"./static/assets/images/hug.jpg\",\n\t\"./jump.jpg\": \"./static/assets/images/jump.jpg\",\n\t\"./kitchen.jpg\": \"./static/assets/images/kitchen.jpg\",\n\t\"./laugh.jpg\": \"./static/assets/images/laugh.jpg\",\n\t\"./lion.jpg\": \"./static/assets/images/lion.jpg\",\n\t\"./livingroom.jpg\": \"./static/assets/images/livingroom.jpg\",\n\t\"./meat.jpg\": \"./static/assets/images/meat.jpg\",\n\t\"./mountain.jpg\": \"./static/assets/images/mountain.jpg\",\n\t\"./mouse.jpg\": \"./static/assets/images/mouse.jpg\",\n\t\"./open.jpg\": \"./static/assets/images/open.jpg\",\n\t\"./pants.jpg\": \"./static/assets/images/pants.jpg\",\n\t\"./pig.jpg\": \"./static/assets/images/pig.jpg\",\n\t\"./pizza.jpg\": \"./static/assets/images/pizza.jpg\",\n\t\"./play.jpg\": \"./static/assets/images/play.jpg\",\n\t\"./point.jpg\": \"./static/assets/images/point.jpg\",\n\t\"./rabbit.jpg\": \"./static/assets/images/rabbit.jpg\",\n\t\"./repeat.svg\": \"./static/assets/images/repeat.svg\",\n\t\"./ride.jpg\": \"./static/assets/images/ride.jpg\",\n\t\"./river.jpg\": \"./static/assets/images/river.jpg\",\n\t\"./rotate.svg\": \"./static/assets/images/rotate.svg\",\n\t\"./run.jpg\": \"./static/assets/images/run.jpg\",\n\t\"./sad.jpg\": \"./static/assets/images/sad.jpg\",\n\t\"./scared.jpg\": \"./static/assets/images/scared.jpg\",\n\t\"./sea.jpg\": \"./static/assets/images/sea.jpg\",\n\t\"./sheep.jpg\": \"./static/assets/images/sheep.jpg\",\n\t\"./shirt.jpg\": \"./static/assets/images/shirt.jpg\",\n\t\"./shoe.jpg\": \"./static/assets/images/shoe.jpg\",\n\t\"./sing.jpg\": \"./static/assets/images/sing.jpg\",\n\t\"./skip.jpg\": \"./static/assets/images/skip.jpg\",\n\t\"./skirt.jpg\": \"./static/assets/images/skirt.jpg\",\n\t\"./smile.jpg\": \"./static/assets/images/smile.jpg\",\n\t\"./sofa.jpg\": \"./static/assets/images/sofa.jpg\",\n\t\"./soup.jpg\": \"./static/assets/images/soup.jpg\",\n\t\"./star-win.svg\": \"./static/assets/images/star-win.svg\",\n\t\"./star.svg\": \"./static/assets/images/star.svg\",\n\t\"./success.jpg\": \"./static/assets/images/success.jpg\",\n\t\"./surprised.jpg\": \"./static/assets/images/surprised.jpg\",\n\t\"./swim.jpg\": \"./static/assets/images/swim.jpg\",\n\t\"./tired.jpg\": \"./static/assets/images/tired.jpg\",\n\t\"./tree.jpg\": \"./static/assets/images/tree.jpg\",\n\t\"./turtle.jpg\": \"./static/assets/images/turtle.jpg\",\n\t\"./vegetables.jpg\": \"./static/assets/images/vegetables.jpg\",\n\t\"./window.jpg\": \"./static/assets/images/window.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./static/assets/images sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./static/assets/audio/angry.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/angry.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/angry.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/angry.mp3?");

/***/ }),

/***/ "./static/assets/audio/armchair.mp3":
/*!******************************************!*\
  !*** ./static/assets/audio/armchair.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/armchair.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/armchair.mp3?");

/***/ }),

/***/ "./static/assets/audio/beach.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/beach.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/beach.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/beach.mp3?");

/***/ }),

/***/ "./static/assets/audio/bedroom.mp3":
/*!*****************************************!*\
  !*** ./static/assets/audio/bedroom.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/bedroom.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/bedroom.mp3?");

/***/ }),

/***/ "./static/assets/audio/bird.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/bird.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/bird.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/bird.mp3?");

/***/ }),

/***/ "./static/assets/audio/blouse.mp3":
/*!****************************************!*\
  !*** ./static/assets/audio/blouse.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/blouse.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/blouse.mp3?");

/***/ }),

/***/ "./static/assets/audio/boot.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/boot.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/boot.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/boot.mp3?");

/***/ }),

/***/ "./static/assets/audio/breakfast.mp3":
/*!*******************************************!*\
  !*** ./static/assets/audio/breakfast.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/breakfast.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/breakfast.mp3?");

/***/ }),

/***/ "./static/assets/audio/cake.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/cake.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/cake.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/cake.mp3?");

/***/ }),

/***/ "./static/assets/audio/cat.mp3":
/*!*************************************!*\
  !*** ./static/assets/audio/cat.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/cat.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/cat.mp3?");

/***/ }),

/***/ "./static/assets/audio/chick.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/chick.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/chick.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/chick.mp3?");

/***/ }),

/***/ "./static/assets/audio/chicken.mp3":
/*!*****************************************!*\
  !*** ./static/assets/audio/chicken.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/chicken.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/chicken.mp3?");

/***/ }),

/***/ "./static/assets/audio/coat.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/coat.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/coat.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/coat.mp3?");

/***/ }),

/***/ "./static/assets/audio/cocktail.mp3":
/*!******************************************!*\
  !*** ./static/assets/audio/cocktail.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/cocktail.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/cocktail.mp3?");

/***/ }),

/***/ "./static/assets/audio/correct.mp3":
/*!*****************************************!*\
  !*** ./static/assets/audio/correct.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/correct.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/correct.mp3?");

/***/ }),

/***/ "./static/assets/audio/cry.mp3":
/*!*************************************!*\
  !*** ./static/assets/audio/cry.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/cry.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/cry.mp3?");

/***/ }),

/***/ "./static/assets/audio/curtains.mp3":
/*!******************************************!*\
  !*** ./static/assets/audio/curtains.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/curtains.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/curtains.mp3?");

/***/ }),

/***/ "./static/assets/audio/dance.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/dance.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/dance.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/dance.mp3?");

/***/ }),

/***/ "./static/assets/audio/dive.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/dive.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/dive.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/dive.mp3?");

/***/ }),

/***/ "./static/assets/audio/dog.mp3":
/*!*************************************!*\
  !*** ./static/assets/audio/dog.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/dog.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/dog.mp3?");

/***/ }),

/***/ "./static/assets/audio/dolphin.mp3":
/*!*****************************************!*\
  !*** ./static/assets/audio/dolphin.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/dolphin.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/dolphin.mp3?");

/***/ }),

/***/ "./static/assets/audio/draw.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/draw.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/draw.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/draw.mp3?");

/***/ }),

/***/ "./static/assets/audio/dress.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/dress.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/dress.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/dress.mp3?");

/***/ }),

/***/ "./static/assets/audio/error.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/error.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/error.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/error.mp3?");

/***/ }),

/***/ "./static/assets/audio/failure.mp3":
/*!*****************************************!*\
  !*** ./static/assets/audio/failure.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/failure.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/failure.mp3?");

/***/ }),

/***/ "./static/assets/audio/field.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/field.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/field.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/field.mp3?");

/***/ }),

/***/ "./static/assets/audio/fireplace.mp3":
/*!*******************************************!*\
  !*** ./static/assets/audio/fireplace.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/fireplace.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/fireplace.mp3?");

/***/ }),

/***/ "./static/assets/audio/fish.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/fish.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/fish.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/fish.mp3?");

/***/ }),

/***/ "./static/assets/audio/flowers.mp3":
/*!*****************************************!*\
  !*** ./static/assets/audio/flowers.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/flowers.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/flowers.mp3?");

/***/ }),

/***/ "./static/assets/audio/fly.mp3":
/*!*************************************!*\
  !*** ./static/assets/audio/fly.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/fly.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/fly.mp3?");

/***/ }),

/***/ "./static/assets/audio/forest.mp3":
/*!****************************************!*\
  !*** ./static/assets/audio/forest.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/forest.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/forest.mp3?");

/***/ }),

/***/ "./static/assets/audio/frog.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/frog.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/frog.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/frog.mp3?");

/***/ }),

/***/ "./static/assets/audio/fruits.mp3":
/*!****************************************!*\
  !*** ./static/assets/audio/fruits.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/fruits.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/fruits.mp3?");

/***/ }),

/***/ "./static/assets/audio/giraffe.mp3":
/*!*****************************************!*\
  !*** ./static/assets/audio/giraffe.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/giraffe.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/giraffe.mp3?");

/***/ }),

/***/ "./static/assets/audio/happy.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/happy.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/happy.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/happy.mp3?");

/***/ }),

/***/ "./static/assets/audio/horse.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/horse.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/horse.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/horse.mp3?");

/***/ }),

/***/ "./static/assets/audio/hug.mp3":
/*!*************************************!*\
  !*** ./static/assets/audio/hug.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/hug.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/hug.mp3?");

/***/ }),

/***/ "./static/assets/audio/jump.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/jump.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/jump.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/jump.mp3?");

/***/ }),

/***/ "./static/assets/audio/kitchen.mp3":
/*!*****************************************!*\
  !*** ./static/assets/audio/kitchen.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/kitchen.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/kitchen.mp3?");

/***/ }),

/***/ "./static/assets/audio/laugh.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/laugh.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/laugh.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/laugh.mp3?");

/***/ }),

/***/ "./static/assets/audio/lion.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/lion.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/lion.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/lion.mp3?");

/***/ }),

/***/ "./static/assets/audio/livingroom.mp3":
/*!********************************************!*\
  !*** ./static/assets/audio/livingroom.mp3 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/livingroom.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/livingroom.mp3?");

/***/ }),

/***/ "./static/assets/audio/meat.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/meat.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/meat.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/meat.mp3?");

/***/ }),

/***/ "./static/assets/audio/mountain.mp3":
/*!******************************************!*\
  !*** ./static/assets/audio/mountain.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/mountain.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/mountain.mp3?");

/***/ }),

/***/ "./static/assets/audio/mouse.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/mouse.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/mouse.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/mouse.mp3?");

/***/ }),

/***/ "./static/assets/audio/open.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/open.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/open.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/open.mp3?");

/***/ }),

/***/ "./static/assets/audio/pants.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/pants.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/pants.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/pants.mp3?");

/***/ }),

/***/ "./static/assets/audio/pig.mp3":
/*!*************************************!*\
  !*** ./static/assets/audio/pig.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/pig.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/pig.mp3?");

/***/ }),

/***/ "./static/assets/audio/pizza.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/pizza.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/pizza.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/pizza.mp3?");

/***/ }),

/***/ "./static/assets/audio/play.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/play.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/play.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/play.mp3?");

/***/ }),

/***/ "./static/assets/audio/point.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/point.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/point.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/point.mp3?");

/***/ }),

/***/ "./static/assets/audio/rabbit.mp3":
/*!****************************************!*\
  !*** ./static/assets/audio/rabbit.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/rabbit.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/rabbit.mp3?");

/***/ }),

/***/ "./static/assets/audio/ride.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/ride.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/ride.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/ride.mp3?");

/***/ }),

/***/ "./static/assets/audio/river.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/river.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/river.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/river.mp3?");

/***/ }),

/***/ "./static/assets/audio/run.mp3":
/*!*************************************!*\
  !*** ./static/assets/audio/run.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/run.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/run.mp3?");

/***/ }),

/***/ "./static/assets/audio/sad.mp3":
/*!*************************************!*\
  !*** ./static/assets/audio/sad.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/sad.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/sad.mp3?");

/***/ }),

/***/ "./static/assets/audio/scared.mp3":
/*!****************************************!*\
  !*** ./static/assets/audio/scared.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/scared.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/scared.mp3?");

/***/ }),

/***/ "./static/assets/audio/sea.mp3":
/*!*************************************!*\
  !*** ./static/assets/audio/sea.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/sea.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/sea.mp3?");

/***/ }),

/***/ "./static/assets/audio/sheep.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/sheep.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/sheep.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/sheep.mp3?");

/***/ }),

/***/ "./static/assets/audio/shirt.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/shirt.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/shirt.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/shirt.mp3?");

/***/ }),

/***/ "./static/assets/audio/shoe.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/shoe.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/shoe.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/shoe.mp3?");

/***/ }),

/***/ "./static/assets/audio/sing.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/sing.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/sing.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/sing.mp3?");

/***/ }),

/***/ "./static/assets/audio/skip.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/skip.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/skip.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/skip.mp3?");

/***/ }),

/***/ "./static/assets/audio/skirt.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/skirt.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/skirt.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/skirt.mp3?");

/***/ }),

/***/ "./static/assets/audio/smile.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/smile.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/smile.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/smile.mp3?");

/***/ }),

/***/ "./static/assets/audio/sofa.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/sofa.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/sofa.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/sofa.mp3?");

/***/ }),

/***/ "./static/assets/audio/soup.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/soup.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/soup.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/soup.mp3?");

/***/ }),

/***/ "./static/assets/audio/success.mp3":
/*!*****************************************!*\
  !*** ./static/assets/audio/success.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/success.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/success.mp3?");

/***/ }),

/***/ "./static/assets/audio/surprised.mp3":
/*!*******************************************!*\
  !*** ./static/assets/audio/surprised.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/surprised.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/surprised.mp3?");

/***/ }),

/***/ "./static/assets/audio/swim.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/swim.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/swim.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/swim.mp3?");

/***/ }),

/***/ "./static/assets/audio/tired.mp3":
/*!***************************************!*\
  !*** ./static/assets/audio/tired.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/tired.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/tired.mp3?");

/***/ }),

/***/ "./static/assets/audio/tree.mp3":
/*!**************************************!*\
  !*** ./static/assets/audio/tree.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/tree.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/tree.mp3?");

/***/ }),

/***/ "./static/assets/audio/turtle.mp3":
/*!****************************************!*\
  !*** ./static/assets/audio/turtle.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/turtle.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/turtle.mp3?");

/***/ }),

/***/ "./static/assets/audio/vegetables.mp3":
/*!********************************************!*\
  !*** ./static/assets/audio/vegetables.mp3 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/vegetables.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/vegetables.mp3?");

/***/ }),

/***/ "./static/assets/audio/window.mp3":
/*!****************************************!*\
  !*** ./static/assets/audio/window.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/window.mp3\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/audio/window.mp3?");

/***/ }),

/***/ "./static/assets/images/1646890822_1-kartinkin-net-p-kartinki-tuchki-1.png":
/*!*********************************************************************************!*\
  !*** ./static/assets/images/1646890822_1-kartinkin-net-p-kartinki-tuchki-1.png ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/1646890822_1-kartinkin-net-p-kartinki-tuchki-1.png\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/1646890822_1-kartinkin-net-p-kartinki-tuchki-1.png?");

/***/ }),

/***/ "./static/assets/images/500aa9360f5573bf4c282bb6ed73cd92.png":
/*!*******************************************************************!*\
  !*** ./static/assets/images/500aa9360f5573bf4c282bb6ed73cd92.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/500aa9360f5573bf4c282bb6ed73cd92.png\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/500aa9360f5573bf4c282bb6ed73cd92.png?");

/***/ }),

/***/ "./static/assets/images/ACTIONS1.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/ACTIONS1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/ACTIONS1.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/ACTIONS1.jpg?");

/***/ }),

/***/ "./static/assets/images/ACTIONS2.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/ACTIONS2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/ACTIONS2.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/ACTIONS2.jpg?");

/***/ }),

/***/ "./static/assets/images/ACTIONS3.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/ACTIONS3.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/ACTIONS3.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/ACTIONS3.jpg?");

/***/ }),

/***/ "./static/assets/images/ACTIONS4.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/ACTIONS4.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/ACTIONS4.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/ACTIONS4.jpg?");

/***/ }),

/***/ "./static/assets/images/ANIMALS1.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/ANIMALS1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/ANIMALS1.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/ANIMALS1.jpg?");

/***/ }),

/***/ "./static/assets/images/ANIMALS2.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/ANIMALS2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/ANIMALS2.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/ANIMALS2.jpg?");

/***/ }),

/***/ "./static/assets/images/ANIMALS3.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/ANIMALS3.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/ANIMALS3.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/ANIMALS3.jpg?");

/***/ }),

/***/ "./static/assets/images/CLOTHES.jpg":
/*!******************************************!*\
  !*** ./static/assets/images/CLOTHES.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/CLOTHES.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/CLOTHES.jpg?");

/***/ }),

/***/ "./static/assets/images/CLOTHES2.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/CLOTHES2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/CLOTHES2.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/CLOTHES2.jpg?");

/***/ }),

/***/ "./static/assets/images/EMOTIONS.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/EMOTIONS.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/EMOTIONS.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/EMOTIONS.jpg?");

/***/ }),

/***/ "./static/assets/images/FAILURE1.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/FAILURE1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/FAILURE1.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/FAILURE1.jpg?");

/***/ }),

/***/ "./static/assets/images/FAILURE2.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/FAILURE2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/FAILURE2.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/FAILURE2.jpg?");

/***/ }),

/***/ "./static/assets/images/FOOD.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/FOOD.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/FOOD.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/FOOD.jpg?");

/***/ }),

/***/ "./static/assets/images/FOOD2.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/FOOD2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/FOOD2.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/FOOD2.jpg?");

/***/ }),

/***/ "./static/assets/images/HOME.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/HOME.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/HOME.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/HOME.jpg?");

/***/ }),

/***/ "./static/assets/images/NATURE.jpg":
/*!*****************************************!*\
  !*** ./static/assets/images/NATURE.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/NATURE.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/NATURE.jpg?");

/***/ }),

/***/ "./static/assets/images/SUCCESS1.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/SUCCESS1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/SUCCESS1.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/SUCCESS1.jpg?");

/***/ }),

/***/ "./static/assets/images/SUCCESS2.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/SUCCESS2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/SUCCESS2.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/SUCCESS2.jpg?");

/***/ }),

/***/ "./static/assets/images/angry.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/angry.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/angry.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/angry.jpg?");

/***/ }),

/***/ "./static/assets/images/armchair.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/armchair.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/armchair.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/armchair.jpg?");

/***/ }),

/***/ "./static/assets/images/audio.svg":
/*!****************************************!*\
  !*** ./static/assets/images/audio.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/audio.svg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/audio.svg?");

/***/ }),

/***/ "./static/assets/images/beach.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/beach.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/beach.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/beach.jpg?");

/***/ }),

/***/ "./static/assets/images/bedroom.jpg":
/*!******************************************!*\
  !*** ./static/assets/images/bedroom.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/bedroom.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/bedroom.jpg?");

/***/ }),

/***/ "./static/assets/images/bird.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/bird.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/bird.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/bird.jpg?");

/***/ }),

/***/ "./static/assets/images/blouse.jpg":
/*!*****************************************!*\
  !*** ./static/assets/images/blouse.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/blouse.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/blouse.jpg?");

/***/ }),

/***/ "./static/assets/images/boot.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/boot.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/boot.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/boot.jpg?");

/***/ }),

/***/ "./static/assets/images/breakfast.jpg":
/*!********************************************!*\
  !*** ./static/assets/images/breakfast.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/breakfast.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/breakfast.jpg?");

/***/ }),

/***/ "./static/assets/images/cake.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/cake.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/cake.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/cake.jpg?");

/***/ }),

/***/ "./static/assets/images/cat.jpg":
/*!**************************************!*\
  !*** ./static/assets/images/cat.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/cat.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/cat.jpg?");

/***/ }),

/***/ "./static/assets/images/chick.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/chick.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/chick.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/chick.jpg?");

/***/ }),

/***/ "./static/assets/images/chicken.jpg":
/*!******************************************!*\
  !*** ./static/assets/images/chicken.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/chicken.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/chicken.jpg?");

/***/ }),

/***/ "./static/assets/images/clouds-transparent-background-75-700x439.png":
/*!***************************************************************************!*\
  !*** ./static/assets/images/clouds-transparent-background-75-700x439.png ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/clouds-transparent-background-75-700x439.png\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/clouds-transparent-background-75-700x439.png?");

/***/ }),

/***/ "./static/assets/images/clouds-transparent-background-9-700x573.png":
/*!**************************************************************************!*\
  !*** ./static/assets/images/clouds-transparent-background-9-700x573.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/clouds-transparent-background-9-700x573.png\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/clouds-transparent-background-9-700x573.png?");

/***/ }),

/***/ "./static/assets/images/coat.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/coat.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/coat.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/coat.jpg?");

/***/ }),

/***/ "./static/assets/images/cocktail.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/cocktail.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/cocktail.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/cocktail.jpg?");

/***/ }),

/***/ "./static/assets/images/cry.jpg":
/*!**************************************!*\
  !*** ./static/assets/images/cry.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/cry.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/cry.jpg?");

/***/ }),

/***/ "./static/assets/images/curtains.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/curtains.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/curtains.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/curtains.jpg?");

/***/ }),

/***/ "./static/assets/images/dance.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/dance.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/dance.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/dance.jpg?");

/***/ }),

/***/ "./static/assets/images/dive.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/dive.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/dive.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/dive.jpg?");

/***/ }),

/***/ "./static/assets/images/dog.jpg":
/*!**************************************!*\
  !*** ./static/assets/images/dog.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/dog.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/dog.jpg?");

/***/ }),

/***/ "./static/assets/images/dolphin.jpg":
/*!******************************************!*\
  !*** ./static/assets/images/dolphin.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/dolphin.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/dolphin.jpg?");

/***/ }),

/***/ "./static/assets/images/draw.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/draw.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/draw.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/draw.jpg?");

/***/ }),

/***/ "./static/assets/images/dress.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/dress.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/dress.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/dress.jpg?");

/***/ }),

/***/ "./static/assets/images/e54fa2d2646f7146db99fd133f2b9de0.jpg":
/*!*******************************************************************!*\
  !*** ./static/assets/images/e54fa2d2646f7146db99fd133f2b9de0.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/e54fa2d2646f7146db99fd133f2b9de0.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/e54fa2d2646f7146db99fd133f2b9de0.jpg?");

/***/ }),

/***/ "./static/assets/images/failure.jpg":
/*!******************************************!*\
  !*** ./static/assets/images/failure.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/failure.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/failure.jpg?");

/***/ }),

/***/ "./static/assets/images/field.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/field.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/field.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/field.jpg?");

/***/ }),

/***/ "./static/assets/images/fireplace.jpg":
/*!********************************************!*\
  !*** ./static/assets/images/fireplace.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/fireplace.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/fireplace.jpg?");

/***/ }),

/***/ "./static/assets/images/fish.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/fish.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/fish.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/fish.jpg?");

/***/ }),

/***/ "./static/assets/images/fish1.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/fish1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/fish1.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/fish1.jpg?");

/***/ }),

/***/ "./static/assets/images/flowers.jpg":
/*!******************************************!*\
  !*** ./static/assets/images/flowers.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/flowers.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/flowers.jpg?");

/***/ }),

/***/ "./static/assets/images/fly.jpg":
/*!**************************************!*\
  !*** ./static/assets/images/fly.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/fly.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/fly.jpg?");

/***/ }),

/***/ "./static/assets/images/forest.jpg":
/*!*****************************************!*\
  !*** ./static/assets/images/forest.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/forest.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/forest.jpg?");

/***/ }),

/***/ "./static/assets/images/frog.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/frog.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/frog.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/frog.jpg?");

/***/ }),

/***/ "./static/assets/images/fruits.jpg":
/*!*****************************************!*\
  !*** ./static/assets/images/fruits.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/fruits.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/fruits.jpg?");

/***/ }),

/***/ "./static/assets/images/giraffe.jpg":
/*!******************************************!*\
  !*** ./static/assets/images/giraffe.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/giraffe.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/giraffe.jpg?");

/***/ }),

/***/ "./static/assets/images/happy.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/happy.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/happy.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/happy.jpg?");

/***/ }),

/***/ "./static/assets/images/horse.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/horse.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/horse.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/horse.jpg?");

/***/ }),

/***/ "./static/assets/images/hug.jpg":
/*!**************************************!*\
  !*** ./static/assets/images/hug.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/hug.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/hug.jpg?");

/***/ }),

/***/ "./static/assets/images/jump.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/jump.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/jump.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/jump.jpg?");

/***/ }),

/***/ "./static/assets/images/kitchen.jpg":
/*!******************************************!*\
  !*** ./static/assets/images/kitchen.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/kitchen.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/kitchen.jpg?");

/***/ }),

/***/ "./static/assets/images/laugh.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/laugh.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/laugh.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/laugh.jpg?");

/***/ }),

/***/ "./static/assets/images/lion.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/lion.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/lion.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/lion.jpg?");

/***/ }),

/***/ "./static/assets/images/livingroom.jpg":
/*!*********************************************!*\
  !*** ./static/assets/images/livingroom.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/livingroom.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/livingroom.jpg?");

/***/ }),

/***/ "./static/assets/images/meat.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/meat.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/meat.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/meat.jpg?");

/***/ }),

/***/ "./static/assets/images/mountain.jpg":
/*!*******************************************!*\
  !*** ./static/assets/images/mountain.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/mountain.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/mountain.jpg?");

/***/ }),

/***/ "./static/assets/images/mouse.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/mouse.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/mouse.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/mouse.jpg?");

/***/ }),

/***/ "./static/assets/images/open.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/open.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/open.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/open.jpg?");

/***/ }),

/***/ "./static/assets/images/pants.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/pants.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/pants.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/pants.jpg?");

/***/ }),

/***/ "./static/assets/images/pig.jpg":
/*!**************************************!*\
  !*** ./static/assets/images/pig.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/pig.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/pig.jpg?");

/***/ }),

/***/ "./static/assets/images/pizza.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/pizza.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/pizza.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/pizza.jpg?");

/***/ }),

/***/ "./static/assets/images/play.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/play.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/play.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/play.jpg?");

/***/ }),

/***/ "./static/assets/images/point.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/point.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/point.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/point.jpg?");

/***/ }),

/***/ "./static/assets/images/rabbit.jpg":
/*!*****************************************!*\
  !*** ./static/assets/images/rabbit.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/rabbit.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/rabbit.jpg?");

/***/ }),

/***/ "./static/assets/images/repeat.svg":
/*!*****************************************!*\
  !*** ./static/assets/images/repeat.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/repeat.svg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/repeat.svg?");

/***/ }),

/***/ "./static/assets/images/ride.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/ride.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/ride.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/ride.jpg?");

/***/ }),

/***/ "./static/assets/images/river.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/river.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/river.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/river.jpg?");

/***/ }),

/***/ "./static/assets/images/rotate.svg":
/*!*****************************************!*\
  !*** ./static/assets/images/rotate.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/rotate.svg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/rotate.svg?");

/***/ }),

/***/ "./static/assets/images/run.jpg":
/*!**************************************!*\
  !*** ./static/assets/images/run.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/run.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/run.jpg?");

/***/ }),

/***/ "./static/assets/images/sad.jpg":
/*!**************************************!*\
  !*** ./static/assets/images/sad.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/sad.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/sad.jpg?");

/***/ }),

/***/ "./static/assets/images/scared.jpg":
/*!*****************************************!*\
  !*** ./static/assets/images/scared.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/scared.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/scared.jpg?");

/***/ }),

/***/ "./static/assets/images/sea.jpg":
/*!**************************************!*\
  !*** ./static/assets/images/sea.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/sea.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/sea.jpg?");

/***/ }),

/***/ "./static/assets/images/sheep.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/sheep.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/sheep.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/sheep.jpg?");

/***/ }),

/***/ "./static/assets/images/shirt.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/shirt.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/shirt.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/shirt.jpg?");

/***/ }),

/***/ "./static/assets/images/shoe.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/shoe.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/shoe.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/shoe.jpg?");

/***/ }),

/***/ "./static/assets/images/sing.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/sing.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/sing.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/sing.jpg?");

/***/ }),

/***/ "./static/assets/images/skip.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/skip.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/skip.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/skip.jpg?");

/***/ }),

/***/ "./static/assets/images/skirt.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/skirt.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/skirt.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/skirt.jpg?");

/***/ }),

/***/ "./static/assets/images/smile.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/smile.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/smile.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/smile.jpg?");

/***/ }),

/***/ "./static/assets/images/sofa.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/sofa.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/sofa.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/sofa.jpg?");

/***/ }),

/***/ "./static/assets/images/soup.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/soup.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/soup.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/soup.jpg?");

/***/ }),

/***/ "./static/assets/images/star-win.svg":
/*!*******************************************!*\
  !*** ./static/assets/images/star-win.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/star-win.svg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/star-win.svg?");

/***/ }),

/***/ "./static/assets/images/star.svg":
/*!***************************************!*\
  !*** ./static/assets/images/star.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/star.svg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/star.svg?");

/***/ }),

/***/ "./static/assets/images/success.jpg":
/*!******************************************!*\
  !*** ./static/assets/images/success.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/success.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/success.jpg?");

/***/ }),

/***/ "./static/assets/images/surprised.jpg":
/*!********************************************!*\
  !*** ./static/assets/images/surprised.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/surprised.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/surprised.jpg?");

/***/ }),

/***/ "./static/assets/images/swim.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/swim.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/swim.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/swim.jpg?");

/***/ }),

/***/ "./static/assets/images/tired.jpg":
/*!****************************************!*\
  !*** ./static/assets/images/tired.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/tired.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/tired.jpg?");

/***/ }),

/***/ "./static/assets/images/tree.jpg":
/*!***************************************!*\
  !*** ./static/assets/images/tree.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/tree.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/tree.jpg?");

/***/ }),

/***/ "./static/assets/images/turtle.jpg":
/*!*****************************************!*\
  !*** ./static/assets/images/turtle.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/turtle.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/turtle.jpg?");

/***/ }),

/***/ "./static/assets/images/vegetables.jpg":
/*!*********************************************!*\
  !*** ./static/assets/images/vegetables.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/vegetables.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/vegetables.jpg?");

/***/ }),

/***/ "./static/assets/images/window.jpg":
/*!*****************************************!*\
  !*** ./static/assets/images/window.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/window.jpg\";\n\n//# sourceURL=webpack://english_for_kids/./static/assets/images/window.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./static/scripts/index.js");
/******/ 	
/******/ })()
;
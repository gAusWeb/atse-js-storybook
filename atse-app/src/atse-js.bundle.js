/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/HelloWorld.js":
/*!******************************!*\
  !*** ./src/js/HelloWorld.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelloWorld: () => (/* binding */ HelloWorld)
/* harmony export */ });
const HelloWorld = {
  init() {
    // setTimeout(() => {

    const newDiv = document.createElement("div");
    newDiv.classList.add("moisture");
    console.log("moist", newDiv);
    const body = document.querySelector("body");
    console.log("body", body);
    console.log("hi");

    const buttonTest = body.querySelector(".btn-click");
    // document.querySelector("body")
    console.log("querySel Button", buttonTest);
    if (!buttonTest) {
      return;
    }

    // applyClickHandler(buttonTest);

    buttonTest.addEventListener("click", () => {
      console.log("Clicked!");
    });
    // }, 150);
  },

  // applyClickHandler(button) {
  //   button.addEventListener("click", () => {
  //     console.log("Clicked!");
  //   });
  // },
};


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld */ "./src/js/HelloWorld.js");
// // vendor js
// import { createPopper } from "@popperjs/core";
// import Modal from "bootstrap/js/src/Modal";
// import Dropdown from "bootstrap/js/src/Dropdown";
// import Collapse from "bootstrap/js/src/Collapse";
// import AOS from "aos";

// // custom js
// import { NavigationMenu } from "./components/NavigationMenu.tsx";
// import { HomeCarousel } from "./components/HomeCarousel.tsx";
// import { AnimatedCircles } from "./components/AnimatedCircles.tsx";
// import { StaticLogoGrid } from "./components/StaticLogoGrid.tsx";
// import { InsightsLoadMoreArticles } from "./components/InsightsLoadMoreArticles.tsx";


// on domLoad handler
let handleDomLoaded = function () {
  // Declare JS Components
  _HelloWorld__WEBPACK_IMPORTED_MODULE_0__.HelloWorld.init();
  // HelloWorld.applyClickHandler();
  // createPopper;
  // Modal;
  // Dropdown;
  // Collapse;
  // AOS.init({ duration: 1000 });
  // NavigationMenu.init();
  // HomeCarousel.init();
  // AnimatedCircles.init();
  // StaticLogoGrid.init();
  // InsightsLoadMoreArticles.init();
};

// domReady Events
if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.scroll)
) {
  console.log("domReady");
  handleDomLoaded();
} else {
  // Initialise JS components
  console.log("domReady DOMContentLoaded", document);
  document.addEventListener("DOMContentLoaded", handleDomLoaded);
  // document.addEventListener("scroll", NavigationMenu.scroll);
  // document.addEventListener("scroll", AnimatedCircles.scroll);
}

// window.onresize = () => {
//     NavigationMenu.resize();
//     StaticLogoGrid.resize();
// };

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=atse-js.bundle.js.map
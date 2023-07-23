/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backbone.js":
/*!*************************!*\
  !*** ./src/backbone.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateFrontpageElements() {
    const container = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Our Restaurant";

    const img = document.createElement("img");
    img.id = "restaurant-image";
    img.alt = "Restaurant Image";

    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "We are a delightful restaurant that offers a unique dining experience. Our chefs prepare mouth-watering dishes using only the finest ingredients sourced locally.";

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Join us for a memorable dining experience with our friendly staff and cozy ambiance. Whether it's a special occasion or a casual dinner, we look forward to serving you the most delicious meals.";

    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "Visit us today and embark on a culinary journey that will leave you wanting more.";

    container.appendChild(h1);
    container.appendChild(img);
    const innerDiv = document.createElement("div");
    innerDiv.appendChild(paragraph1);
    innerDiv.appendChild(paragraph2);
    innerDiv.appendChild(paragraph3);
    container.appendChild(innerDiv);

    document.body.appendChild(container);
    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ generateFrontpageElements });

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backbone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backbone.js */ "./src/backbone.js");


function appendToMainContainer(content) {
    const mainContainer = document.getElementById("content");
    content.appendChild(content);
}

appendToMainContainer((0,_backbone_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSwyQkFBMkI7Ozs7OztVQy9CNUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHdEQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9iYWNrYm9uZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVGcm9udHBhZ2VFbGVtZW50cygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gT3VyIFJlc3RhdXJhbnRcIjtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLmlkID0gXCJyZXN0YXVyYW50LWltYWdlXCI7XG4gICAgaW1nLmFsdCA9IFwiUmVzdGF1cmFudCBJbWFnZVwiO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaDEudGV4dENvbnRlbnQgPSBcIldlIGFyZSBhIGRlbGlnaHRmdWwgcmVzdGF1cmFudCB0aGF0IG9mZmVycyBhIHVuaXF1ZSBkaW5pbmcgZXhwZXJpZW5jZS4gT3VyIGNoZWZzIHByZXBhcmUgbW91dGgtd2F0ZXJpbmcgZGlzaGVzIHVzaW5nIG9ubHkgdGhlIGZpbmVzdCBpbmdyZWRpZW50cyBzb3VyY2VkIGxvY2FsbHkuXCI7XG5cbiAgICBjb25zdCBwYXJhZ3JhcGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoMi50ZXh0Q29udGVudCA9IFwiSm9pbiB1cyBmb3IgYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2Ugd2l0aCBvdXIgZnJpZW5kbHkgc3RhZmYgYW5kIGNvenkgYW1iaWFuY2UuIFdoZXRoZXIgaXQncyBhIHNwZWNpYWwgb2NjYXNpb24gb3IgYSBjYXN1YWwgZGlubmVyLCB3ZSBsb29rIGZvcndhcmQgdG8gc2VydmluZyB5b3UgdGhlIG1vc3QgZGVsaWNpb3VzIG1lYWxzLlwiO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaDMudGV4dENvbnRlbnQgPSBcIlZpc2l0IHVzIHRvZGF5IGFuZCBlbWJhcmsgb24gYSBjdWxpbmFyeSBqb3VybmV5IHRoYXQgd2lsbCBsZWF2ZSB5b3Ugd2FudGluZyBtb3JlLlwiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoMSk7XG4gICAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoMik7XG4gICAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoMyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyRGl2KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGdlbmVyYXRlRnJvbnRwYWdlRWxlbWVudHMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZW5lcmF0ZUZyb250cGFnZUVsZW1lbnRzIGZyb20gXCIuL2JhY2tib25lLmpzXCI7XG5cbmZ1bmN0aW9uIGFwcGVuZFRvTWFpbkNvbnRhaW5lcihjb250ZW50KSB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5hcHBlbmRUb01haW5Db250YWluZXIoZ2VuZXJhdGVGcm9udHBhZ2VFbGVtZW50cygpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
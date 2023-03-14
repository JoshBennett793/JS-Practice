(self["webpackChunkjs_practice"] = self["webpackChunkjs_practice"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

let isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'Samsung',
      color: 'black',
    };
    resolve(phone);
  } else {
    const reason = new Error('mom is not happy');
    reject(reason);
  }
});

async function showOff(phone) {
  return new Promise((resolve, reject) => {
    const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone!`;
    resolve(message);
  });
}

async function askMom() {
	try {
		console.log('before asking mom');

		let phone = await willIGetNewPhone;
		let message = await showOff(phone);

		console.log(message);
		console.log('after asking mom');
	}
	catch (error) {
		console.log(error.message);
	}
};

(async () => {
	await askMom();
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxnREFBZ0QsYUFBYSxFQUFFLGFBQWE7QUFDNUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcmFjdGljZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaXNNb21IYXBweSA9IHRydWU7XG5cbi8vIFByb21pc2VcbmNvbnN0IHdpbGxJR2V0TmV3UGhvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGlmIChpc01vbUhhcHB5KSB7XG4gICAgY29uc3QgcGhvbmUgPSB7XG4gICAgICBicmFuZDogJ1NhbXN1bmcnLFxuICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgfTtcbiAgICByZXNvbHZlKHBob25lKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZWFzb24gPSBuZXcgRXJyb3IoJ21vbSBpcyBub3QgaGFwcHknKTtcbiAgICByZWplY3QocmVhc29uKTtcbiAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dPZmYocGhvbmUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gYEhleSBmcmllbmQsIEkgaGF2ZSBhIG5ldyAke3Bob25lLmNvbG9yfSAke3Bob25lLmJyYW5kfSBwaG9uZSFgO1xuICAgIHJlc29sdmUobWVzc2FnZSk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBhc2tNb20oKSB7XG5cdHRyeSB7XG5cdFx0Y29uc29sZS5sb2coJ2JlZm9yZSBhc2tpbmcgbW9tJyk7XG5cblx0XHRsZXQgcGhvbmUgPSBhd2FpdCB3aWxsSUdldE5ld1Bob25lO1xuXHRcdGxldCBtZXNzYWdlID0gYXdhaXQgc2hvd09mZihwaG9uZSk7XG5cblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0XHRjb25zb2xlLmxvZygnYWZ0ZXIgYXNraW5nIG1vbScpO1xuXHR9XG5cdGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuXHR9XG59O1xuXG4oYXN5bmMgKCkgPT4ge1xuXHRhd2FpdCBhc2tNb20oKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
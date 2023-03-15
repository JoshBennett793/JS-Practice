(self["webpackChunkjs_practice"] = self["webpackChunkjs_practice"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

const weatherAPIurl =
  'https://api.openweathermap.org/data/2.5/weather?q=Detroit%20Lakes&&units=imperial&APPID=3535c8d31233d98b7f80c26b5b76e3a6';
const apiSpan = document.getElementById('api-request');

/* fetch(weatherAPIurl, { mode: 'cors' })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then((response) => {
    const coords = response.coord;
    const locationName = response.name;
    apiSpan.textContent = `${locationName} is located at Latitude: ${coords.lat} and Latitude: ${coords.lon}. It is currently ${response.main.temp} degs F and feels like ${response.main.feels_like} degs F.`;
    console.log(response);
  })
  .catch((err) => {
    console.log('Fetch operation error: ', err);
  });

	 */

async function fetchWeather() {
  try {
    const response = await fetch(weatherAPIurl, { mode: 'cors' });
    const weatherData = await response.json();
    const coords = weatherData.coord;
    const locationName = weatherData.name;
    apiSpan.textContent = `${locationName} is located at Latitude: ${coords.lat} and Latitude: ${coords.lon}. It is currently ${weatherData.main.temp} degs F and feels like ${weatherData.main.feels_like} degs F.`;
    console.log(weatherData);
  } catch (error) {
    console.log('Error message: ', error);
  }
}

fetchWeather();

/* class Thenable {
	constructor(num) {
		this.num = num;
	}
	then(resolve, reject) {
		setTimeout(() => resolve(this.num * 2), 1000);
	}
}

async function f() {
	let result = await new Thenable(1);
	alert(result);
}

f(); */

/* class Waiter {
	async await() {
		return await Promise.resolve(1);
	}
}

new Waiter()
	.await()
	.then(alert); */

/* function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}
*/

/* async function loadJson(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json').catch(alert);
 */

function doubleAfter2Secs(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
	const a = await doubleAfter2Secs(10);
	const b = await doubleAfter2Secs(20);
	const c = await doubleAfter2Secs(30);
	return x + a + b + c;
}

addAsync(10).then((resp) => {
	console.log(resp);
})

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWMsMEJBQTBCLFlBQVksZ0JBQWdCLFdBQVcsb0JBQW9CLG9CQUFvQix3QkFBd0IsMEJBQTBCO0FBQ3RNO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYywwQkFBMEIsWUFBWSxnQkFBZ0IsV0FBVyxvQkFBb0IsdUJBQXVCLHdCQUF3Qiw2QkFBNkI7QUFDNU07QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByYWN0aWNlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYXRoZXJBUEl1cmwgPVxuICAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1EZXRyb2l0JTIwTGFrZXMmJnVuaXRzPWltcGVyaWFsJkFQUElEPTM1MzVjOGQzMTIzM2Q5OGI3ZjgwYzI2YjViNzZlM2E2JztcbmNvbnN0IGFwaVNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBpLXJlcXVlc3QnKTtcblxuLyogZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3QgT0snKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gcmVzcG9uc2UuY29vcmQ7XG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gcmVzcG9uc2UubmFtZTtcbiAgICBhcGlTcGFuLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25OYW1lfSBpcyBsb2NhdGVkIGF0IExhdGl0dWRlOiAke2Nvb3Jkcy5sYXR9IGFuZCBMYXRpdHVkZTogJHtjb29yZHMubG9ufS4gSXQgaXMgY3VycmVudGx5ICR7cmVzcG9uc2UubWFpbi50ZW1wfSBkZWdzIEYgYW5kIGZlZWxzIGxpa2UgJHtyZXNwb25zZS5tYWluLmZlZWxzX2xpa2V9IGRlZ3MgRi5gO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRmV0Y2ggb3BlcmF0aW9uIGVycm9yOiAnLCBlcnIpO1xuICB9KTtcblxuXHQgKi9cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29vcmRzID0gd2VhdGhlckRhdGEuY29vcmQ7XG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gd2VhdGhlckRhdGEubmFtZTtcbiAgICBhcGlTcGFuLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25OYW1lfSBpcyBsb2NhdGVkIGF0IExhdGl0dWRlOiAke2Nvb3Jkcy5sYXR9IGFuZCBMYXRpdHVkZTogJHtjb29yZHMubG9ufS4gSXQgaXMgY3VycmVudGx5ICR7d2VhdGhlckRhdGEubWFpbi50ZW1wfSBkZWdzIEYgYW5kIGZlZWxzIGxpa2UgJHt3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2V9IGRlZ3MgRi5gO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnRXJyb3IgbWVzc2FnZTogJywgZXJyb3IpO1xuICB9XG59XG5cbmZldGNoV2VhdGhlcigpO1xuXG4vKiBjbGFzcyBUaGVuYWJsZSB7XG5cdGNvbnN0cnVjdG9yKG51bSkge1xuXHRcdHRoaXMubnVtID0gbnVtO1xuXHR9XG5cdHRoZW4ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRoaXMubnVtICogMiksIDEwMDApO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGYoKSB7XG5cdGxldCByZXN1bHQgPSBhd2FpdCBuZXcgVGhlbmFibGUoMSk7XG5cdGFsZXJ0KHJlc3VsdCk7XG59XG5cbmYoKTsgKi9cblxuLyogY2xhc3MgV2FpdGVyIHtcblx0YXN5bmMgYXdhaXQoKSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZSgxKTtcblx0fVxufVxuXG5uZXcgV2FpdGVyKClcblx0LmF3YWl0KClcblx0LnRoZW4oYWxlcnQpOyAqL1xuXG4vKiBmdW5jdGlvbiBsb2FkSnNvbih1cmwpIHtcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cbiAgfSk7XG59XG4qL1xuXG4vKiBhc3luYyBmdW5jdGlvbiBsb2FkSnNvbih1cmwpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbn1cblxubG9hZEpzb24oJ2h0dHBzOi8vamF2YXNjcmlwdC5pbmZvL25vLXN1Y2gtdXNlci5qc29uJykuY2F0Y2goYWxlcnQpO1xuICovXG5cbmZ1bmN0aW9uIGRvdWJsZUFmdGVyMlNlY3MoeCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoeCAqIDIpO1xuICAgIH0sIDIwMDApO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYWRkQXN5bmMoeCkge1xuXHRjb25zdCBhID0gYXdhaXQgZG91YmxlQWZ0ZXIyU2VjcygxMCk7XG5cdGNvbnN0IGIgPSBhd2FpdCBkb3VibGVBZnRlcjJTZWNzKDIwKTtcblx0Y29uc3QgYyA9IGF3YWl0IGRvdWJsZUFmdGVyMlNlY3MoMzApO1xuXHRyZXR1cm4geCArIGEgKyBiICsgYztcbn1cblxuYWRkQXN5bmMoMTApLnRoZW4oKHJlc3ApID0+IHtcblx0Y29uc29sZS5sb2cocmVzcCk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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

/* function doubleAfter2Secs(x) {
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
 */

/* let db = new PouchDB('mydb');
db.post({})
  .then((result) => db.get(result.id))
  .then((doc) => console.log(doc))
  .catch((err) => console.log(err));

try {
  let result = await db.post({});
  let doc = await db.get(result.id);
  console.log(doc);
} catch (err) {
  console.log(err);
}
 */
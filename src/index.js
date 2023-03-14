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
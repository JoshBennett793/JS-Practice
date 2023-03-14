import './style.css';


const form = document.querySelector('form');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
const emailIsValid = email.value.length === 0 || email.validity.valid;

window.addEventListener('load', () => {
	email.className = emailIsValid ? 'valid' : 'invalid';
})

email.addEventListener('input', (e) => {
  if (emailIsValid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', (e) => {
	if (!email.validity.valid) {
		showError();
		e.preventDefault();
	}
});

const showError = () => {
	if (email.validity.valueMissing) {
		emailError.textContent = 'You need to enter an email address.';
	} else if (email.validity.typeMismatch) {
		emailError.textContent = 'Entered value needs to be an email address.';
	} else if (email.validity.tooShort) {
		emailError.textContent = `Email should be at least ${email.minLength} characters; you entered
		${email.value.length}.`;
	}
	emailError.className = 'error active';
}
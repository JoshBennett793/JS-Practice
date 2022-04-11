const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement("p");
paragraph.classList.add('red');
paragraph.textContent = 'Hey I\'m red!';
paragraph.style.color = 'red';

const header = document.createElement('h3');
header.classList.add('blue');
header.textContent = 'I\'m a blue h3!';
header.style.color = 'blue';

const secondDiv = document.createElement('div');
secondDiv.classList.add('box');
let secondDivH1 = document.createElement('h1');
secondDivH1.textContent = 'I\'m in a div';
secondDiv.appendChild(secondDivH1);
let secondDivPara = document.createElement('p');
secondDivPara.textContent = 'ME TOO!';
secondDiv.appendChild(secondDivPara);
secondDiv.style.cssText = 'background: pink; border: 5px solid black;'

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		alert(button.id);
	});
});



container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(header);
container.appendChild(secondDiv);

import './menu.css';

const chevron = document.querySelector('.feather-chevron-left');
const dropDownMenu = document.querySelector('.drop-down-container');

chevron.onclick = () => {
  dropDownMenu.classList.contains('visible')
    ? dropDownMenu.classList.remove('visible')
    : dropDownMenu.classList.add('visible');
};

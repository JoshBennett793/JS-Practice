import './carousel.css';

const carouselSlider = document.getElementById('carousel-slider');
const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');

let picWidth = 0;

const nextImage = () => {
	if (picWidth === 340 * (carouselSlider.childElementCount - 1)) return;
  picWidth += 340;
  carouselSlider.style.transform = `translateX(-${picWidth}px)`;
};

const prevImage = () => {
	if (picWidth === 0) return;
  picWidth -= 340;
  carouselSlider.style.transform = `translateX(-${picWidth}px)`;
};

rightArrow.onclick = () => nextImage();
leftArrow.onclick = () => prevImage();

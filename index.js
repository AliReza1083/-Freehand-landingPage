const toggleBtn = document.querySelector('#theme-toggle-btn');
const menu = document.querySelector('#menu');
const images = document.querySelectorAll('img');


toggleBtn.addEventListener('click', () => {
	menu.classList.toggle('activated');
	toggleBtn.classList.toggle('activated');
})

images.forEach( image => {
	image.setAttribute('loading', 'lazy');
	console.log(image);
})
/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/

const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const sliders = document.querySelector('.slideContainer');
const thumbnails = document.querySelector('.thumbContainer');

let currentImage = 0;
let slides = '';
let thumbs = '';
for (let i = 0; i < images.length; i++) {
	slides += `<div class="slide">
	<img src="${images[i]}" alt="game-${i}">
</div>`;
	thumbs += `<div class="thumb">
	<img src="${images[i]}" alt="game-${i}">
</div>`;
}

sliders.innerHTML += slides;
thumbnails.innerHTML += thumbs;

document.querySelectorAll('.slide')[currentImage].classList.add('active');
document.querySelectorAll('.thumb')[currentImage].classList.add('inner-border');

const down = document.querySelector('.down');
const up = document.querySelector('.up');

down.addEventListener('click', goDown);

function goDown() {
	document.querySelectorAll('.slide')[currentImage].classList.remove('active');
	document.querySelectorAll('.thumb')[currentImage].classList.remove('inner-border');
	if (currentImage === images.length - 1 && currentImage === images.length - 1) {
		currentImage = 0;
	} else {
		currentImage++;
	}
	document.querySelectorAll('.slide')[currentImage].classList.add('active');
	document.querySelectorAll('.thumb')[currentImage].classList.add('inner-border');
}

up.addEventListener('click', goUp);

function goUp() {
	document.querySelectorAll('.slide')[currentImage].classList.remove('active');
	document.querySelectorAll('.thumb')[currentImage].classList.remove('inner-border');
	if (currentImage === 0 && currentImage === 0) {
		currentImage = images.length - 1;
	} else {
		currentImage--;
	}
	document.querySelectorAll('.slide')[currentImage].classList.add('active');
	document.querySelectorAll('.thumb')[currentImage].classList.add('inner-border');
}

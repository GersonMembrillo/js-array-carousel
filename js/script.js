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

/*
<div class="slide active">
	<img src="./img/01.webp" alt="spiderman" />
</div>
 */

const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const slider = document.querySelector('.slider');
const thumber = document.querySelector('.thumber');

let currentImageMain = 0;
let currentImageSide = 0;
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

slider.innerHTML += slides;
thumber.innerHTML += thumbs;

document.querySelectorAll('.slide')[currentImageMain].classList.add('active');
document.querySelectorAll('.thumb')[currentImageSide].classList.add('inner-border');

const down = document.querySelector('.down');
const up = document.querySelector('.up');

down.addEventListener('click', goDown);

function goDown() {
	document.querySelectorAll('.slide')[currentImageMain].classList.remove('active');
	document.querySelectorAll('.thumb')[currentImageSide].classList.remove('inner-border');
	if (currentImageMain === images.length - 1 && currentImageSide === images.length - 1) {
		currentImageMain = 0;
		currentImageSide = 0;
	} else {
		currentImageMain++;
		currentImageSide++;
	}
	document.querySelectorAll('.slide')[currentImageMain].classList.add('active');
	document.querySelectorAll('.thumb')[currentImageSide].classList.add('inner-border');
}

up.addEventListener('click', goUp);

function goUp() {
	document.querySelectorAll('.slide')[currentImageMain].classList.remove('active');
	document.querySelectorAll('.thumb')[currentImageSide].classList.remove('inner-border');
	if (currentImageMain === 0 && currentImageMain === 0) {
		currentImageMain = images.length - 1;
		currentImageSide = images.length - 1;
	} else {
		currentImageMain--;
		currentImageSide--;
	}
	document.querySelectorAll('.slide')[currentImageMain].classList.add('active');
	document.querySelectorAll('.thumb')[currentImageSide].classList.add('inner-border');
}

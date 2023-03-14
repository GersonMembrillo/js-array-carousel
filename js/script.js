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
let currentImageIndex = 0;
let slides = '';
for (let i = 0; i < images.length; i++) {
	slides += `<div class="slide">
	<img src="${images[i]}" alt="game-${i}">
</div>`;
}

slider.innerHTML += slides;

document.querySelectorAll('.slide')[currentImageIndex].classList.add('active');

const down = document.querySelector('.down');
const up = document.querySelector('.up');

down.addEventListener('click', goDown);

function goDown() {
	document.querySelectorAll('.slide')[currentImageIndex].classList.remove('active');
	if (currentImageIndex === images.length - 1) {
		currentImageIndex = 0;
	} else {
		currentImageIndex++;
	}
	document.querySelectorAll('.slide')[currentImageIndex].classList.add('active');
}

up.addEventListener('click', goUp);

function goUp() {
	document.querySelectorAll('.slide')[currentImageIndex].classList.remove('active');
	if (currentImageIndex === 0) {
		currentImageIndex = images.length - 1;
	} else {
		currentImageIndex--;
	}
	document.querySelectorAll('.slide')[currentImageIndex].classList.add('active');
}

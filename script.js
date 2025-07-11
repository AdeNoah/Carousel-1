const slides = document.querySelectorAll('.slider-card');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const resetBtn = document.querySelector('.reset');

let slideIndex = 0;
let intervalId;
const intervalTime = 3000;

function displaySlide() {
    slides.forEach(slide => {
        slide.style.display = 'none'
    });
    slides[slideIndex].style.display = 'block';
}
displaySlide()





console.log('hello carousel...')
console.log(slides[slideIndex])
const slides = document.querySelectorAll('.slider-card');
const slidesArray = Array.from(slides)
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;

function displaySlide() {
    slidesArray[slideIndex].classList.add('showSlide');   
}
displaySlide()





console.log('hello carousel...')
console.log(slidesArray[slideIndex])
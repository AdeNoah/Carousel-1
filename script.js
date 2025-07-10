const slides = document.querySelectorAll('.slider-card');
const slidesArray = Array.from(slides)
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;



document.addEventListener('DOMContentLoaded', () => {
    slidesArray[0].classList.add('showSlide');
})



console.log('hello carousel...')
console.log(slidesArray[slideIndex])
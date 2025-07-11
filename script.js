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
displaySlide();

function playSlides() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        slideIndex++;
        if(slideIndex >= slides.length) {
            slideIndex = 0;
        } else if(slideIndex < 0) {
            slideIndex = slides.length
        }
        displaySlide();
    }, intervalTime)
}
playSlides();

previousBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    slideIndex--;
    if(slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    displaySlide();
});

nextBtn.addEventListener('click', () => {
    slideIndex++;
    if(slideIndex >= slides.length) {
        slideIndex = 0;
    }
    displaySlide();
});

resetBtn.addEventListener('click', () => {
    slideIndex = 0;
    displaySlide();
})
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 5000);
}

showSlides();

const slider = document.querySelector('.slider');
const link = slider.querySelector('a');

slider.addEventListener('click', () => {
    link.click();
});

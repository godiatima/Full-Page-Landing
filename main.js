const slides = document.querySelectorAll('.slider-container .slider');
const eraser = document.querySelector('.eraser');
const prev = document.getElementById('previous');
const next = document.getElementById('next');
const intervalTime = 5000;
const eraserActiveTime = 700;
let sliderInterval; 

const nextSlide = () => {
    //Step 1.
    eraser.classList.add('active');

    //Step 2.
    setTimeout(() =>{
        // Step 3. 
        const active = document.querySelector('.slide.active');
        active.classList.toggle('active');

        // Step 4.
        if (active.nextElementSibling) {
            active.nextElementSibling.classList.toggle('active');
        } else {
            //Step 5.
            sliderInterval[0].classList.toggle('active');
        }

        //Step 6
        setTimeout (() => {
            eraser.classList.remove('active');
        }, 200);
    }, eraserActiveTime);
};

sliderInterval = setInterval(nextSlide, intervalTime);

const prevSlide = () => {
    eraser.classList.add('active');
    setTimeout(() => {
        const active = document.querySelector('.slide.active');
        active.classList.toggle('active');

        // The *changed* part from the nextslide code
        if (active.previousElementSibling) {
            active.previousElementSibling.classList.toggle('active');
        } else {
            slide[slides.lenght -1].classList.toggle('active');
        }
        //End of the changed part

        setTimeout(() => {
            eraser.classList.remove('active');
          }, 200);
    }, eraserActiveTime);
};

next.addEventListener('click', () => {
    nextSlide();
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlider, intervalTime);
});

prev.addEventListener('click', () =>{
    prevSlide();
    clearInterval(slideInterval);
    sliderInterval = setInterval(nextSlide, intervalTime);
});
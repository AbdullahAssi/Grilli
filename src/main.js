import '/Styles/modern-normalize.css'
import '/Styles/navbar.css'
import '/Styles/preloader.css'
import '/Styles/style.css'
import '/Styles/utlis.css'


const preloader = document.querySelector('[data-preaload]');

window.addEventListener('load', function() {
    preloader.classList.add('loaded');
    document.body.classList.add("loaded");
});


const line2Element = document.querySelector('.nav-open-btn .line-2');
line2Element.style.animationDelay = '150ms';

const line3Element = document.querySelector('.nav-open-btn .line-3');
line3Element.style.animationDelay = '300ms';


const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
    }
}


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
const isScrollBottom = lastScrollPos < window.scrollY;
if (isScrollBottom) {
    header.classList.add("hide");
} else {
    header.classList.remove("hide");
}

lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
} else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
}
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
lastActiveSliderItem.classList.remove("active");
heroSliderItems[currentSlidePos].classList.add("active");
lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
} else {
    currentSlidePos++;
}

updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
} else {
    currentSlidePos--;
}

updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
autoSlideInterval = setInterval(function () {
    slideNext();
}, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



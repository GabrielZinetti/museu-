
window.sr = ScrollReveal({reset: true});

sr.reveal('.area-1', {duration: 1500});

sr.reveal('.area-2', {
    rotate:{x: 0, y: 80, z: 0},
    duration: 1500
});

sr.reveal('.area-3',{
    rotate: {x: 100, y:100, z:0},
    duration: 1500
});




var button = document.getElementById("ingresso");

button.addEventListener("click", function(){

    var container = document.getElementById("ing");
    container.classList.toggle("hide")
})

var button = document.getElementById("hora");

button.addEventListener("click", function(){

    var container = document.getElementById("hora-info");
    container.classList.toggle("hide")
})

var button = document.getElementById("chegar");

button.addEventListener("click", function(){

    var container = document.getElementById("chegar-info");
    container.classList.toggle("hide")
})

var button = document.getElementById("requa");

button.addEventListener("click", function(){

    var container = document.getElementById("re");
    container.classList.toggle("hide")
})


const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}
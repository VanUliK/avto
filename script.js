
// Смена фоновых картинок
const divContainer = document.getElementById("main");

let imgs = [
  './images/bg/Garage_02.jpg',
  './images/bg/Garage_03.jpg',
  './images/bg/Garage_04.jpg',
  './images/bg/Garage_05.jpg',
  './images/bg/Garage_06.jpg',
  './images/bg/Garage_07.jpg',
  './images/bg/Garage_08.jpg',
  './images/bg/Garage_14.jpg',
  './images/bg/Garage_15.jpg',
  './images/bg/Garage_16.jpg',
  './images/bg/Garage_17.jpg',
  './images/bg/Garage_19.jpg'
];

let image = imgs[Math.floor(Math.random() * imgs.length)];

setInterval(function () { divContainer.style["background"] = `url(  ${image}  ) no-repeat center center/cover` });


// setInterval(function () { divContainer.setAttribute("style", "background: url(./images/bg/Garage_03.jpg) no-repeat center center/cover") }, 3000);
// setInterval(function () { divContainer.setAttribute("style", "background: url(./images/bg/Garage_02.jpg) no-repeat center center/cover") }, 6000);
// setInterval(function () { divContainer.setAttribute("style", "background: url(./images/bg/Garage_04.jpg) no-repeat center center/cover") }, 9000);
//.......................................



// раскрывающееся меню "Подробнее"
let allWork = document.querySelectorAll('.service_block');

allWork.forEach(element => {
  element.addEventListener('click', function (e) {
    element.lastElementChild.classList.toggle("hidden");
    element.childNodes[3].classList.toggle("hidden");
    element.childNodes[3].classList.toggle("more");
  });
  element.lastElementChild.classList.add("hidden");
});
//.......................................



// Бургер-меню
$(document).ready(function () {
  $('.menu-burger__header').click(function () {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.nav').toggleClass('open-menu');
    $('.burger_nav').toggleClass('active');
    $('body').toggleClass('overflow');
  });
});

let service_link = document.querySelector('.service_link');
service_link.addEventListener('click', function (e) {
  $('body').toggleClass('overflow');
  $('.menu-burger__header').toggleClass('open-menu');
  $('.burger_nav').toggleClass('active');
});

let works_link = document.querySelector('.works_link'); works_link.addEventListener('click', function (e) {
  $('body').toggleClass('overflow');
  $('.menu-burger__header').toggleClass('open-menu');
  $('.burger_nav').toggleClass('active');
});

let costing_link = document.querySelector('.costing_link'); costing_link.addEventListener('click', function (e) {
  $('body').toggleClass('overflow');
  $('.menu-burger__header').toggleClass('open-menu');
  $('.burger_nav').toggleClass('active');
});
let contacts_link = document.querySelector('.contacts_link'); contacts_link.addEventListener('click', function (e) {
  $('body').toggleClass('overflow');
  $('.menu-burger__header').toggleClass('open-menu');
  $('.burger_nav').toggleClass('active');
});
//.......................................




// Карусель фотографий "наши работы"
// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll(".carousel_img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 0,
  intervalId;

// Define function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 3000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = () => {
  // Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);
  // Calculate the updated image index based on the button clicked
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  // Restart the automatic slideshow
  autoSlide();
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);
//.......................................

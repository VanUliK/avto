$(document).ready(function () {
  $('.menu-burger__header').click(function () {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.nav').toggleClass('open-menu');
    $('.burger_nav').toggleClass('active');
    $('body').toggleClass('hidden');
  });
});

let service_link = document.querySelector('.service_link');
service_link.addEventListener('click', function (e) {
  $('body').toggleClass('hidden');
  $('.menu-burger__header').toggleClass('open-menu');
  $('.burger_nav').toggleClass('active');
});

let works_link = document.querySelector('.works_link'); works_link.addEventListener('click', function (e) {
  $('body').toggleClass('hidden');
  $('.menu-burger__header').toggleClass('open-menu');
  $('.burger_nav').toggleClass('active');
});

let costing_link = document.querySelector('.costing_link'); costing_link.addEventListener('click', function (e) {
  $('body').toggleClass('hidden');
  $('.menu-burger__header').toggleClass('open-menu');
  $('.burger_nav').toggleClass('active');
});
let contacts_link = document.querySelector('.contacts_link'); contacts_link.addEventListener('click', function (e) {
  $('body').toggleClass('hidden');
  $('.menu-burger__header').toggleClass('open-menu');
  $('.burger_nav').toggleClass('active');
});



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

const allWork = document.querySelectorAll('.service_block'),
  weld = document.querySelector('#service_block_1'),
  straightening = document.querySelector('#service_block_2'),
  paint = document.querySelector('#service_block_3'),
  moto = document.querySelector('#service_block_4');


weld.addEventListener('click', function (e) {
  if (weld.lastElementChild.style.display === 'none') {
    weld.lastElementChild.style.display = 'block';
  } else {
    weld.lastElementChild.style.display = 'none';
  }
});
straightening.addEventListener('click', function (e) {
  if (straightening.lastElementChild.style.display === 'none') {
    straightening.lastElementChild.style.display = 'block';
  } else {
    straightening.lastElementChild.style.display = 'none';
  }
});
paint.addEventListener('click', function (e) {
  if (paint.lastElementChild.style.display === 'none') {
    paint.lastElementChild.style.display = 'block';
  } else {
    paint.lastElementChild.style.display = 'none';
  }
});
moto.addEventListener('click', function (e) {
  if (moto.lastElementChild.style.display === 'none') {
    moto.lastElementChild.style.display = 'block';
    moto.lastElementChild.style.cursor = 'pointer';
  } else {
    moto.lastElementChild.style.cursor = 'pointer';
    moto.lastElementChild.style.display = 'none';
  }
});

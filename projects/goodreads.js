document.addEventListener("DOMContentLoaded", function () {
  const carouselSlide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");

  let counter = 0;
  let slideWidth = 0;

  function initCarousel() {
    slideWidth = images[0].clientWidth;
    carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;
  }

  function changeSlide(direction) {
    counter += direction;
    if (counter < 0) {
      counter = images.length - 1;
    } else if (counter >= images.length) {
      counter = 0;
    }

    carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;
  }

  document.querySelector(".prev-btn").addEventListener("click", () => {
    changeSlide(-1);
  });

  document.querySelector(".next-btn").addEventListener("click", () => {
    changeSlide(1);
  });

  initCarousel();
});

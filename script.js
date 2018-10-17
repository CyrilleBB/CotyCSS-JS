let slider = document.querySelectorAll(".slide");
let leftArrow = document.querySelector("#left-arrow");
let rightArrow = document.querySelector("#right-arrow");

current = 0;

function reset() {
  slider.forEach(slide => {
    slide.style.display = "none";
  });
}

function startSlide() {
  reset();
  slider[0].style.display = "block";
}

startSlide();

function slideLeft() {
  reset();
  if (current === 0) {
    current = slider.length;
  }
  slider[current - 1].style.display = "block";
  current--;
}
function slideRight() {
  reset();
  if (current === slider.length - 1) {
    current = -1;
  }
  slider[current + 1].style.display = "block";
  current++;
}

leftArrow.addEventListener("click", () => {
  slideLeft();
});
rightArrow.addEventListener("click", () => {
  slideRight();
});

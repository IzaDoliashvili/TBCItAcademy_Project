let slide = 0;
let scrollIndex = 3;

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    let width = entry.contentRect.width;
    
    if (width <= 270) {
      scrollIndex = 0;
    } else if (width <= 520) {
      scrollIndex = 1;
    } else if (width <= 793) {
      scrollIndex = 2;
    } else {
      scrollIndex = 3;
    }
  }
});

document.querySelectorAll('.popular-products-slider').forEach(div => {
  resizeObserver.observe(div);
});

function showSlide(index) {
  const slides = document.querySelector("#first-products");
  const totalSlides = slides.children.length - scrollIndex;
  const slideWidth = slides.children[0].offsetWidth + 20;

  

  if (index >= totalSlides) {
    slide = 0;
  } else if (index < 0) {
    slide = totalSlides - 1;
  } else {
    slide = index;
  }

  slides.style.transform = `translateX(-${slide * slideWidth}px)`;
}

document.querySelector("#first-right").addEventListener("click", () => {
  showSlide(slide + 1);
});
document.querySelector("#first-left").addEventListener("click", () => {
  showSlide(slide - 1);
});

let slide2 = 0;
function showSlide2(index) {
  const slides = document.querySelector("#second-products");
  const totalSlides = slides.children.length - scrollIndex;
  const slideWidth = slides.children[0].offsetWidth + 20;
 
  if (index >= totalSlides) {
    slide2 = 0;
  } else if (index < 0) {
    slide2 = totalSlides - 1;
  } else {
    slide2 = index;
  }

  slides.style.transform = `translateX(-${slide2 * slideWidth}px)`;
}

document.querySelector("#second-right").addEventListener("click", () => {
  showSlide2(slide2 + 1);
});
document.querySelector("#second-left").addEventListener("click", () => {
  showSlide2(slide2 - 1);
});

let slide3 = 0;

function showSlide3(index) {
  const slides = document.querySelector("#third-products");
  const totalSlides = slides.children.length - scrollIndex;
  const slideWidth = slides.children[0].offsetWidth + 20;

  if (index >= totalSlides) {
    slide3 = 0;
  } else if (index < 0) {
    slide3 = totalSlides - 1;
  } else {
    slide3 = index;
  }

  slides.style.transform = `translateX(-${slide3 * slideWidth}px)`;
}

document.querySelector("#third-right").addEventListener("click", () => {
  showSlide3(slide3 + 1);
});
document.querySelector("#third-left").addEventListener("click", () => {
  showSlide3(slide3 - 1);
});

document.querySelectorAll(".left-btn").forEach((button) => {
  button.addEventListener("focus", function () {
    // Ensure previous timeout is cleared if the button is refocused
    if (button.focusTimeout) {
      clearTimeout(button.focusTimeout);
    }

    // Set a timeout to blur the button after a certain period
    button.focusTimeout = setTimeout(function () {
      button.blur(); // Remove focus from the button
    }, 300); // 300 milliseconds = 0.3 seconds
  });
});
document.querySelectorAll(".right-btn").forEach((button) => {
  button.addEventListener("focus", function () {
    // Ensure previous timeout is cleared if the button is refocused
    if (button.focusTimeout) {
      clearTimeout(button.focusTimeout);
    }

    // Set a timeout to blur the button after a certain period
    button.focusTimeout = setTimeout(function () {
      button.blur(); // Remove focus from the button
    }, 300); // 300 milliseconds = 0.3 seconds
  });
});

showSlide(slide);
showSlide2(slide2);
showSlide3(slide3);

document.addEventListener("DOMContentLoaded", function () {
  const heartIconDivs = document.querySelectorAll(".heart-icon-div");

  heartIconDivs.forEach((div) => {
    div.addEventListener("click", function () {
      const icon = this.querySelector(".fa-heart");

      if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
      }
    });
  });
});

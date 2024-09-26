document.addEventListener("DOMContentLoaded", function () {
  const productSlider = document.querySelector(".all-popular-products-slider");
  const products = document.querySelectorAll(".popular-products-main-div");

  if (!productSlider || !products) {
    console.error("Product slider or products not found!");
    return;
  }

  let isDown = false;
  let startX;
  let scrollLeft;
  const productWidth = products[0].offsetWidth + 5; // Get the width of a single product including margin

  // Mouse Events for Desktop
  productSlider.addEventListener("mousedown", (e) => {
    isDown = true;
    productSlider.classList.add("active");
    startX = e.pageX - productSlider.offsetLeft;
    scrollLeft = productSlider.scrollLeft;
  });

  productSlider.addEventListener("mouseleave", () => {
    isDown = false;
    productSlider.classList.remove("active");
  });

  productSlider.addEventListener("mouseup", () => {
    isDown = false;
    productSlider.classList.remove("active");
    snapToProduct(); // Snap after mouse up
  });

  productSlider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - productSlider.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for scroll speed adjustment
    productSlider.scrollLeft = scrollLeft - walk;
  });

  // Touch Events for Mobile
  let touchStartX = 0;
  let touchScrollStartX = 0;

  productSlider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX - productSlider.offsetLeft;
    touchScrollStartX = productSlider.scrollLeft;
  });

  productSlider.addEventListener("touchmove", (e) => {
    const touchCurrentX = e.touches[0].pageX - productSlider.offsetLeft;
    const touchWalk = (touchCurrentX - touchStartX) * 2; // Adjust scroll speed
    productSlider.scrollLeft = touchScrollStartX - touchWalk;
  });

  productSlider.addEventListener("touchend", () => {
    snapToProduct(); // Snap after touch end
  });

  // Snap the scroll to the nearest product div
  function snapToProduct() {
    const scrollPosition = productSlider.scrollLeft;
    const closestProductIndex = Math.round(scrollPosition / productWidth); // Find the nearest product index
    const targetScrollPosition = closestProductIndex * productWidth; // Calculate the target scroll position
    productSlider.scrollTo({
      left: targetScrollPosition,
      behavior: "smooth",
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const screenWidth = window.innerWidth;
  if (screenWidth > 768) {
    return; // Exit if not a mobile device
  }

  const poolSection = document.querySelector(".pool-section");
  const cards = document.querySelectorAll(".product-card-pool");
  let currentIndex = 1; // Start with the second card (index 1) centered
  let isDown = false;
  let startX;

  // Calculate card width and container offsets
  const cardWidth = cards[0].offsetWidth;
  const spacing = 20; // Adjust if there is margin between cards
  const totalWidth = cards.length * (cardWidth + spacing); // Total width of all cards
  const maxTranslateX =
    (cards.length - 1) * (cardWidth + spacing) - (screenWidth - cardWidth) / 2; // Max limit for scroll
  const visibleOffset = (screenWidth - cardWidth) / 2; // Offset to center the card in view

  // Function to update the carousel position to center a card
  const updateCarousel = () => {
    let offset = currentIndex * (cardWidth + spacing) - visibleOffset;

    // Cap the offset to avoid extra space beyond the first and last cards
    if (offset < 0) {
      offset = 0; // Stop at the first card
    } else if (offset > maxTranslateX) {
      offset = maxTranslateX; // Stop at the last card
    }

    poolSection.style.transform = `translateX(-${offset}px)`;
  };

  // Handle touch events for scrolling
  const onTouchStart = (e) => {
    isDown = true;
    startX = e.touches[0].pageX;
  };

  const onTouchEnd = (e) => {
    isDown = false;
    const endX = e.changedTouches[0].pageX;
    const diff = startX - endX;

    // Scroll threshold to change cards
    if (diff > 50) {
      currentIndex = Math.min(currentIndex + 1, cards.length - 1); // Scroll to the next card
    } else if (diff < -50) {
      currentIndex = Math.max(currentIndex - 1, 0); // Scroll to the previous card
    }

    updateCarousel(); // Update the position after scrolling
  };

  const onTouchMove = (e) => {
    if (!isDown) return;
    e.preventDefault(); // Prevent default scrolling behavior
  };

  // Initialize the carousel to center the second card
  updateCarousel();

  // Add touch event listeners for scrolling
  poolSection.addEventListener("touchstart", onTouchStart);
  poolSection.addEventListener("touchend", onTouchEnd);
  poolSection.addEventListener("touchmove", onTouchMove);

  // Adjust the carousel when the window is resized
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
      updateCarousel();
    }
  });
});

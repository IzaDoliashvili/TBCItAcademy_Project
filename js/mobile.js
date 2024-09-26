document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = (event) => {
    const menu = event.currentTarget.nextElementSibling;
    const arrow = event.currentTarget.querySelector(".arrow img");

    if (menu.style.display === "block") {
      menu.style.display = "none";
      arrow.src = "./img/chamoshla.svg"; // Down arrow image
    } else {
      menu.style.display = "block";
      arrow.src = "./img/chamoshla.svg"; // Up arrow image
    }
  };

  const applyMobileMenuToggle = () => {
    const toggles = document.querySelectorAll(".toggle-menu");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", toggleMenu);
    });
  };

  const removeMobileMenuToggle = () => {
    const toggles = document.querySelectorAll(".toggle-menu");

    toggles.forEach((toggle) => {
      toggle.removeEventListener("click", toggleMenu);
    });
  };

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    const menus = document.querySelectorAll(".menu");
    const arrows = document.querySelectorAll(".arrow img");

    if (isMobile) {
      applyMobileMenuToggle();
      menus.forEach((menu) => (menu.style.display = "none"));
      arrows.forEach((arrow) => (arrow.src = "./img/chamoshla.svg")); // Down arrow image
    } else {
      removeMobileMenuToggle();
      menus.forEach((menu) => (menu.style.display = "block"));
      arrows.forEach((arrow) => (arrow.src = "./img/chamoshla.svg")); // Down arrow image
    }
  };

  handleResize(); // Initial check
  window.addEventListener("resize", handleResize);
});

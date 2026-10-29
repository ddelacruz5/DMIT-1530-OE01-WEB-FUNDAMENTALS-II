// Mobile menu toggle
// 1. Find the hamburger button and the menu list in the HTML.
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

// 2. Every time the button is clicked, run this function.
menuButton.addEventListener("click", function () {
    // Add the "open" class if it's missing, remove it if it's there.
    menu.classList.toggle("open");

    // Tell screen readers whether the menu is now open (true) or closed (false).
    const isOpen = menu.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
});

const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menuNavigation = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("is-active");
    menuNavigation.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
    menuNav.classList.toggle("nav-scroll-active", window.scrollY > 0)

    windowsPosition = window.scrollY;
    menuBar.classList.toggle("btn-active", windowsPosition);
    menuBar.classList.remove("is-active");
    menuNavigation.classList.remove("menu-active");
});
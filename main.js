const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnicon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnicon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnicon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
    duration: 1000,
    interval: 500,
    delay: 2500,
});


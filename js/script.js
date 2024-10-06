const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".hero", { origin: "top" });
ScrollReveal().reveal(".btn-box, .services, .portfolio, .contact-form", {
  origin: "bottom",
});
ScrollReveal().reveal(".text-content h1, .about-img, .copyright", {
  origin: "left",
});
ScrollReveal().reveal(".text-content p, .about-text, .scroll-top", {
  origin: "right",
});

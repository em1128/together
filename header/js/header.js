window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("navbar", window.scrollY > 80);
  });
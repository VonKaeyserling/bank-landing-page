const btnHam = document.querySelector("#btnHam");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHam.addEventListener("click", () => {
  header.classList.toggle("open");

  if (overlay.classList.contains("fade-in")) {
    body.classList.remove("no-scroll");

    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("no-scroll");

    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

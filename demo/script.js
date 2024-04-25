const nav = document.querySelector(".nav");
const initialColor = nav.style.backgroundColor;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    nav.style.backgroundColor = "#ffffff54";
  } else {
    nav.style.backgroundColor = initialColor;
  }
});

// Navbar glow on scroll

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 0 25px rgba(0,170,255,0.25)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Reveal animation

const hiddenElements = document.querySelectorAll(
  ".project-card, .tool, .about"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });
});

hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Dynamic typing text

const text = [
  "DevOps Engineer",
  "Cloud Engineer",
  "AWS Enthusiast",
  "CI/CD Automation Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".hero h2").textContent = letter;

  if (letter.length === currentText.length) {

    count++;
    index = 0;

    setTimeout(type, 1400);

  } else {

    setTimeout(type, 90);

  }

})();
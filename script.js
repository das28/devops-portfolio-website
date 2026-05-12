// Typing animation
const text = "DevOps & Cloud Engineer";
const typingElement = document.querySelector(".typing");

let index = 0;

function typeText() {
  if (typingElement && index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

if (typingElement) {
  typingElement.textContent = "";
  typeText();
}

// Scroll reveal animation
const cards = document.querySelectorAll(".card, .project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  card.classList.add("hidden");
  observer.observe(card);
});

// Back to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
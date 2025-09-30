// Scroll Fade-in
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});
fadeElements.forEach(el => observer.observe(el));

// Typing Effect
const typingText = document.getElementById("typing-text");
const roles = [
  "Network Security Engineer",
  "IT Infrastruktur",
  "IT Enthusiast",
];
let roleIndex = 0, charIndex = 0, isDeleting = false;
function typeEffect() {
  let currentRole = roles[roleIndex];
  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingText.textContent = currentRole.substring(0, charIndex++);
  }
  if (!isDeleting && charIndex === currentRole.length + 1) {
    isDeleting = true; setTimeout(typeEffect, 1500); return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false; roleIndex = (roleIndex + 1) % roles.length;
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Project Modal
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const closeModal = document.getElementById("closeModal");

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.getAttribute("data-title");
      modalDesc.textContent = card.getAttribute("data-desc");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });

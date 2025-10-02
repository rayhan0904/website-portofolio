// === Navbar Mobile Toggle ===
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  // kalau tertutup -> buka
  if (menu.classList.contains("max-h-0")) {
    menu.classList.remove("max-h-0");
    menu.classList.add("max-h-screen");
  } 
  // kalau terbuka -> tutup
  else {
    menu.classList.remove("max-h-screen");
    menu.classList.add("max-h-0");
  }
});

// === Auto Tutup Menu kalau link di klik ===
const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("max-h-screen");
    menu.classList.add("max-h-0");
  });
});

// Typing Animation (Dashboard)
// =============================
const typingText = document.getElementById("typing-text");
const words = [
  "Network Engineer",
  "System Integrator",
  "IT Infrastructure Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000); // delay sebelum hapus
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // lanjut kata berikutnya
    }
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// =============================
// Project Modal
// =============================
const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

// Tutup modal saat klik di luar konten
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});

/* ── SCROLL UP BUTTON ── */
const scrollBtn = document.getElementById("scrollUp");
window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("visible", window.scrollY > 400);
});

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobLinks = document.querySelectorAll(".mob-link");

function openMenu() {
  hamburger.classList.add("open");
  mobileMenu.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
  hamburger.classList.contains("open") ? closeMenu() : openMenu();
});

/* Close when a nav link is tapped */
mobLinks.forEach((link) => link.addEventListener("click", closeMenu));

/* Close on Escape key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

/* ── FORMSPREE SUCCESS ── */
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      form.reset();
      document.getElementById("successMessage").style.display = "block";
    }
  });
}

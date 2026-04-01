// scroll up btn
const scrollUp = document.getElementById("scrollUp");
window.addEventListener("scroll", () => {
  scrollUp.classList.toggle("visible", window.scrollY > 400);
});

// smooth nav active highlight
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("[id]").forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === "#" + current ? "var(--accent)" : "";
  });
});

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // page reload rokta hai

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    form.style.display = "none"; // form hide
    successMessage.style.display = "block"; // message show
  } else {
    alert("Something went wrong. Please try again.");
  }
});

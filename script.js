// PRELOADER
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// PROGRESS BAR
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});

// DARK MODE
const toggle = document.getElementById("darkToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", document.body.classList.contains("dark"));
};

if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
}

// MOBILE MENU
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("navMenu").classList.toggle("show");
};

// CONTACT FORM
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" }
  }).then(res => {
    msg.textContent = res.ok ? "✅ Message sent!" : "❌ Error!";
    form.reset();
  });
});
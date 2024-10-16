// contact.js
const form = document.getElementById("contact-form");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// validasi form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields!");
    return;
  }

  // tampilkan modal pop up
  modal.style.display = "flex";
});

// tutup modal pop up
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";

  // kosongkan form
  form.reset();
});

// Tutup modal pop up ketika klik di luar modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";

    // Kosongkan form
    form.reset();
  }
});

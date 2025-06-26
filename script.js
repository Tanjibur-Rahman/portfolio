// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    }
  });
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Filter portfolio
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".item").forEach(item => {
      item.style.display = filter === "all" || item.classList.contains(filter) ? "block" : "none";
    });
  });
});

// Modal functions
function openModal(imageSrc, caption) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = "assets/images/" + imageSrc;
  captionText.innerHTML = caption;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú" : "Abrir menú"
  );
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

const filters = document.querySelectorAll(".filter");
const pizzaCards = document.querySelectorAll(".pizza-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filters.forEach((filter) => {
      filter.classList.remove("active");
    });

    button.classList.add("active");

    pizzaCards.forEach((card) => {
      const matches =
        category === "todas" || card.dataset.category === category;

      card.style.display = matches ? "" : "none";
    });
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();


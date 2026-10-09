const professionCards = [...document.querySelectorAll("[data-profession-card]")];

function activateProfession(target) {
  professionCards.forEach((card) => {
    const active = card === target;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-pressed", String(active));
  });
}

professionCards.forEach((card) => {
  card.addEventListener("click", () => activateProfession(card));
  card.addEventListener("focus", () => activateProfession(card));
});

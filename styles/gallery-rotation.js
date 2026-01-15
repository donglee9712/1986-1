(() => {
  const rotations = [-2.5, -2, -1.5, -1, 1, 1.5, 2, 2.5];
  const pickRotation = () => rotations[Math.floor(Math.random() * rotations.length)];

  const applyRotations = (container) => {
    const cards = container.querySelectorAll(".popular-card");
    cards.forEach((card) => {
      card.style.setProperty("--card-rotation", `${pickRotation()}deg`);
    });
  };

  const init = () => {
    document.querySelectorAll(".popular-grid").forEach((grid) => {
      applyRotations(grid);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

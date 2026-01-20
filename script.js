document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");
  const toggleSections = document.querySelectorAll(".toggle-section");

  // Esconder todas as seções inicialmente
  toggleSections.forEach(sec => sec.hidden = true);

  buttons.forEach(button => {
    const targetId = button.dataset.target;
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    button.addEventListener("click", () => {
      // Toggle atual
      const isHidden = targetSection.hidden;

      // Fecha todas
      toggleSections.forEach(sec => sec.hidden = true);

      // Abre apenas se estava escondida
      if (isHidden) {
        targetSection.hidden = false;
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});



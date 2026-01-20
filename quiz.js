document.addEventListener("DOMContentLoaded", () => { // garante que o HTML carregou

  document.querySelectorAll(".exercicios").forEach(exercicio => {
    const correta = exercicio.dataset.correto;
    const opcoes = exercicio.querySelectorAll(".opcao");

    opcoes.forEach(opcao => {
      opcao.addEventListener("click", () => {

        if (exercicio.classList.contains("respondido")) return;
        exercicio.classList.add("respondido");

        const escolhida = opcao.dataset.opcao;

        opcoes.forEach(o => o.classList.remove("correta", "errada"));

        if (escolhida === correta) {
          opcao.classList.add("correta");
          exercicio.querySelector(".feedback").textContent = "✅ Correto!";
        } else {
          opcao.classList.add("errada");
          exercicio.querySelector(".feedback").textContent = "❌ Errado!";
          // mostra a correta também
          opcoes.forEach(o => {
            if (o.dataset.opcao === correta) o.classList.add("correta");
          });
        }
      });
    });
  });

});
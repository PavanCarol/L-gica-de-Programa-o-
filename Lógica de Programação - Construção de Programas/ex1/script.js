window.addEventListener("load", () => {
  let game = 0;
  const valores = [];
  const body = document.body;
  const selectedNumbersDiv = document.getElementById("selected-numbers");
  let doubleSelections = 0;

  for (let j = 0; j < 15; j++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("game");
    for (let i = 0; i < 3; i++) {
      const input = document.createElement("input");
      input.type = "checkbox";
      input.classList.add(`check${j}`);
      newDiv.appendChild(input);
    }
    if (j === 0) newDiv.style.display = "flex";
    else newDiv.style.display = "none";
    body.appendChild(newDiv);
  }

  const btn = document.createElement("button");
  btn.textContent = "Próximo jogo";
  btn.addEventListener("click", () => {
    const checks = document.getElementsByClassName(`check${game}`);
    let selectedCount = 0;
    let selectedIndices = [];
    for (let i = 0; i < checks.length; i++) {
      if (checks[i].checked) {
        selectedCount++;
        selectedIndices.push(i + 1); // Save the index of the selected checkbox (1-based index)
      }
    }

    if (selectedCount === 0) {
      alert("Selecione ao menos 1");
      return;
    }

    if (selectedCount === 2) {
      if (doubleSelections >= 1) {
        alert("Você só pode selecionar 1 jogo duplo.");
        return; // Do not proceed to the next game
      } else {
        doubleSelections++;
      }
    }

    if (selectedCount > 2) {
      alert("Selecione no máximo 2 opções. Você perdeu!!!");
      location.reload();
      return;
    }

    valores.push(selectedIndices.join(selectedCount === 2 ? "" : ", "));

    // Update the selected numbers div
    selectedNumbersDiv.textContent = `Números selecionados: ${valores.join(
      ", "
    )}`;

    if (game === 14) {
      if (doubleSelections < 1) {
        alert("Você precisa selecionar ao menos 1 jogo duplo. Você perdeu!!!");
        location.reload();
        return;
      }
      alert("Você completou todos os jogos! Você ganhou!!!");
      location.reload();
      return;
    }

    game++;
    const games = document.getElementsByClassName("game");
    for (let i = 0; i < games.length; i++) {
      games[i].style.display = "none";
    }
    games[game].style.display = "flex";
  });

  body.appendChild(btn);
});

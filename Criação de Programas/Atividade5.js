function wordFormations() {
  const word = "palavra";
  const formations = new Set();
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j <= word.length; j++) {
      formations.add(word.substring(i, j));
    }
  }
  console.log("Número de formações diferentes:", formations.size);
}

wordFormations();

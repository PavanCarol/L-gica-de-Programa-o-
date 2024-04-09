const fs = require("fs");

fs.readFile("arquivo.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }
  const lines = data.trim().split("\n");
  lines.forEach((line) => {
    const parts = line.split(",");
    const ra = parts[0];
    const disciplina = parts[1];
    const status = parts[2];
    if (status === "C") {
      console.log(`Aluno de RA ${ra} concluiu a disciplina: ${disciplina}`);
    }
  });
});

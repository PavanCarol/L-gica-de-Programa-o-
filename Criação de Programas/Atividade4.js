const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Escolha a operação:");
console.log("1. Binário para Decimal");
console.log("2. Decimal para Binário");

rl.question("Escolha: ", (choice) => {
  switch (parseInt(choice)) {
    case 1:
      rl.question("Digite um número binário: ", (binary) => {
        const decimal = parseInt(binary, 2);
        console.log("Decimal:", decimal);
        rl.close();
      });
      break;
    case 2:
      rl.question("Digite um número decimal: ", (dec) => {
        const bin = parseInt(dec).toString(2);
        console.log("Binário:", bin);
        rl.close();
      });
      break;
    default:
      console.log("Escolha inválida!");
      rl.close();
  }
});

class FibonacciInRange {
  static main() {
    const start = 1;
    const end = 100;
    let a = 0,
      b = 1,
      c;
    console.log(`Números de Fibonacci no intervalo de ${start} a ${end}:`);
    while (b <= end) {
      if (b >= start) process.stdout.write(b + " "); // Usando process.stdout.write para imprimir sem nova linha
      c = a + b;
      a = b;
      b = c;
    }
  }
}

FibonacciInRange.main();

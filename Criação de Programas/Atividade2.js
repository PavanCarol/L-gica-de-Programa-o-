class SudokuSolver {
  static main() {
    const sudoku = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    const numbers = [
      [1, 2],
      [3, 4],
    ];

    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers[i].length; j++) {
        sudoku[i][j] = numbers[i][j];
      }
    }

    // Imprimir o sudoku resultante
    for (let i = 0; i < sudoku.length; i++) {
      let row = "";
      for (let j = 0; j < sudoku[i].length; j++) {
        row += sudoku[i][j] + " ";
      }
      console.log(row);
    }
  }
}

SudokuSolver.main();

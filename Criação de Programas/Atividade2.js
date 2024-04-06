public class SudokuSolver {
    public static void main(String[] args) {
        int[][] sudoku = {
            {0, 0, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0}
        };
        int[][] numbers = {
            {1, 2},
            {3, 4}
        };
 
        for (int i = 0; i < numbers.length; i++) {
            for (int j = 0; j < numbers[i].length; j++) {
                sudoku[i][j] = numbers[i][j];
            }
        }
 
        // Imprimir o sudoku resultante
        for (int i = 0; i < sudoku.length; i++) {
            for (int j = 0; j < sudoku[i].length; j++) {
                System.out.print(sudoku[i][j] + " ");
            }
            System.out.println();
        }
    }
}
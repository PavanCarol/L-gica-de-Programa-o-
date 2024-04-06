public class FibonacciInRange {
    public static void main(String[] args) {
        int start = 1;
        int end = 100;
        int a = 0, b = 1, c;
        System.out.println("Números de Fibonacci no intervalo de " + start + " a " + end + ":");
        while (b <= end) {
            if (b >= start)
                System.out.print(b + " ");
            c = a + b;
            a = b;
            b = c;
        }
    }
}
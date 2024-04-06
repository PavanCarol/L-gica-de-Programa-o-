import java.util.Scanner;
 
public class BinaryDecimalConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Escolha a operação: ");
        System.out.println("1. Binário para Decimal");
        System.out.println("2. Decimal para Binário");
        int choice = scanner.nextInt();
        switch (choice) {
            case 1:
                System.out.println("Digite um número binário: ");
                String binary = scanner.next();
                int decimal = Integer.parseInt(binary, 2);
                System.out.println("Decimal: " + decimal);
                break;
            case 2:
                System.out.println("Digite um número decimal: ");
                int dec = scanner.nextInt();
                String bin = Integer.toBinaryString(dec);
                System.out.println("Binário: " + bin);
                break;
            default:
                System.out.println("Escolha inválida!");
        }
        scanner.close();
    }
}

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
 
public class DisciplinasConcluidas {
    public static void main(String[] args) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("arquivo.txt"));
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                String ra = parts[0];
                String disciplina = parts[1];
                String status = parts[2];
                if (status.equals("C")) {
                    System.out.println("Aluno de RA " + ra + " concluiu a disciplina: " + disciplina);
                }
            }
            reader.close();
        } catch (IOException e) {
            System.err.println("Erro ao ler o arquivo: " + e.getMessage());
        }
    }
}
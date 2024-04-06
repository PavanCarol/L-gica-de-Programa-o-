import java.util.HashSet;
import java.util.Set;
 
public class WordFormations {
    public static void main(String[] args) {
        String word = "palavra";
        Set<String> formations = new HashSet<>();
        for (int i = 0; i < word.length(); i++) {
            for (int j = i + 1; j <= word.length(); j++) {
                formations.add(word.substring(i, j));
            }
        }
        System.out.println("Número de formações diferentes: " + formations.size());
    }
}
public class PhraseSimilarity {
    public static void main(String[] args) {
        String phrase1 = "Esta é uma frase de exemplo.";
        String phrase2 = "Esta é outra frase.";
 
        double similarity = calculateSimilarity(phrase1, phrase2);
        System.out.println("Percentual de similaridade: " + similarity + "%");
    }
 
    public static double calculateSimilarity(String str1, String str2) {
        int maxLength = Math.max(str1.length(), str2.length());
        int distance = calculateDistance(str1, str2);
        return ((double) (maxLength - distance) / maxLength) * 100;
    }
 
    public static int calculateDistance(String str1, String str2) {
        int[][] distance = new int[str1.length() + 1][str2.length() + 1];
        for (int i = 0; i <= str1.length(); i++) {
            distance[i][0] = i;
        }
        for (int j = 1; j <= str2.length(); j++) {
            distance[0][j] = j;
        }
        for (int i = 1; i <= str1.length(); i++) {
            for (int j = 1; j <= str2.length(); j++) {
                int cost = (str1.charAt(i - 1) == str2.charAt(j - 1)) ? 0 : 1;
                distance[i][j] = Math.min(Math.min(distance[i - 1][j] + 1, distance[i][j - 1] + 1), distance[i - 1][j - 1] + cost);
            }
        }
        return distance[str1.length()][str2.length()];
    }
}
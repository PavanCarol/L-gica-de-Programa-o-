function main() {
  const phrase1 = "frase oioioi";
  const phrase2 = "outro oioioi";

  const similarity = calculateSimilarity(phrase1, phrase2);
  console.log("Percentual de similaridade:", similarity + "%");
}

function calculateSimilarity(str1, str2) {
  const maxLength = Math.max(str1.length, str2.length);
  const distance = calculateDistance(str1, str2);
  return ((maxLength - distance) / maxLength) * 100;
}

function calculateDistance(str1, str2) {
  const distance = [];
  for (let i = 0; i <= str1.length; i++) {
    distance[i] = [i];
  }
  for (let j = 1; j <= str2.length; j++) {
    distance[0][j] = j;
  }
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      const cost = str1.charAt(i - 1) === str2.charAt(j - 1) ? 0 : 1;
      distance[i][j] = Math.min(
        Math.min(distance[i - 1][j] + 1, distance[i][j - 1] + 1),
        distance[i - 1][j - 1] + cost
      );
    }
  }
  return distance[str1.length][str2.length];
}

main();

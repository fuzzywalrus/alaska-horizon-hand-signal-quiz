function levenshteinDistance(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i++) {
    matrix[0][i] = i;
  }

  for (let j = 0; j <= str2.length; j++) {
    matrix[j][0] = j;
  }

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[j][i] = matrix[j - 1][i - 1];
      } else {
        matrix[j][i] = Math.min(
          matrix[j - 1][i - 1] + 1,
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
}

function normalizeAnswer(answer: string): string {
  return answer
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function fuzzyMatchAnswer(userInput: string, correctAnswer: string): boolean {
  const normalizedInput = normalizeAnswer(userInput);
  const normalizedCorrect = normalizeAnswer(correctAnswer);
  
  if (normalizedInput === normalizedCorrect) {
    return true;
  }
  
  const distance = levenshteinDistance(normalizedInput, normalizedCorrect);
  const maxLength = Math.max(normalizedInput.length, normalizedCorrect.length);
  
  const threshold = Math.max(1, Math.floor(maxLength * 0.2));
  
  return distance <= threshold;
}

export function getTypingHints(): string[] {
  return [
    "Answers are not case sensitive",
    "All answers are 2-3 words",
    "Small spelling mistakes are okay",
    "Use spaces between words"
  ];
}
export interface HandSignal {
  id: string;
  name: string;
  fileName: string;
  imagePath: string;
}

export type DifficultyMode = 'easy' | 'medium' | 'hard' | 'typing';

export interface DifficultyConfig {
  mode: DifficultyMode;
  choices: number;
  label: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  totalQuestions: number;
  isComplete: boolean;
  answers: boolean[];
}

export interface QuizQuestion {
  correctAnswer: HandSignal;
  choices: HandSignal[];
  selectedAnswer: HandSignal | null;
  typedAnswer?: string;
}

export interface GameSettings {
  difficulty: DifficultyMode;
  questionsPerGame: number;
  useDistractors: boolean;
}

export interface QuizSession {
  remainingSignals: HandSignal[];
  usedSignals: HandSignal[];
  isComprehensive: boolean;
}
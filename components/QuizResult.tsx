'use client';

import { HandSignal } from '@/types';

interface QuizResultProps {
  selectedAnswer: HandSignal;
  correctAnswer: HandSignal;
  isCorrect: boolean;
  onNext: () => void;
  isLastQuestion: boolean;
}

export default function QuizResult({
  selectedAnswer,
  correctAnswer,
  isCorrect,
  onNext,
  isLastQuestion
}: QuizResultProps) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className={`rounded-lg p-6 mb-6 ${
        isCorrect 
          ? 'bg-green-100 dark:bg-green-900/20 border-2 border-green-500' 
          : 'bg-red-100 dark:bg-red-900/20 border-2 border-red-500'
      }`}>
        <div className="text-center">
          <div className={`text-6xl mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? '✓' : '✗'}
          </div>
          <h2 className={`text-2xl font-bold mb-2 ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </h2>
          
          {!isCorrect && (
            <div className="space-y-2">
              <p className="text-red-700 dark:text-red-300">
                Your answer: <span className="font-semibold">{selectedAnswer.name}</span>
              </p>
              <p className="text-green-700 dark:text-green-300">
                Correct answer: <span className="font-semibold">{correctAnswer.name}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
      >
        {isLastQuestion ? 'View Results' : 'Next Question'}
      </button>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { HandSignal } from '@/types';
import { getTypingHints } from '@/lib/fuzzyMatch';
import Image from 'next/image';

interface QuizTypingProps {
  correctAnswer: HandSignal;
  onAnswerSubmit: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
  showResult?: boolean;
  isCorrect?: boolean;
  userAnswer?: string;
}

export default function QuizTyping({
  correctAnswer,
  onAnswerSubmit,
  questionNumber,
  totalQuestions,
  showResult = false,
  isCorrect = false,
  userAnswer = ''
}: QuizTypingProps) {
  const [typedAnswer, setTypedAnswer] = useState(userAnswer);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typedAnswer.trim()) {
      onAnswerSubmit(typedAnswer.trim());
    }
  };

  const hints = getTypingHints();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Question {questionNumber} of {totalQuestions}</h2>
          <div className="bg-alaska-lightblue/20 dark:bg-alaska-blue/40 px-3 py-1 rounded-full text-sm">
            {questionNumber}/{totalQuestions}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4 text-center">What hand signal is this?</h3>
          <div className="flex justify-center mb-6">
            <div className="relative w-80 h-80 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <Image
                src={correctAnswer.imagePath}
                alt="Hand signal to identify"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>
          
          <div className="bg-alaska-lightblue/10 dark:bg-alaska-blue/20 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-alaska-blue dark:text-alaska-lightblue mb-2">Typing Mode Tips:</h4>
            <ul className="text-sm text-alaska-blue/80 dark:text-alaska-lightblue/80 space-y-1">
              {hints.map((hint, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  {hint}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showResult && (
        <div className={`rounded-lg p-4 mb-6 ${
          isCorrect 
            ? 'bg-alaska-green/10 dark:bg-alaska-green/20 border-2 border-alaska-green' 
            : 'bg-alaska-red/10 dark:bg-alaska-red/20 border-2 border-alaska-red'
        }`}>
          <div className="text-center">
            <span className={`text-2xl mr-2 ${isCorrect ? 'text-alaska-green' : 'text-alaska-red'}`}>
              {isCorrect ? '✓' : '✗'}
            </span>
            <span className={`font-semibold ${isCorrect ? 'text-alaska-green dark:text-alaska-green' : 'text-alaska-red dark:text-alaska-red'}`}>
              {isCorrect ? 'Correct!' : `Correct answer: ${correctAnswer.name}`}
            </span>
            {!isCorrect && (
              <div className="mt-2 text-sm text-alaska-red/80 dark:text-alaska-red/80">
                Your answer: &ldquo;{userAnswer}&rdquo;
              </div>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!showResult && (
          <>
            <div>
              <label htmlFor="answer" className="block text-lg font-semibold mb-2">
                Type your answer:
              </label>
              <input
                id="answer"
                type="text"
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
                placeholder="e.g., thumbs up, hold position..."
                className="w-full p-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:border-alaska-lightblue focus:ring-2 focus:ring-alaska-lightblue focus:ring-opacity-20"
                autoComplete="off"
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={!typedAnswer.trim()}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                typedAnswer.trim()
                  ? 'bg-alaska-blue hover:bg-alaska-lightblue text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
            >
              Submit Answer
            </button>
          </>
        )}
      </form>
    </div>
  );
}
'use client';

import { HandSignal } from '@/types';
import Image from 'next/image';

interface QuizQuestionProps {
  correctAnswer: HandSignal;
  choices: HandSignal[];
  selectedAnswer: HandSignal | null;
  onAnswerSelect: (answer: HandSignal) => void;
  onSubmit: () => void;
  questionNumber: number;
  totalQuestions: number;
  showResult?: boolean;
  isCorrect?: boolean;
}

export default function QuizQuestion({
  correctAnswer,
  choices,
  selectedAnswer,
  onAnswerSelect,
  onSubmit,
  questionNumber,
  totalQuestions,
  showResult = false,
  isCorrect = false
}: QuizQuestionProps) {
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
          <div className="flex justify-center">
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
        </div>
      </div>

      {showResult && (
        <div className={`rounded-lg p-4 mb-6 ${
          isCorrect 
            ? 'bg-alaska-green/10 dark:bg-alaska-green/20 border-2 border-alaska-green' 
            : 'bg-alaska-red/10 dark:bg-alaska-red/20 border-2 border-alaska-red'
        }`}>
          <div className="flex items-center justify-center">
            <span className={`text-2xl mr-2 ${isCorrect ? 'text-alaska-green' : 'text-alaska-red'}`}>
              {isCorrect ? '✓' : '✗'}
            </span>
            <span className={`font-semibold ${isCorrect ? 'text-alaska-green dark:text-alaska-green' : 'text-alaska-red dark:text-alaska-red'}`}>
              {isCorrect ? 'Correct!' : `Correct answer: ${correctAnswer.name}`}
            </span>
          </div>
        </div>
      )}

      <div className="space-y-3 mb-6">
        {choices.map((choice) => {
          let buttonClass = 'w-full p-4 text-left rounded-lg border-2 transition-colors ';
          
          if (showResult) {
            if (choice.id === correctAnswer.id) {
              buttonClass += 'border-alaska-green bg-alaska-green/10 dark:bg-alaska-green/20';
            } else if (selectedAnswer?.id === choice.id && !isCorrect) {
              buttonClass += 'border-alaska-red bg-alaska-red/10 dark:bg-alaska-red/20';
            } else {
              buttonClass += 'border-gray-200 dark:border-gray-600';
            }
          } else {
            buttonClass += selectedAnswer?.id === choice.id
              ? 'border-alaska-lightblue bg-alaska-lightblue/10 dark:bg-alaska-blue/20'
              : 'border-gray-200 dark:border-gray-600 hover:border-alaska-lightblue/50 dark:hover:border-alaska-lightblue/50';
          }

          return (
            <button
              key={choice.id}
              onClick={() => !showResult && onAnswerSelect(choice)}
              disabled={showResult}
              className={buttonClass}
            >
              <span className="font-medium">{choice.name}</span>
            </button>
          );
        })}
      </div>

      {!showResult && (
        <button
          onClick={onSubmit}
          disabled={!selectedAnswer}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
            selectedAnswer
              ? 'bg-alaska-blue hover:bg-alaska-lightblue text-white'
              : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          Submit Answer
        </button>
      )}
    </div>
  );
}
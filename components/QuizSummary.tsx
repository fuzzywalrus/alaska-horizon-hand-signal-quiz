'use client';

import { useEffect, useState } from 'react';
import Confetti from './Confetti';

interface QuizSummaryProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onSettings: () => void;
}

export default function QuizSummary({
  score,
  totalQuestions,
  onRestart,
  onSettings
}: QuizSummaryProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (percentage >= 90) {
      setShowConfetti(true);
      // Auto-stop confetti after 4 seconds
      const timeout = setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [percentage]);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return "Excellent! You're a hand signal expert!";
    if (percentage >= 75) return "Great job! You know your signals well.";
    if (percentage >= 60) return "Good work! Keep practicing to improve.";
    return "Keep studying! Practice makes perfect.";
  };

  const getScoreColor = () => {
    if (percentage >= 75) return "text-alaska-green dark:text-alaska-green";
    if (percentage >= 60) return "text-alaska-orange dark:text-alaska-orange";
    return "text-alaska-red dark:text-alaska-red";
  };

  return (
    <>
      <Confetti active={showConfetti} />
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Quiz Complete!</h2>
        
        <div className="mb-6">
          <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
            {score}/{totalQuestions}
          </div>
          <div className={`text-2xl font-semibold mb-4 ${getScoreColor()}`}>
            {percentage}%
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {getScoreMessage()}
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onRestart}
            className="w-full py-3 px-6 bg-alaska-blue hover:bg-alaska-lightblue text-white rounded-lg font-semibold transition-colors"
          >
            Take Another Quiz
          </button>
          
          <button
            onClick={onSettings}
            className="w-full py-3 px-6 bg-alaska-gray hover:bg-alaska-gray/80 text-white rounded-lg font-semibold transition-colors"
          >
            Change Settings
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
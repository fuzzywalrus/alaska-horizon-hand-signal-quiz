'use client';

import { useState } from 'react';
import { useQuiz } from '@/hooks/useQuiz';
import Settings from '@/components/Settings';
import QuizQuestion from '@/components/QuizQuestion';
import QuizTyping from '@/components/QuizTyping';
import QuizResult from '@/components/QuizResult';
import QuizSummary from '@/components/QuizSummary';

type AppState = 'settings' | 'quiz' | 'summary';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('settings');
  const [showFeedback, setShowFeedback] = useState(false);
  const {
    settings,
    quizState,
    currentQuestion,
    lastAnswer,
    startQuiz,
    selectAnswer,
    typeAnswer,
    submitAnswer,
    nextQuestion,
    updateSettings
  } = useQuiz();

  const handleStartQuiz = () => {
    startQuiz();
    setShowFeedback(false);
    setAppState('quiz');
  };

  const handleSubmitAnswer = () => {
    submitAnswer();
    setShowFeedback(true);
    // Show feedback briefly, then move to next question or summary
    setTimeout(() => {
      setShowFeedback(false);
      if (quizState.currentQuestion + 1 >= quizState.totalQuestions) {
        setAppState('summary');
      } else {
        nextQuestion();
      }
    }, 1500);
  };

  const handleTypedAnswer = (answer: string) => {
    typeAnswer(answer);
    submitAnswer();
    setShowFeedback(true);
    // Show feedback briefly, then move to next question or summary
    setTimeout(() => {
      setShowFeedback(false);
      if (quizState.currentQuestion + 1 >= quizState.totalQuestions) {
        setAppState('summary');
      } else {
        nextQuestion();
      }
    }, 1500);
  };


  const handleRestartQuiz = () => {
    setAppState('settings');
  };

  const handleShowSettings = () => {
    setAppState('settings');
  };

  const renderContent = () => {
    switch (appState) {
      case 'settings':
        return (
          <Settings
            settings={settings}
            onSettingsChange={updateSettings}
            onStartQuiz={handleStartQuiz}
          />
        );

      case 'quiz':
        if (!currentQuestion) return null;
        
        if (settings.difficulty === 'typing') {
          return (
            <QuizTyping
              correctAnswer={currentQuestion.correctAnswer}
              onAnswerSubmit={handleTypedAnswer}
              questionNumber={quizState.currentQuestion + 1}
              totalQuestions={quizState.totalQuestions}
              showResult={showFeedback}
              isCorrect={lastAnswer?.isCorrect || false}
              userAnswer={lastAnswer?.selected?.name || currentQuestion.typedAnswer || ''}
            />
          );
        }
        
        return (
          <QuizQuestion
            correctAnswer={currentQuestion.correctAnswer}
            choices={currentQuestion.choices}
            selectedAnswer={currentQuestion.selectedAnswer}
            onAnswerSelect={selectAnswer}
            onSubmit={handleSubmitAnswer}
            questionNumber={quizState.currentQuestion + 1}
            totalQuestions={quizState.totalQuestions}
            showResult={showFeedback}
            isCorrect={lastAnswer?.isCorrect || false}
          />
        );

      case 'summary':
        return (
          <QuizSummary
            score={quizState.score}
            totalQuestions={quizState.totalQuestions}
            onRestart={handleRestartQuiz}
            onSettings={handleShowSettings}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4">
      {renderContent()}
    </div>
  );
}
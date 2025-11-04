'use client';

import { useState, useCallback } from 'react';
import { HandSignal, QuizState, QuizQuestion, DifficultyMode, GameSettings, QuizSession } from '@/types';
import { handSignals, generateQuizChoices, difficultyConfigs } from '@/lib/handSignals';
import { fuzzyMatchAnswer } from '@/lib/fuzzyMatch';

const DEFAULT_QUESTIONS_PER_GAME = 26;

export const useQuiz = (initialSettings?: Partial<GameSettings>) => {
  const [settings, setSettings] = useState<GameSettings>({
    difficulty: 'easy',
    questionsPerGame: DEFAULT_QUESTIONS_PER_GAME,
    useDistractors: false,
    ...initialSettings
  });

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    totalQuestions: settings.questionsPerGame,
    isComplete: false,
    answers: []
  });

  const [quizSession, setQuizSession] = useState<QuizSession>({
    remainingSignals: [...handSignals],
    usedSignals: [],
    isComprehensive: settings.questionsPerGame === handSignals.length
  });

  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<{
    selected: HandSignal;
    correct: HandSignal;
    isCorrect: boolean;
  } | null>(null);

  const generateQuestion = useCallback((): QuizQuestion => {
    let correctAnswer: HandSignal;
    
    // For comprehensive mode (26 questions), ensure each signal is used exactly once
    if (quizSession.isComprehensive && quizSession.remainingSignals.length > 0) {
      const randomIndex = Math.floor(Math.random() * quizSession.remainingSignals.length);
      correctAnswer = quizSession.remainingSignals[randomIndex];
      
      // Update session state
      setQuizSession(prev => ({
        ...prev,
        remainingSignals: prev.remainingSignals.filter((_, index) => index !== randomIndex),
        usedSignals: [...prev.usedSignals, correctAnswer]
      }));
    } else {
      // For non-comprehensive mode, use random selection
      correctAnswer = handSignals[Math.floor(Math.random() * handSignals.length)];
    }
    
    const difficultyConfig = difficultyConfigs.find(config => config.mode === settings.difficulty)!;
    const choices = settings.difficulty === 'typing' ? [] : generateQuizChoices(correctAnswer, difficultyConfig.choices, settings.useDistractors, settings.difficulty);
    
    return {
      correctAnswer,
      choices,
      selectedAnswer: null,
      typedAnswer: ''
    };
  }, [settings.difficulty, settings.useDistractors, quizSession]);

  const startQuiz = useCallback(() => {
    const isComprehensive = settings.questionsPerGame === handSignals.length;
    
    // Reset quiz session
    setQuizSession({
      remainingSignals: [...handSignals],
      usedSignals: [],
      isComprehensive
    });
    
    setQuizState({
      currentQuestion: 0,
      score: 0,
      totalQuestions: settings.questionsPerGame,
      isComplete: false,
      answers: []
    });
    
    // Generate first question after session is reset
    setTimeout(() => {
      setCurrentQuestion(generateQuestion());
    }, 0);
    
    setShowResult(false);
    setLastAnswer(null);
  }, [settings.questionsPerGame, generateQuestion]);

  const selectAnswer = useCallback((answer: HandSignal) => {
    if (currentQuestion) {
      setCurrentQuestion({
        ...currentQuestion,
        selectedAnswer: answer
      });
    }
  }, [currentQuestion]);

  const typeAnswer = useCallback((answer: string) => {
    if (currentQuestion) {
      setCurrentQuestion({
        ...currentQuestion,
        typedAnswer: answer
      });
    }
  }, [currentQuestion]);

  const submitAnswer = useCallback(() => {
    if (!currentQuestion) return;
    
    let isCorrect = false;
    let selectedAnswer: HandSignal | null = null;

    if (settings.difficulty === 'typing') {
      if (!currentQuestion.typedAnswer?.trim()) return;
      const typedAnswer = currentQuestion.typedAnswer.trim();
      isCorrect = fuzzyMatchAnswer(typedAnswer, currentQuestion.correctAnswer.name);
      selectedAnswer = {
        ...currentQuestion.correctAnswer,
        name: typedAnswer
      };
    } else {
      if (!currentQuestion.selectedAnswer) return;
      isCorrect = currentQuestion.selectedAnswer.id === currentQuestion.correctAnswer.id;
      selectedAnswer = currentQuestion.selectedAnswer;
    }
    
    setLastAnswer({
      selected: selectedAnswer,
      correct: currentQuestion.correctAnswer,
      isCorrect
    });

    const newAnswers = [...quizState.answers, isCorrect];
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;
    const newQuestionNumber = quizState.currentQuestion + 1;
    const isComplete = newQuestionNumber >= quizState.totalQuestions;

    setQuizState({
      currentQuestion: newQuestionNumber,
      score: newScore,
      totalQuestions: quizState.totalQuestions,
      isComplete,
      answers: newAnswers
    });

    setShowResult(true);
  }, [currentQuestion, quizState, settings.difficulty]);

  const nextQuestion = useCallback(() => {
    if (quizState.isComplete) {
      setCurrentQuestion(null);
    } else {
      setCurrentQuestion(generateQuestion());
    }
    setShowResult(false);
    setLastAnswer(null);
  }, [quizState.isComplete, generateQuestion]);

  const updateSettings = useCallback((newSettings: Partial<GameSettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      // Update comprehensive mode flag when questions per game changes
      if (newSettings.questionsPerGame !== undefined) {
        setQuizSession(prevSession => ({
          ...prevSession,
          isComprehensive: updated.questionsPerGame === handSignals.length
        }));
      }
      return updated;
    });
  }, []);

  return {
    settings,
    quizState,
    currentQuestion,
    showResult,
    lastAnswer,
    startQuiz,
    selectAnswer,
    typeAnswer,
    submitAnswer,
    nextQuestion,
    updateSettings
  };
};
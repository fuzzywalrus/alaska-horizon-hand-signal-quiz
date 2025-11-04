'use client';

import { DifficultyMode, GameSettings } from '@/types';
import { difficultyConfigs } from '@/lib/handSignals';

interface SettingsProps {
  settings: GameSettings;
  onSettingsChange: (settings: Partial<GameSettings>) => void;
  onStartQuiz: () => void;
  onBack?: () => void;
}

export default function Settings({
  settings,
  onSettingsChange,
  onStartQuiz,
  onBack
}: SettingsProps) {
  const handleDifficultyChange = (difficulty: DifficultyMode) => {
    onSettingsChange({ difficulty });
  };

  const handleQuestionsChange = (questionsPerGame: number) => {
    onSettingsChange({ questionsPerGame });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Quiz Settings</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-3">
              Difficulty Level
            </label>
            <div className="space-y-2">
              {difficultyConfigs.map((config) => (
                <button
                  key={config.mode}
                  onClick={() => handleDifficultyChange(config.mode)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                    settings.difficulty === config.mode
                      ? 'border-alaska-lightblue bg-alaska-lightblue/10 dark:bg-alaska-blue/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-alaska-lightblue/50 dark:hover:border-alaska-lightblue/50'
                  }`}
                >
                  <div className="font-medium">{config.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {config.mode === 'typing' 
                      ? 'Type the answer manually'
                      : `${config.choices} answer choices per question`
                    }
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-3 mb-6">
              <input
                type="checkbox"
                checked={settings.useDistractors}
                onChange={(e) => onSettingsChange({ useDistractors: e.target.checked })}
                className="w-5 h-5 text-alaska-blue focus:ring-alaska-lightblue focus:ring-2 rounded"
              />
              <div>
                <span className="text-lg font-semibold">Include Distractor Answers</span>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Add plausible but incorrect aviation terms to make questions harder
                </div>
              </div>
            </label>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-3">
              Questions per Quiz
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[26, 40, 60].map((count) => (
                <button
                  key={count}
                  onClick={() => handleQuestionsChange(count)}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    settings.questionsPerGame === count
                      ? 'border-alaska-lightblue bg-alaska-lightblue/10 dark:bg-alaska-blue/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-alaska-lightblue/50 dark:hover:border-alaska-lightblue/50'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-medium">{count}</div>
                    {count === 26 && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            onClick={onStartQuiz}
            className="w-full py-3 px-6 bg-alaska-blue hover:bg-alaska-lightblue text-white rounded-lg font-semibold transition-colors"
          >
            Start Quiz
          </button>
          
          {onBack && (
            <button
              onClick={onBack}
              className="w-full py-3 px-6 bg-alaska-gray hover:bg-alaska-gray/80 text-white rounded-lg font-semibold transition-colors"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react'
import CategoryPicker from './components/CategoryPicker'
import IntroductionScreen from './components/IntroductionScreen'
import UnitScreen from './components/UnitScreen'
import QuizScreen from './components/QuizScreen'
import ResultsScreen from './components/ResultsScreen'
import { generateQuiz } from './lib/quiz'
import type { Question, QuizResult } from './lib/quiz'
import type { QuizConfig } from './lib/types'
import { useTheme } from './lib/useTheme'

type Screen = 'setup' | 'intro' | 'unit' | 'quiz' | 'results'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [screen, setScreen] = useState<Screen>('setup')
  const [config, setConfig] = useState<QuizConfig>({ unit: 1 })
  const [questions, setQuestions] = useState<Question[]>([])
  const [results, setResults] = useState<QuizResult | null>(null)

  const startQuiz = (cfg: QuizConfig) => {
    setConfig(cfg)
    if (cfg.unit === 0) {
      setScreen('intro')
      return
    }
    if (cfg.unit === 1) {
      setScreen('unit')
      return
    }
    setQuestions(generateQuiz(cfg.unit))
    setScreen('quiz')
  }

  const finishQuiz = (r: QuizResult) => {
    setResults(r)
    setScreen('results')
  }

  return (
    <div className="min-h-dvh bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
        <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
          <div>
            <h1 className="text-lg font-bold leading-tight">Коллокации</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Тренажёр английских коллокаций
            </p>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Переключить тему"
            className="flex h-10 w-10 items-center justify-center rounded-full text-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-xl px-4 pb-10 pt-4">
        {screen === 'setup' && <CategoryPicker onStart={startQuiz} />}
        {screen === 'intro' && <IntroductionScreen onExit={() => setScreen('setup')} />}
        {screen === 'unit' && (
          <UnitScreen unitLabel={`Unit ${config.unit}`} onExit={() => setScreen('setup')} />
        )}
        {screen === 'quiz' && (
          <QuizScreen
            questions={questions}
            onFinish={finishQuiz}
            onExit={() => setScreen('setup')}
          />
        )}
        {screen === 'results' && results && (
          <ResultsScreen
            results={results}
            config={config}
            onRetry={() => startQuiz(config)}
            onSettings={() => setScreen('setup')}
          />
        )}
      </main>
    </div>
  )
}

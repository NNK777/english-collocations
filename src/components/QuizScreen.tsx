import { useState } from 'react'
import type { Question, QuizResult } from '../lib/quiz'

interface Props {
  questions: Question[]
  onFinish: (result: QuizResult) => void
  onExit: () => void
}

function SentenceWithBlank({ sentence }: { sentence: string }) {
  const parts = sentence.split('___')
  return (
    <p className="text-lg leading-relaxed">
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="mx-1 inline-block min-w-16 border-b-2 border-indigo-500 text-center text-indigo-600 dark:text-indigo-400">
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </p>
  )
}

export default function QuizScreen({ questions, onFinish, onExit }: Props) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<(string | null)[]>(() => questions.map(() => null))

  const q = questions[index]
  const chosen = answers[index]
  const answered = chosen !== null
  const isLast = index + 1 === questions.length

  const choose = (option: string) => {
    if (answered) return
    const next = [...answers]
    next[index] = option
    setAnswers(next)
  }

  const goNext = () => {
    if (!isLast) {
      setIndex(index + 1)
      return
    }
    const correct = answers.filter((a, i) => a === questions[i].entry.partner).length
    const wrong = questions
      .filter((qq, i) => answers[i] !== qq.entry.partner)
      .map((qq) => qq.entry)
    onFinish({ total: questions.length, correct, wrong })
  }

  const progress = ((index + (answered ? 1 : 0)) / questions.length) * 100

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Вопрос {index + 1} из {questions.length}
        </p>
        <button
          type="button"
          onClick={onExit}
          className="rounded-lg px-3 py-1.5 text-sm text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          Выйти
        </button>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        {q.type === 'fill' ? (
          <>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Вставьте пропущенное слово
            </p>
            {q.sentence && <SentenceWithBlank sentence={q.sentence} />}
          </>
        ) : (
          <>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Выберите правильное сочетание
            </p>
            <p className="text-lg">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">{q.entry.head}</span>
              <span className="mx-2 text-slate-400">+</span>
              <span className="text-slate-500 dark:text-slate-400">?</span>
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Перевод: «{q.entry.translation}»
            </p>
          </>
        )}
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {q.options.map((option) => {
          const isCorrect = option === q.entry.partner
          const isChosen = option === chosen
          let cls =
            'border-slate-200 bg-white hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-600'
          if (answered) {
            if (isCorrect) {
              cls = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50'
            } else if (isChosen) {
              cls = 'border-rose-500 bg-rose-50 dark:bg-rose-950/50'
            } else {
              cls = 'border-slate-200 bg-white opacity-50 dark:border-slate-700 dark:bg-slate-900'
            }
          }
          return (
            <button
              key={option}
              type="button"
              onClick={() => choose(option)}
              disabled={answered}
              className={`min-h-12 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors disabled:cursor-default ${cls}`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p
            className={`text-sm font-semibold ${
              chosen === q.entry.partner
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-rose-600 dark:text-rose-400'
            }`}
          >
            {chosen === q.entry.partner ? 'Верно!' : 'Неверно.'}
          </p>
          <p className="text-base">
            <span className="font-semibold">{q.entry.phrase}</span>
            <span className="mx-2 text-slate-400">—</span>
            <span>{q.entry.translation}</span>
          </p>
          <p className="rounded-lg bg-slate-50 p-3 text-sm italic text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {q.entry.example}
          </p>
          <button
            type="button"
            onClick={goNext}
            className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            {isLast ? 'Показать результат' : 'Далее'}
          </button>
        </div>
      )}
    </div>
  )
}

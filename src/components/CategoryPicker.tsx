import { useState } from 'react'
import { availableCount, collocations } from '../lib/quiz'
import { CATEGORIES, LEVELS } from '../lib/types'
import type { LevelFilter, QuizConfig } from '../lib/types'

interface Props {
  onStart: (config: QuizConfig) => void
}

const COUNTS = [10, 20, 30]

export default function CategoryPicker({ onStart }: Props) {
  const [category, setCategory] = useState<string | null>(null)
  const [level, setLevel] = useState<LevelFilter>('all')
  const [count, setCount] = useState(10)

  const available = availableCount(category, level)
  const effectiveCount = Math.min(count, available)

  const categoryCount = (id: string | null) =>
    id === null ? collocations.length : collocations.filter((c) => c.category === id).length

  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Категория
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={`rounded-xl border px-3 py-3 text-left transition-colors ${
              category === null
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60'
                : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-700'
            }`}
          >
            <span className="block text-sm font-medium">Все категории</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {categoryCount(null)} коллокаций
            </span>
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={`rounded-xl border px-3 py-3 text-left transition-colors ${
                category === c.id
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60'
                  : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-700'
              }`}
            >
              <span className="block text-sm font-medium">{c.label}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {categoryCount(c.id)} коллокаций
              </span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Уровень
        </h2>
        <div className="flex flex-wrap gap-2">
          {(['all', ...LEVELS] as LevelFilter[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                level === l
                  ? 'border-indigo-500 bg-indigo-600 text-white'
                  : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-700'
              }`}
            >
              {l === 'all' ? 'Все уровни' : l}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Количество вопросов
        </h2>
        <div className="flex gap-2">
          {COUNTS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setCount(n)}
              className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                count === n
                  ? 'border-indigo-500 bg-indigo-600 text-white'
                  : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-700'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </section>

      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
        {available === 0 ? (
          <p>По выбранным условиям ничего не найдено. Попробуйте другой уровень или категорию.</p>
        ) : available < count ? (
          <p>
            По выбранным условиям найдено {available}{' '}
            {available === 1 ? 'коллокация' : available < 5 ? 'коллокации' : 'коллокаций'} — тест
            будет короче ({effectiveCount}{' '}
            {effectiveCount === 1 ? 'вопрос' : effectiveCount < 5 ? 'вопроса' : 'вопросов'}).
          </p>
        ) : (
          <p>
            Найдено {available} коллокаций. Тест: {effectiveCount}{' '}
            {effectiveCount === 1 ? 'вопрос' : effectiveCount < 5 ? 'вопроса' : 'вопросов'}.
          </p>
        )}
      </div>

      <button
        type="button"
        disabled={available === 0}
        onClick={() => onStart({ category, level, count: effectiveCount })}
        className="w-full rounded-xl bg-indigo-600 px-4 py-4 text-base font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-300 dark:disabled:bg-slate-700"
      >
        Начать тест
      </button>
    </div>
  )
}

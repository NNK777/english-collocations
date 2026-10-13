import { useState } from 'react'
import { availableCount } from '../lib/quiz'
import { UNITS } from '../lib/types'
import type { QuizConfig } from '../lib/types'

interface Props {
  onStart: (config: QuizConfig) => void
}

export default function CategoryPicker({ onStart }: Props) {
  const [unit, setUnit] = useState<number | null>(null)

  const count = unit === null ? 0 : availableCount(unit)

  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Юнит
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {UNITS.map((u) => (
            <button
              key={u.id}
              type="button"
              onClick={() => setUnit(u.id)}
              className={`rounded-xl border px-3 py-4 text-center transition-colors ${
                unit === u.id
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60'
                  : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-700'
              }`}
            >
              <span className="block text-sm font-medium">{u.label}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
        {unit === null ? (
          <p>Выберите юнит для начала изучения.</p>
        ) : count === 0 ? (
          <p>В выбранном юните пока нет коллокаций.</p>
        ) : (
          <p>
            Выбран <span className="font-semibold">Unit {unit}</span>. Тест: 10 выражений из{' '}
            {count}{' '}
            {count === 1 ? 'коллокации' : count < 5 ? 'коллокаций' : 'коллокаций'} данного юнита.
          </p>
        )}
      </div>

      <button
        type="button"
        disabled={unit === null || count === 0}
        onClick={() => onStart({ unit: unit! })}
        className="w-full rounded-xl bg-indigo-600 px-4 py-4 text-base font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-300 dark:disabled:bg-slate-700"
      >
        Начать изучение
      </button>
    </div>
  )
}

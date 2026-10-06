import type { QuizResult } from '../lib/quiz'
import type { QuizConfig } from '../lib/types'

interface Props {
  results: QuizResult
  config: QuizConfig
  onRetry: () => void
  onSettings: () => void
}

function plural(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return one
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few
  return many
}

export default function ResultsScreen({ results, config, onRetry, onSettings }: Props) {
  const percent = results.total > 0 ? Math.round((results.correct / results.total) * 100) : 0

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-indigo-600">
          <span className="text-3xl font-bold">{percent}%</span>
        </div>
        <p className="mt-4 text-lg font-semibold">
          Верных ответов: {results.correct} из {results.total}
        </p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {percent >= 80
            ? 'Отличный результат!'
            : percent >= 50
              ? 'Хороший результат, но есть над чем поработать.'
              : 'Стоит повторить материал и попробовать ещё раз.'}
        </p>
      </div>

      {results.wrong.length > 0 && (
        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Разбор ошибок ({results.wrong.length}{' '}
            {plural(results.wrong.length, 'коллокация', 'коллокации', 'коллокаций')})
          </h2>
          <div className="space-y-2">
            {results.wrong.map((e) => (
              <div
                key={e.id}
                className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
              >
                <p className="text-base">
                  <span className="font-semibold">{e.phrase}</span>
                  <span className="mx-2 text-slate-400">—</span>
                  <span>{e.translation}</span>
                </p>
                <p className="mt-1 text-sm italic text-slate-500 dark:text-slate-400">{e.example}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="space-y-2">
        <button
          type="button"
          onClick={onRetry}
          className="w-full rounded-xl bg-indigo-600 px-4 py-4 text-base font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Пройти ещё раз
        </button>
        <button
          type="button"
          onClick={onSettings}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-base font-medium transition-colors hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-700"
        >
          Изменить настройки
        </button>
      </div>

      <p className="text-center text-xs text-slate-400 dark:text-slate-500">
        Тест: {config.count}{' '}
        {plural(config.count, 'вопрос', 'вопроса', 'вопросов')}
        {config.category ? `, категория: ${config.category}` : ', все категории'}
        {config.level !== 'all' ? `, уровень: ${config.level}` : ''}
      </p>
    </div>
  )
}

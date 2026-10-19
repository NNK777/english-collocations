interface Props {
  unitLabel: string
  onExit: () => void
}

/** Пункты нового экрана юнита. Функции кнопок добавим позже. */
const OPTIONS = ['Теория / Presentation', 'Упражнения / Exercises', 'Тренировка / Practice']

export default function UnitScreen({ unitLabel, onExit }: Props) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{unitLabel}</p>
        <button
          type="button"
          onClick={onExit}
          className="rounded-lg px-3 py-1.5 text-sm text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          Выйти
        </button>
      </div>

      <div className="space-y-2">
        {OPTIONS.map((label) => (
          <button
            key={label}
            type="button"
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-4 text-center text-sm font-medium transition-colors hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-700"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

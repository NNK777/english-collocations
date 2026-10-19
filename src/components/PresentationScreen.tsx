import { useState } from 'react'

interface Props {
  unitLabel: string
  onExit: () => void
}

/** Разделы презентационной страницы юнита. Содержание добавим позже. */
const BLOCKS = ['A', 'B', 'C']

export default function PresentationScreen({ unitLabel, onExit }: Props) {
  const [expandedBlock, setExpandedBlock] = useState<number | null>(null)

  const toggleBlock = (index: number) => {
    setExpandedBlock((prev) => (prev === index ? null : index))
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {unitLabel} · Теория / Presentation
        </p>
        <button
          type="button"
          onClick={onExit}
          className="rounded-lg px-3 py-1.5 text-sm text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          Выйти
        </button>
      </div>

      {BLOCKS.map((label, index) => (
        <div
          key={label}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
          <button
            type="button"
            onClick={() => toggleBlock(index)}
            className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
          >
            <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">
              {label}
            </span>
            <span className="text-lg text-slate-400 dark:text-slate-500">
              {expandedBlock === index ? '−' : '+'}
            </span>
          </button>
          {expandedBlock === index && (
            <div className="px-5 pb-5">
              <p className="text-base leading-relaxed text-slate-400 dark:text-slate-500">
                Содержание раздела будет добавлено позже.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

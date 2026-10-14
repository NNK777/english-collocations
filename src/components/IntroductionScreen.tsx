import { useState } from 'react'

interface Props {
  onExit: () => void
}

function CollocationWord({ word, translation }: { word: string; translation: string }) {
  return (
    <span className="group relative inline-block">
      <em className="font-semibold text-emerald-600 dark:text-emerald-400">{word}</em>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-base text-white opacity-0 transition-opacity group-hover:opacity-100 group-hover:visible group-active:opacity-100 group-active:visible group-focus-within:opacity-100 group-focus-within:visible dark:bg-slate-700">
        {translation}
      </span>
    </span>
  )
}

export default function IntroductionScreen({ onExit }: Props) {
  const [showEnglish, setShowEnglish] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Введение / Introduction
        </p>
        <button
          type="button"
          onClick={onExit}
          className="rounded-lg px-3 py-1.5 text-sm text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          Выйти
        </button>
      </div>

      <button
        type="button"
        onClick={() => setShowEnglish(!showEnglish)}
        className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-colors hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-700"
      >
        <p className="text-base leading-relaxed">
          <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">Что такое коллокация?</span>
          <br />
          Коллокация — это естественное сочетание слов. Под этим термином понимается то, как
          английские слова тесно связаны друг с другом. Например, <CollocationWord word="do" translation="делать" /> и{' '}
          <CollocationWord word="homework" translation="домашнее задание" /> сочетаются друг с
          другом, так же как <CollocationWord word="make" translation="совершать" /> и{' '}
          <CollocationWord word="mistakes" translation="ошибки" />;{' '}
          <CollocationWord word="tall" translation="высокий" /> — с{' '}
          <CollocationWord word="man/woman" translation="мужчина/женщина" />, а{' '}
          <CollocationWord word="high" translation="высокий" /> — с{' '}
          <CollocationWord word="mountain" translation="гора" />.
        </p>

        <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            {showEnglish ? 'Скрыть английский текст' : 'Показать английский текст'}
          </p>

          {showEnglish && (
            <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">What is a collocation?</span>
              <br />
              Collocation means a natural combination of words; it refers to the way English words
              are closely associated with each other. For example,{' '}
              <em className="font-semibold text-emerald-600 dark:text-emerald-400">do</em> and{' '}
              <em className="font-semibold text-emerald-600 dark:text-emerald-400">homework</em> go
              together, as do{' '}
              <em className="font-semibold text-emerald-600 dark:text-emerald-400">make</em> and{' '}
              <em className="font-semibold text-emerald-600 dark:text-emerald-400">mistakes</em>;{' '}
              <em className="font-semibold text-emerald-600 dark:text-emerald-400">tall</em> goes with{' '}
              <em className="font-semibold text-emerald-600 dark:text-emerald-400">man/woman</em> and{' '}
              <em className="font-semibold text-emerald-600 dark:text-emerald-400">high</em> with{' '}
              <em className="font-semibold text-emerald-600 dark:text-emerald-400">mountain</em>.
            </p>
          )}
        </div>
      </button>
    </div>
  )
}

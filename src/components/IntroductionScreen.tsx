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

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-base leading-relaxed">
          <span className="font-semibold">Что такое коллокация?</span>
          <br />
          <br />
          Коллокация означает естественное сочетание слов; это способ, которым английские слова
          тесно связаны друг с другом. Например, <CollocationWord word="do" translation="делать" /> и{' '}
          <CollocationWord word="homework" translation="домашнее задание" /> сочетаются друг с
          другом, так же как <CollocationWord word="make" translation="совершать" /> и{' '}
          <CollocationWord word="mistakes" translation="ошибки" />;{' '}
          <CollocationWord word="tall" translation="высокий" /> — с{' '}
          <CollocationWord word="man/woman" translation="мужчина/женщина" />, а{' '}
          <CollocationWord word="high" translation="высокий" /> — с{' '}
          <CollocationWord word="mountain" translation="гора" />.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
          <span className="font-semibold">What is a collocation?</span>
          <br />
          <br />
          Collocation means a natural combination of words; it refers to the way English words are
          closely associated with each other. For example, <em>do</em> and <em>homework</em> go
          together, as do <em>make</em> and <em>mistakes</em>; <em>tall</em> goes with{' '}
          <em>man/woman</em> and <em>high</em> with <em>mountain</em>.
        </p>
      </div>
    </div>
  )
}

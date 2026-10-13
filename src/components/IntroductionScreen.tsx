interface Props {
  onExit: () => void
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

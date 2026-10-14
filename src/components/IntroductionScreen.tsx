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
          <span className="font-semibold">Что такое коллокация?</span>
          <br />
          <br />
          Коллокация означает естественное сочетание слов; это способ, которым английские слова
          тесно связаны друг с другом. Например,{' '}
          <em className="font-semibold text-emerald-600 dark:text-emerald-400">do (делать)</em> и{' '}
          <em className="font-semibold text-emerald-600 dark:text-emerald-400">
            homework (домашнее задание)
          </em>{' '}
          сочетаются друг с другом, так же как{' '}
          <em className="font-semibold text-emerald-600 dark:text-emerald-400">
            make (совершать)
          </em>{' '}
          и{' '}
          <em className="font-semibold text-emerald-600 dark:text-emerald-400">
            mistakes (ошибки)
          </em>
          ;{' '}
          <em className="font-semibold text-emerald-600 dark:text-emerald-400">tall (высокий)</em> —
          с{' '}
          <em className="font-semibold text-emerald-600 dark:text-emerald-400">
            man/woman (мужчина/женщина)
          </em>
          , а{' '}
          <em className="font-semibold text-emerald-600 dark:text-emerald-400">high (высокий)</em>{' '}
          — с{' '}
          <em className="font-semibold text-emerald-600 dark:text-emerald-400">mountain (гора)</em>.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
          <span className="font-semibold">What is a collocation?</span>
          <br />
          <br />
          Collocation means a natural combination of words; it refers to the way English words are
          closely associated with each other. For example,{' '}
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
      </div>
    </div>
  )
}

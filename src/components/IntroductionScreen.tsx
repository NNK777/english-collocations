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

function WrongCollocation({ word, translation }: { word: string; translation?: string }) {
  if (!translation) {
    return <em className="font-semibold text-red-600 dark:text-red-400">{word}</em>
  }
  return (
    <span className="group relative inline-block">
      <em className="font-semibold text-red-600 dark:text-red-400">{word}</em>
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

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
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
          <button
            type="button"
            onClick={() => setShowEnglish(!showEnglish)}
            className="text-xs font-semibold uppercase tracking-wide text-slate-400 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
          >
            {showEnglish ? 'Скрыть английский текст' : 'Показать английский текст'}
          </button>

          {showEnglish && (
            <p className="mt-2 text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
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
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-base leading-relaxed">
          <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">Зачем изучать коллокации?</span>
          <br />
          Коллокации помогут вам говорить и писать
          по-английски более естественно и точно. Люди, вероятно, поймут, что вы имеете в виду,
          если вы скажете «<WrongCollocation word="making your homework" />» или «My uncle is a very{' '}
          <WrongCollocation word="high man" />», но ваша речь будет звучать неестественно и,
          возможно, вызовет недоумение. Вы имели в виду, что ваш дядя ростом два метра, или что он
          занимает высокую должность в правительстве или бизнесе?
        </p>
        <p className="mt-4 text-base leading-relaxed">
          Изучение словосочетаний также поможет вам расширить свой словарный запас английского
          языка. Например, вам будет легче избегать таких слов, как «very», «nice» или «beautiful»,
          выбирая вместо них слово, которое лучше подходит к контексту и имеет более точное
          значение. Это особенно полезно, если вы сдаете письменный экзамен по английскому языку и
          хотите произвести хорошее впечатление на экзаменаторов.
        </p>
      </div>
    </div>
  )
}
